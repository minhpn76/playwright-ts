import { test, expect } from '@playwright/test'
import { chromium } from 'playwright'

test('Unable to Submit Empty Form', async () => {
  const browser = await chromium.launch({
    headless: false,
  });
  const context = await browser.newContext({
    // recordVideo: { dir: './src/e2e/video/' }
  });
  const page = await context.newPage();
  await page.goto("http://localhost:3000/");

  // screenshot prior to error
  await page.screenshot({
    path: `./src/e2e/screenshots/form-error-not-visible-${'chromium'}-${new Date().valueOf()}.png`
  });

  // action to trigger form error
  await page.click("css=button");

  // defining selectors
  const errorMsg = await page.$eval("css=p", el => el.textContent);

  // verifying elements exist
  expect(errorMsg).toEqual("Your name modify is required");

  // screenshot of error
  await page.screenshot({
    path: `./src/e2e/screenshots/form-error-visible-${'chromium'}-${new Date().valueOf()}.png`
  });
  await browser.close();
});

// describe("Form Tests - all Browsers", () => {
//   it("Unable to Submit Empty Form", async () => {
//     // running tests on all 3 browsers
//     for (const browserType of ["chromium", "firefox", "webkit"]) {
//       const browser = await playwright[browserType].launch();
//       const context = await browser.newContext({
//         recordVideo: { dir: './video/' }
//       });
//       const page = await context.newPage();
//       await page.goto("http://localhost:3000/");

//       // screenshot prior to error
//       await page.screenshot({
//         path: `e2e/screenshots/form-error-not-visible-${browserType}-${new Date().valueOf()}.png`
//       });

//       // action to trigger form error
//       await page.click("css=button");

//       // defining selectors
//       const errorMsg = await page.$eval("css=p", el => el.textContent);

//       // verifying elements exist
//       expect(errorMsg).toEqual("Your name is required");

//       // screenshot of error
//       await page.screenshot({
//         path: `e2e/screenshots/form-error-visible-${browserType}-${new Date().valueOf()}.png`
//       });
//       await browser.close();
//     }
//   }, 15000);
// });
