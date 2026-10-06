class ProductPage{

    constructor(page)
    {
        this.page=page;
        this.backToDashboardLink=page.getByText("Continue Shopping");
        this.productName=page.locator("h2");
        this.productPrice=page.locator("div[class*='container'] h3");
        this.addToCartButton=page.getByText("Add To Cart");
    }   
    async addProductToCart(){
        
        await this.addToCartButton.click();
    }
}
 module.exports={ProductPage};