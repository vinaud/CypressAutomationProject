describe('API test', () => {
    it('is a cypress API test without calling a browser', () => {

     cy.request('POST', 'http://216.10.245.166/Library/Addbook.php', {
         "name": "Learn Appium Automation with Java",
         "isbn": "bcdsdstyus",
         "aisle": "22s7",
         "author": "Jhon Doe"
     }).then(function(response) {
         expect(response.body).to.have.property('Msg', 'successfully added');
         expect(response.status).to.equal(200);
     })


    

    });
  })