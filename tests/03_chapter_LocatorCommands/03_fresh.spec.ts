import { test, expect } from '@playwright/test';
test('TC#1-verify that the VWO page is loaded ', async({page})=>{
await page.goto("https://app.vwo.com",{
    waitUntil:'domcontentloaded',
    //timeout:2000,
    referer:"https://sdet.live"
});
// Defalt Locators
    //  id, name, className, Tag., Custom Locator (Via CSS selector)

    // Css Seclector ->  Browser - Css Engine, Help you to find the element
    // by using the default locators
    // id => #id
    // className => .
    // name => [name="value"]
    // Tag => [tag]

     // <input 
    // type="email" 
    // class="text-input W(100%)" 
    // name="username" 
    // vwo-html-translate-attr="placeholder" 
    // vwo-html-translate-placeholder="login:enterEmailID" 
    // id="login-username" 
    // data-qa="hocewoqisi" 
    // placeholder="Enter email ID" 
    // data-gtm-form-interact-field-id="0"
    // >
 let userNamefield=page.locator("#login-username");//locator no need await, bcs it not return a promise
let passwordfield=page.locator("#login-password");//use id as # id in css locators
 let loginButton=page.locator("#js-login-btn");
 let errorMsg=page.locator("#js-notification-box-msg");
await userNamefield.fill("admin@gmail.com");
 await passwordfield.fill("pass123");
 await loginButton.click();
await expect(errorMsg).toContainText("Your email, password, IP address or location did not match");
// this expect is an assertion
 await page.pause();

});//npx playwright show-report