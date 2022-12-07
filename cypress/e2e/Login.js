describe('Login', () => {
    it('001_LoginValid', () => {
      cy.visit('https://parabank.parasoft.com/parabank');

      cy.get('[name=username]').type('dwijashenda');
      cy.get('[name=password]').type('sanber39');
      cy.xpath('//*[@id="loginPanel"]/form/div[3]/input').click();
      cy.contains("dwija N");
    }),
    it('002_LoginwithNullinput', () => {
      cy.visit('https://parabank.parasoft.com/parabank');

      cy.xpath('//*[@id="loginPanel"]/form/div[3]/input').click();
      cy.get('.title').contains('Error');
      cy.get('.error').contains('Please enter a username and password.')
    }),
    it('003_LoginInvalid', () => {
      cy.visit('https://parabank.parasoft.com/parabank');

      cy.get('[name=username]').type('shenda');
      cy.get('[name=password]').type('123');
      cy.xpath('//*[@id="loginPanel"]/form/div[3]/input').click();
      cy.get('.title').contains('Error');
      cy.get('.error').contains('An internal error has occurred and has been logged')
    })
  })