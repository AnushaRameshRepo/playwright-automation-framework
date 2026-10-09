const{test:setup}=require('@playwright/test');
const{LoginPage}=require('../../Pages/LoginPage');
const env = require('../../environments');   

setup.describe('ecommerce',()=>{
    setup.use({baseURL:env.ecommerce.baseURL});

    setup('authenticate Ecommerce', async({page})=>{
    const loginPage=new LoginPage(page);
    await loginPage.loginEcommerce(env.credentials.username,env.credentials.password);
    await page.context().storageState({path:'.auth/ecommerce.json'})
});
})
setup.describe('ecommerce',()=>{
    setup.use({baseURL:env.events.baseURL});

setup('authenticate Event', async({page})=>{
    const loginPage=new LoginPage(page);
    await loginPage.loginEvent(env.credentials.username,env.credentials.password);
    await page.context().storageState({path:'.auth/events.json'})
});
})