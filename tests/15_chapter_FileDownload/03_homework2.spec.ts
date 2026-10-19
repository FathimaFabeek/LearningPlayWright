import {test, expect} from '@playwright/test';
import path from 'path';
import dotenv from 'dotenv';
test.use(
    {
        storageState: './user-session.json',
        screenshot: 'only-on-failure',
    });
    const upload_dir = path.join(__dirname, '..', 'images', 'cake.jpg');
    test("go directly to dashboard — Test1", async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/student/my-process");
    await expect(page).toHaveURL(/my-process/);
    console.log("Dashboard loaded — no login needed ✅");

    const closebutton= page.getByRole('button', {name:'Close'});
    await page.waitForTimeout(2000);
    await closebutton.click();
    await page.locator("//span[text()='Settings']").click();
    await page.locator('#avatar-upload').setInputFiles(upload_dir);
   
    
    await page.pause();
});






        
