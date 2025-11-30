import { test, expect } from '@playwright/test';

test('homepage has title and content', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Ashwin Azer/);

  // Expect the main heading to be visible
  await expect(page.getByRole('heading', { name: 'Ashwin Azer', level: 1 })).toBeVisible();

  // Check for other key elements
  await expect(page.getByText('Video Editor', { exact: true })).toBeVisible();
  await expect(page.getByText('Music Artist', { exact: true })).toBeVisible();
  await expect(page.getByText('Content Creator', { exact: true })).toBeVisible();
});
