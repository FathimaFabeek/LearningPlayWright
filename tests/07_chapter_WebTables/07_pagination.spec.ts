import { test, Page, expect, Locator } from '@playwright/test';
async function findRowByName(page: Page, name: string): Promise<Locator> {

  while (true) {
    const row = page.locator('#employees-tbody tr').filter({ hasText: name });
    if (await row.count()) {//if the row with name  is found, break the loop
      return row;
    }
    const next = page.getByTestId('next-page');// if the row is not found, click on the next button to go to the next page
    if (await next.isDisabled()) {//if the next button is disabled, it means we have reached the last page and the row is not found
      throw new Error(`Row with name ${name} not found in the table`);
    }
    await next.click();//if next button is not disabled, click on it to go to the next page
  }
}

test('Verify the pagination functionality', async ({ page }) => {
  await page.goto('https://app.thetestingacademy.com/playwright/tables/webtable');
  let name: string = 'Luca Greco';
  const row = await findRowByName(page, 'Luca Greco');

  const email = await row.locator("td[data-col='email']").textContent();
  const country = await row.locator("td[data-col='country']").textContent();
  console.log(`Email: ${email}, Country: ${country}`);


  await page.pause();
});