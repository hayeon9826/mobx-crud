// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import 'cypress-xpath';
import './commands';
// eslint-disable-next-line no-undef
// Cypress.on('uncaught:exception', () => {
//   return false;
// });

Cypress.on('window:before:load', (win) => {
  delete win.fetch;
});
// Alternatively you can use CommonJS syntax:
// require('./commands')
