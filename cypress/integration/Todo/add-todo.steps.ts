import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given(/I am on the todo page/, () => {
  cy.visit('localhost:4200');
});

When('I click on the {string} button', (s: string) => {
  cy.contains(s).click();
});

Then('I should see the todo with description {string}', (s: string) => {
  cy.contains(s).should('be.visible');
});

Then('I should see the todo with title {string}', (s: string) => {
  cy.contains(s).should('be.visible');
});

When('I start to edit the todo with title {string}', (s: string) => {
  cy.contains(s).click();
});

When('I replace {string} with {string}', (s: string, s2: string) => {
  // find input with given value attribute
  cy.get('input')
    .filter((k, el: HTMLInputElement) => {
      return el.value === s;
    })
    .clear()
    .type(s2);
});

When('I save my changes by clicking on the tick icon', () => {
  cy.get('.fa-check').click();
});
