import { test } from "../../fixtures/test-config";



test.beforeEach(async ({ loginPage }) => {
  await loginPage.loadApplication();
});

test('Get product count', async ({productPage}) => {
    const l = await productPage.getProductCount()
    
})