

describe('Fund Manager login', () => {

    it('login successfully', () => {
        cy.Login();
    })

    it('reset password successfully', () => {

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