import loginPage from "../Pages/loginPage"
import productListPage from "../Pages/productListPage"
import cartPage from "../Pages/cartPage"
import billingAddrssPage from "../Pages/billingAddressPage"
import example from "../fixtures/example.json"


describe('Log in user Purchase flow', function () {
    let testData; // Declare a variable

    before(function () {
        // Load fixture and assign to testData
        cy.fixture('example').then((data) => {
            testData = data;
        });
    });

    it('select a product', () => {
        loginPage.loginLinkClick()
        loginPage.loginInputEmailID(testData.email)
        loginPage.loginInputPassword(testData.password)
        loginPage.loginCheckRememberMeBox()
        loginPage.loginButtonClick()
        productListPage.selectYourProduct()
        productListPage.selectAttributeOfProduct()
        cartPage.clickOnShoppingCartLink()
        cartPage.applyCoupon(testData.coupon)
        cartPage.checkEstimateShipping()
        cartPage.checkTermsAndCondition()
        cartPage.clickOnCheckoutButton()

        billingAddrssPage.billingAddressForLoginUser()

    })
})

describe('guest customer purchase flow',function (){

    let GuestUserData; // Declare a variable

    before(function () {
        // Load fixture and assign to GuestUserData
        cy.fixture('GuestUserData').then((data) => {
            GuestUserData = data;
        });
    });
    it('a guest user select a product and purchase it', () => {
        productListPage.selectYourProduct()
        productListPage.selectAttributeOfProduct()
        cartPage.clickOnShoppingCartLink()
        cartPage.applyCoupon(GuestUserData.coupon);
        cartPage.checkEstimateShipping()
        cartPage.checkTermsAndCondition()
        cartPage.clickOnCheckoutButton()
        billingAddrssPage.fillTheBillingAddressFormForGuestORNewUser(
            GuestUserData.city,
            GuestUserData.addressline1 ,
            GuestUserData.zipcode,
            GuestUserData.phonenumber)
    });

})