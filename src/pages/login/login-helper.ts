import { expect, Locator, Page } from "@playwright/test";
import { LoginPage } from "./login-page";



export class LoginHelper {
  readonly page: Page;
  private readonly lp: LoginPage;

  constructor(page: Page) {
    this.page = page;
    this.lp = new LoginPage(page);
  }

  async loadApplication() {
    if (process.env.BASE_URL) {
      await this.page.goto(process.env.BASE_URL);
    } else {
      console.error("BASE_URL is not found");
    }
  }

  async login(username: string, password: string) {
    await this.lp.userName.fill(username);
    await this.lp.password.fill(password);
    await this.lp.loginBtn.click();
  }

  async getErrorMessageText() {
    const locator: Locator = this.lp.errorMessage;
    expect(locator).toBeVisible();
    return await locator.textContent();
  }
}
