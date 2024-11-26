
describe('Verify the title', () => {

    before(() => {

        cy.visit('https://computer-database.gatling.io/computers?p=0');
        cy.title().should('eq', 'Computers database');
    });
it('Verify the title', () => {
        

    
    cy.contains('Add a new computer').click();
    cy.get('#name').type('Sasko');
    cy.get('#introduced').type('2020-10-10');
    cy.get('#discontinued').type('2024-10-10');
    cy.get('#company').select('ASUS');
    cy.get('.primary').click();
    cy.get('.alert-message').should('contain.text',  'Done !  Computer Sasko has been created');
});
});
