const {test,expect}=require("../../FrameworkCore/fixtures/fixtures.js");
const products=require("../TestData/product.json");


test('Product View test' , async({clientPageEcommerce, dashboardPage, productPage})=>
{
    await expect(clientPageEcommerce).toHaveTitle("Let's Shop");
    await dashboardPage.viewProduct(products.adidas.name);
    await expect(productPage.productName).toHaveText(products.adidas.name);
    await expect(productPage.productPrice).toContainText(products.adidas.price);
});

test("Add to cart test", async({dashboardPage})=>
{
    await dashboardPage.addProductToCart(products.zaraCoat.name);
    await expect(dashboardPage.productAddedAlert).toContainText("Product Added To Cart");
});
