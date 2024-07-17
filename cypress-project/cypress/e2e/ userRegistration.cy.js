// userRegistration.cy.js

describe('User Registration on Persian Cat Sri Lanka', () => {
  beforeEach(() => {
    // Visit the Persian Cat Sri Lanka home page before each test
    cy.visit('https://app.ezuite.com/eShop/PersianCatSriLanka')
  })

  it('Should register a new user successfully', () => {
    // Ensure the page is fully loaded
    cy.get('body').should('be.visible')

    // Click on the "Login or Register" link (adjust if it's a button or has a different selector)
    cy.contains('a', 'Login or Register').click()

    // Wait for the registration modal to be visible
    cy.get('#customerSignUpModel').should('be.visible')

    // Fill out the registration form within the modal
    cy.get('#customerSignUpModel').within(() => {
      cy.get('input[placeholder="Name"]').type('newuser')
      cy.get('textarea[placeholder="Address"]').type('123 Cypress St.')
      cy.get('select').select('CityName') // Replace with an actual city from the dropdown
      cy.get('input[placeholder="Phone"]').type('1234567890')
      cy.get('input[placeholder="Email"]').type('newuser@example.com')
      cy.get('input[placeholder="Password"]').type('Password123')
      cy.get('input[placeholder="Confirm Password"]').type('Password123')

      // Click the register button
      cy.contains('button', 'Register').click()
    })

    // Verify that the registration was successful
    cy.contains('Registration successful').should('be.visible')
    // or
    cy.url().should('include', '/welcome') // Adjust based on actual URL after registration
  })
})
