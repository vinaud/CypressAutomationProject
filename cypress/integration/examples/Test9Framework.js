/// <reference types="Cypress" />
import  HomePage  from '../pageObjects/HomePage';
import  ProductsPage  from '../pageObjects/ProductsPage';

describe('Framework test case', () => {
    before(function() {
        //retrieves data from example.json file on fixtures
        cy.fixture('example').then(function(data){
            this.data = data;
        });
    })
    it('Should fill the form', function() {

        const homePage = new HomePage();
        const productsPage = new ProductsPage();

        cy.visit('https://rahulshettyacademy.com/angularpractice/');
        homePage.getEditBox().type(this.data.name);
        homePage.getGender().select(this.data.gender);
        homePage.getTwoWayDataBinding().should('have.value', this.data.name);
        //varify if field has attribute
        homePage.getEditBox().should('have.attr', 'minlength', '2');
        homePage.getEntrepeneur().should('be.disabled');

        
        homePage.getShopTab().click();

        this.data.productNames.forEach((product) => {
             //using custom cypress command
            cy.selectProduct(product);
        })

        productsPage.getCheckoutButton().click();
        cy.contains('Checkout').click();
        cy.get('#country').type('India');
        cy.get('.suggestions > ul > li > a').click();
        cy.get("#checkbox2").click({force: true});
        cy.get('input[type="submit"]').click();

        //this won't work:  cy.get('alert').should('have.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).');
        cy.get('.alert').then(function(element){
            const actualtext = element.text();
            expect(actualtext.includes('Success')).to.be.true
        })

      
    })
  })