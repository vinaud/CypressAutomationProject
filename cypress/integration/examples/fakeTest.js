/// <reference types="Cypress" />

// This file contains some basic cypress techniques

describe('My First API Test', () => {
    it('is my first API test case', () => {

     cy.visit("https://rahulshettyacademy.com/angularAppdemo/");

     //cy.intercept(requestObject, responseObject);
     cy.intercept({
         method: 'GET',
         url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
     }, {
         statusCode: 200,
         body: [{
             "book_name": "RestAssured with Java",
             "isbn": "RSU",
             "aisle": "2301"
         }]
     }).as('bookRetrievals');
    
     cy.get("button[class='btn btn-primary']").click();
     cy.wait('@bookRetrievals').should(({request, response}) => {
         //verify if data in table has the same length as retrieved data by mocked api response
         cy.get('tr').should('have.length', response.body.length + 1);
     });
     cy.get('p').should('have.text', 'Oops only 1 Book available');


    })
  })