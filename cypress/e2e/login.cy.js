describe('Casos de teste sobre a rota /login do site Lojas Renner', () => {

    it('Deve acessar o site e realizar login com sucesso', () => { 
        cy.visit('https://www.lojasrenner.com.br/')
        cy.contains('Entre ou cadastre-se').click()
        cy.get('input[name="login"]').type('reginaazzi@hotmail.com')
        cy.get('input[name="password"]').type('18012023')
        cy.contains('ENTRAR').click()
        //cy.get('.navbar-top .avatar')
        //.should('be.visible')
       
    })
})

