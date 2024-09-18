import { Page } from "@playwright/test";
import { ProductHelper } from "./product-helper";

export class ProductPage {
  readonly page: Page;
  private readonly ph: ProductHelper;

  constructor(page: Page) {
    this.page = page;
    this.ph = new ProductHelper(page);
  }
    
    async getProductCount() {
        const items = await this.ph.items.all()
        console.log(items.length)
    }
}
