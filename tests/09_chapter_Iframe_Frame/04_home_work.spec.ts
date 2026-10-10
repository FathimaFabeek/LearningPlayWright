import {test, expect} from '@playwright/test';

test('Verify QA Profile Form', async ({ page }) => { 
    await page.goto('https://app.thetestingacademy.com/playwright/tables/practice#page');
    //Personal information
    await page.getByTestId('first-name').fill('FATHIMA');
    await page.getByTestId('last-name').fill('FABEEK');
    await page.getByTestId('gender-female').click();
    //Professional details
    await page.getByTestId('years-experience').click();
    await page.locator("#years-experience").selectOption({ label: "2" });
    let date= page.locator('#profile-date');
    await date.fill('2026-10-09');
    await expect(date).toHaveValue('2026-10-09');
    await page.getByTestId('profession-automation').click();
    //Technical skills
    await page.getByTestId('tool-selenium').check();
    await page.getByTestId('continent-asia').check();
    await page.getByTestId('continent-africa').check();
    await page.getByTestId('tab-navigation').click();
    await page.getByTestId('tab-switch').click();
    await page.getByTestId('tab-wait').click();
    await page.getByTestId('tab-webelement').click();
    //save profile
    await page.getByTestId('profile-submit').click();
    await expect(page.locator("#submission-output")).toBeVisible();
   const output=  page.locator('#submission-output');
   console.log(await output.textContent());
   await expect(output).toContainText('FATHIMA');
    await expect(output).toContainText('FABEEK');




    



    await page.pause();
    


});