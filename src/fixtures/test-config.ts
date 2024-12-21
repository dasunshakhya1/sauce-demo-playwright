import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/login/login-page";
import { ProductPage } from "../pages/product/product-page";
import { LoginHelper } from "../pages/login/login-helper";
import { ProductHelper } from "../pages/product/product-helper";
import { HeaderHelper } from "../pages/header/header-helper";

export const test = base.extend<{ loginHelper: LoginHelper, productHelper: ProductHelper, headerHelper: HeaderHelper }>({
    loginHelper: async ({ page }, use) => {
        const loginHelper = new LoginHelper(page);
        await use(loginHelper)
    },
    productHelper: async ({ page }, use) => {
        const productHelper = new ProductHelper(page)
        await use(productHelper)
    },
    headerHelper: async ({ page }, use) => {
        const headerHelper = new HeaderHelper(page);
        await use(headerHelper)
    }
});
