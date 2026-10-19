import { test, expect } from '@playwright/test';
import path from 'path';

const URL = 'https://www.patternfly.org/components/file-upload/multiple-file-upload/';

const UPLOAD_DIR = __dirname;

test.describe('FileUpload handling', () => {

   test.beforeEach(async ({ page }) => {
      await page.goto(URL);
   });

   test('upload files from a different directory', async ({ page }) => {

      const files = ['sample.pdf', 'sample.jpg', 'sample.doc']
         .map(name => path.join(UPLOAD_DIR, name));

     

      await page.locator("div.pf-v6-c-multiple-file-upload input").setInputFiles(files);

      const uploadArea = page.locator('div.pf-v6-c-multiple-file-upload');
      await expect(uploadArea).toContainText('sample.pdf');
      await expect(uploadArea).toContainText('sample.jpg');
      await expect(uploadArea).toContainText('sample.doc');

      await page.pause();
   });
});