import { Given, When, Then } from 'cucumber';

Given(/I am on the todo page/, () => {
  cy.visit('localhost:4200');
});

Then('I should see the todo with description {string}', (s: string) => {
  // Write code here that turns the phrase above into concrete actions
});

Then('I should see the todo with title {string}', (s: string) => {
  // Write code here that turns the phrase above into concrete actions
});

When('I save my changes', () => {
  // Write code here that turns the phrase above into concrete actions
});

When('I fill in {string} with {string}', (s: string, s2: string) => {
  // Write code here that turns the phrase above into concrete actions
});

When('I fill in {string} with {string}', (s: string, s2: string) => {
  // Write code here that turns the phrase above into concrete actions
});

When('I click on the {string} button', (s: string) => {
  // Write code here that turns the phrase above into concrete actions
});

When('', () => {});

Then('', () => {});
