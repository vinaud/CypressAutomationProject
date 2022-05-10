/// <reference types="Cypress" />

describe('My Sixth Test', () => {
    it('Should verify hover popups', () => {

      cy.visit("https://rahulshettyacademy.com/AutomationPractice");

      //get div element parenting hidden elements then shows them
      cy.get('div.mouse-hover-content').invoke('show');
      cy.contains('Top').click();
      //cy.contains('Top').click({ force: true}); will force the button click while hidden
      cy.url().should('include', 'top');

      });
  })