import { expect, Locator, Page } from "@playwright/test";
import { LoginHelper } from "./login-helper";

export class LoginPage {
  readonly page: Page;
  private readonly lh: LoginHelper;

  constructor(page: Page) {
    this.page = page;
    this.lh = new LoginHelper(page);
  }

  async loadApplication() {
    if (process.env.BASE_URL) {
      await this.page.goto(process.env.BASE_URL);
    } else {
      console.error("BASE_URL is not found");
    }
  }

  async login(username: string, password: string) {
    await this.lh.userName.fill(username);
    await this.lh.password.fill(password);
    await this.lh.loginBtn.click();
  }

  async getErrorMessageText() {
    const locator: Locator = this.lh.errorMessage;
    expect(locator).toBeVisible();
    return await locator.textContent();
  }
}
