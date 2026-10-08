import { test, expect } from '@playwright/test';
test('Verify the flipkart page', async ({ page }) => {
  //Navigate to Flipkart
  await page.goto('https://www.flipkart.com/');
  const closePopup = page.getByRole('button', { name: '✕' });
  if (await closePopup.isVisible()) {
    await closePopup.click();
  }
  //Search DSLR Camera
  const search = page.getByPlaceholder('Search for Products, Brands and More');
  await expect(search.first()).toBeVisible();
  await search.first().fill('DSLR Camera');
  await search.first().press('Enter');
  await expect(page).toHaveURL(/search.*dslr.*camera/i);
  //Navigate all the pages and print title and price of all the products
  const next = page.getByText('Next', { exact: true });
  const readPage = async (n: number) => {
    const names = await page.locator('div.RG5Slk').allInnerTexts();
    const prices = await page.locator('div.hZ3P6w.DeU9vF').allInnerTexts();
    names.forEach((name, i) => console.log(`Page ${n}: ${name} :: ${prices[i] ?? 'no price'}`));
  };
  for (let n = 1; n <= 7; n++) {
    await readPage(n);
    if (n === 7 || !(await next.isVisible()) || !(await next.isEnabled())) {
      break;
    }
    await next.click();
    expect(page.url()).toContain(`page=${n + 1}`);
  }
  await expect(page).toHaveURL(/\page=7/);
});
