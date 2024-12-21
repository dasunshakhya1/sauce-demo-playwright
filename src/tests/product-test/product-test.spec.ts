import { expect } from "@playwright/test";
import { test } from "../../fixtures/test-config";



const products:string[] = ["Sauce Labs Backpack","Sauce Labs Bolt T-Shirt"]


test.beforeEach(async ({ loginHelper }) => {
  await loginHelper.loadApplication();
  await loginHelper.login("standard_user", "secret_sauce");
});



test("Add products to cart",async({productHelper,headerHelper})=>{
  const inventoryItems = await productHelper.getProductCount()
  const inventories = await productHelper.getProducts()
  await productHelper.addProductsToCart(products);
  const cartItemCount = await headerHelper.getShoppingCartItemCount()
  expect(cartItemCount).toBe("2")
})