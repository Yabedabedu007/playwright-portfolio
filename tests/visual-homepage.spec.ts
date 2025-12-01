import { test, expect } from '@playwright/test';

test('homepage visual match', async ({ page }) => {
  await page.goto('https://automationexercise.com');
  await expect(await page.screenshot()).toMatchSnapshot('homepage.png');
});