/// <reference types = "cypress" />

context("Databse interaction",() => {
    it("Should interact with SQL databse", () => {
        //use sql query
        cy.sqlServer("select * from Persons").then(function(result){
            cy.log(result);
        })
    });
});