/// <reference types="Cypress" />

describe('My First Test', () => {
    it('is my first test case', () => {
      cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
      cy.get('.search-keyword').type("ca");
      cy.wait(2000);
      cy.get('.product:visible').should('have.length', 4);

      //parent child chaining
      cy.get('.products').find('.product').should('have.length', 4);
      cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click();

      //another way to locate the element without index
      cy.get('.products').find('.product').each(($el, index, $list) => {

       const textVeg=$el.find('h4.product-name').text();

       if(textVeg.includes("Cashews")){

         cy.wrap($el).find('button').click();
         
       }
      });

      //for variable storage cypress data must handle promisses
      //cypress function handle promisses by themselves, js variables don't
      const logo = cy.get('.brand').then(function (logoElement) {
        cy.log(logoElement.text());
      })
    
    })
  })