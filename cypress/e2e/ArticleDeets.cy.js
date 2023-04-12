describe("home page", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${Cypress.env("REACT_APP_API_KEY")}`,
      { fixture: "articles.json" }
    );
    cy.visit("http://localhost:3000")
  })

  it('Should visit details page ', () => {
    cy.get('[href="/article/E.P.A. Lays Out Rules to Turbocharge Sales of Electric Cars and Trucks"] > .article-title').click()
    cy.url().should('include', 'http://localhost:3000/article/E.P.A.%20Lays%20Out%20Rules%20to%20Turbocharge%20Sales%20of%20Electric%20Cars%20and%20Trucks')
  })

  it('Should display all elements the article details page', () => {
    cy.get('[href="/article/E.P.A. Lays Out Rules to Turbocharge Sales of Electric Cars and Trucks"] > .article-title').click()
    cy.url().should('include', 'http://localhost:3000/article/E.P.A.%20Lays%20Out%20Rules%20to%20Turbocharge%20Sales%20of%20Electric%20Cars%20and%20Trucks')
    cy.get('.logo-button')
    cy.get('.article-deets-title')
    cy.get('.main-article-container > :nth-child(3)')
    cy.get('.article-image')
    cy.get('.article-details-container > p')
    cy.get('.article-link')
  })
})
