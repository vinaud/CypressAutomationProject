/// <reference types="Cypress" />

// This file contains some basic cypress techniques

describe('My Second API Test', () => {
    it('is my second API test case', () => {

     cy.visit("https://rahulshettyacademy.com/angularAppdemo/");
     cy.intercept('GET','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty', (req) =>{
         req.url = "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra";
         req.continue((res) => {
             expect(res.statusCode).to.equal(403);
         });
     }).as('dummyUrl');

     cy.get("button[class='btn btn-primary']").click();

     cy.wait('@dummyUrl');

     


    

    })
  })