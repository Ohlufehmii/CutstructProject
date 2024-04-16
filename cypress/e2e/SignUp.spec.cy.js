



describe('LandingPage Ui', () => {

beforeEach(() => {
  cy.visit('/');
  
})

  it('SignUpFundManager', () => {
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
