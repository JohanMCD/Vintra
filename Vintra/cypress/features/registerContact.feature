Feature: Create a regiter of contact

  Scenario: Start the app
    Given The page is online "startWeb"
    When Access the page
    Then Verify the availability

 Scenario: Do login
    Given The page is availability "login""otherData"
    When Put the user and password
    Then The login is completed

  Scenario: Create a contact
    Given The user is logged "register""otherData"
    When Create a contact
    Then The contact has been created successfully

 Scenario: Consult a contact
    Given The contact has been created "consult""otherData"
    When Consult the contact
    Then The contact has been found

 Scenario: Update a contact
    Given The user is logged "register""otherData"
    When Modify the data contact 
    Then The contact has been updated

  Scenario: delete a contact
    Given The user is logged "register"
    When Delete the contact
    Then The contact has been deleted