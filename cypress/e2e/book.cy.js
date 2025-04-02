describe("Book", () => {
  beforeEach(() => {
    cy.task("clean");
    cy.task("createTestBook");
    cy.task("createTestBook", { title: "Memoirs of a Geisha" });
    cy.visit("/");
  });

  it("can be created", () => {
    cy.get('[name="title"]').type("Necronomicon");
    cy.get('[name="author"]').type("Abdul Alhazred");
    cy.contains("Add new book").click();
    cy.contains("Title: Necronomicon").should("be.exist");
  });

  it("can be deleted", () => {
    cy.contains("X").click();
    cy.contains("Title: Death Note").should("not.exist");
    cy.contains("X").click();
    cy.contains("Title: Memoirs of a Geisha").should("not.exist");
  });

  it("can not be created with invalid title", () => {
    cy.get('[name="title"]').type("Death Note");
    cy.contains("Add new book").click();
    cy.contains("Invalid data provided").should("be.exist");
  });
});
