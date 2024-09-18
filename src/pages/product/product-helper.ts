import { Locator, Page } from "@playwright/test";

export class ProductHelper{
    readonly page: Page
    readonly items:Locator


    constructor(page: Page) {
        this.page = page
        this.items = page.locator(".inventory_item");
    }
}