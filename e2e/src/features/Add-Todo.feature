Feature: Add Todo

  Scenario: Add a new todo with a title and description
    Given I am on the todo page
    When I click on the "Add Todo" button
    And I fill in "Title" with "Buy milk"
    And I fill in "Description" with "Buy milk from the store"
    And I save my changes
    Then I should see the todo with title "Buy milk"
    And I should see the todo with description "Buy milk from the store"
