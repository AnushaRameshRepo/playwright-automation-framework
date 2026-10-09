class DashboardPage{

    constructor(page)
    {
        this.page=page;
        this.productList=page.locator("div[class='card-body']");
        this.viewButton=page.getByText("View");
        this.addToCartButton=page.getByText("Add To Cart");
        this.productAddedAlert=page.getByRole("alert");
    }
    async addProductToCart(productName){
        const product= this.productList.filter({hasText:productName});
        await product.getByRole("button",{name:' Add To Cart'}).click();
    }
    async viewProduct(productName){
        const product=this.productList.filter({hasText:productName});
        await product.getByRole("button",{name:'View'}).click();
    }
}
 module.exports={DashboardPage};