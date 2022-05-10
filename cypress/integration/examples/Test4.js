/// <reference types="Cypress" />

describe('My Third Test', () => {
    it('Should verify popus', () => {

      cy.visit("https://rahulshettyacademy.com/AutomationPractice");
      cy.get('#alertbtn').click();
      cy.get('[value="Confirm"]').click();

      //cyprees must treat events to verify popup alerts
      cy.on('window:alert', (str) =>{
        //Mocha assertion
        expect(str).to.equal('Hello , share this practice page and share your knowledge');
      });

      cy.on('window:confirm', (str) =>{
        //Mocha assertion
        expect(str).to.equal('Hello , Are you sure you want to confirm?');
      });

      });
  })