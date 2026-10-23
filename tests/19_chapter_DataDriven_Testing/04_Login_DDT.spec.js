import { test, expect } from '@playwright/test';
import loginData from './TestData/login.json';
test.describe("Login-Data Driven", () => {
    const URL = "https://app.thetestingacademy.com/playwright/multiple_element_filter";
    test.beforeEach(async ({ page }) => {
        await page.goto(URL);
    });
    test('Verify with valid login data', async ({ page }) => {
        await page.locator('#email').fill(loginData.ValidUser.email);
        await page.locator('#password').fill(loginData.ValidUser.password);
        await page.getByTestId('login-button').click();
    });
     test('Verify with Invalid login data', async ({ page }) => {
        await page.locator('#email').fill(loginData.InvalidUser.email);
        await page.locator('#password').fill(loginData.InvalidUser.password);
        await page.getByTestId('login-button').click();
        //if we need another invalid username to test with difernt usrname, we can oonvert this to jsobject
        //then can add more username to this js object
    });
});