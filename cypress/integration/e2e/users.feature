Feature: Users

#User should be able to create a new user UD-T19

  Scenario: Create user
   #DATA SHOULD BE CHANGED FOR EACH RUN
    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And I fill required fields as "Karely" "Nogeira" "kare@gmail.com" and "457UDH"
    Then I create a new user and obtain "User has been created successfully" message

  #User should not be able to add the same exactly user UD-T529

  Scenario: Create duplicated user with same shortcode
   
    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And I fill required fields as "Noel" "Virtu" "noel12@gmail.com" and "N03L"
    Then I create a new user and obtain "User has been created successfully" message
    And I fill required fields as "Noel" "Virtu" "noel12@gmail.com" and "N03L"
    Then I have got "User already exists" error message
    And "Short Code already exists." error message

     #User should not be able to add the same exactly user UD-T23

  Scenario: Create duplicated users without shortcode
   
    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And I fill only required fields as "Noel" "Virtu" and "noel12@gmail.com" 
    Then I create a new user and obtain "User has been created successfully" message
    And I fill only required fields as "Noel" "Virtu" and "noel12@gmail.com"
    Then I have got "User already exists" error message


    #User should not be able to create a new user UD-T22

  Scenario: Create user without required fields
  
    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And I fill optional fields "4B3J4"


    #User should not see new user added UD-T20 DEFECT AD-1811

  Scenario: Cancel user creation
   
    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And fill all existent fields as "Mauro" "Nogeira" "maunog@gmail.com" "457FDH" "non-binary" "nog@gmail.com" and "+59834563"
    Then I cancel creation

     #User should be able to inactive an user UD-T25

  Scenario: Delete user
   
    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And Add filter for status as active
    Then I search "Test" user to be deleted and get "User has been deleted successfully" message

       #User should be able to add a filter on users for Active Status UD-T425

  Scenario: Add filter Status Active
   
    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And Add filter for status as active

      #User should be able to add a filter on users for Inactive Status UD-T579

  Scenario: Add filter Status Inactive
   
    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And Add filter for status as inactive

      #User should be able to cancel deletion of a user UD-T622

  Scenario: Cancel Delete user
   
    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And Add filter for status as active
    Then I search "Test" user to be deleted but I cancel it
    