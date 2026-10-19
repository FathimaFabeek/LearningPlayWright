import { test, expect } from '@playwright/test';

test.describe('Shadow DOM Template', () => {
    const URL='https://app.thetestingacademy.com/playwright/widgets/shadow-dom';
  test.beforeEach( async ({ page }) => {
    await page.goto(URL);
});
test('Verify shadow Dom', async ({page})=>{
    //signIn
const card=page.getByTestId('card-account-card');
await card.getByTestId('card-account-email').fill('student@testingAcademy.com');
await card.getByTestId('card-account-password').fill('pwd');
await card.getByTestId('card-account-submit').click();
await expect(card.getByTestId('card-account-status')).toContainText('student@testingAcademy.com');
//cart
const cart=page.getByTestId('counter-cart');
await cart.getByTestId('counter-cart-inc').click();
await cart.getByTestId('counter-cart-inc').click();
await expect(cart.getByTestId('counter-value').first()).toContainText('5');
//shadow inside shadow
const nested=page.getByTestId('nested-host').first();
await nested.getByTestId('card-inside-email').fill('hai@.com');
await nested.getByTestId('card-inside-password').fill('ghf');
await nested.getByTestId('card-inside-submit').click();
await expect(nested.getByTestId('card-inside-status')).toContainText('hai@.com');

});

    // Add your shadow DOM test steps here
    // Example: locate an element inside the shadow root by selector
    // const host = page.locator('#shadow-host');
    // await expect(host).toBeVisible();

    
  
});
