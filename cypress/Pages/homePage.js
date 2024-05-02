require('cypress-xpath')
class HomePage {

    // Object containing methods to retrieve page elements
    elements = {
        categoryComputer: () => cy.contains('Computers'),
        categoryDesktop: () => cy.contains('Desktop'),
        homePageSearchBox: () => cy.get('#small-searchterms'),
        homepageSearchButton: () => cy.get('form > .button-1'),
        productTitle:()=> cy.contains('fiction')

    }

    // Navigate through categories
    productBrowsing() {
        this.elements.categoryComputer().click()
        this.elements.categoryDesktop().click()
    }

    // Search for a product using the search bar
    productSearching(SearchInput) {
        this.elements.homePageSearchBox().type(SearchInput)
        this.elements.homepageSearchButton().click()
    }

    // Check for the presence and enabled state of the product title in the search results
    productSearchResult(){
        this.elements.productTitle()
            .should("be.visible")
            .and("contain","Fiction")
    }
}
module.exports = new HomePage();

