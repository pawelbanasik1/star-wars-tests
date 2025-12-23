import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './spec',
  use: {
    baseURL: 'http://localhost:4200',
    trace: 'on-first-retry'
  },
  webServer: {
    command: 'npm run start --workspace=star-wars',
    port: 4200,
    reuseExistingServer: true
  },
  reporter: [
    ['html', { open: 'never' }],
    ['list'],
  ],
});
