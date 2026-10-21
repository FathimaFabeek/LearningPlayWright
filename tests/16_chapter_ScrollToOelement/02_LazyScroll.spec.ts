import { test, expect } from '@playwright/test';

test.describe('Verify the Lazyscrolling ',  () => {
    const url='https://app.thetestingacademy.com/playwright/widgets/scroll';
    test.beforeEach(async({page})=>{
        await page.goto(url);

    });
    //5th way- lazyloading
    test('Verify scroll function', async({page})=>{
        await page.getByTestId('section-lazy').scrollIntoViewIfNeeded();
        await page.getByTestId('lazy-list').scrollIntoViewIfNeeded();
        const list=page.getByTestId('lazy-list').locator('li');
        const initialCount=await list.count();//here count will be 10, item 11 will exist on next scroll
        await list.last().scrollIntoViewIfNeeded();
        await expect.poll(async()=>list.count(),{
            message:"Expected_times > 10",          
            timeout:10_000
        }).toBeGreaterThan(initialCount);
        const finalCount=await list.count();
        console.log(finalCount);

        await page.waitForTimeout(5000);

      //await page.pause();
    });

    
});