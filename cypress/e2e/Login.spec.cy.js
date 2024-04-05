let inboxId = '68485acd-691e-4a83-8bca-710e5516fe42'
let emailAdress
let emailBody
let otpValue

describe('Fund Manager login', () => {

    beforeEach(() => {
        cy.on('uncaught:exception', () => {
            return false

        })
        cy.visit('/');

    })

    it('login successfully', () => {
        cy.get('.css-hv4pdn [class="css-1c3p398"]:nth-of-type(1) p').should('be.visible').click();
        cy.get('[placeholder="yourname@example.com"]').should('be.visible').type('olaoba@milkgitter.com');
        cy.get('.chakra-input.css-h4whwj').should('be.visible').type('Hbon@1234');
        cy.get('[type="submit"]').should('be.visible').click();
        cy.get('.chakra-text.css-pugd7o').should('be.visible');

    })

    it ('reset password successfully', () => {

        cy.get('[href="\/auth\/forgot-password"] span').should('be.visible').click();

        cy.mailslurp().then((mailslurp) => {
            return mailslurp.getInbox(inboxId);
        })
            .then(inbox => {
                emailAdress = inbox.emailAddress
                cy.get('input[placeholder="yourname@example.com"]').type(emailAdress)
            });

        cy.get('[type="submit"]').should('be.visible').click();
        cy.get('.chakra-input.css-h4whwj').eq('0').type('Hbon@1234')
        cy.get('.chakra-input.css-h4whwj').eq('1').type('Hbon@1234')

        cy.mailslurp().then(Email => Email.waitForLatestEmail(inboxId, 30000, true))
            .then(email => {
                emailBody = email.body
                const extractor = new DOMParser()
                const doc = extractor.parseFromString(emailBody, "text/html")
                const otp = doc.querySelector('strong').textContent.trim();
                cy.get('[placeholder="Enter OTP"]').type(otp)
                console.log(otp);

            });

        cy.get('[type="submit"]').should('be.visible').click();

//Login again with the new password to validate the password reset functionality.

        cy.get('[placeholder="yourname@example.com"]').should('be.visible').type('olaoba@milkgitter.com');
        cy.get('.chakra-input.css-h4whwj').should('be.visible').type('Hbon@1234');
        cy.get('[type="submit"]').should('be.visible').click();
        cy.get('.chakra-text.css-pugd7o').should('be.visible');

    })


})