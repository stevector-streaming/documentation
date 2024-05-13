import { test, expect } from '@playwright/test';

test('home page', async ({ page }) => {
  await page.goto('/');
  await page.getByText('Accept Cookies').click();
  await expect(page).toHaveScreenshot('homepage.png');
});

test('kill-mysql-queries', async ({ page }) => {
  await page.goto('/guides/mariadb-mysql/kill-mysql-queries');

  await page.getByText('Accept Cookies').click();

 // await expect(page.getByLabel('toc-nav')).toBeVisible();

  await expect(page).toHaveScreenshot('guides---mariadb-mysql---kill-mysql-queries.png');
});

test('certification---study-guide', async ({ page }) => {
  await page.goto('/certification/study-guide');
//  await expect(page.getByLabel('toc-nav')).toBeVisible();
  await page.getByText('Accept Cookies').click();

  await expect(page).toHaveScreenshot('certification---study-guide.png');
});

test('drupal-cron', async ({ page }) => {
  await page.goto('/drupal-cron');
//  await expect(page.getByLabel('toc-nav')).toBeVisible();
  await page.getByText('Accept Cookies').click();

await expect(page).toHaveScreenshot('drupal-cron.png');
});
