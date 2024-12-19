describe('template spec', () => {
  it('Find <h1> header "To Do List" and check if it is visible', () => {
    cy.visit('https://todolist.james.am/#/')
    cy.contains('h1', "To Do List")
    .should('be.visible')
  })

  it('Find <a> button "All" and check if it is NOT visible', () => {
    cy.visit('https://todolist.james.am/#/')
    cy.contains('a', "All")
    .should('not.be.visible')
  })
  
  it('Find <a> button "active" and check if it is NOT visible', () => {
    cy.visit('https://todolist.james.am/#/')
    cy.contains('a', "active")
    .should('not.be.visible')
  })

  it('Find <a> button "Completed" and check if it is NOT visible', () => {
    cy.visit('https://todolist.james.am/#/')
    cy.contains('a', "Completed")
    .should('not.be.visible')
  })

  it('Find <a> button "Clear" and check if it is NOT visible', () => {
    cy.visit('https://todolist.james.am/#/')
    cy.contains('button', "Clear")
    .should('not.be.visible')
  })

  it('Find <p> "Double-click to edit a toodo" and check if it is visi', () => {
    cy.visit('https://todolist.james.am/#/')
    cy.contains('p', "Double-click to edit a toodo")
    .should('be.visible')
  })

  it('Find input with class "new-todo", check if it is visible and check if placeholder text is equal "What needs to be done?"', () => {
    cy.visit('https://todolist.james.am/#/');
    cy.get('input.new-todo')
    .should('be.visible')
    .and('have.attr', 'placeholder', "What need's to be done?");
  });

  it('Type some text, then check "All" button', () => {
    cy.visit('https://todolist.james.am/#/');

    cy.get('input.new-todo')
    .should('be.visible')
    .type('My new task{enter}');

    cy.contains('a', "All")
    .should('be.visible')
  });

  it('Type some text, then check "active" button', () => {
    cy.visit('https://todolist.james.am/#/');

    cy.get('input.new-todo')
    .should('be.visible')
    .type('My new task{enter}');

    cy.contains('a', "active")
    .should('be.visible')
  });

  it('Type some text, then check "Completed" button', () => {
    cy.visit('https://todolist.james.am/#/');

    cy.get('input.new-todo')
    .should('be.visible')
    .type('My new task{enter}');

    cy.contains('a', "Completed")
    .should('be.visible')
  });

  it('Type some text, then check "Clear" button', () => {
    cy.visit('https://todolist.james.am/#/');

    cy.get('input.new-todo')
    .should('be.visible')
    .type('My new task{enter}');

    cy.contains('button', "Clear")
    .should('be.visible')
  });

  it('Check if main section is visible', () => {
    cy.visit('https://todolist.james.am/#/');

    cy.get('section.todoapp')
    .should('be.visible')
  });

  it('Check if ng-view is visible', () => {
    cy.visit('https://todolist.james.am/#/');

    cy.get('ng-view.ng-scope')
    .should('be.visible')
  });


})

