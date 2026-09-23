import { test, expect } from '@playwright/test';
test('make appoinment', async ({ page }) => {
    await page.goto(" https://katalon-demo-cura.herokuapp.com/");
    await expect(page).toHaveTitle('CURA Healthcare Service');
    await expect(page).toHaveURL(' https://katalon-demo-cura.herokuapp.com/');
    let makeAppointButton = page.locator("#btn-make-appointment");
    await makeAppointButton.click();//Login
    await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();
    let UserNameField = page.locator("#txt-username");
    let pwdField = page.locator("#txt-password");
    let LoginBTn = page.locator("#btn-login");
    await UserNameField.fill("John Doe");
    await pwdField.fill("ThisIsNotAPassword");
    await LoginBTn.click();//
    await expect(page.getByRole('heading', { name: 'Make Appointment' })).toBeVisible();
})