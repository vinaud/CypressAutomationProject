/// <reference types = "cypress" />

describe('JWT Session tests', () =>{
    it('is logged through local storage', () => {
        //custom command should treat the promise as it was not previous treated inside it
        cy.loginAPI().then(function(){
            //visit method can receive option, like the one setting the token to storage before loading the window
            cy.visit('https://rahulshettyacademy.com/client', {
                onBeforeLoad: function(window){
                    window.localStorage.setItem('token', Cypress.env('token'));
                }
            });

            cy.get(".card-body button:last-of-type").eq(1).click();
            cy.get("[routerlink*='cart'").click();
            cy.contains("Checkout").click();
            cy.get("[placeholder*='Country'").click();
            cy.get("[placeholder*='Country'").type("ind");
            cy.on('uncaught:exception', (err, runnable) => {return false})
            cy.get(".ta-results button").each(($el, index, $list) => {
                if($el.text() === " India"){
                   cy.wrap($el).click({force:true});
                }
            })
            cy.get(".action__submit").click();
            cy.wait(2000);
            cy.get(".order-summary button").click();
        });
    });
});

