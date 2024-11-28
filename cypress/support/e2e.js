// We can use beforeEach to run code before each test

import "./commands.js"

beforeEach(() => {
    cy.visit(Cypress.env().url);

});
