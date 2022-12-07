describe('Forgot Password', () => {
    it('004_forgotpwdValid', () => {
      cy.visit('https://parabank.parasoft.com/parabank');
    
      cy.xpath('//*[@id="loginPanel"]/p[1]/a').click();
      cy.get('[name=firstName]').type('dwija');
      cy.get('[name=lastName]').type('N');
      cy.xpath('//*[@id="address.street"]').type("Jl. Pulau Saelus II");
      cy.xpath('//*[@id="address.city"]').type("Denpasar");
      cy.xpath('//*[@id="address.state"]').type("Bali");
      cy.xpath('//*[@id="address.zipCode"]').type("80221");
      cy.get('[name=ssn]').type("19700624");
      cy.xpath('//*[@id="lookupForm"]/table/tbody/tr[8]/td[2]/input').click();
      cy.contains("dwijashenda");
      cy.contains("sanber39");
    }),
    it('005_forgotpwdinvalid', () => {
        cy.visit('https://parabank.parasoft.com/parabank');
      
        cy.xpath('//*[@id="loginPanel"]/p[1]/a').click();
        cy.get('[name=firstName]').type('dwija N');
        cy.get('[name=lastName]').type('Shenda');
        cy.xpath('//*[@id="address.street"]').type("Jl. Pulau nusa penida");
        cy.xpath('//*[@id="address.city"]').type("Klungkung");
        cy.xpath('//*[@id="address.state"]').type("Bali");
        cy.xpath('//*[@id="address.zipCode"]').type("80446");
        cy.get('[name=ssn]').type("1970689");
        cy.xpath('//*[@id="lookupForm"]/table/tbody/tr[8]/td[2]/input').click();
        cy.contains("The customer information provided could not be found");
      })
  })