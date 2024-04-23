

describe('Create a project', () =>{

   
    it('creates and fund a project successfully', () => {
        cy.login();
        cy.ClickCreateProjectButton();
        cy.FillProjectDetails();
        cy.ClickTheCreateAProjectBtn();
        cy.VerifyProjectCreatedAndQuitModal();


        // fund project
        cy.VerifyProjectInitialBalance();
        cy.FundProjectFromVaultBalance();
        cy.ValidateFundingWithToastMessage();
        cy.ValidateFundingWithProjectWalletBalance();
        });
    })





