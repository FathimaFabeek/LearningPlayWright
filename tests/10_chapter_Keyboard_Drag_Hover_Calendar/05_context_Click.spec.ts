import { expect, test } from '@playwright/test';

test('verify drag and drop', async ({ page }) => {
  await page.goto('https://app.thetestingacademy.com/playwright/widgets/context-menu');
  
  await page.getByTestId('ctx-target').first().click({ button: 'right' });
  const allOptions: string[] = await page
        .locator('ul.context-menu-list span')
        .allInnerTexts();
    console.log(allOptions);

    await page.getByText('Copy', { exact: true }).first().click();
     await page.getByTestId('ctx-target-2').first().click({ button: 'right' });
      const allOptions1: string[] = await page
        .locator('button.context-menu-item')
        .allInnerTexts();
    console.log(allOptions1);
    await page.getByText('Copy', { exact: true }).first().click();
await page.getByTestId('ctx-target-3').first().click({ button: 'right' });
      const allOptions2: string[] = await page
        .locator('button.context-menu-item')
        .allInnerTexts();
    console.log(allOptions2);
 await page.getByText('Copy', { exact: true }).first().click();


});