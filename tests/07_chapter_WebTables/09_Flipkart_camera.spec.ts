import { test, expect } from '@playwright/test';

test('Verify the flipkart page', async ({ page }) => {
    //Navigate to Flipkart
    await page.goto('https://www.flipkart.com/');
    await page.getByRole('button', { name: '✕' }).click();
    //Search DSLR Camera
    const search = page.getByPlaceholder('Search for Products, Brands and More');
    await search.first().click();
    await search.first().fill('DSLR Camera');
    await search.first().press('Enter');
    await expect(page).toHaveURL(/search.*dslr.*camera/i);
    //Navigate all the pages and print title and price of all the products
    const next = page.getByText('Next');
    const readPage = async (n: number) => {
  const names = await page.locator('div.RG5Slk').allInnerTexts();
  const prices = await page.locator('div.hZ3P6w.DeU9vF').allInnerTexts();
  names.forEach((name, i) => console.log(`Page ${n}: ${name} :: ${prices[i] ?? 'no price'}`));
};

for (let n = 1; n <= 7; n++)
    {
  await readPage(n);
  if (!(await next.isVisible()))
     break;
   // await page.waitForLoadState('networkidle');
   else{
 await next.click();
   }

}
 await expect(page).toHaveURL(/\page=7/);
await page.pause();
});
