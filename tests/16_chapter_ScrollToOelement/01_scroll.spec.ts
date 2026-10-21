import { test, expect } from '@playwright/test';

test.describe('Verify the scrolling ',  () => {
    const url='https://app.thetestingacademy.com/playwright/widgets/scroll';
    test.beforeEach(async({page})=>{
        await page.goto(url);

    });
    //first way
    test('Verify scroll function', async({page})=>{
        // await page.getByTestId('deep-anchor').scrollIntoViewIfNeeded();
        // await page.getByTestId('deep-anchor').click();
        // //second way- javascript execute
        // await page.evaluate(()=> window.scrollBy(0,1000));
        //third way- jump to bottom
        await page.evaluate(()=>window.scrollTo(0, document.body.scrollHeight));
        //4th- jump back to top
        await page.evaluate(()=>window.scrollTo(0,0));


      await page.pause();
    });
	

	// Start your test code here

	
});