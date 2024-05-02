// Require Cypress XPath plugin for using XPath selectors
require('cypress-xpath')

/**
 * Class representing interactions with the login page.
 */
class LoginPage{

    // Object containing methods to retrieve page elements
    elements ={
        loginLink:()=>cy.get('.ico-login'),
        loginInputBoxEmail:()=> cy.get("#Email"),
        loginInputPassword:()=> cy.get("#Password"),
        loginCheckBox:()=> cy.get("#RememberMe"),
        loginButton:()=> cy.xpath("//input[@value='Log in']")
    }

    // Clicks the login link
    loginLinkClick()
    {
        this.elements.loginLink().click()
    }
    // Types the provided email into the email input box
    loginInputEmailID(email)
    {
        this.elements.loginInputBoxEmail().type(email)
    }
    // Types the provided password into the password input box
    loginInputPassword(password)
    {
        this.elements.loginInputPassword().type(password)
    }
    // Checks the 'Remember Me' checkbox
    loginCheckRememberMeBox()
    {
        this.elements.loginCheckBox().check()
    }
    // Clicks the login button
    loginButtonClick()
    {
        this.elements.loginButton().click()
    }


}
// Export an instance of LoginPage to be used in tests
module.exports = new LoginPage();
