Feature: Example feature with scenario outline

  Scenario Outline: Login functionality
    Given I navigate to the login page
    When I enter "<username>" and "<password>"
    Then I should see a "<message>"

    Examples:
      | username   | password    | message                   |
      | admin      | admin123    | Welcome Admin!            |
      | user       | user123     | Welcome User!             |
      | unknown    | invalid     | Invalid credentials error |
