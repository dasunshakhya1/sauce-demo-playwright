import { expect, Page } from "@playwright/test";
import { ProductPage } from "./product-page";

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
}
