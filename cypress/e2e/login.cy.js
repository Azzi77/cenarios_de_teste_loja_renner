describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.lojasrenner.com.br/')
    cy.contains('Entre ou cadastre-se').click()
  })
})