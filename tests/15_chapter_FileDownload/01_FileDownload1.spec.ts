import { test, expect } from '@playwright/test';

test.describe('Verify the download functionality', () => {
    const URL='https://app.thetestingacademy.com/playwright/widgets/upload-download';
    test.beforeEach(async ({page})=>{
        await page.goto(URL);
    });
    test('Verifying download button', async({page})=>{
       const [staticDownload]= await Promise.all([
            page.waitForEvent('download'),
            page.getByTestId('download-static').click()
        ]);
         await staticDownload.saveAs('./out/'+ staticDownload.suggestedFilename());
        await page.pause();





    });
	

	// Start your test code here

	
});