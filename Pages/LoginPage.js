class LoginPage{

    constructor(page)
    {
        this.page=page;
        this.userEmailTextbox=page.locator("#userEmail");
        this.userPasswordTextbox=page.locator("#userPassword");
        this.sighInButton=page.locator("input[value='Login']");
        this.eventEmailTextbox=page.locator("#email");
        this.eventPasswordTextbox=page.locator("#password");
        this.eventLoginButton=page.getByRole("button",{name:"Sign In"});
    }
    async loginEcommerce(username,password){
        await this.page.goto("https://rahulshettyacademy.com/client/");
        await this.userEmailTextbox.fill(username);
        await this.userPasswordTextbox.fill(password);
        await this.sighInButton.click();
        await this.page.waitForLoadState("networkidle");
    }
    async loginEvent(username,password){
        await this.page.goto("https://eventhub.rahulshettyacademy.com/events");
        await this.eventEmailTextbox.fill(username);
        await this.eventPasswordTextbox.fill(password);
        await this.eventLoginButton.click();
        await this.page.waitForLoadState("networkidle");
    }
   
}
 module.exports={LoginPage};