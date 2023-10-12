/// <reference types="cypress" />

describe('Testes para home', () =>  {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it ('Deve contar a quantidade de campos para preenchimento do contato', () => {
        cy.get('input').should('have.length', 3)
    })
    
    it ('Deve verificar o funcionamento dos campos para inclusão de contato', () => {
        cy.get('input[type="text"]').type('Vinícius')
        cy.get('input[type="email"]').type('vinicius@teste.com')
        cy.get('input[type="tel"]').type('12 1234578')
        cy.get('.adicionar').click()
    })

    it ('Deve verificar o funcionamentoa de altereção de um contato', () => {
        cy.get(':nth-child(5) > .sc-gueYoa > .edit').click()
        cy.get('input[type="text"]').type('Luiz')
        cy.get('input[type="email"]').type('.br')
        cy.get('input[type="tel"]').type('9')
        cy.get('.alterar').click()
    })

    it ('Deve verificar a remoção de um contato', () => {
        cy.get(':nth-child(5) > .sc-gueYoa > .delete')
    })
})