# SauceDemo Automated E2E Test Suite

![Playwright Tests](https://github.com/LaikenNaidoo/saucedemo-playwright-qa/actions/workflows/playwright.yml/badge.svg)

Automated end-to-end UI and functional regression suite for [SauceDemo](https://www.saucedemo.com/), built with **Playwright** and **JavaScript** using the **Page Object Model (POM)** architecture and **GitHub Actions CI/CD**.

## Project Architecture
- `.github/workflows/playwright.yml` — Automated CI/CD test execution on push/PR
- `pages/LoginPage.js` — Login page locators and authentication actions
- `pages/InventoryPage.js` — Product sorting and shopping cart actions
- `pages/CheckoutPage.js` — Checkout form and order completion actions
- `tests/auth.spec.js` — Positive & negative authentication flows
- `tests/shopping.spec.js` — Product sorting & cart state persistence
- `tests/checkout.spec.js` — Full purchase funnel & form validation
- `tests/problem-user.spec.js` — Defect tracking with `test.fail()` annotations
- `docs/BUG_REPORTS.md` — Formal defect documentation (`BUG-001`, `BUG-002`)
- `playwright.config.js` — Multi-browser configuration (Chromium, Firefox, WebKit)

## Test Coverage (27 Automated Checks Across 3 Browsers)
- **Authentication (`tests/auth.spec.js`):** Valid login, locked-out user blocking, invalid credential error validation.
- **Shopping & Cart (`tests/shopping.spec.js`):** Dynamic price sorting verification (`low to high`) and cart badge state updates.
- **Checkout Flow (`tests/checkout.spec.js`):** End-to-end order completion and required customer field validation.
- **Defect Regression (`tests/problem-user.spec.js`):** Automated verification of known defects (`BUG-001`, `BUG-002`) documented in [`docs/BUG_REPORTS.md`](docs/BUG_REPORTS.md).

## How to Run Locally
1. Clone the repository: `git clone [https://github.com/LaikenNaidoo/saucedemo-playwright-qa.git](https://github.com/LaikenNaidoo/saucedemo-playwright-qa.git)`
2. Install dependencies: `npm install`
3. Install Playwright browsers: `npx playwright install`
4. Run the test suite: `npx playwright test`
5. View the HTML test report: `npx playwright show-report`
