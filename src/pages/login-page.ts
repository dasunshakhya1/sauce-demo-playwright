import { Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async loadApplication() {
    if (process.env.BASE_URL) {
      await this.page.goto(process.env.BASE_URL);
    } else {
      console.error("BASE_URL is not found");
    }
  }
}
