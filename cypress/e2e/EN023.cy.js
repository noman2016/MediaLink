/// <reference types="cypress"/>

it('EN023-Register a new extension number from the extension number setting screen. Number of user groups to be associated with extension number: 0', function() {

  cy.visit('http://192.168.30.79:8081/MediaCallsManager/')
  cy.get(':nth-child(1) > .formInput > span > div > .loginform__input').type('ADMIN')
  cy.get(':nth-child(2) > .formInput > span > div > .loginform__input').type('pass')
  cy.get('.loginform__button').click()
  cy.get('.theSideMenu__menuButton').click()
  cy.get(':nth-child(7) > .tableHeader__button').click()
  cy.get('[data-v-4cabc107=""][style=""] > .registrationForm__modal > .registrationForm__content > :nth-child(1) > .registrationForm__item > .registrationForm__input > .registrationForm__inputForm > .inputText').type('74000')
  cy.get(':nth-child(3) > .registrationForm__item > .registrationForm__input > .registrationForm__inputForm > .selectWrapper > .selectWrapper__select').click()
  cy.get(':nth-child(3) > .registrationForm__item > .registrationForm__input > .registrationForm__inputForm > .selectWrapper > .selectWrapper__options--bottom > :nth-child(2)').each(($ele, index, list) => {
    cy.log($ele.text())
    if ($ele.text().includes('ソフトフォン')) {
      cy.wrap($ele).click({ force: true })
    } else {
      cy.log("current value", $ele.text())
    }
  })
  cy.get('[data-v-4cabc107=""][style=""] > .registrationForm__modal > .registrationForm__footer > .secondary').click()
  
})