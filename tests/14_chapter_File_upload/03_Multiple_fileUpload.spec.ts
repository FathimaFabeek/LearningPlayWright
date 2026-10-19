import { test, expect } from '@playwright/test';
//import path from 'path';
test.describe('File Upload Template', () => {
    const url='https://www.patternfly.org/components/file-upload/multiple-file-upload/';
  test.beforeEach( async ({ page }) => {
    await page.goto(url);
    });
    test('Verify file upload', async ({page})=>{
        //  const FilePath = path.join(__dirname, 'testdata.txt');
        //         console.log(FilePath);
                await page.locator('div.pf-v6-c-multiple-file-upload input').setInputFiles([
                    {
                     name: 'file1.jpg',
                mimeType: 'image/jpeg',
                buffer: Buffer.from('image from thetestingacademy code')//bufffer is informatn
            },
            {
                name: 'file2.jpg',
                mimeType: 'image/jpeg',
                buffer: Buffer.from('this is test')
            }
            
                ]);
        await page.pause();


    });
});