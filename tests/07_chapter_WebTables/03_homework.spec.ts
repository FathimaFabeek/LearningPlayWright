import { test, expect } from '@playwright/test';

test('Verify Web Table Functionality', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/webtable');
    //normal way
    // const customer= page.locator("//table[@aria-label='Employee Management System table']/tbody/tr[3]/td[1]");
    //     await customer.click();
    //dynamic way
    const firstPart = "//table[@aria-label='Employee Management System table']/tbody/tr[";
    const secondPart = "]/td[";
    const thirdPart = "]";
    const rowCount = await page.locator("//table[@aria-label='Employee Management System table']/tbody/tr").count();
    const cols = await page.locator("//table[@aria-label='Employee Management System table']/tbody/tr[3]/td").count();
    for (let i = 2; i <= rowCount; i++)//row , here we not need headers so start with i=2
    {

        for (let j = 1; j <= cols; j++) {//cols

            const dynamicPath = `${firstPart}${i}${secondPart}${j}${thirdPart}`;
            //console.log(dynamicPath);
            const data = await page.locator(dynamicPath).innerText();
            //console.log(data);

            if (data.includes('Rohan.Mehta')) {
                const checkbox = `${dynamicPath}/preceding-sibling::td//input[@type='checkbox']`;
                const checkboxLocator = page.locator(checkbox);
                await checkboxLocator.check();
                await expect(checkboxLocator).toBeChecked();
                //await page.locator(checkbox).check();
                //table[@aria-label='Employee Management System table']/tbody/tr[]/td[]/preceding-sibling::td//input[@type='checkbox']";
                //await expect(checkbox).toBeChecked();
            }
        }
    }
    await page.pause();
});
