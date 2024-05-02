import loginPage from "../../cypress/Pages/loginPage"

it('User Login',()=>{
    loginPage.loginLinkClick()
    loginPage.loginInputEmailID('waterlily@yopmail.com')
    loginPage.loginInputPassword('Test@123')
    loginPage.loginCheckRememberMeBox()
    loginPage.loginButtonClick()
})