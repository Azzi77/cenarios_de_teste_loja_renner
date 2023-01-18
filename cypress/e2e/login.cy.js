describe('Casos de teste sobre a rota /login do site Lojas Renner', () => {

    it('Deve acessar o site e realizar login com sucesso', () => { 
        cy.visit('https://www.lojasrenner.com.br/')
        cy.contains('Entre ou cadastre-se').click()
        cy.get('input[name="login"]').type('reginaazzi@hotmail.com')
        cy.get('input[name="password"]').type('18012023')
        cy.contains('ENTRAR').click()
        cy.contains('Olá, Regina')
       
    })
})
it.only('Deve acessar o site e realizar login sem  sucesso', () => { 
    cy.visit('https://www.lojasrenner.com.br/')
    cy.contains('Entre ou cadastre-se').click()
    cy.get('input[name="login"]').type('reginaazzi@hotmail.com')
    cy.get('input[name="password"]').type('18012025')
    cy.contains('ENTRAR').click()
    cy.contains('Esta combinação de usuário e senha é inválida.')


})


