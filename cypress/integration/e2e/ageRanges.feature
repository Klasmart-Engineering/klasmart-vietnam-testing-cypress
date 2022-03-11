Feature: Age Ranges

  #User should be able to create any age range UD-T155

  Scenario: Create age range
    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    Then I create an age range from "44" months to "23" years
    And I get "Age range successfully created" message

  #User should be able to edit any age range UD-T156 FAILING DUE TO VALUES NEED FIX

  Scenario: Edit age range
    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And Add filter for age ranges
    Then I edit an age range from "55" months to "53" years
    And I get "Age range successfully created" message


  #User should be able to add a filter on age ranges from UD-T255
  
  Scenario: Add filter Age Ranges From

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And Add filter for age ranges from
    Then Filter is Added
    And I check that age ranges from filter was added


  #User should be able to add a filter on age ranges to UD-T263
  
  Scenario: Add filter Age Ranges To

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And Add filter for age ranges to
    Then Filter is Added
    And I check that age ranges to filter was added
