import { chromium,Browser,BrowserContext,Page } from "playwright";
async function  run() {
    //level 1:Launch Browser- heaviest operation, do it once
    let browser:Browser=await chromium.launch({ headless: false});
    console.log("Browser Launched: ",browser);
    //level 2: create context,fresh session, isolated cookies
    let context1:BrowserContext=await browser.newContext();
    console.log("context created: ",context1);
    //level3:open page - a tab inside the context
    let page:Page=await context1.newPage();
    console.log("page opened");
    // cleanup- in reverse order
    await page.close();
    await context1.close();
    await browser.close();
    
}