import {test, expect} from '@playwright/test';

test('Verify Advanced dropdown list', async ({ page }) => {
  await page.goto('https://app.thetestingacademy.com/playwright/tables/select-boxes');
  //single-searchable dropdown
  await page.getByTestId('rs-single-input').click();
  await page.getByText('Cypress', { exact: true }).click();
  //multi chips with remove
    await page.locator('#rs-multi').click();
    await page.getByText('Pytest', { exact: true }).click();
    await page.getByText('JUnit', { exact: true }).click();
    await page.getByText('Mocha', { exact: true }).click();
   await page.keyboard.press('Escape');
   //MULTI TYPE AND ENTER
    await page.locator('#rs-creatable').click();
    await page.getByRole('option', { name: 'performance' }).click();
    await page.getByRole('option', { name: 'security' }).click();
    await page.getByRole('option', { name: 'accessibility' }).click();
    await page.keyboard.press('Escape');
    //Async — fetched on type
    await page.locator('#rs-async').click();
    await page.getByTestId('rs-async-input').fill('Del');
    await expect(page.getByTestId('rs-async-menu')).toContainText('Delhi');
    await page.getByRole('option', { name: 'Delhi' }).click();
    //④ Grouped — categorised options
    await page.getByTestId('rs-grouped').click();
    await page.getByRole('option', { name: 'GCP' }).click();
   

});