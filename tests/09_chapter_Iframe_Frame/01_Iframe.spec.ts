import {test, expect, Locator, FrameLocator} from '@playwright/test';

test('Verify IFrame', async ({ page }) => { 
     await page.goto('https://app.thetestingacademy.com/playwright/frames');
     let Vehicle_frame:FrameLocator = page.frameLocator('#frame-one');//switching to iframe
        await Vehicle_frame.locator('#RESULT_TextField-1').first().fill('audi');//elements not in page, it uis in frame so not using page.locator
        await Vehicle_frame.locator('#RESULT_TextField-2').first().fill('FATHIMA');
        await Vehicle_frame.locator('#RESULT_TextField-3').first().fill('1234567890');
        await Vehicle_frame.locator('#RESULT_RadioButton-1').selectOption('Electric');
        await Vehicle_frame.locator('#RESULT_TextField-4').fill('2025');
        await Vehicle_frame.locator('#RESULT_TextArea-1').fill('Amazing quality and performance');
        await Vehicle_frame.getByTestId('vehicle-submit').click();
        let output=await Vehicle_frame.locator('#vehicle-output').textContent();
        console.log('Vehicle output is : '+output);

});