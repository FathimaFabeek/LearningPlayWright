import { test, expect } from '@playwright/test';
test ("set referer for the enire context ",async ({ browser})=>{
    let context=await browser.newContext({
        extraHTTPHeaders:{
            "Referer" : "https://thetestingacademy.com"
        }
    });
    let page=await context.newPage();
    await page.goto("https://app.vwo.com/#login");
    console.log("Page1- partner referer included");
    await page.goto("https://katalon-demo-cura.herokuapp.com/profile.php#login");
    console.log("page 2- partner referer included");    

})