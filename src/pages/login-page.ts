import { Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async loadApplication() {
    await this.page.goto("https://www.saucedemo.com/v1/");
  }
}
