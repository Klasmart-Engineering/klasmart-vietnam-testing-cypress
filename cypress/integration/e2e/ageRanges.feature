Feature: Age Ranges

<<<<<<< HEAD
  Background: Login
    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"

  #User should be able to create any age range UD-T
=======
  #User should be able to create any age range UD-T155
>>>>>>> master

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


<<<<<<< HEAD
  #User should be able to add a filter on age ranges from UD-T
=======
  #User should be able to add a filter on age ranges from UD-T255
  
  Scenario: Add filter Age Ranges From
>>>>>>> master

  @smoke
  Scenario: Add Age Ranges (From) filter
    Given I navigate to the age ranges page
    When I add a filter for age ranges from
    Then The age ranges from filter should be added


<<<<<<< HEAD
  #User should be able to add a filter on age ranges to UD-T
  @smoke
  Scenario: Add Age Ranges (To) filter
    Given I navigate to the age ranges page
    When I add a filter for age ranges to
    Then The age ranges to filter should be added
=======
  #User should be able to add a filter on age ranges to UD-T263
  
  Scenario: Add filter Age Ranges To

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And Add filter for age ranges to
    Then Filter is Added
    And I check that age ranges to filter was added
>>>>>>> master
