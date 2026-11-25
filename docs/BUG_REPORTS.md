# Defect Log — SauceDemo Web Application

This document logs functional and UI anomalies discovered during automated regression testing against the `problem_user` account.

---

## BUG-001: All Product Catalog Images Render Broken 404 Placeholder Asset
- **Severity:** High
- **Priority:** High
- **Status:** Open (Tracked via `tests/problem-user.spec.js`)
- **Environment:** Chromium 145 / Firefox 146 / WebKit 26 (Desktop)
- **Account:** `problem_user`

### Steps to Reproduce
1. Navigate to `https://www.saucedemo.com/`.
2. Log in using username `problem_user` and password `secret_sauce`.
3. Observe the product thumbnail images on the Inventory page (`/inventory.html`).

### Expected Result
Each product card displays its unique, corresponding product photograph (e.g., `sauce-backpack-1200x1500.jpg`).

### Actual Result
Every product card renders the broken fallback image asset (`/static/media/sl-404.168b1cce.jpg`).

---

## BUG-002: Product Sorting Dropdown Fails to Reorder Inventory Items
- **Severity:** Medium
- **Priority:** High
- **Status:** Open (Tracked via `tests/problem-user.spec.js`)
- **Environment:** Chromium 145 / Firefox 146 / WebKit 26 (Desktop)
- **Account:** `problem_user`

### Steps to Reproduce
1. Log in as `problem_user`.
2. Click the product sort dropdown in the top-right corner of `/inventory.html`.
3. Select **Price (low to high)**.

### Expected Result
Inventory items dynamically reorder in ascending price order (`$7.99` through `$49.99`).

### Actual Result
The UI remains static in its default order (`$29.99` first); no sorting state change is applied.
