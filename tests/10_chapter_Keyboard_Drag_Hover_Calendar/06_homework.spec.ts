import {test, expect, Locator} from '@playwright/test';
test('Verify Hover', async ({page})=>
{
    await page.goto("https://app.thetestingacademy.com/playwright/widgets/hover-menu");
    await page.getByTestId('nav-add-ons').first().hover();
    await page.getByTestId('test-id-Wifi').first().click();
    const op= await page.locator('#output').innerText();
    console.log(op);
     //expect(op).toContain("Wi-Fi");
      const jsonData = JSON.parse(op);
    expect(jsonData.clicked).toContain("Wi-Fi")
 await page.pause();
});