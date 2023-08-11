import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test.describe("Main navigation", () => {
  test("Test research link", async ({ page }) => {
    await page.getByLabel("Primary").getByRole("link", { name: "Research" }).click();

    await expect(page).toHaveURL(/.research/);
  });

  test("Test contributors link", async ({ page }) => {
    await page.getByLabel("Primary").getByRole("link", { name: "Contributors" }).click();

    await expect(page).toHaveURL(/.contributors/);
  });

  test("Test about us link", async ({ page }) => {
    await page.getByLabel("Primary").getByRole("link", { name: "About us" }).click();

    await expect(page).toHaveURL(/.about-us/);
  });
});

test.describe("Footer navigation", () => {
  test("Test research link", async ({ page }) => {
    await page.getByRole("contentinfo").getByRole("link", { name: "Research" }).click();

    await expect(page).toHaveURL(/.research/);
  });

  test("Test contributors link", async ({ page }) => {
    await page.getByRole("contentinfo").getByRole("link", { name: "Contributors" }).click();

    await expect(page).toHaveURL(/.contributors/);
  });

  test("Test about us link", async ({ page }) => {
    await page.getByRole("contentinfo").getByRole("link", { name: "About us" }).click();

    await expect(page).toHaveURL(/.about-us/);
  });

  test("Test cookie policy link", async ({ page }) => {
    await page.getByRole("link", { name: "Cookie policy" }).click();

    await expect(page).toHaveURL(/.cookie-policy/);
  });

  test("Test terms of use link", async ({ page }) => {
    await page.getByRole("link", { name: "Terms of use" }).click();

    await expect(page).toHaveURL(/.terms-of-use/);
  });

  test("Test privacy policy link", async ({ page }) => {
    await page.getByRole("link", { name: "Privacy policy" }).click();

    await expect(page).toHaveURL(/.privacy-policy/);
  });

  test("Test Twitter link", async ({ page }) => {
    await expect(page.getByRole("link", { name: "Twitter" })).toHaveAttribute(
      "href",
      "https://twitter.com/postscriptmed"
    );
  });

  test("Test LinkedIn link", async ({ page }) => {
    await expect(page.getByRole("link", { name: "LinkedIn" })).toHaveAttribute(
      "href",
      "https://www.linkedin.com/company/postscriptmedical/"
    );
  });
});

test.describe("Other page navigation", () => {
  test("Test review the research link", async ({ page }) => {
    await page.getByRole("link", { name: "Review the research" }).click();

    await expect(page).toHaveURL(/.research/);
  });

  test("Test see all contributors link", async ({ page }) => {
    await page.getByRole("link", { name: "See all contributors" }).click();

    await expect(page).toHaveURL(/.contributors/);
  });
});
