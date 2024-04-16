

describe('login', () => {

    beforeEach(() => {

    cy.visit('/');
    })
    
    it('login successfully', () => {
        cy.Login();
    })

    it.only('reset password successfully', () => {

        cy.ClickForgotPasswordButton();
        cy.RetrieveAndEnterEmailAddress();
        cy.ClickResetPasswordButton();
        cy.EnterNewPassword();
        cy.RetrieveAndEnterOTP();
        cy.ClickResetPasswordButton();

        //Login again with the new password to validate the password reset functionality.

        cy.Login();
    })


})