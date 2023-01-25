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
it('Deve acessar o site e realizar login sem  sucesso', () => {
    cy.visit('https://www.lojasrenner.com.br/')
    cy.contains('Entre ou cadastre-se').click()
    cy.get('input[name="login"]').type('reginaazzi@hotmail.com',{force: true })
    cy.get('input[name="password"]').type('18012025')
    cy.contains('ENTRAR').click()
    cy.contains('Esta combinação de usuário e senha é inválida.')


})
it.only('Deve acessar o campo esqueci minha senha e recuperar senha com sucesso', () => {
    cy.visit('https://www.lojasrenner.com.br/');
    cy.get('.header__user-content:nth-child(4) .user-info > span').click();
    cy.get('.ButtonLink_buttonLink__lsKy7',{force: true }).click();
    cy.get('input[id="forgotPassForm"]',{force: true }).click();
    cy.get('input[id="forgotPassForm"]').type('263.942.998-12',{force: true });
    cy.get('.forgot-password-form__form-container > .Button_button__vcDFE').click();
   

})