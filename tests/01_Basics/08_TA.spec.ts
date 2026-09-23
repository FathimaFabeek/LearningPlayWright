import { test, expect } from '@playwright/test';// here test is a fn object @ runtime
test("Navigating to the tta website", async ({ page }) => {// this is a calback functn, created with arrow syntax 

    await page.goto("https://app.thetestingacademy.com/playwright/");// goto return type is promise so add await in front of this

});
// we can make BCP also here
test("BCP- in app.vwo.com two roles", async ({ browser }) => {
    let adminContext = await browser.newContext();
    let userContext=await browser.newContext();
    let guestContext=await browser.newContext();

    let adminPage=await adminContext.newPage();// create a page inside a context
    await adminPage.goto("https://app.thetestingacademy.com/playwright/");
     let userPage=await userContext.newPage();
     await userPage.goto("https://sdet.live");
     let guestPage=await guestContext.newPage();
     await guestPage.goto("https://scrolltest.com");
     await adminPage.close();
     await userPage.close();
     await guestPage.close();

//we can made context in desktop view and mobile view
})
