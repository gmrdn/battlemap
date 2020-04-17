/// <reference types="cypress" />
context("Tokens", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "api/room/*",
      response: "fixture:rooms/room-with-tokens.json",
    }).as("getTokens");

    cy.visit("/room/BdAdj192k");
    cy.get("#nickname").type("Cypress FakeUser").get("#btn-join").click();
  });

  it("should display previous tokens", () => {
    cy.wait("@getTokens");
    cy.get("#avatar-1-1").should("be.visible");
    cy.get("#avatar-5-5").should("be.visible");
  });
});
