import {test, expect}from '@playwright/test';
test('verify how to handle multiple Elements', async({page})=>{
await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
const rightPanelLinkTexts:string[]=await page.locator('a.list-group-item').allInnerTexts();
console.log(rightPanelLinkTexts.length);
for(const link of rightPanelLinkTexts){
    console.log(link);
}
for(const linkText of rightPanelLinkTexts){
    if(linkText==="Forgotten Password"){
      await page.getByText(linkText).first().click();
    }}
const rightPanelLinks =await page.locator('a.list-group-item').all();

for(const link of rightPanelLinks){
    console.log(await link.getAttribute("href"));
}
await page.pause();
});