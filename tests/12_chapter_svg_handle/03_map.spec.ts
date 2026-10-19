import { test, expect } from '@playwright/test';

test.describe('Map handling', () => {
    const SimpleMaps = "https://simplemaps.com/svg/country/in";
     test.beforeEach(async ({ page }) => {
        await page.goto(SimpleMaps);
    });
  test('Open map page and start interaction', async ({ page }) => {
      const states = await page
            .locator(
            "//div[@id='admin1_map_inner']//*[name()='svg']//*[name()='path' and contains(@class,'sm_state')]",
            )
            .all();

             for(const state of states){
            const classState = await state.getAttribute("class");
            console.log(classState);
            if (classState?.includes("INKL")) {
                state.click();
            }
             }
await page.pause();
  });
});
