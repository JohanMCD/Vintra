let dataPool;
let request;

Given('The page is online {string}',(pageData) => {
   cy.fixture(pageData).then((data) => {
      dataPool = data;
   })
})

When('Access the page', () => {
   request = cy.ValidateWeb(dataPool.url, dataPool.method)
})

Then('Verify the availability', () => {
   cy.log(request)
  // expect(request.status).to.eq(200)
})





