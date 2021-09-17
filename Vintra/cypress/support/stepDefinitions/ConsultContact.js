let dataPool;
let otherData;

Given('The contact has been created {string}{string}',(credentials, token) => {
   cy.fixture(credentials).then((data) => {
      dataPool = data;
   })
   cy.fixture(token).then((data) => {
      otherData = data;
   })
})

When('Consult the contact', () => {
  cy.ConsultContact(dataPool.url, dataPool.method, otherData.firstName, otherData.lastName, otherData.token)
})

Then('The contact has been found', () => {
    
})
