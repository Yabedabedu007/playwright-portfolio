import { test, expect } from '@playwright/test';

test('GitHub API returns 200', async ({ request }) => {
  const resp = await request.get('https://api.github.com');
  expect(resp.status()).toBe(200);
});