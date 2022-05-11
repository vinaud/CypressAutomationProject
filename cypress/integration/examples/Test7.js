/// <reference types="Cypress" />

describe('My Seventh Test', () => {
    it('Should verify Child Windows', () => {

      cy.visit("https://rahulshettyacademy.com/AutomationPractice");

      //get href value with jquery
      cy.get('#opentab').then(function(el) {
          const url = el.prop('href');
          cy.visit(url);
      })

      //this method will not work when visiting a different domain. for that the remove attribute should be used then
     
      });
  })