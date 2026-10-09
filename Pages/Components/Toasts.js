class Toasts{
    constructor(page){
        this.messageAlert=page.locator("div[class*='pointer-events-auto']");
    }
    withText(text){
        return this.messageAlert.filter({hasText:text});
    }
}
module.exports={Toasts};
