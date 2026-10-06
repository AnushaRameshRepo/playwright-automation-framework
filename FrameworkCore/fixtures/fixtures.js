const base = require('@playwright/test');
const {DashboardPage}=require('../../Pages/Ecommerce/DashboardPage');
const {ProductPage}=require('../../Pages/Ecommerce/ProductPage');

const {EventsPage}=require('../../Pages/Events/EventsPage');
const {HomePage}=require('../../Pages/Events/HomePage');
const {AdminPage}=require('../../Pages/Events/AdminPage');

const dotenv=require('dotenv'); 
dotenv.config();

exports.test = base.test.extend(
    {
        clientPageEcommerce: async ({ page }, use) => {
               
            await page.goto('/clients');
            await use(page);
        },
        dashboardPage: async ({ clientPageEcommerce }, use) => {  
            const dashboardPage = new DashboardPage(clientPageEcommerce);
            await use(dashboardPage);
        },
        productPage: async ({ clientPageEcommerce }, use) => {
            const productPage = new ProductPage(clientPageEcommerce);
            await use(productPage);
        },
        clientPageEvents: async ({ page }, use) => {
            await page.goto('/');
            await use(page);
        },
    
        eventsHomePage: async ({ clientPageEvents }, use) => {
            const eventsHomePage = new HomePage(clientPageEvents);
            await use(eventsHomePage);
        },
        eventsPage: async ({ clientPageEvents }, use) => {
            const eventsPage = new EventsPage(clientPageEvents);
            await use(eventsPage);
        },
         adminPage: async ({ clientPageEvents }, use) => {
            const adminPage = new AdminPage(clientPageEvents);
            await use(adminPage);
        },
    });
exports.expect = base.expect;