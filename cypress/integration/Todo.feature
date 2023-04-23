Feature: Add Todo

  Scenario: Add a new todo with a title and description
    Given I am on the todo page
    When I click on the "New" button
    And I start to edit the todo with title "New todo"
    And I replace "New todo" with "Buy milk"
    And I replace "New todo description" with "Buy milk from the store"
    And I save my changes by clicking on the tick icon
    Then I should see the todo with title "Buy milk"
    And I should see the todo with description "Buy milk from the store"
