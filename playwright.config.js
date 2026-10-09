// @ts-check
const{ defineConfig}=require('@playwright/test');
const env=require('./environments');


/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  fullyParallel:true,
  forbidOnly:!!process.env.CI,
  
  retries:process.env.CI ? 2:0,
  workers:process.env.CI?2:undefined,
  reporter: 'html',
  use: {
    browserName:'chromium',
    headless:!!process.env.CI,
    screenshot:'only-on-failure',
    trace:'on-first-retry',
    video:'retain-on-failure',
  },
  projects:[
    {name:'setup', testMatch:/.*\.setup\.js/},
    {
      name:'ecommerce',
      testMatch:/EcommerceTests\/.*\.spec\.js/,
      dependencies:['setup'],
      use:
      {
        baseURL:env.ecommerce.baseURL,
        storageState:'.auth/ecommerce.json',
      },
    },
    {
      name:'events',
      testMatch:/EventsTests\/.*\.spec\.js/,
      dependencies:['setup'],
      use:
      {
        baseURL:env.events.baseURL,
        storageState:'.auth/events.json',
      },
    },
  ],
  
});

