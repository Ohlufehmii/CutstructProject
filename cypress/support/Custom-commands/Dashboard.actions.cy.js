

let bul

beforeEach(() =>{

    cy.fixture('DashboardElements').then((Elements)=>{
        bul = Elements
  })
})

Cypress.Commands.add('SignIn', () => { 
    cy.get('[href] span').should('be.visible').click();
    cy.get('[placeholder="yourname@example.com"]').should('be.visible').type('ohlufehmii@gmail.com');
    cy.get('[type="password"]').should('be.visible').type('Hbon@1234');
    cy.get('[type="submit"]').should('be.visible').click();
  
})

Cypress.Commands.add('VerifyWelcomeText', () => { 
    cy.get(bul.WelcomeText).should('be.visible');
    cy.get(bul.SubHeaderText).should('be.visible').and('have.text', 'Manage all your project transactions easily.');
    cy.get(bul.DahboardDescriptionText).should('be.visible').and('have.text','All ongoing project expenses');
  
})

Cypress.Commands.add('VerifyTheVarianceAccurancy', () => { 
    cy.get(bul.BudgetCard).should('be.visible').invoke('text').then((budgetText) => {
        // Manually replace common formatting characters
        let cleanBudgetText = budgetText.replace(',', '').replace('$', '').trim();
        let budgetValue = parseFloat(cleanBudgetText);
  
        cy.get(bul.SpendCard).should('be.visible').invoke('text').then((spendText) => {
          let cleanSpendText = spendText.replace(',', '').replace('$', '').trim();
          let spendValue = parseFloat(cleanSpendText);
  
          const expectedVariance = budgetValue - spendValue;
  
          cy.get(bul.VarianceCard).should('be.visible').invoke('text').then((varianceText) => {
            let cleanVarianceText = varianceText.replace(',', '').replace('$', '').trim();
            const actualVariance = parseFloat(cleanVarianceText);
            expect(actualVariance).to.eq(expectedVariance);
          });
        })
    })
})

Cypress.Commands.add('VerifAccountCard', () => { 
    cy.get(bul.AccountCard).should('be.visible');
})
    Cypress.Commands.add('VerifActiveProjectCard', () => { 
    cy.get(bul.ActiveProjectCounter).should('be.visible');
})
    Cypress.Commands.add('VerifPendingProjectCard', () => { 
    cy.get(bul.PendingProjectCounter).should('be.visible');
})
Cypress.Commands.add('VerifCompletedProjectCard', () => { 
    cy.get(bul.CompletedProjectCounter).should('be.visible');
})