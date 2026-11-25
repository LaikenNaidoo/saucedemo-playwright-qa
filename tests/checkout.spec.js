const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');
const { CheckoutPage } = require('../pages/CheckoutPage');

test.describe('Checkout Flow Suite', () => {
  let loginPage;
  let inventoryPage;
  let checkoutPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    checkoutPage = new CheckoutPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await inventoryPage.addItemToCart('sauce-labs-backpack');
    await inventoryPage.goToCart();
    await checkoutPage.proceedToCheckout();
  });

  test('Positive: should complete full E2E purchase flow', async ({ page }) => {
    await checkoutPage.fillCustomerDetails('Laiken', 'Naidoo', '4092');
    await expect(page).toHaveURL(/.*checkout-step-two.html/);

    await checkoutPage.finishOrder();
    await expect(page).toHaveURL(/.*checkout-complete.html/);
    await expect(checkoutPage.completeHeader).toHaveText('Thank you for your order!');
  });

  test('Negative: should require postal code before continuing', async () => {
    await checkoutPage.fillCustomerDetails('Laiken', 'Naidoo', '');
    await expect(checkoutPage.errorMessage).toBeVisible();
    await expect(checkoutPage.errorMessage).toContainText('Error: Postal Code is required');
  });
});
