import { test, expect } from '@playwright/test';
test("Verify the error message in the wingify free trial", async ({ page }) => {
    await page.goto("https://wingify.com/free-trial/");
    let emailfiled = page.locator("//input[@id='free-trial-step1-email']");
    await emailfiled.fill("abcd");
    await page.locator("#free-trial-step1-gdpr-consent-checkboxcu-marketing-consent-checkbox").click();
    await page.locator("[data-qa='free-trial-step1-gdpr-consent-checkboxgdpr-consent-checkbox']").click();
    let submitBtn=page.locator("//button[@data-qa='page-su-submit']");
    await submitBtn.first().click();
    let errorMsg = page.locator("(//div[contains(@class,'invalid-reason')])[1]");
    let MsgText = await errorMsg.textContent();
    expect(MsgText).toContain("The email address you entered is incorrect.");
    await page.pause();
})