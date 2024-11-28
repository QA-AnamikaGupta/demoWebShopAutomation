describe('Verify creation of user', function () {
    let testData; // Declare a variable
    before(function () {
        // Load fixture and assign to testData
        cy.fixture('CreateUserData').then((data) => {
            testData = data;
        });
    });

    it('User is gtting created', () => {
       //Visit the URL with the environment variable `url` from the cypress.config.js file
        cy.loginuser(testData.userName, testData.RecicvedOTP) //Custom command for the User login
    })
})