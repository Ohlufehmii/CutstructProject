

Cypress.Commands.add('FundManagerCreateAndFundProject', () => { 

    let fundedAmount= 2000
    // Login as a Fund Manager
    cy.get('[href] span').click();
    cy.get('[placeholder="yourname@example.com"]').type('oladele@dockerbike.com');
    cy.get('[type="password"]').type('Hbon@1234');
    cy.get('[type="submit"]').click();

   //  click project and create a project button
   cy.get('.css-gg2341').eq(0).click();
   cy.get('[class="chakra-button css-2nb1hs"]').click();


   // Fill the Create project form
   cy.get('.css-17fjftd').click();
   cy.get('[class="css-1f8f9r1"]').click();
   cy.get('[placeholder="Add Project Title"]').type('Build a Cathedral');
   cy.get('[placeholder="Add Project Description..."]').type('I want to build a cathedral within 2 months');
   cy.get('[placeholder="Start date"]').click();
   cy.get('[class="react-datepicker__day react-datepicker__day--030"]').click();
   cy.get('[placeholder="End date"]').click();
   cy.get('[class="react-datepicker__day react-datepicker__day--030"]').click();
   cy.get('[class="select__control css-12ut1h1-control"]').click();
   cy.get('[class="select__option css-10wo9uf-option"]').eq(24).click();
   cy.get('.chakra-button.css-1ketg5j').click();
   cy.get('.chakra-modal__close-btn.css-d7h0l5').click();

   // open project and and verify initial fund amount
   cy.get('tr:nth-of-type(19) > td:nth-of-type(7)').click();
   cy.wait(3000);
   cy.get('div:nth-of-type(1) > .css-1gs6dpe').invoke('text').then((text) => {

           const actualText = text.trim().replace('₦','').replace(/,/g,''); 
           const initialWalletAmount = parseFloat(actualText);

   

   // Fund project.
   cy.get('.chakra-stack.css-1ey9w6j > div:nth-of-type(1)').click();
   cy.get('.css-okr53r').click();
   cy.get('[placeholder="1,000,000,000"]').type('2000');
   cy.get('.chakra-button.css-1ketg5j').click();
   cy.wait(5000);

   //Verify project is funded.

   cy.get('div:nth-of-type(1) > .css-1gs6dpe').invoke('text').then((text) => {

       const actualText = text.trim().replace('₦', '').replace(/,/g,'');
       const FundedWalletBalance= parseFloat(actualText)
       const ExpectedWalletBalance= FundedWalletBalance - initialWalletAmount
       expect(fundedAmount).to.eq(ExpectedWalletBalance);
   })

   })


})

Cypress.Commands.add('BuilderBidsForTheProject', () => {
    // Login as a builder
 cy.get('[href] span').click();
 cy.get('[placeholder="yourname@example.com"]').type('ohlufehmii@gmail.com');
 cy.get('[type="password"]').type('Hbon@1234');
 cy.get('[type="submit"]').click();

 // open project Invitations.
 cy.get('.css-gg2341').eq(3).click();

//  Submit tender
cy.get('.chakra-button.css-wahysn').eq(0).click();

// Upload BOQ
const fileName = 'image (9).png'; 
cy.fixture(fileName).then(fileContent => {
  cy.get('input[type="file"]').attachFile({
    fileContent,
    fileName,
    mimeType: 'image/png'
  });
});
cy.wait(3000);
cy.get('[class="chakra-text css-1bz01iv"]').click();
cy.get('[class="chakra-button css-1098t5n"]').eq(4).click();
cy.get('.chakra-button.css-1ketg5j').click();
cy.get('.chakra-alert__desc.css-161kwbg').should('have.text', 'Bid has been made!');
})

Cypress.Commands.add('FundManagerAcceptsBid', () => {
    cy.get('[href] span').click();
    cy.get('[placeholder="yourname@example.com"]').type('oladele@dockerbike.com');
    cy.get('[type="password"]').type('Hbon@1234');
    cy.get('[type="submit"]').click();

   //  Cick project and select a project to approve
   cy.get('.css-gg2341').eq(0).click();
   cy.get('[class="css-1q9q6ea"]').eq(18).click();

   // View bid and approve it
   cy.get('.chakra-button.css-xsoqte').click();
   cy.get('.chakra-button.css-uq8hdi').click();
   cy.get('.chakra-alert__desc.css-161kwbg').should('have.text', 'Project has been awarded')

})

