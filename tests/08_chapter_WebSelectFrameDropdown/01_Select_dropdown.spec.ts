import { test, expect } from '@playwright/test';

test('Select options from the dropdown list', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/dropdown');
  await page.locator('#dropdown').first().click();
  await page.locator('#dropdown').selectOption('1');

  await page.pause();
});