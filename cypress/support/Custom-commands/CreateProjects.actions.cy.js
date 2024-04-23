
let ele
let initialBalance; 
before(() => {
    cy.fixture('CreateProjectElements').then((ProjectElement)=>{
        ele = ProjectElement
  })
})
Cypress.Commands.add('login', () => { 
    cy.get('[href] span').should('be.visible').click();
    cy.get('[placeholder="yourname@example.com"]').should('be.visible').type('ohlufehmii@gmail.com');
    cy.get('[type="password"]').should('be.visible').type('Hbon@1234');
    cy.get('[type="submit"]').should('be.visible').click();
})

Cypress.Commands.add('ClickCreateProjectButton', () => { 
    cy.get(ele.CreateProjectButton).should('be.visible').click();
    cy.wait(2000);
   
})

Cypress.Commands.add('FillProjectDetails', () => {
    cy.get(ele.ProjectTitle).type('Building A Tower')
    cy.get(ele.ProjectDescription).type('I want to build a very massive tower')
    cy.get(ele.StartDate).click()
    cy.get(ele.PickstartDate).eq(17).click();
    cy.get(ele.EndDate).click()
    cy.get(ele.PickEndDate).click();
    cy.get(ele.ProjectLocationField).click()
    cy.get(ele.State).eq(8).click();
})

Cypress.Commands.add('ClickTheCreateAProjectBtn', () => {
    cy.get(ele.CreateProject).click();
})

Cypress.Commands.add('VerifyProjectCreatedAndQuitModal', () => {
    cy.get(ele.ProjectSuccessText).should('be.visible').and('have.text', 'Project Created Successfully');
        cy.get(ele.Xbutton).click();
})

Cypress.Commands.add('VerifyProjectInitialBalance', () => {
    cy.get(ele.SelectProject).click();  
        cy.wait(5000);
        cy.get(ele.projectBalance).invoke('text').then((text) => {
            const cleanText = text.trim().replace('₦', '').replace(/,/g, '');
            initialBalance = parseFloat(cleanText);

        })
})

Cypress.Commands.add('FundProjectFromVaultBalance', () => {
    cy.get(ele.FundProjectBtn).click();
        cy.get(ele.SelectVault).click();
        cy.get(ele.AmountField).type('2000');
        cy.get(ele.FundButton).click();
})

Cypress.Commands.add('ValidateFundingWithToastMessage', () => {
    cy.get(ele.ToastMessage).should('be.visible').and('contain', 'Payment successful')
        
        cy.wait(5000);
})

Cypress.Commands.add('ValidateFundingWithProjectWalletBalance', () => {
    cy.get(ele.projectBalance).invoke('text').then((newText) => {
        const newCleanText = newText.trim().replace('₦', '').replace(/,/g, '');
        const newBalance = parseFloat(newCleanText);
        const expectedNewBalance = initialBalance + 2000; 
        console.log('New Balance:', newBalance); 
        console.log('Expected New Balance:', expectedNewBalance); 
        expect(newBalance).to.eq(expectedNewBalance);
      });
})

