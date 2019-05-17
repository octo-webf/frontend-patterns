describe("Challenges - Tabs", () => {
  beforeEach(() => {
    cy.visit("/tabs");
  });

  it("should render the tabs", () => {
    cy.contains("Norway").should("exist");
    cy.contains("Australia").should("exist");
    cy.contains("Japan").should("exist");
    cy.get('.tab-content').contains('Australia').should('exist')
  });
  
  it('should be navigable using tab key', () => {
    cy.contains('Norway').focus()
    cy.focused().type('{enter}')
    cy.get('.tab-content').contains('Norway').should('exist')
    
    cy.contains('Australia').focus()
    cy.focused().type('{enter}')
    cy.get('.tab-content').contains('Australia').should('exist')
    
    cy.contains('Japan').focus()
    cy.focused().type('{enter}')
    cy.get('.tab-content').contains('Japan').should('exist')
  })
});
