

describe('Aceitar termos de uso do site', () => {
  it('Deve acessar o site e clicar e aceitar termos de uso', () => {
    cy.visit('/')
    cy.contains('Li e aceito as Politicas de Privacidade e Termos de Uso.').click()
  })
})