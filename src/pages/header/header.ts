import { Locator, Page } from "@playwright/test";


export class Header {

    readonly shoppingCart: Locator
    readonly shoppingCartItemCount:Locator



    constructor(page: Page) {

        this.shoppingCart = page.locator("#shopping_cart_container");
        this.shoppingCartItemCount = page.locator("#shopping_cart_container .shopping_cart_badge");
    }
}