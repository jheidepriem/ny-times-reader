describe("home page", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${Cypress.env("REACT_APP_API_KEY")}`,
      { fixture: "articles.json" }
    );
    cy.visit("http://localhost:3000");
  });
  
  it('Should show all of the elements on the home page', () => {
    cy.get('.home-title').should('be.visible').contains('New York Times Reader')
    cy.get('input').should('be.visible')
    cy.get('[href="/article/E.P.A. Lays Out Rules to Turbocharge Sales of Electric Cars and Trucks"]').should('be.visible')
  })

  it('Should filter articles in search bar', () => {
    cy.get("input").type("E.P.A.").should("have.value", "E.P.A.");
  })

  it('Should be able to click on an article and navigate to an article details page', () => {
    cy.get('[href="/article/E.P.A. Lays Out Rules to Turbocharge Sales of Electric Cars and Trucks"] > .article-title').click()
    cy.url().should('include', 'http://localhost:3000/article/E.P.A.%20Lays%20Out%20Rules%20to%20Turbocharge%20Sales%20of%20Electric%20Cars%20and%20Trucks')
  })
});

 