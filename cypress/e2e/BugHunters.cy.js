/// <reference types="cypress"/> 

describe('groupBugHunters', () => {

    it('AT_006.001 | Main page > Sign in', function () {
        cy.visit('https://openweathermap.org/')
        cy.get('li.user-li').contains('Sign in').click({force: true})
        cy.get('#user_email')
          .should('have.attr', 'placeholder', 'Enter email')
          .type('oforostinko@gmail.com') 
        //cy.get('#user_password.form-control')
          .should('have.attr', 'placeholder', 'Enter password')
          .type('12341234')
        
    })
    
})