beforeEach(function(){
    //retrieves data from example.json file on fixtures
    cy.fixture('example').then(function(data){
        this.data = data;
    });
});