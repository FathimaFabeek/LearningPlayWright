import { test, expect } from '@playwright/test';

test('Verify the OrangeHRM employee table', async ({ page }) => {
    await page.goto(' https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    //LOGIN

    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).toHaveURL(/dashboard/);
    //ADDING EMPLOYEE
    await page.getByText('PIM').click();
    await expect(page).toHaveURL(/pim\/viewEmployeeList/);
    await page.getByRole('button', { name: 'Add' }).click();
    await expect(page).toHaveURL(/pim\/addEmployee/);
    await page.locator("//input[@name='firstName']").fill('Amit');
    await page.locator("//input[@name='lastName']").fill('Shah');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(2000);
    await expect(page).toHaveURL(/pim\/viewPersonalDetails/);
    //Click PIM to view all employees again.
    await page.getByRole('link', { name: 'PIM' }).click();
    await expect(page).toHaveURL(/pim\/viewEmployeeList/);
    const employeeTable = page.getByRole('table');
    await expect(employeeTable).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Employee Information' })).toBeVisible();

    //Search the same employee
   await page.locator("//input[@placeholder='Type for hints...']").first().fill('Amit');
   await page.getByRole('button', { name: 'Search' }).click();
   //const row = page.getByText('Amit').first();
   const row = page.getByRole('row').filter({ hasText: 'Amit' });
     await expect(row.first()).toBeVisible();
   //DELETEING THE EMPLOYEE
   await row.locator("//i[@class='oxd-icon bi-trash']").first().click();
    //await page.locator("//button[text()=' Yes, Delete '] ").click();
    //await expect(page.getByText('No Records Found')).toBeVisible();
 await page.getByRole('button', { name: 'Yes, Delete' }).click();
 await expect(page.getByText('Successfully Deleted')).toBeVisible();
await page.pause();

});