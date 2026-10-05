import { test, expect } from '@playwright/test';

test.use({
    storageState: './user-session.json',
    screenshot: 'on',
    video: 'on',
    trace: 'on',
});

test.setTimeout(120_000);

test("go directly to dashboard — Test1", async ({ page }, testInfo) => {
    await page.goto("https://app.wingify.com/#/dashboard?accountId=1281316");
    await expect(page).toHaveURL(/dashboard/);
    console.log("Dashboard loaded — no login needed ✅");
    await page.waitForTimeout(3000);
    await testInfo.attach('Dashboard screenshot', {
        body: await page.screenshot(),
        contentType: 'image/png',
    });
});

test("go directly to dashboard2 — Test2", async ({ page }, testInfo) => {
    await page.goto("https://app.wingify.com/#/dashboard?accountId=1281316");
    await expect(page).toHaveURL(/dashboard/);
    console.log("Dashboard loaded — no login needed ✅");
    await page.waitForTimeout(3000);
    await testInfo.attach('Dashboard screenshot', {
        body: await page.screenshot(),
        contentType: 'image/png',
    });
});

test("go directly to dashboard3 — Test3", async ({ page }, testInfo) => {
    await page.goto("https://app.wingify.com/#/dashboard?accountId=1281316");
    await expect(page).toHaveURL(/dashboard/);
    console.log("Dashboard loaded — no login needed ✅");
    await page.waitForTimeout(3000);
    await testInfo.attach('Dashboard screenshot', {
        body: await page.screenshot(),
        contentType: 'image/png',
    });
});
