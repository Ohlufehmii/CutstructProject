import 'cypress-file-upload'

describe('complete the end to end flow from Fund Manager to builder', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.on('uncaught:exception', () => {
            return false
        })
    })
    it('creates a project as a fund manager and Fund it', () => {

        cy.FundManagerCreateAndFundProject();
    })

    it('bid for a project as a builder', () => {
        cy.BuilderBidsForTheProject();
    })

    it('approve bid project bid as Fund Manager', () => {
        cy.FundManagerAcceptsBid();

    })

    it('Raise RFQ as a Builder', () => {

        cy.BuilderRaisesRFQ();

    })

    it('bid for an order as a supplier', () => {
        cy.SupplierBidForAnOrder();
    })

    it('approves a bid', () => {
        cy.BuilderApprovesAndFundAnOrder();
    })
    it('Fulfill order as a supplier', () => {
        cy.SupplierFulfillsAnOrder();
    })




})





