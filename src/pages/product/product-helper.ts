import { Page } from "@playwright/test";
import { ProductPage } from "./product-page";
import { InventoryItem } from "../../models/inventory-item";

export class ProductHelper {
    readonly page: Page;
    private readonly ph: ProductPage;

    constructor(page: Page) {
        this.page = page;
        this.ph = new ProductPage(page);
    }

    async getProductCount() {
        await this.page.waitForLoadState('domcontentloaded')
        return await this.ph.items.all()
    }

    async getProducts(): Promise<InventoryItem[]> {
        let items: InventoryItem[] = [];
        let locs = await this.ph.items.all();

        for (const ele of locs) {

            const name = await ele.locator(this.ph.itemName).innerText()
            const price = await ele.locator(this.ph.itemPrice).innerText()
            items.push({ name, price })
        }
        return items;
    }

    async addProductsToCart(products:string[]){
        let locs = await this.ph.items.all();

        for(const product of products){
            for (const ele of locs) {
                const name = await ele.locator(this.ph.itemName).innerText()
                if(name===product){
                  await  ele.locator(this.ph.itemAddBtn).click()
                }
            }
        }
    }
}
