describe('The Example App - General', () => {
  context('Basics', () => {
    beforeEach(() => {
      cy.visit('/')
    })

    it('meta tags', () => {
      cy.title().should('equals', 'Home — The Example App', 'Home page should have correct meta title')
      cy.get('meta[name="description"]').should('attr', 'content', 'This is "The Example App", a reference for building your own applications using Contentful.')

      cy.get('meta[name="twitter:card"]').should('attr', 'content', 'This is "The Example App", a reference for building your own applications using Contentful.')

      cy.get('meta[property="og:title"]').should('attr', 'content', 'Home — The Example App')
      cy.get('meta[property="og:type"]').should('attr', 'content', 'article')
      cy.get('meta[property="og:url"]').should('exist')
      cy.get('meta[property="og:image"]').should('exist')
      cy.get('meta[property="og:image:type"]').should('attr', 'content', 'image/jpeg')
      cy.get('meta[property="og:image:width"]').should('attr', 'content', '1200')
      cy.get('meta[property="og:image:height"]').should('attr', 'content', '1200')
      cy.get('meta[property="og:description"]').should('attr', 'content', 'This is "The Example App", a reference for building your own applications using Contentful.')

      cy.get('link[rel="apple-touch-icon"]')
        .should('attr', 'sizes', '120x120')
        .should('attr', 'href', '/apple-touch-icon.png')
      cy.get('link[rel="icon"]').should('have.length.gte', 2, 'containts at least 2 favicons')
      cy.get('link[rel="manifest"]').should('attr', 'href', '/manifest.json')
      cy.get('link[rel="mask-icon"]')
        .should('attr', 'href', '/safari-pinned-tab.svg')
        .should('attr', 'color', '#4a90e2')
      cy.get('meta[name="theme-color"]').should('attr', 'content', '#ffffff')
    })
  })

  context('Global elements', () => {
    beforeEach(() => {
      cy.visit('/')
    })

    it('header & footer content', () => {
      cy.get('.header__upper')
        .should('contain', 'Help')
        .should('contain', 'GitHub')

      cy.get('.header__logo img')
        .should('attr', 'src', `/images/the-example-app-logo-${Cypress.env('LANGUAGE')}.svg`)

      cy.get('.main__footer .footer__lower')
        .should('contain', 'Powered by Contentful')
        .should('contain', 'GitHub')
        .should('contain', 'Imprint')
        .should('contain', 'Contact us')
    })
  })

  context('Navigation', () => {
    beforeEach(() => {
      cy.visit('/')
    })

    it('top navigaton works', () => {
      cy.get('header nav > ul > li:nth-child(2) > a').click()
      cy.url().should('match', /\/courses$/)
    })

    it('bottom navigaton works', () => {
      cy.get('footer nav > ul > li:nth-child(2) > a').click()
      cy.url().should('match', /\/courses$/)
    })
  })
})
