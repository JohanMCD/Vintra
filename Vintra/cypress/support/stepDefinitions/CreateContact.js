let dataPool;
let otherData;

Given('The user is logged {string}{string}',(credentials, token) => {
   cy.fixture(credentials).then((data) => {
      dataPool = data;
   })
   cy.fixture(token).then((data) => {
      otherData = data;
   })
})

When('Create a contact', () => {
  cy.CreateContact(dataPool.url, dataPool.method, otherData.firstName, otherData.lastName, dataPool.email, dataPool.phone, dataPool.mobile, otherData.token)
})

Then('The contact has been created successfully', () => {
    
})
