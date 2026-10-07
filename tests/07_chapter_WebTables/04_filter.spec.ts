import {test, expect}from '@playwright/test';
test('verify how to handle multiple Elements', async({page})=>{
await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
const pwdlink=page.locator('a.list-group-item').filter({hasText:"Forgotten Password"});
await pwdlink.click();
const privacyLink=page.locator('footer a').filter({hasText:"Privacy Policy"});
await expect(privacyLink).toHaveAttribute("href","#privacy-policy");
await page.pause();
});