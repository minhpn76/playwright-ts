import { test, expect } from '@playwright/test'

test.describe('should test case failure', async () => { 
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/");
  })

  test('Unable to Submit Empty Form', async ({ page, browser }) => {
    // screenshot prior to error
    await page.screenshot({
      path: `./src/e2e/screenshots/form-error-not-visible-${'chromium'}-${new Date().valueOf()}.png`
    });
    // action to trigger form error
    
    await page.click("css=button");

    // defining selectors
    const errorMsg = await page.$eval("css=p", el => el.textContent);

    // verifying elements exist
    expect(errorMsg).toEqual("Your name is required");

    // screenshot of error
    await page.screenshot({
      path: `./src/e2e/screenshots/form-error-visible-${'chromium'}-${new Date().valueOf()}.png`
    });
    await browser.close();
  })
})
