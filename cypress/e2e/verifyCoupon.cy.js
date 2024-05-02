import cartPage from "../Pages/cartPage"
import  users from "../fixtures/example.json.json"
import productListPage from "../Pages/productListPage";

it('verify coupon with diffrent dataset',()=>{

    productListPage.selectYourProduct()
    productListPage.selectAttributeOfProduct()
    cartPage.clickOnShoppingCartLink()
    cartPage.applyCoupon(users.name)
    cartPage.applyCoupon(users.name)
})