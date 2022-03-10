Feature: Age Ranges

  Background: Login
    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"

  #User should be able to create any age range UD-T

  Scenario: Create age range
    Given I navigate to the age ranges page
    When I create an age range from "44" months to "23" years
    Then I get "Age range successfully created" message

  #User should be able to edit any age range UD-T FAILING DUE TO VALUES NEED FIX

  Scenario: Edit age range
    Given I navigate to the age ranges page
    And I add a filter for age ranges
    When I edit an age range from "55" months to "53" years
    Then I get "Age range successfully created" message


  #User should be able to add a filter on age ranges from UD-T
  @smoke
  Scenario: Add Age Ranges (From) filter
    Given I navigate to the age ranges page
    When I add a filter for age ranges from
    Then The age ranges from filter should be added


  #User should be able to add a filter on age ranges to UD-T
  @smoke
  Scenario: Add Age Ranges (To) filter
    Given I navigate to the age ranges page
    When I add a filter for age ranges to
    Then The age ranges to filter should be added
