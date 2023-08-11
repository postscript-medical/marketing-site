import { test, expect } from "@playwright/test";
import percySnapshot from "@percy/playwright";

test("Home", async ({ page, browserName }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/PostScript Medical/);

  if (browserName === "chromium") {
    await percySnapshot(page, "Home page");
  }
});

test("Research", async ({ page, browserName }) => {
  await page.goto("/research");

  await expect(page).toHaveTitle(/Research papers - PostScript Medical/);

  if (browserName === "chromium") {
    await percySnapshot(page, "Research page");
  }
});

test("Contributors", async ({ page, browserName }) => {
  await page.goto("/contributors");

  await expect(page).toHaveTitle(/Contributors - PostScript Medical/);

  if (browserName === "chromium") {
    await percySnapshot(page, "Contributors page");
  }
});

test("About us", async ({ page, browserName }) => {
  await page.goto("/about-us");

  await expect(page).toHaveTitle(/About us - PostScript Medical/);

  if (browserName === "chromium") {
    await percySnapshot(page, "About us page");
  }
});

test("Cookie policy", async ({ page, browserName }) => {
  await page.goto("/cookie-policy");

  await expect(page).toHaveTitle(/Cookie Policy - PostScript Medical/);

  if (browserName === "chromium") {
    await percySnapshot(page, "Cookie policy page");
  }
});

test("Terms of use", async ({ page, browserName }) => {
  await page.goto("/terms-of-use");

  await expect(page).toHaveTitle(/Terms of use - PostScript Medical/);

  if (browserName === "chromium") {
    await percySnapshot(page, "Terms of use page");
  }
});

test("Privacy policy", async ({ page, browserName }) => {
  await page.goto("/privacy-policy");

  await expect(page).toHaveTitle(/Privacy Policy - PostScript Medical/);

  if (browserName === "chromium") {
    await percySnapshot(page, "Privacy policy page");
  }
});
