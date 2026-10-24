import { expect, test } from '@playwright/test';
import { CartPage } from './Pages/CartPage';
import { InventoryPage } from './Pages/InventoryPage';
import { LoginPage } from './Pages/LoginPage';


test('adds the first inventory item to the cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.Login('standard_user', 'tta_secret');
   

  const inventoryPage = new InventoryPage(page);
   let itemName = '';
  await expect(inventoryPage.title).toHaveText('Products');
   itemName = await inventoryPage.addFirstItemAndOpenCart();
  //await inventoryPage.addFirstItemAndOpenCart();
   await inventoryPage.openCart();
  

   const cartPage = new CartPage(page);
     await expect(cartPage.title).toHaveText('Your Cart');
   await expect(new CartPage(page).firstItem).toBeVisible();
   await cartPage.firstItem.click();
  await expect(page).toHaveTitle('TTACart - Test.allTheThings() T-Shirt (Red)');
  //commit every new changes and push the changes to https://github.com/FathimaFabeek/LearningPlayWright
  
});
