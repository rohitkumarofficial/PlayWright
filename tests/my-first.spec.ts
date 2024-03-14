import { test, expect } from "@playwright/test";

test.describe("google", () => {
  test("open google", async ({page}) => {
    await page.goto("https://google.com");
    await expect(page).toHaveTitle("Google");
  });
});