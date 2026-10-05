import {test, expect} from '@playwright/test';
test("Verify the error message in the wingify free trial",async({page})=>{
    await page.goto("https://app.wingify.com/#/login");//https://wingify.com/free-trial/
   let username= page.getByRole("textbox",{name:"Email"});
   let passwrd= page.getByRole("textbox",{name:"password"});
   await username.fill("admin@vwo.com");
   await passwrd.fill("12345");
   await page.pause();


})