Cypress.Commands.add('BuilderRaisesRFQ', () => {
    // Login as a builder
    cy.get('[href] span').click();
    cy.get('[placeholder="yourname@example.com"]').type('ohlufehmii@gmail.com');
    cy.get('[type="password"]').type('Hbon@1234');
    cy.get('[type="submit"]').click();

     // Click on project tab and open sponsored project.
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
     cy.get('[placeholder="Select date"]').click();
     cy.get('[class="react-datepicker__day react-datepicker__day--030"]').click();
     cy.get('[placeholder="Enter delivery address"]').type('14, Gross Lane');
     cy.get('[class="form-control "]').type('8140095998');
     cy.get('[class="chakra-button css-1ketg5j"]').click();

     // Payment method
     cy.get('.css-1q2yoq2 > .css-1xo3mso .css-19bb58m.select__input-container').click();
    //  cy.get('#.select('Option Text');').click();
     cy.get('#chakra-modal--body-\:re6\: button').click();
     cy.wait(5000)
     cy.get('.chakra-ui-light > script:nth-of-type(3)').should('have.text', 'RFQ has been created');


})

Cypress.Commands.add('SupplierBidForAnOrder', ()=> {

     // Login as a supplier
     cy.get('[href] span').click();
     cy.get('[placeholder="yourname@example.com"]').type('ade.johnson@milkgitter.com');
     cy.get('[type="password"]').type('Hbon@1234');
     cy.get('[type="submit"]').click();

    //  Click on the Bid board, and click on bid.
    cy.get('.css-gg2341').eq(0).click();
    cy.get('.chakra-button.css-xsoqte').eq(0).click();

    // Click on submit bid button
    cy.get('.chakra-button.css-1ketg5j').click();
})

Cypress.Commands.add('BuilderApprovesAndFundAnOrder', ()=> {
    const fundingAmount=2000;
         // Login as an existing user
         cy.get('[href] span').click();
         cy.get('[placeholder="yourname@example.com"]').type('ohlufehmii@gmail.com');
         cy.get('[type="password"]').type('Hbon@1234');
         cy.get('[type="submit"]').click();
        
 
         // Click on project tab and open company project.
         cy.get('.css-gg2341').eq(0).click();
         cy.get('.chakra-text.css-s8vbhp ').eq(0).should('be.visible').click();
         
         // Select a project and click on RFQ
         cy.get('[class="css-1q9q6ea"]').eq(0).click();
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

    Cypress.Commands.add('SupplierFulfillsAnOrder', ()=> {
         // Login as a supplier
         cy.get('[href] span').click();
         cy.get('[placeholder="yourname@example.com"]').type('ade.johnson@milkgitter.com');
         cy.get('[type="password"]').type('Hbon@1234');
         cy.get('[type="submit"]').click();

        // //  Click on Bids and select Purchase order to fulfill an order
        // cy.get('.css-gg2341').eq(0).click()
        // cy.get('.chakra-tabs__tab.css-4wk48i').click();
        // cy.get('.chakra-tabs__tab.css-4wk48i').click();
        // cy.get('.css-5gxhyn.fXoJAM.sc-bdvuGq > td:nth-of-type(8)').click();


        //  Click order maanagement and click on dispatch
        cy.get('.css-gg2341').eq(1).click();
        cy.get('.chakra-button.css-1nj4i1f').eq(0).click();

        //Enter delivery start date and end date then click save.
        cy.get('[placeholder="Start date"]').click();
        cy.get('[class="react-datepicker__day react-datepicker__day--029"]').click();
        cy.get('[placeholder="End date"]').click();
        cy.get('[class="react-datepicker__day react-datepicker__day--030"]').click();
        cy.get('.chakra-button.css-1ketg5j').click();
        cy.wait(3000);
        cy.get('.chakra-alert__desc.css-161kwbg').should('have.text', 'Dispatched successfully!')

        // Navigate to active orders and click on delivered.
        cy.get('button:nth-of-type(2) > .chakra-stack.css-1igwmid > .chakra-text.css-0').click();
        cy.get('.chakra-button.css-1nj4i1f').click();

    })
