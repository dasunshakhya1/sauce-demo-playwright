import { Locator, Page } from "@playwright/test";

export class LoginHelper {
  readonly page: Page;
  readonly userName: Locator;
  readonly password: Locator;
    readonly loginBtn: Locator;
    readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.userName = page.getByTestId("user-name");
    this.password = page.getByTestId("password");
      this.loginBtn = page.getByTestId("login-button");
      this.errorMessage = page.locator("//h3[@data-test='error']")
  }
}
