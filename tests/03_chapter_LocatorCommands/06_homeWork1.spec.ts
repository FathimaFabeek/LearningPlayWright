import {test, expect} from '@playwright/test';
test('Login to practice Account', async ({page})=>{
     const currentUrl="https://app.thetestingacademy.com/playwright/multiple_element_filter";
    await page.goto(currentUrl);
    await expect(page).toHaveTitle('Multiple Element Filter Login — The Testing Academy');
    let emailField=page.locator("//input[@id='email']");
    await emailField.click();
   await emailField.fill("abcd@gmail.com");
   let pwdField=page.locator("//input[@id='password']");
   await pwdField.click();
   await pwdField.fill("12345");
   let checkbox=page.locator("//input[@name='remember']");
   await checkbox.click();
   let buttonsbmt=page.locator("//button[@class='login-btn']");
   await buttonsbmt.click();
    // Verify URL changed and contains the username
    const newUrl=page.url();
  //await expect(page).toHaveURL(new RegExp(`username=${user}`));
expect (await page.url()).not.toBe(currentUrl);


})
