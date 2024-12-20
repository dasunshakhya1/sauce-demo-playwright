import { expect } from "@playwright/test";
import { test } from "../../fixtures/test-config";



test.beforeEach(async ({ loginHelper }) => {
  await loginHelper.loadApplication();
  await loginHelper.login("standard_user", "secret_sauce");
});

test('Get product count', async ({ productHelper }) => {
  const inventoryItems = await productHelper.getProductCount()
  expect(inventoryItems.length).toBeGreaterThan(1)
})