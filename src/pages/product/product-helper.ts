import {Page} from "@playwright/test";
import {ProductPage} from "./product-page";
import {InventoryItem} from "../../models/inventory-item";

export class ProductHelper {
    readonly page: Page;
    private readonly ph: ProductPage;

    constructor(page: Page) {
        this.page = page;
        this.ph = new ProductPage(page);
    }

    async getProductCount() {
        return await this.ph.items.all()
    }

    async getProducts(): Promise<InventoryItem[]> {
        let items: InventoryItem[] = [];
     let locs  = await this.ph.itemName.all();

     for (const ele of locs) {
         console.log(await ele.textContent());
     }


        return items;

    }
}
