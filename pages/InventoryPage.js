class InventoryPage {
  constructor(page) {
    this.page = page;
    this.sortDropdown = page.locator('[data-test="product-sort-container"]');
    this.inventoryItemPrices = page.locator('.inventory_item_price');
    this.inventoryItemNames = page.locator('.inventory_item_name');
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.cartLink = page.locator('.shopping_cart_link');
  }

  async addItemToCart(itemSlug) {
    await this.page.locator(`[data-test="add-to-cart-${itemSlug}"]`).click();
  }

  async removeItemFromCart(itemSlug) {
    await this.page.locator(`[data-test="remove-${itemSlug}"]`).click();
  }

  async sortBy(optionValue) {
    await this.sortDropdown.selectOption(optionValue);
  }

  async getAllPrices() {
    const priceTexts = await this.inventoryItemPrices.allTextContents();
    // Convert strings like "$29.99" into actual numbers (29.99) for math comparison
    return priceTexts.map(text => parseFloat(text.replace('$', '')));
  }

  async goToCart() {
    await this.cartLink.click();
  }
}

module.exports = { InventoryPage };
