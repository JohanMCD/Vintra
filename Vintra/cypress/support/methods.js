Cypress.Commands.add("GetOtherData", (token) => {
    const firstName = ["Manuel", "Joan", "Francisco", "Jose", "Fernando", "Judit", "Montserrat"];
    const lastName = ["Perez", "Ortiz", "Cruz", "Vazquez", "Hernandez", "Rodriguez", "Navarro"];
    const random = Math.floor(Math.random() * firstName.length);
    const randomNumber = Math.floor(Math.random() * (10000000000000 - 1)) + 1;
    cy.writeFile('cypress/fixtures/otherData.json', 
    {
        firstName: firstName[random]+randomNumber,
        lastName: lastName[random],
        token: token
    })
})

Cypress.Commands.add("ValidateWeb", (url, method) => {  
    cy.request({
        method: method,
        url: url
     }).then((response) => {
         cy.log(response.status)
         expect(response.status).to.eq(200)
     })
})

Cypress.Commands.add("Login", (url, method, user, password) => {  
    cy.request({
        method : method,
        url: url,
        body: {
           'username': user,
           'password': password,
           'grant_type': '',
           'scope': '',
           'client_id': '',
           'client_secret': ''
           },
           headers:{
              'accept' : 'application/json',
              'Content-Type' : 'application/x-www-form-urlencoded'
           }
     }).then((response) => {
        expect(response.status).to.eq(200)
        cy.GetOtherData(response.body.access_token)
        cy.log("Token: " + response.body.access_token)
     })
})

Cypress.Commands.add("ConsultLogin", (url, method, token) => {  
    cy.request({
        method : method,
        url: url,
           headers:{
              'accept' : 'application/json',
              'Content-Type' : 'application/x-www-form-urlencoded',
              'Authorization': ' Bearer ' + token
           }
     }).then((response) => {
        cy.log(response.status)
        expect(response.status).to.eq(200)
     })
})

Cypress.Commands.add("CreateContact", (url, method,firstName, lastName, email, phone, mobile, token) => {
    cy.request({
        method : method,
        url: url,
        body: {
            'firstName': firstName,
            'lastName': lastName,
            'email': email,
            'phone': phone,
            'mobile': mobile
            },
           headers:{
              'accept' : 'application/json',
              'Content-Type' : 'application/json',
              'Authorization': 'Bearer ' + token
           }
     }).then((response) => {
        cy.log(response.status)
        expect(response.status).to.eq(201)
        let body = JSON.stringify(response.body)
        cy.log(body)
        expect(response.body.firstName).to.eq(firstName)
     })
})

Cypress.Commands.add("ConsultContact", (url, method, firstName, lastName, token) => {
    cy.request({
        method : method,
        url: url+'?first_name='+firstName+'&last_name='+lastName,
        body: {
            'first_name': firstName,
            'last_name': lastName
            },
           headers:{
              'accept' : 'application/json',
              'Content-Type' : 'application/json',
              'Authorization': 'Bearer ' + token
           }
     }).then((response) => {
        cy.log(response.status)
        expect(response.status).to.eq(200)
        let body = JSON.stringify(response.body)
        cy.log(body)
     })
})


