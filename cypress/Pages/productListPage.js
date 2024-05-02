require('cypress-xpath')

class ProductListPage{

    // Using elements object to store functions that retrieve page elements
    element= {

       productCategoryLevelOne:()=> cy.contains('Computers'),
        productCategoryLevelTwo:()=> cy.contains('Desktops'),
        selectProduct:()=>cy.contains('expensive'),
        addToCartButton:()=>cy.get('#add-to-cart-button-74'),
    }

    // Method to navigate through product categories and select a product
    selectYourProduct(){
        this.element.productCategoryLevelOne()
            .click()
        this.element.productCategoryLevelTwo().click({force: true})
        this.element.selectProduct().click({force: true})
    }

    // Method to add the selected product to the cart
    selectAttributeOfProduct(){
        this.element.addToCartButton().click()
    }
}
// Export an instance of ProductListPage for use in tests
module.exports = new ProductListPage()
