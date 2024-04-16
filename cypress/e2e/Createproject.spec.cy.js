

describe('Create a project', () =>{

    
    it('creates a project successfully', () => {
        cy.login();
        cy.ClickCreateProjectButton();
        cy.FillProjectDetails();
        cy.ClickTheCreateAProjectBtn();
        cy.VerifyProjectCreatedAndQuitModal();


})



})