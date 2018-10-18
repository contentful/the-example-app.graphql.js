
describe('The Example App - Courses', () => {
  context('Courses - non QA', () => {
    afterEach(() => {
      cy.title().should('match', / — The Example App$/, 'Title has contextual suffix (appname)')
    })

    it('renders course overview', () => {
      cy.visit('/courses')
      cy.get('.course-card').should('have.length.gte', 2, 'renders at least 2 courses')
      cy.get('.layout-sidebar__sidebar-header > h2').should('contain', 'Categories', 'Shows category title in sidebar')
      cy.get('.sidebar-menu__list > .sidebar-menu__item:first-child').should('contain', 'All courses', 'Shows all courses link')
      cy.get('.sidebar-menu__list > .sidebar-menu__item').should('have.length.gte', 2, 'renders at least one category selector')
      cy.get('.sidebar-menu__list > .sidebar-menu__item:first-child > a').should('have.class', 'active', 'All courses is selected by default')
    })

    it('can filter course overview', () => {
      cy.visit('/courses')

      cy.get('.sidebar-menu__list > .sidebar-menu__item:nth-child(2) > a').click()
      cy.get('.sidebar-menu__list > .sidebar-menu__item:nth-child(1) > a').should('not.have.class', 'active', 'All courses link is no more active')
      cy.get('.sidebar-menu__list > .sidebar-menu__item:nth-child(2) > a').should('have.class', 'active', 'First category filter link should be active')
      cy.get('main h1').invoke('text').then((text) => console.log('headline content:', text))

      cy.get('.sidebar-menu__list > .sidebar-menu__item:nth-child(2) > a').invoke('text').then((firstCategoryTitle) => {
        cy.get('main h1').invoke('text').then((headline) => {
          expect(headline).to.match(new RegExp(`^${firstCategoryTitle} \\([0-9]+\\)$`), 'Title now contains the category name with number of courses')
        })
      })
      cy.get('.course-card').should('have.length.gte', 1, 'filtered courses contain at least one course')
    })
})
})
