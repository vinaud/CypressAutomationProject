import { Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import  HomePage  from '../../../../support/pageObjects/HomePage';
import  ProductsPage  from '../../../../support/pageObjects/ProductsPage';

const homePage = new HomePage();
const productsPage = new ProductsPage();
let name;

Given('I open Ecommerce page', () => {
    cy.visit(Cypress.env('url'));
});

//when using hooks like befor and beforeEach can't use ()=> sintax
When('I add items to cart', function() {
    homePage.getShopTab().click();

    this.data.productNames.forEach((product) => {
         //using custom cypress command
        cy.selectProduct(product);
    })

    productsPage.getCheckoutButton().click();
});

And('validate the total price', () =>{
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
});

Then('select the country submit and verify Thankyou', () =>{
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
});

When('I fill the form details', function(dataTable){
    name = dataTable.rawTable[1][0]
    homePage.getEditBox().type(name);
    homePage.getGender().select(dataTable.rawTable[1][1]);
});

Then('Validate the forms behavior', function(){
    homePage.getTwoWayDataBinding().should('have.value', name);
    //varify if field has attribute
    homePage.getEditBox().should('have.attr', 'minlength', '2');
    homePage.getEntrepeneur().should('be.disabled');

});

And('select the shop page', function(){
    homePage.getShopTab().click();
});
