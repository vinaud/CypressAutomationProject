/// <reference types="Cypress" />

describe('My First Test', () => {
    it('is my first test case', () => {
      cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
      cy.get('.search-keyword').type("cucumber");
      
    })
  })