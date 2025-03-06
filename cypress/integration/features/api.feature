Feature: API testing for Create and Update functions
  @apitest
  Scenario: Create a user
    Given I make a POST request to "/api/users" with payload:
      | name  | email           |
      | John  | john@test.com   |
    Then I should see the response code 201
    And I should see the response contains the user's details

  Scenario: Update a user
    Given I make a PUT request to "/api/users/1" with payload:
      | name  | email           |
      | John  | johnny@test.com |
    Then I should see the response code 200
    And the response should reflect the updated details
