import { faker } from "@faker-js/faker"
import { should } from "chai"

let inboxId
let emailAdress
let emailBody
let sel

before(() => {
    cy.fixture('signupElements').then((signupElements) => {
        sel = signupElements
    })
});

Cypress.Commands.add('ClickSignupButton', () => {

    cy.get(sel.CreateOneButton).click();
    cy.get(sel.SignUpHeader).should('be.visible').should('have.text', 'Sign Up'),
        cy.get(sel.SignUpbody).should('be.visible').should('have.text', 'Get access to state of the art construction support for your projects.');
});
Cypress.Commands.add('SelectFundManager', () => {
    cy.get('.css-m22mio div').should('be.visible');
    cy.get(sel.FundManagerButon).click();
});

Cypress.Commands.add('SelectBuilder', () => {
    cy.get('[class="dddd css-1wqnpbl"] div').should('be.visible');
    cy.get(sel.BuilderButon).click();
});

Cypress.Commands.add('SelectSupplier', () => {
    cy.get('[class="dddd css-1qoszle"] div').should('be.visible');
    cy.get(sel.SupplierButton).click();
});
Cypress.Commands.add('FillSignUpForm', () => {
    cy.get(sel.BusinessNameField).type(faker.company.name());
    cy.get(sel.NameField).type(faker.person.fullName());
})


Cypress.Commands.add('FillEmail', () => {
    cy.mailslurp().then(mailslurp => mailslurp.createInbox())
        .then(inbox => {
            inboxId = inbox.id
            emailAdress = inbox.emailAddress
            cy.get(sel.EmailField).type(emailAdress)
        });
});

Cypress.Commands.add('EnterMobileNumber', () => {
    cy.get(sel.CountryDropdownList).click();
    cy.get(sel.SelectNigeria).click();
    cy.get(sel.PhoneNumberField).type(faker.phone.number());
    cy.get(sel.PasswordField).type('Test@1234');
});


Cypress.Commands.add('ClickCreateAccountBtn', () => {
    cy.get(sel.CreateAccountButton).click();

});



Cypress.Commands.add('FillOTP', () => {
    cy.mailslurp().then(Email => Email.waitForLatestEmail(inboxId, 60000, true))
        .then(email => {
            emailBody = email.body
            const extractor = new DOMParser()
            const doc = extractor.parseFromString(emailBody, "text/html")
            const otp = doc.querySelector('strong').textContent
            cy.get('[placeholder="Enter OTP"]').type(otp)
        });

});



Cypress.Commands.add('EnterBusinessInfo', () => {

    cy.get(sel.BizAddress).type(faker.location.streetAddress());
    cy.get(sel.BizNumber).type(faker.commerce.isbn());
    cy.get(sel.BizSizeDropdown).click({ force: true });
    cy.get(sel.SelectBizSize, ({ multiple: true })).eq(1).click();

});


Cypress.Commands.add('ClickSaveButton', () => {
    cy.get(sel.SaveInfoButton).click();
});


Cypress.Commands.add('SubscribeToPlan', () => {
    cy.get(sel.SubheaderText).should('be.visible').should('have.text', 'Get Started Now');
    cy.get(sel.subBodyText).should('be.visible').should('have.text', 'Try out our platform with unlimited access for 14days');
    // cy.get(sel.ChooseFreeButton).should('be.visible');
    cy.get(sel.ChooseSubButton).should('be.visible').click();
});


Cypress.Commands.add('PayWithRemita', () => {
    cy.get(sel.SubPageHeaderText).should('be.visible').should('have.text', 'Subscription fee');
    // cy.get('.chakra-text.css-0').should('be.visible').should('have.text', 'Pay your subscription fee to gain full access');
    // cy.get('.css-umc1h7 [class]').should('be.visible');
    cy.get(sel.RemitaButton).should('be.visible').click();
    cy.get(sel.PayWithRemita).should('be.visible').click();
});

Cypress.Commands.add('FillsupplierCategory', () => {
    cy.get(sel.SupplierTypeField).eq(0).click();
    cy.get(sel.DistributorOption).click();
    cy.get(sel.SupplierTypeField).eq(1).click();
    cy.get(sel.PickAnyCategory).eq(1).click();
    cy.get(sel.SaveButton).click();

});


Cypress.Commands.add('UploadBizDocument', () => {
    cy.get('label  .chakra-text.css-elr8gq').click();
    cy.get('input[type="file"]').selectFile('cypress/fixtures/image (9).png');
    cy.get(sel.SaveBizDoc).click();
});

Cypress.Commands.add('ExitBusinessCategoryModal', () => {
    cy.get(sel.ExitIcon).click();
})



Cypress.Commands.add('CompleteSupplierSignUp', () => {
    cy.get(sel.TermsAndServices).click();
    cy.get(sel.ContinueToHomePageBtn).click();
});