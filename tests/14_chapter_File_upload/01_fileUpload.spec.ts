import { test, expect } from '@playwright/test';
import path from 'path';

test.describe('File Upload Template', () => {
    const url='https://the-internet.herokuapp.com/upload';
  test.beforeEach( async ({ page }) => {
    await page.goto(url);
    });
    test('Verify file upload', async ({page})=>{
        const FilePath = path.join(__dirname, 'testdata.txt');
        console.log(FilePath);
        await page.locator('#file-upload').setInputFiles([FilePath]);
        await page.getByRole('button',{name:"Upload"}).click();
        await expect (page.locator('#uploaded-files')).toHaveText("testdata.txt");

  });
});
