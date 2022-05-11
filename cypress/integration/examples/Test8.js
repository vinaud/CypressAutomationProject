/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe';

describe('Frames test', function() {
    it('Should verify frames', function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice");

        //using iframe plugin to verify frames
        cy.frameLoaded('#courses-iframe');
        cy.iframe().find("a[href*='mentorship']").eq(0).click();
        cy.iframe().find("h1[class*='pricing-title']" , { timeout: 50000 }).should('have.lenght', 2);

    })
})