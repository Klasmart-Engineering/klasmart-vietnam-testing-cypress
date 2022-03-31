Feature: Age Ranges

  Background: Login
    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"

  #User should be able to create any age range UD-T

  Scenario: Create age range
    Given I navigate to the age ranges page
    When I create an age range from "45" months to "23" years
    Then I get "Age range successfully created" message

  #User should be able to edit any age range UD-T156 FAILING DUE TO VALUES NEED FIX

  Scenario: Edit age range
    Given I navigate to the age ranges page
    And I add a filter for age ranges
    When I edit an age range from "55" months to "53" years
    Then I get "Age range successfully created" message
