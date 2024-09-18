import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/login/login-page";
import { ProductPage } from "../pages/product/product-page";

export const  test = base.extend<{loginPage:LoginPage,productPage:ProductPage}>({
    loginPage: async ({page},use)=>{
        const loginPage = new LoginPage(page);
        await use(loginPage)
    },
    productPage: async ({ page }, use) => {
        const productPage = new ProductPage(page)
        await use(productPage)
    }
});
