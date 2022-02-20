import { makeServer } from "../../../src/mock/mockapi.js"

describe('Events List', () => {
  beforeEach(() => {
    server = makeServer({ environment: "test" })
    cy.viewport(1000, 1000)
    // cy.visit('/')
  })

  afterEach(() => {
    server.shutdown()
  })

  it('Visits the events list page', () => {
    cy.visit('/events')
    cy.contains('h1', 'All the coolest events')
  })

  it("renders 10 event elements", () => {

    cy.visit('/events');
    cy.get('[data-test="event-item"]').should("have.length", 10);

  })

  it('Visits the "add event" page',() => {
    cy.visit('/events/store')
    cy.contains('h1', 'Add Event')
  })

  it('Submits empty form and looks for eight errors',() => {
    cy.visit('/events/store')
    cy.get('[data-test="form"]').submit();
    cy.get('.form-error').should('have.length', 8)
  })

  it('Submits full form and checks if its showing in event list',() => {
    cy.visit('/events/store')
    cy.get('#event-title').type("Test Title Cypress");
    cy.get('#event-date').type("2022-12-21");
    cy.get('#event-time').type("21:00");
    cy.get('#event-desc').type("Thats a very long text for the description");

    const fixtureFile = 'test.jpg';
    cy.get('#event-picture').attachFile(fixtureFile);
    cy.get('#event-type').select("Health");
    cy.get('#event-contact-tel').type("+12209289-2");
    cy.get('#event-contact-email').type("tes6282@gmail.com");
    cy.get('#location').type("Vienna");
    cy.get('[data-test="form"]').submit();
    cy.visit('/events');
    cy.contains('[data-test="event-title"]', 'Test Title Cypress')
  })

})
