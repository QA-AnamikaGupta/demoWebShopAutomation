require('cypress-xpath')

class userPasswordCreation {
    element={
        userName :()=> cy.get('#username'),
        RecicvedOTP :()=> cy.get('password'),
        loginbutton :()=> cy.contains('Login')

    }
   
    loginuser(userName,RecicvedOTP)
    {
        this.element.userName().type(userName)
        this.element.RecicvedOTP().type(RecicvedOTP)
        this.element.loginbutton.click()
    }

}