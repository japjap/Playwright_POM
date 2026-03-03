import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/home';
import { ShopPage } from '../../pages/shop';
import { FruitPage } from '../../pages/fruit';
import { CheesePage } from '../../pages/cheese';
import { SeasonalPage } from '../../pages/seasonal';
import { CartPage } from '../../pages/cart';

test('test', async ({ page }) => {

  const home = new HomePage(page)
  const shop = new ShopPage(page)
  const fruit = new FruitPage(page)
  const cheese = new CheesePage(page)
  const seasonal = new SeasonalPage(page)
  const cart = new CartPage(page)
  await home.gotoHomePage()
  await expect(home.cart).toBeVisible();
  await home.gotoShopPage()
  await expect(shop.add_to_cart).toBeVisible();
  await shop.addfirstpie();
  await home.gotoFruitPage()
  await shop.checkcartcount(1);
  await expect(fruit.add_to_cart).toBeVisible();
  await fruit.addfirstpie();
  await home.gotoCheesePage()
  await shop.checkcartcount(2);
  await expect(cheese.add_to_cart).toBeVisible();
  await cheese.addfirstpie();
  await home.gotoSeasonalPage()
  await shop.checkcartcount(3);
  await expect(seasonal.add_to_cart).toBeVisible();
  await seasonal.addfirstpie();
  await home.gotoCartPage()
  await shop.checkcartcount(4);
  await expect(page.getByRole('heading', { name: 'Your Cart' })).toBeVisible();
  await cart.proceedToCheckout()
  await expect(page.getByRole('heading', { name: 'Your Cart' })).toBeVisible();
});