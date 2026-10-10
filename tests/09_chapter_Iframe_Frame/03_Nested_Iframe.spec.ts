import {test, expect, FrameLocator} from '@playwright/test';

test('Verify NestedIFrame', async ({ page }) => {
    await page.goto('https://selectorshub.com/iframe-scenario/');
    let frame1:FrameLocator= page.frameLocator("(//iframe[@id='pact1'])[1]");//switching to frame1
    let frame2:FrameLocator= frame1.frameLocator("(//iframe[@id='pact2'])[1]");//switching to frame2
    let frame3:FrameLocator= frame2.frameLocator("(//iframe[@id='pact3'])[1]");//switching to frame3
    await frame1.locator('#inp_val').fill('Aishwarya Rai');
    await frame2.locator('#jex').fill('DuaLayal');
    await frame3.locator('#glaf').fill('Testing');
    const headerText=await frame1.locator('h3').textContent();
    console.log('Header text is : '+headerText);
    const headerText2=await frame2.locator('h4').textContent();
    console.log('Header text is : '+headerText2);
    await page.pause();
});