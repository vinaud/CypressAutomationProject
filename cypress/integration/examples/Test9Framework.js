/// <reference types="Cypress" />
import  HomePage  from '../../support/pageObjects/HomePage';
import  ProductsPage  from '../../support/pageObjects/ProductsPage';

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

        cy.visit(Cypress.env('url'));
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

        var sum = 0;
        cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
            const amount = $el.text();
            var res = amount.split(" ");
            res = res[1].trim();
            sum = Number(sum) + Number(res);
            cy.log(res);
        }).then(() => {
            cy.log(sum);
        });

        cy.get('h3 strong').then(function(element) {
            const amount = element.text();
            var res = amount.split(" ");
            var total = res[1].trim();
            expect(Number(total)).to.equal(sum);
        })

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