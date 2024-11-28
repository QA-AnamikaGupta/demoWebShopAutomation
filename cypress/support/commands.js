import loginPage from "../Pages/loginPage";

// Custom command for the User login
Cypress.Commands.add('Userlogin', (email, password) => {
    loginPage.loginLinkClick()
    loginPage.loginInputEmailID(email)
    loginPage.loginInputPassword(password)
    loginPage.loginCheckRememberMeBox()
    loginPage.loginButtonClick()
})