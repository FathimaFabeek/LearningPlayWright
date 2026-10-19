import { expect, test } from '@playwright/test';

test('verify drag and drop', async ({ page }) => {
  await page.goto('https://app.thetestingacademy.com/playwright/widgets/dnd');

  const source = page.locator('#card-review-pr-21');
  const target = page.locator('[data-status="done"]');

  await source.dragTo(target, {
    targetPosition: { x: 50, y: 60 },
    steps: 10,
  });
  await expect(target.locator('#card-review-pr-21')).toBeVisible();
  await page.pause();
});
