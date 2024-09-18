import { test } from "../../fixtures/test-config";
import { expect } from "@playwright/test";
import { LOCKED_USER_ERROR } from "./login-test-helper";

test.beforeEach(async ({loginPage}) => {
  await loginPage.loadApplication();
})

test("Verify that locked user should not be allow to login", async ({
  loginPage,
}) => {
  await loginPage.login("locked_out_user", "secret_sauce");
  const text = await loginPage.getErrorMessageText();
  expect(text, "Invalid Error Message For Locked User").toBe(LOCKED_USER_ERROR);
});

test("Verify that standard user is allowed to login", async ({
  loginPage,
}) => {
  await loginPage.login("standard_user", "secret_sauce");
});
