import { Locator, Page } from "@playwright/test";

export class ProductPage{
    readonly page: Page
    readonly items:Locator
    readonly itemName:Locator


    constructor(page: Page) {
        this.page = page
        this.items = page.locator(".inventory_item");
        this.itemName = this.items.locator(".inventory_item_name")
        
    }
}