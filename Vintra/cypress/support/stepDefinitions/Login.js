let dataPool;
let tokenCode;

Given('The page is availability {string}{string}',(Login, token) => {
  cy.fixture(Login).then((data) => {
      dataPool = data;
   })
   cy.fixture(token).then((data) => {
      tokenCode = data;
   })
})

When('Put the user and password', () => {
   cy.Login(dataPool.url, dataPool.method, dataPool.user, dataPool.password)
})

Then('The login is completed', () => {
   cy.ConsultLogin(dataPool.urlConfirm, dataPool.methodConfirm, tokenCode.token)
})

