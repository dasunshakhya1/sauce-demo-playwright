import { Locator, Page } from "@playwright/test";

export class ProductPage {
    readonly page: Page
    readonly items: Locator
    readonly itemName: Locator
    readonly itemPrice: Locator
    readonly itemAddBtn: Locator
    readonly langDropDown: Locator


    constructor(page: Page) {
        this.page = page
        this.items = page.locator(".inventory_item");
        this.itemName = page.locator(".inventory_item_name")
        this.itemPrice = page.locator(".inventory_item_price")
        this.itemAddBtn = page.locator(".btn_inventory")

        this.langDropDown = page.locator(".product_sort_container")
    }
}