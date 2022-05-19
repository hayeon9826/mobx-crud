// cypress/support/index.d.ts
// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject> extends Cypress.Chainable {
    xpath<E extends Node = HTMLElement>(
      selector: string,
      options?: Partial<Loggable & Timeoutable>
    ): Chainable<JQuery<E>>;
  }
}
