
describe('intercepting the request', () => {
    it('intercepting the request', () => {
        cy.intercept('GET','/').as('getHome')
        cy.visit(Cypress.env('url'))
        cy.wait('@getHome').its('response.statusCode').should('eq',200)
    })
})

describe('Verify Login', function () {
    let testData; // Declare a variable
    before(function () {
        // Load fixture and assign to testData
        cy.fixture('LoginUserData').then((data) => {
            testData = data;
        });
    });

    it('User Login', () => {
       //Visit the URL with the environment variable `url` from the cypress.config.js file
        cy.Userlogin(testData.email, testData.password) //Custom command for the User login
    })
})
