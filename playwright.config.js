// @ts-check
import { defineConfig, devices } from '@playwright/test';



/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  timeout:90000,
  expect:{
    timeout:50000,
  },
  retries:2,
  reporter: 'html',
  use: {
    browserName:'chromium',
    headless:!!process.env.CI,
    screenshot:'only-on-failure',
  },
  projects:[
    {name:'setup', testMatch:/.*\.setup\.js/},

    {
      name:'ecommerce',
      testMatch:/EcommerceTests\/.*\.spec\.js/,
      dependencies:['setup'],
      use:
      {
        baseURL:'https://rahulshettyacademy.com/',
        storageState:'.auth/ecommerce.json',
      },
    },
    {
      name:'events',
      testMatch:/EventsTests\/.*\.spec\.js/,
      dependencies:['setup'],
      use:
      {
        baseURL:'https://eventhub.rahulshettyacademy.com/events',
        storageState:'.auth/events.json',
      },
    },
  ],
  
});

