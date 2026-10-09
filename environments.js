require('dotenv').config({quiet:true});

const required=['LOGIN_USER','LOGIN_PASSWORD'];
const missing=required.filter((key)=>!process.env[key]);
    if (missing.length){
        throw new Error('Missing environment variables : Copy .env.examples and fill it in');
    }

module.exports = {
    ecommerce: { baseURL: process.env.ECOM_BASE_URL || 'https://rahulshettyacademy.com' },
    events:    { baseURL: process.env.EVENTS_BASE_URL || 'https://eventhub.rahulshettyacademy.com' },
    credentials:{
        username:process.env.LOGIN_USER,
        password:process.env.LOGIN_PASSWORD,
    }
};