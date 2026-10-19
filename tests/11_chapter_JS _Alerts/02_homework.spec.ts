import { test, expect, Locator } from '@playwright/test';
test('Automate Applitools.com', async ({ page }) => {
    await page.goto("https://demo.applitools.com/");
    //Login
    await page.locator('#username').fill('Admin');
    await page.locator('#password').fill('Password@123');
    await page.locator('#log-in').click();
    await expect(page).toHaveURL("https://demo.applitools.com/app.html");
    //npx playwright test "tests/11_chapter_JS _Alerts/02_homework.spec.ts"
    const amounts = await page.locator('table tbody tr td:last-child span').allTextContents();//td:last-child — find the last cell in each row.

    //console.log(amounts);
    const total = amounts.reduce((sum, text) => {
        const sign = text.trim().startsWith('-') ? -1 : 1;
        const value = Number(//Number() converts the text "50.00" into the number 50.
            text.replace(/[^\d.]/g, '')//replace() method removes characters that are not digits or decimal points
        );

        return sum + sign * value;
    }, 0);

    console.log('Total amount:', total.toFixed(2), 'USD');//displays two digits after the decimal point.
    expect(total).toBeCloseTo(1996.22);

    await page.pause();


})