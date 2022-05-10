import { PlaywrightTestConfig } from '@playwright/test';
const config: PlaywrightTestConfig = {
  use: {
    headless: false,
    channel: 'chrome',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },
};
export default config;