Feature: Example feature with data table

  @test
  Scenario: Fill the form with multiple users
    Given I open the user form page
    When I fill the form with the following data:
      | Name    | Email             | Age |
      | Alice   | alice@test.com    | 25  |
      | Bob     | bob@test.com      | 30  |
    Then I should see success messages for each user

  Scenario: Validate an empty form error
    Given I open the user form page
    When I submit the form without filling data
    Then I should see an error message saying "Please fill out this field"
