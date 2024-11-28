import cartPage from "../Pages/cartPage"
import productListPage from "../Pages/productListPage";

describe('Verify Coupon with different Dataset', () => {
    let testData; // Declare a variable
    before(function () {
        // Load fixture and assign to testData
        cy.fixture('CouponData').then((data) => {
            testData = data;
        });
    });
    it('verify coupon with invalid dataset',()=>{
        testData.forEach((couponData)=>{
        productListPage.selectYourProduct()
        productListPage.selectAttributeOfProduct()
        cartPage.clickOnShoppingCartLink()
        cartPage.applyCoupon(couponData.coupon)
        })

    })

    // it('verify coupon with Vaild dataset',()=>{
    //     productListPage.selectYourProduct()
    //     productListPage.selectAttributeOfProduct()
    //     cartPage.clickOnShoppingCartLink()
    //     cartPage.applyCoupon("Flat10")
    // })
})

