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
        cy.get(':nth-child(4) > .ng-untouched').should('have.value', this.data.name);
        //varify if field has attribute
        cy.get('input[name="name"]:nth-child(2)').should('have.attr', 'minlength', '2');
        cy.get('#inlineRadio3').should('be.disabled');

        
        cy.get(':nth-child(2) > .nav-link').click();

        this.data.productNames.forEach((product) => {
             //using custom cypress command
            cy.selectProduct(product);
        })

      
    })
  })