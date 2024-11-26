/// <reference types="cypress" />


describe('Add new computers', () => {

    const users = require('../fixtures/adding_computer.json')
    users.forEach(user => {
       it('New Computer '+user.computer_name, () => {
    cy.visit('https://computer-database.gatling.io/computers');
      
      cy.contains('Add a new computer').click();
      cy.get('#name').type(user.computer_name);
      cy.get('#introduced').type(user.introduced);
      cy.get('#discontinued').type(user.discontinued);
      cy.get('#company').select(user.company);
      cy.get('.primary').click();
      cy.get('.alert-message').should('contain.text',  'Done !  Computer '+user.computer_name+' has been created');
  

        });
    });
});