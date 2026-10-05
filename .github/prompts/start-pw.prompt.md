---
name: start-pw
description: Add the reusable Playwright test starter to the active spec file.
---

Add this Playwright test starter to the active editor, replacing the current file contents only when it is a test spec. Keep the title, URL, and test-code insertion point as editable placeholders. Do not invent test steps or change the requested title or URL if the user supplied them. When the user says "add template code", use this same starter.

```ts
import { test, expect } from '@playwright/test';

test('CHANGE TEST TITLE', async ({ page }) => {
  await page.goto('https://CHANGE-URL-HERE');

  // Start your test code here

  await page.pause();
});
```