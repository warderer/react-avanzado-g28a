describe('Funcionalidad de Login', () => {
  it('Mi Aplicación Carga leyendo Home en /', () => {
    // 01. Arrange: Setup del estado de mi aplicación (¿donde inicio?)
    cy.visit('/')

    // 02. Act: Interactuo con la aplicación (¿que hago?)
    cy.get('h1')
      .contains('Home') // 03. Assert: Verifico el resultado (¿que espero?)
  })

  it('Probar el Login como CUSTOMER', () => {
    cy.intercept('POST', 'https://ecommerce-json-jwt.onrender.com/login').as('loginRequest')
    // 01. Arrange: Setup del estado de mi aplicación (¿donde inicio?)
    cy.visit('/login')

    // 02. Act: Interactuo con la aplicación (¿que hago?)
    cy.get('input[name="email"]').type('drstrange@marvel.com')
    cy.get('input[name="password"]').type('multiverso')
    cy.get('button[type="submit"]').click()

    cy.wait('@loginRequest') // Espera la llamada a API

    cy.url().should('include', '/dashboard')
    cy.contains('Dashboard') // 03. Assert: Verifico el resultado (¿que espero?)
  })
})
