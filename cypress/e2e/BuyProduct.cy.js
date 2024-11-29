import productListPage from "../Pages/productListPage"
import cartPage from "../Pages/cartPage"
import billingAddrssPage from "../Pages/billingAddressPage"


describe('Log in user Purchase flow', function () {
    let testData; // Declare a variable
    before(function () {
        // Load fixture and assign to testData
        cy.fixture('LoginUserData').then((data) => {
            testData = data;
        });
    });

    it('select a product', () => {

        //Visit the URL with the environment variable by BerforeEach in the e2e.js file
        cy.url().should('include','demowebshop')
        cy.title().should('include','Demo Web Shop')
        cy.Userlogin(testData.email, testData.password) //Custom command for the User login
        productListPage.selectYourProduct()
        productListPage.selectAttributeOfProduct()
        cartPage.clickOnShoppingCartLink()
        cartPage.applyCoupon(testData.coupon) //Apply coupon from the fixture
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
    it('A Guest user select a product and purchase it', () => {
        //Visit the URL with the environment variable by BerforeEach in the e2e.js file
        productListPage.selectYourProduct()
        productListPage.selectAttributeOfProduct()
        cartPage.clickOnShoppingCartLink()
        cartPage.applyCoupon(GuestUserData.coupon); //Apply coupon from the fixture
        cartPage.checkEstimateShipping()
        cartPage.checkTermsAndCondition()
        cartPage.clickOnCheckoutButton()
        //Fill the billing address form for the guest user
        billingAddrssPage.fillTheBillingAddressFormForGuestORNewUser(
            GuestUserData.firstname,
            GuestUserData.lastname,
            GuestUserData.emailid,
            GuestUserData.city,
            GuestUserData.addressline1 ,
            GuestUserData.zipcode,
            GuestUserData.phonenumber)
    })

})