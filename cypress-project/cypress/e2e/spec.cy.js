// // persiancat.cy.js

// describe('Persian Cat Sri Lanka Automation', () => {
//   beforeEach(() => {
//     // Visit the Persian Cat Sri Lanka website before each test using full URL
//     cy.visit('https://app.ezuite.com/eShop/PersianCatSriLanka')
//   })

//   it('Should navigate to Let\'s Bite category and add two items to the cart', () => {
//     // Navigate to the "Let's Bite" category (update the selector if necessary)
//     cy.contains('Let\'s Bite').click()

//     // Wait for the products to load in the Let's Bite category
//     cy.get('.products').should('be.visible')

//     // Add the first item to the cart
//     cy.get('.products .product').eq(0).find('.add-to-cart').click()
    
//     // Add the second item to the cart
//     cy.get('.products .product').eq(1).find('.add-to-cart').click()

//     // Verify that the items were added to the cart
//     cy.get('.cart-count').should('contain', '2')
//   })
// })
