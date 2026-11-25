# SauceDemo Automated E2E Test Suite

![Playwright Tests](https://github.com/LaikenNaidoo/saucedemo-playwright-qa/actions/workflows/playwright.yml/badge.svg)

Automated end-to-end UI test suite for [SauceDemo](https://www.saucedemo.com/), built with **Playwright** and **JavaScript** using the **Page Object Model (POM)** architecture.

## Current Test Coverage
- **Authentication (`tests/auth.spec.js`):** Valid login flow, locked-out user handling, and invalid credential rejection across Chromium, Firefox, and WebKit.

## How to Run Locally
1. Clone the repository:
   git clone https://github.com/LaikenNaidoo/saucedemo-playwright-qa.git
2. Install dependencies and browsers:
   npm install
   npx playwright install
3. Run the test suite:
   npx playwright test
   npx playwright show-report
