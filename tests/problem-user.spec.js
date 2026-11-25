const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');

test.describe('Known Defect Regression Suite (problem_user)', () => {
  let loginPage;
  let inventoryPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    await loginPage.goto();
    await loginPage.login('problem_user', 'secret_sauce');
  });

  test('BUG-001: product images should not point to broken 404 asset', async ({ page }) => {
    // Marks this test as an active known defect tracked in docs/BUG_REPORTS.md
    test.fail(true, 'Known Defect BUG-001: All product images render sl-404.jpg for problem_user');

    const firstProductImg = page.locator('.inventory_item_img img').first();
    const imgSrc = await firstProductImg.getAttribute('src');
    expect(imgSrc).not.toContain('sl-404');
  });

  test('BUG-002: price sort low-to-high should reorder inventory items', async () => {
    test.fail(true, 'Known Defect BUG-002: Sort dropdown ignores selection for problem_user');

    await inventoryPage.sortBy('lohi');
    const prices = await inventoryPage.getAllPrices();
    const sortedPrices = [...prices].sort((a, b) => a - b);
    expect(prices).toEqual(sortedPrices);
  });
});
