import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await page.getByRole('link', { name: ' Products' }).click();
  await page.getByRole('link', { name: ' Cart' }).click();
  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await page.getByRole('link', { name: ' Test Cases' }).click();
  await page.getByRole('link', { name: ' API Testing' }).click();
});