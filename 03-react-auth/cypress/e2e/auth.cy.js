describe('Funcionalidad de Login', () => {
  it('Mi Aplicación Carga leyendo Home en /', () => {
    // 01. Arrange: Setup del estado de mi aplicación (¿donde inicio?)
    cy.visit('/')

    // 02. Act: Interactuo con la aplicación (¿que hago?)
    cy.get('h1')
      .contains('Home') // 03. Assert: Verifico el resultado (¿que espero?)
  })
})
