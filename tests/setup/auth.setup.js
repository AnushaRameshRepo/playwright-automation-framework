const{test:setup}=require('@playwright/test');
const{LoginPage}=require('../../Pages/LoginPage');
require('dotenv').config();

setup('authenticate Ecommerce', async({page})=>{
    const loginPage=new LoginPage(page);
    await loginPage.loginEcommerce(process.env.LOGIN_USER,process.env.LOGIN_PASSWORD);
    await page.context().storageState({path:'.auth/ecommerce.json'})
});

setup('authenticate Event', async({page})=>{
    const loginPage=new LoginPage(page);
    await loginPage.loginEvent(process.env.LOGIN_USER,process.env.LOGIN_PASSWORD);
    await page.context().storageState({path:'.auth/events.json'})
})