import { test, expect} from '@playwright/test';
test.skip('checkout with paypal ',async ({page})=>{
    // it never execute bcz, test is skipped here
});
test.only('login as fathima ', async ({page})=>{
    // only this test runs,evrything  in this file ignored
});
test.fail('cart total is wrong, bug-451', async()=>{
    expect(90).toBe(100);// actually return 90

});
test.fixme('upload 2GB file ', async()=>{
    //skipped, but flagged as "need fixing"
});
test('full regression report', async()=>{
    test.slow();
    console.log(test.info().timeout);//90000 instead of 30000
});
test('mobile layout', async ({page, browserName})=>{
    test.fixme(browserName==='webkit', 'safari renders menu wrong');
    await page.goto("https://sdet.live");
});// in webkit not working, in other browsers it wil work