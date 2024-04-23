
describe('Raise a RFQ', ()=> {

    it('Raises RFQ successfully', ()=> {
        // Login as an existing user
        cy.get('[href] span').click();
        cy.get('[placeholder="yourname@example.com"]').type('ohlufehmii@gmail.com');
        cy.get('[type="password"]').type('Hbon@1234');
        cy.get('[type="submit"]').click();
       

        // Click on project tab and open company project.
        cy.get('.css-gg2341').eq(0).click();
        cy.get('.chakra-text.css-s8vbhp ').eq(0).should('be.visible').click();
        
        // Select a project and click on the RFQ tab
        cy.get('tr:nth-of-type(1) > td:nth-of-type(7) > a > .css-1q9q6ea').click();
        cy.get('[class="chakra-tabs__tab css-4wk48i"] ').eq(1).click();
        cy.wait(5000)
        // click on the create RFQ 
        cy.get('.css-uq8hdi').click();
        
        

        // Fill RFQ form
        cy.get('[placeholder="Material Schedule Name"]').type('Building Materials');
        cy.get('[class="select__input-container css-19bb58m"]').eq(0).click();
        cy.get('.select__option.css-10wo9uf-option').eq(3).click();
        cy.get('[placeholder="Material Description"]').type('Quality Material');
        cy.get('[placeholder="1,000,000"]').type('10');
        cy.get('[placeholder="1, 000, 000, 000"]').type('500');
        cy.get('[type="date"]').click({force: true});
        cy.get('[placeholder="Enter delivery address"]').type('14, Gross Lane');
        cy.get('[class="form-control "]').type('8140095998');
        cy.get('[class="chakra-button css-1ketg5j"]').click();

        // Payment method
        cy.get('.css-1q2yoq2 > .css-1xo3mso .css-19bb58m.select__input-container').click();
        cy.get('[class="css-1q2yoq2"] [class="select__input-container css-19bb58m"]').click();
        cy.get('#chakra-modal--body-\:re6\: button').click();
        cy.wait(5000)
        cy.get('.chakra-ui-light > script:nth-of-type(3)').should('have.text', 'RFQ has been created');





    })
})