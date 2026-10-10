import {test, expect, FrameLocator, Locator} from '@playwright/test';

test('Verify IFrame', async ({ page }) => {
        await page.goto('https://app.thetestingacademy.com/playwright/frames/multi-frames');
        let mainFrame:FrameLocator= page.frameLocator('[name="main"]');//switching to main frame
        let headeText=await mainFrame.locator('h2').textContent();
        console.log('Header text is : '+headeText);
        const allFrames: Locator[]=await page.locator('//frame').all();
        console.log('Total number of frames are : '+allFrames.length);
        for (const frame of allFrames) {
            let frameName=await frame.getAttribute('name');
            console.log('Frame name is : '+frameName);
        }
        let sideFrame:FrameLocator= page.frameLocator('[name="side"]');//switching to side frame
        await sideFrame.getByTestId('side-link-registration').first().click();
        await page.pause


    });