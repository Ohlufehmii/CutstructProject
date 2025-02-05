// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import 'cypress-mailslurp'
import './Custom-commands/Signup.actions.cy'
import './Custom-commands/signin.actions.cy'
import './Custom-commands/Dashboard.actions.cy'
import './Custom-commands/CreateProjects.actions.cy'
import './Custom-commands/EndtoEndFlow.actions.cy'
before( () => {
    cy.visit('/');
    cy.on('uncaught:exception', () => {
        return false
    })
   
})

// Alternatively you can use CommonJS syntax:
// require('./commands')