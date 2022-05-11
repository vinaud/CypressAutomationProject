/// <reference types="Cypress" />

describe('Framework test case', () => {
    before(function() {
        //retrieves data from example.json file on fixtures
        cy.fixture('example').then(function(data){
            this.data = data;
        });
    })
    it('Should fill the form', function() {

        cy.visit('https://rahulshettyacademy.com/angularpractice/');
        cy.get('input[name="name"]:nth-child(2)').type(this.data.name);
        cy.get('select').select(this.data.gender);
    })
  })