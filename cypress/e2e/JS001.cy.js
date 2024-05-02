/// <reference types="cypress"/>

it('JS001-Abshjjk', function() {

  cy.visit('http://192.168.30.79:8081/MediaCallsManager/')
  cy.get(':nth-child(1) > .formInput > span > div > .loginform__input').type('ADMIN')
  cy.get(':nth-child(2) > .formInput > span > div > .loginform__input').type('pass')
  cy.get('.loginform__button').click()
  cy.get('tbody > :nth-child(1) > .appList__allCheckbox > input').check()

})