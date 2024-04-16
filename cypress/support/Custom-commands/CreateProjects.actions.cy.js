
let ele

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

