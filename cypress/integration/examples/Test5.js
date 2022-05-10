/// <reference types="Cypress" />

describe('My Third Test', () => {
    it('Should verify tables', () => {

      cy.visit("https://rahulshettyacademy.com/AutomationPractice");

      //gets secon column from a table
      cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
          const text = $el.text();
          //gets one element from that column
          if(text.includes("Python")){
              //gets the next sibling of that element
              cy.get('tr td:nth-child(2)').eq(index).next().then(function(price) {
                  const priceText = price.text();
                  expect(priceText).to.equal('25');
              })
          }
      });
     

      });
  })