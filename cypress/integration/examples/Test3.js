/// <reference types="Cypress" />

describe('My Third Test', () => {
    it('Should select items', () => {

      cy.visit("https://rahulshettyacademy.com/AutomationPractice");

      //verify single select
      cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1');
      cy.get('#checkBoxOption1').uncheck().should('not.be.checked');

      //verify multiple checks
      cy.get('input[type="checkbox"]').check(['option2', 'option3']);

      //static dropdown
      cy.get('select').select('option2').should('have.value', 'option2');

      });

     
    
    
  })