context('Needed for Base State', () => {
  beforeEach(() => {
    cy.visit("https://rowleygeneral.healthtouchlive.net/HealthTouch")
  })

  describe('Check login state', () => {
    it('base state', () => {
      // check the base state (defaults)
      cy.title().should('eq', 'HTWebApps User Login')
      cy.get('input[name="userName"]').should('be.visible').should('be.enabled').type("ht")
      cy.get('input[name="password"]').should('be.visible').click()
      cy.get('input[name="password"]').type("6644")
      cy.get('button[id="btnLogin"]').should('be.visible').should('be.enabled').click()
      // cy.get('li[class="nav-item reporting"]').should('be.visible').should('be.enabled').hover()
      // cy.get('a[id="webOrdering"]').trigger('mouseover')
      cy.wait(10000)
      cy.get('a[id="webOrdering"]').click({force: true})
      cy.wait(5000)
      cy.reload()
      cy.get('span').contains('17th Street').click()
      cy.get('button[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium LinkButton_btn__VxTRX css-zxtlky"]').contains('TSUS').click()
      cy.get('button[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium RoomBtn_roomBtn__3uTzs css-zxtlky"]').contains('Regular').click()
    })
  })
})
