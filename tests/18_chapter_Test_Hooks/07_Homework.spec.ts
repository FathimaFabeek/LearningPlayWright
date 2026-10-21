import { test, expect } from '@playwright/test';

test('Student login form submits and validates the student email', async ({ page }) => {
    const loginUrl = 'https://app.thetestingacademy.com/playwright/multiple_element_filter';
    const studentEmail = 'student@thetestingacademy.com';
//page asertion
    await page.goto(loginUrl);
    await expect(page).toHaveTitle('Multiple Element Filter Login — The Testing Academy');
    await expect(page.getByRole('heading', { name: 'Student Login' })).toBeVisible();
//username pasword assertion
    const emailInput = page.getByRole('textbox', { name: 'Email Address' });
     await expect(emailInput).toBeVisible();
    await expect(emailInput).toBeEditable();
    await expect(emailInput).toBeEnabled();
    const passwordInput = page.getByRole('textbox', { name: 'Password' });
    await expect(passwordInput).toBeVisible();
    await expect(passwordInput).toBeEditable();
    await expect(passwordInput).toBeEnabled();
    await emailInput.fill(studentEmail);
    expect(await emailInput.inputValue()).toBe(studentEmail);
    await passwordInput.fill('abc@123');
//other field assertin
    const checkbx = page.getByRole('checkbox', { name: "remember" });
    await expect(checkbx).toBeVisible();
    await expect(checkbx).not.toBeChecked();
    await checkbx.check();
    await expect(checkbx).toBeChecked();
    await checkbx.uncheck();
    await expect(checkbx).not.toBeChecked();

    const forgetPassword = page.getByRole("link", { name: "Forget password?" });
    await expect(forgetPassword).toBeVisible();
    await expect(forgetPassword).toHaveText("Forget password?")
    await expect(forgetPassword).toContainText("Forget");
    await expect(forgetPassword).toHaveAttribute("href", "#forgotten-password");

     const loginButton = page.getByRole("button", { name: "Login to Practice Account" });
     await expect(loginButton).toBeVisible();
    await expect(loginButton).toBeEnabled();
    await expect(loginButton).toHaveText("Login to Practice Account");
    await expect(loginButton).not.toBeDisabled();
     await loginButton.click();
 // soft Assertions 

    await expect.soft(page.getByRole("heading", { name: "Student Login" })).toBeVisible();
    await expect(emailInput).toBeEditable();
    await expect(emailInput).toBeEnabled();

    // Hard assertion
    await expect(loginButton).toBeVisible();

    await expect(page).toHaveURL(/multiple_element_filter\?/);
    expect(new URL(page.url()).searchParams.get('email')).toBe(studentEmail);
});
