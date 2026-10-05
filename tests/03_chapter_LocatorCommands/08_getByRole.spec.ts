import { test, expect } from '@playwright/test';
test('make appoinment', async ({ page }) => {
    await page.goto(" https://katalon-demo-cura.herokuapp.com/");
    await expect(page).toHaveTitle('CURA Healthcare Service');
    await expect(page).toHaveURL(' https://katalon-demo-cura.herokuapp.com/');
    let makeAppointButton = page.getByRole("link",{name:"Make Appointment",exact :true});//tagname is a , so link
    await makeAppointButton.click();
});