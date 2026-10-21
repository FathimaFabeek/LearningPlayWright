import { test, expect } from '@playwright/test';

test('Student login form submits and validates the student email', async ({ page }) => {
    const loginUrl = 'https://app.thetestingacademy.com/playwright/multiple_element_filter';
    const studentEmail = 'student@thetestingacademy.com';

    await page.goto(loginUrl);

    await expect(page).toHaveTitle('Multiple Element Filter Login — The Testing Academy');
    await expect(page.getByRole('heading', { name: 'Student Login' })).toBeVisible();

    const emailInput = page.getByRole('textbox', { name: 'Email Address' });
    const passwordInput = page.getByRole('textbox', { name: 'Password' });
    await expect(emailInput).toBeVisible();
    await expect(passwordInput).toBeVisible();

    await emailInput.fill(studentEmail);
    expect(await emailInput.inputValue()).toBe(studentEmail);
    await passwordInput.fill('abc@123');

    await page.getByRole('button', { name: 'Login to Practice Account' }).click();

    await expect(page).toHaveURL(/multiple_element_filter\?/);
    expect(new URL(page.url()).searchParams.get('email')).toBe(studentEmail);
});
