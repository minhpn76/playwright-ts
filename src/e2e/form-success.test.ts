import { test, expect } from '@playwright/test'

test.describe('should test case success', async () => { 
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/");
  })

  test('Unable to Submit Empty Form', async ({ page, browser }) => {
    // screenshot prior to submit
    await page.screenshot({
      path: `./src/e2e/screenshots/form-before-submit-${'chromium'}-${new Date().valueOf()}.png`
    });

    const h1 = await page.$eval("css=h1", el => el.textContent);
    expect(h1).toEqual('Please Submit the Form');

    // prefill demo user
    const user = "edward.pn";
    
    await page.click("css=input")
    await page.fill("css=input", user);
    await page.click("css=button");

    // screenshot of successful submit
    await page.screenshot({
      path: `./src/e2e/screenshots/form-after-submit-${'chromium'}-${new Date().valueOf()}.png`
    });

    // previous h1 is a stale element, will need to re-assert the element
    expect(await page.$eval("css=h1", el => el.textContent)).toEqual('Thank you for Submitting');

    await browser.close();
  })
})
