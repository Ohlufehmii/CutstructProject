
import { faker } from "@faker-js/faker"
import { should } from "chai"

let inboxId
let emailAdress
let emailBody
let otpValue

describe('LandingPage Ui', () => {

  beforeEach(() => {

    cy.on('uncaught:exception', () => {
      return false

    })
    cy.visit('/');
    cy.get('.chakra-heading').should('be.visible'),
      cy.get('.chakra-text.css-1v9shy8').should('be.visible').should('have.text', 'You can login as Fund Manager, Builder, or a Supplier.'),
      cy.get('.chakra-checkbox__label.css-6x44c9').should('be.visible').should('have.text', 'Remember me'),
      cy.get('.css-wlnxh6').should('be.visible').should('have.text', 'No account yet? Create One!');
  });

  // Fill SignUp form
  it('SignUp Form', () => {
    cy.get('.css-wlnxh6  span').click();
    cy.get('.chakra-heading.css-1kplevb').should('be.visible').should('have.text', 'Sign Up'),
      cy.get('.chakra-text.css-1v9shy8').should('be.visible').should('have.text', 'Get access to state of the art construction support for your projects.');
      cy.get('.css-hv4pdn [class="css-1c3p398"]:nth-of-type(1) p').should('be.visible').click();
    cy.get('.chakra-input.css-3tqrgx').type(faker.company.name());
    cy.get('input[placeholder="Full Name"]').type(faker.person.fullName());

    cy.mailslurp().then(mailslurp => mailslurp.createInbox())
      .then(inbox => {
        inboxId = inbox.id
        emailAdress = inbox.emailAddress
        cy.get('input[placeholder="yourname@example.com"]').type(emailAdress)
      });

    cy.get('.selected-flag').click();
    cy.get('.country.highlight').click();
    cy.get('.form-control ').type(faker.phone.number());
    cy.get('.chakra-input.css-h4whwj').type('Test@1234');
    cy.get('[type="submit"]').click();


    // Enter OTP
    cy.mailslurp().then(Email => Email.waitForLatestEmail(inboxId, 30000, true))
      .then(email => {
        emailBody = email.body
        const extractor = new DOMParser()
        const doc = extractor.parseFromString(emailBody, "text/html")
        const otp = doc.querySelector('strong').textContent
        cy.get('[placeholder="Enter OTP"]').type(otp)
      });


    // Fill Business information
    cy.get('.chakra-heading.css-11iwker').should('be.visible').should('have.text', 'Business Information'),
      cy.get('.chakra-text.css-12wnukc').should('be.visible').should('have.text', 'To get the best out of cutstruct, add your business information.'),
      // cy.get('.chakra-modal__close-btn.css-1tysrph').click({force:true});
      cy.get('[placeholder="Business Address"]').type(faker.location.streetAddress());
    cy.get('[placeholder="RN-6547382910"]').type(faker.commerce.isbn());
    cy.get('[class="css-17ubgee"] [class="select__indicators css-1wy0on6"] div').click({ force: true });
    cy.get('.select__option.css-10wo9uf-option', ({ multiple: true })).eq(1).click();
    cy.get('[type="submit"]').click();


    // Subscribe 
    cy.get('.chakra-heading.css-11iwker').should('be.visible').should('have.text', 'Get Started Now');
    cy.get('.chakra-text.css-12wnukc').should('be.visible').should('have.text', 'Try out our platform with unlimited access for 14days');
    // cy.get('[class="chakra-button css-6e303v"]').should('be.visible');
    cy.get('[class="chakra-button css-7x35nj"]').should('be.visible').click();



    cy.get('[class="chakra-text css-11jz1j8"]').should('be.visible').should('have.text', 'Subscription fee');
    // cy.get('.chakra-text.css-0').should('be.visible').should('have.text', 'Pay your subscription fee to gain full access');
    // cy.get('.css-umc1h7 [class]').should('be.visible');
    cy.get('[class="css-19zs1hi"] [class]').should('be.visible').click();
    cy.get('.btn.remita-pay-button').should('be.visible').click();
    


    // Signup success validation

    cy.get('.chakra-text.css-b2463j').should('be.visible');


  })
})
