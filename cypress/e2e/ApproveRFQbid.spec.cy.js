describe('Approve a bid from vendor',() =>{
 
    it('approves a bid',() =>{
        const fundingAmount=10000;
         // Login as an existing user
         cy.get('[href] span').click();
         cy.get('[placeholder="yourname@example.com"]').type('ohlufehmii@gmail.com');
         cy.get('[type="password"]').type('Hbon@1234');
         cy.get('[type="submit"]').click();
        
 
         // Click on project tab and open company project.
         cy.get('.css-gg2341').eq(0).click();
         cy.get('.chakra-text.css-s8vbhp ').eq(0).should('be.visible').click();
         
         // Select a project and click on RFQ
         cy.get('[class="css-1q9q6ea"]').eq(1).click();
         cy.get('[class="chakra-tabs__tab css-4wk48i"] ').eq(1).click();
        
        //  Open the RFQ that needs approval
        cy.get('[class="css-1q9q6ea"]').eq(0).click();

        // Accept bargain and validate success
        cy.get('.css-xsoqte').click();
        cy.get('[class="chakra-alert__desc css-161kwbg"]').should('have.text', 'Bid has been successfully accepted, You can can fund your order now.');

        // Initiate the order funding process
        cy.get('[class="css-12pccum"]').should('be.visible').click();
        cy.wait(5000);

        // Select funding source to be project wallet and fund
        cy.get('.css-cejoe1 .css-4h1f45').invoke('text').then((text) => {
            const actualBalance = text.trim().replace('₦', '').replace(/,/g, '');
            const projectWalletBalance = parseFloat(actualBalance);
         if (projectWalletBalance >=fundingAmount) {

            cy.get('.css-cejoe1 .css-okr53r').click();
            cy.get('.chakra-button.css-1ketg5j').click();
         }

        else {
           cy.get('.css-jj6is9 .css-okr53r').click();
           cy.get('.chakra-button.css-1ketg5j').click();

        }


        })

    })




})