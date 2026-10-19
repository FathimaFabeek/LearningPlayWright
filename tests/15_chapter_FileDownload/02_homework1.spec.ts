import {test, expect}from '@playwright/test';
test.describe('Verify shadowDom', ()=>{

const URL='https://selectorshub.com/xpath-practice-page/';

test.beforeEach(async({page})=>{
    await page.goto(URL);

});
test('Verify shadoDom', async({page})=>{
    const shadow=page.locator('#userName');
    await shadow.locator('#kils').fill('testingAcademy@shadow.com');
    await shadow.locator('#pizza').fill('macdonald');
    //concept is out of shoadow oe shod dom is closed. so try with keybord loctrs
    await page.keyboard.press('Tab');
    await page.keyboard.type('playwright');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.type('abc@123');



    await page.pause();

});

})



