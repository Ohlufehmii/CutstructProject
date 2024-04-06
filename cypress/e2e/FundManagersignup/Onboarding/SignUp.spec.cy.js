



describe('LandingPage Ui', () => {

  it('SignUpFundManager', () => {
   cy.ClickSignupButton();
   cy.SelectFundManager();
   cy.FillSignUpForm();
   cy.FillEmail();
   cy.EnterMobileNumber();
   cy.ClickCreateAccountBtn();
   cy.FillOTP();
   cy.EnterBusinessInfo();
   cy.ClickSaveButton();
   cy.SubscribeToPlan();
   cy.PayWithRemita();

  })

  it('SignUpBuilder', () => {
    cy.ClickSignupButton();
    cy.SelectBuilder();
    cy.FillSignUpForm();
    cy.FillEmail();
    cy.EnterMobileNumber();
    cy.ClickCreateAccountBtn();
    cy.FillOTP();
    cy.EnterBusinessInfo();
    cy.ClickSaveButton();
    cy.SubscribeToPlan();
    cy.PayWithRemita();
 
   })

   it('SignUpSupplier', () => {
    cy.ClickSignupButton();
    cy.SelectSupplier();
    cy.FillSignUpForm();
    cy.FillEmail();
    cy.EnterMobileNumber();
    cy.ClickCreateAccountBtn();
    cy.FillOTP();
    cy.FillsupplierCategory();
    cy.EnterBusinessInfo();
    cy.ExitBusinessCategoryModal();
 
   })
})
