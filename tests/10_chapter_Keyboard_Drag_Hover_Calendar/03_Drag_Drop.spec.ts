import { expect, test } from '@playwright/test';

test('Verify Drag and Drop', async ({ page }) => {
 await page.goto('https://the-internet.herokuapp.com/drag_and_drop', {
  waitUntil: 'domcontentloaded'
});

  const columnA = page.locator("//div[@id='column-a']");
const columnB = page.locator("//div[@id='column-b']");

    await columnA.dragTo(columnB);
    //await page.pause();


});