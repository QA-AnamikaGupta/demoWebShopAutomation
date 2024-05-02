class BillingAddressPage{

    // Elements object to store methods that retrieve page elements
      elements={
          clickCheckoutAsGuestButton:()=>cy.get('.checkout-as-guest-button'),
          selectBillingCountry:()=>cy.get('#BillingNewAddress_CountryId'),
          selectBillingStateProvince:()=>cy.get('#BillingNewAddress_StateProvinceId'),
          enterBillingCity:()=>cy.get('#BillingNewAddress_City'),
          enterBillingAddressLine1:()=>cy.get('#BillingNewAddress_Address1'),
          enterBillingZipCode:()=>cy.get('#BillingNewAddress_ZipPostalCode'),
          enterPhoneNumber:()=>cy.get('#BillingNewAddress_PhoneNumber'),
          clickBillingAdressButton  :()=>cy.get('#billing-buttons-container > .button-1'),
          clickShippingAddressButton:()=>cy.get('#shipping-buttons-container > .button-1'),
          clickShippingMethod:()=>cy.get('#shipping-method-buttons-container> .button-1'),


      }
     // Method to fill the billing address form for GUEST User with provided details
     billingAddressForLoginUser()
     {
        this.elements.clickBillingAdressButton().click()
        this.elements.clickShippingAddressButton().click()
        this.elements.clickShippingMethod().click()
     }

     // Method to fill the billing address form for GUEST User with provided details
     fillTheBillingAddressFormForGuestORNewUser(city,addressline1,zipcode,phonenumber)
      {
          this.elements.clickCheckoutAsGuestButton().click()
          this.elements.selectBillingCountry().select('United States')
          this.elements.selectBillingStateProvince().select('Alaska')
          this.elements.enterBillingCity().type(city)
          this.elements.enterBillingAddressLine1().type(addressline1)
          this.elements.enterBillingZipCode().type(zipcode)
          this.elements.enterPhoneNumber().type(phonenumber)
          this.elements.clickBillingAdressButton().click()


      }


}
module.exports = new BillingAddressPage()