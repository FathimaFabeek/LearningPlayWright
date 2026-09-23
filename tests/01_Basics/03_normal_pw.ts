//if you dont use test or page, then directly create browser, context,page
import { chromium, Browser, BrowserContext, Page } from "playwright";

async function run() {
        let browser: Browser = await chromium.launch( {headless :false});
        let context: BrowserContext = await browser.newContext();
        let page = await context.newPage();

         await page.goto("https://example.com");
         console.log("Title:", await page.title());

        // Cleanup — reverse order
        await page.close();
        await context.close();
        await browser.close();

    

}

run();
//this is note used other pw ts files it has contained in {page}and playwright/test

// Browser launched
// Context created
// Page opened
// Title: Example Domain