class CartPage{


    // Elements object to store selectors
    element={
        shoppingCartLink:()=>cy.contains('Shopping cart'),
        couponTextBox:()=>cy.get('.discount-coupon-code'),
        applyCouponButton:()=>cy.contains('Apply coupon'),
        couponCodeErrorMessage:()=>cy.get('.message'),
        selectCountry:()=>cy.get('#CountryId'),
        selectStateProvienceID:()=>cy.get('#StateProvinceId'),
        estimateShippingButton:()=>cy.get(':nth-child(4) > .button-2'),
        termsAndConditionBox:()=>cy.get('#termsofservice'),
        checkoutButton:()=>cy.get('#checkout'),
    }

    // Method to click on the shopping cart link
    clickOnShoppingCartLink(){
        this.element.shoppingCartLink().click()
    }
    // Method to apply a coupon
    applyCoupon(Coupon){
        this.element.couponTextBox().type(Coupon)
        this.element.applyCouponButton().click()
        if(Coupon=="Flat10") {
            this.element.couponCodeErrorMessage().should('contain.text', 'The coupon code was applied')
        }
        else  {
            this.element.couponCodeErrorMessage().should('contain.text', 'The coupon code you entered couldn\'t be applied to your order')
        }
    }
    // Method to check estimate shipping
    checkEstimateShipping(){
        this.element.selectCountry().select('1')
        this.element.selectStateProvienceID().select('6')
        this.element.estimateShippingButton().click()
    }
    // Method to check terms and conditions
    checkTermsAndCondition(){
        this.element.termsAndConditionBox().check()
    }
    // Method to click on the checkout button
    clickOnCheckoutButton(){
        this.element.checkoutButton().click()
    }

}

// Export an instance of CartPage for use in tests
module.exports = new CartPage()
