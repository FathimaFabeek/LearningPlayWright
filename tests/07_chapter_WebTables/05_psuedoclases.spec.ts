import { test, expect } from '@playwright/test';

test('Verify the pagination functionality', async ({ page }) => {
  await page.goto('https://app.thetestingacademy.com/playwright/webtable');
  //normal way
  //await page.locator("//td[text()='Rohan.Mehta']/preceding-sibling::td/input").click();
  await page.locator("tr:has(td:text('Rohan.Mehta'))").locator('input').first().click();
  // Start your test code here

  await page.pause();
});