import { test } from "../../fixtures/test-config";
import { expect } from "@playwright/test";
import { LOCKED_USER_ERROR } from "./login-test-helper";

test.beforeEach(async ({loginHelper}) => {
  await loginHelper.loadApplication();
})

test("Verify that locked user should not be allow to login", async ({
  loginHelper,
}) => {
  await loginHelper.login("locked_out_user", "secret_sauce");
  const text = await loginHelper.getErrorMessageText();
  expect(text, "Invalid Error Message For Locked User").toBe(LOCKED_USER_ERROR);
});

test("Verify that standard user is allowed to login", async ({
  loginHelper,
}) => {
  await loginHelper.login("standard_user", "secret_sauce");
});
