

describe('Dashboard display UI', () => {
    
    
    it('verify the dashboard cards', () => {

    cy.SignIn();
    cy.VerifyWelcomeText();
    cy.VerifyTheVarianceAccurancy();
    cy.VerifAccountCard();
    cy.VerifActiveProjectCard();
    cy.VerifPendingProjectCard();
    cy.VerifCompletedProjectCard();
    });
    })
    
