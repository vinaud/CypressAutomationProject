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
        });
    });
});

