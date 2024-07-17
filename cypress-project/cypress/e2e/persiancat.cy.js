// persiancat.cy.js

describe('Persian Cat Sri Lanka Automation', () => {
  beforeEach(() => {
    // Visit the Persian Cat Sri Lanka website before each test
    cy.visit('https://app.ezuite.com/eShop/PersianCatSriLanka')
  })

  it('Should navigate to the Let\'s Bite section, sort products by price, and verify the sorting', () => {
    // Click on the "Let's Bite" section link
    cy.contains('a', 'Let\'s Bite').click()

    // Log the HTML content after clicking the link
    cy.document().then(doc => { console.log(doc.body.innerHTML) })

    // Wait for the Let's Bite section to load (update the selector if necessary)
    cy.get('.product-container', { timeout: 10000 }).should('be.visible')

    // Select the sort dropdown and choose to sort by item price
    cy.get('select[name="sort"]').select('Price')

    // Wait for the products to be sorted
    cy.wait(2000) // Adjust the wait time if necessary

    // Verify that the products are sorted by price
    let prices = []
    cy.get('.product-price').each(($el) => {
      prices.push(parseFloat($el.text().replace(/[^0-9.-]+/g,"")))
    }).then(() => {
      const sortedPrices = [...prices].sort((a, b) => a - b)
      expect(prices).to.deep.equal(sortedPrices)
    })
  })
})git init

