import { test, expect, Locator } from '@playwright/test';

test.describe('Flipkart SVG handling', () => {
    const url='https://www.flipkart.com/search';
  test.beforeEach( async ({ page }) => {
    console.log("before running any testcase!");
    await page.goto(url);

  });
  test('Verify SVG',async({page})=>{
    await page.getByPlaceholder('Search for products, brands and more').fill("macmini");
    const svgElements:Locator=page.locator('svg');
    await svgElements.first().click();
    await page.waitForLoadState('networkidle');
    const titleResults:Locator=page.locator("//div[contains(@data-id,'MPC') or contains(@data-id,'COM') or contains(@data-id,'ACC') or contains(@data-id,'AIO') or contains(@data-id,'CPU')]/div/a[2]");
    const priceLocator:Locator=page.locator("//div[@class='hZ3P6w']");
   const count:number=await titleResults.count();
    for(let i=0; i<count ; i++){
        const title:string|null=await titleResults.nth(i).textContent();
        console.log(title);
        const price:string|null=await priceLocator.nth(i).textContent();
        console.log("price "+price);
    }
    await page.pause();
  })
});