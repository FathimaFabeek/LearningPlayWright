import { test, expect } from '@playwright/test';
import path from 'path';
test.describe('File Upload Template', () => {
    const url='https://app.thetestingacademy.com/playwright/widgets/upload-download';
  test.beforeEach( async ({ page }) => {
    await page.goto(url);
    });
    test('Verify file upload', async ({page})=>{
         const FilePath = path.join(__dirname, 'testdata.txt');
                console.log(FilePath);
                await page.locator('#single-upload').first().setInputFiles([FilePath]);
                await expect (page.locator('#single-preview').first()).toContainText("testdata.txt");
        


    });
});