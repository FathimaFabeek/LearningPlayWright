import { test, expect, Locator } from '@playwright/test';

test('Verify the WEBTABLE', async ({ page }) => {
	await page.goto("https://awesomeqa.com/webtable.html");
	////table[@id='customers']/tbody/tr[5]/td[2]


	// Start your test code here
       // // 5 - i , 1 to 7 ( 1 header) 2 to 7
   // ]/td[
   // 2 - j , j -> 1,2,3
    // ]
	 const firstPart = "//table[@id='customers']/tbody/tr[";
    const secondPart = "]/td[";
    const thirdPart = "]";
	const rowCount = await page.locator("//table[@id='customers']/tbody/tr").count();
	const cols= await page.locator("//table[@id='customers']/tbody/tr[2]/td").count();
	for (let i = 2; i <= rowCount; i++)//row , here we not need headers so start with i=2
	{

      for (let j = 1; j <= cols; j++) {//cols

         const dynamicPath = `${firstPart}${i}${secondPart}${j}${thirdPart}`;
         //console.log(dynamicPath);
         const data = await page.locator(dynamicPath).innerText();
          //console.log(data);

          if (data.includes('Helen Bennett')) {
             const countryPath = `${dynamicPath}/following-sibling::td`;
             const countryText = await page.locator(countryPath).innerText();
             console.log('------');
             console.log(`Helen Bennett is In - ${countryText}`);
          }
		}}
	await page.pause();
});
