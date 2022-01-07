Feature: Users

  #User should be able to create a new user UD-T19

  Scenario: Create user
    #DATA SHOULD BE CHANGED FOR EACH RUN
    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And I fill required fields as "Santiago" "Javier" "sanjav@gmail.com" and "S4NT123"
    Then I create a new user and obtain "User has been created successfully" message

  #User should not be able to add the same exactly user UD-T529

  Scenario: Create duplicated user with same shortcode

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And I fill required fields as "Alicia" "Urtazu" "alicetest@gmail.com" and "T3EST45"
    Then I create a new user and obtain "User has been created successfully" message
    And I fill required fields as "Alicia" "Urtazu" "alicetest@gmail.com" and "T3EST45"
    And "Short Code already exists." error message
    Then I have got "User already exists" error message

  #User should not be able to add the same exactly user UD-T23

  Scenario: Create duplicated users without shortcode

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And I fill only required fields as "Ariel" "Urtazu" and "testaut9@gmail.com"
    Then I create a new user and obtain "User has been created successfully" message
    And I fill only required fields as "Ariel" "Urtazu" and "testaut9@gmail.com"
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
    Then Filter is Added
    And I check that active status filter was added

  #User should be able to add a filter on users for Inactive Status UD-T579

  Scenario: Add filter Status Inactive

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And Add filter for status as inactive
    Then Filter is Added
    And I check that inactive status filter was added

  #User should be able to cancel deletion of a user UD-T622

  Scenario: Cancel Delete user

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And Add filter for status as active
    Then I search "Test" user to be deleted but I cancel it


  #User should be able to add a filter on users for Schools UD-T432

  Scenario: Add filter Schools

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And Add filter for school
    Then Filter is Added
    And I check that shools filter was added

  #User should be able to add a filter on users for Organization roles UD-T412

  Scenario: Add filter Organization Roles

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And Add filter for organization roles
    Then Filter is Added
    And I check that organization roles filter was added

  #User should be able to add a filter on users for Phone UD-T443

  Scenario: Add filter Phone

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And Add filter for phone "+59834563"
    Then Filter is Added
    And I check that phone filter was added

  #User should be able to add a filter on users for Email UD-T438

  Scenario: Add filter Email

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And Add filter for email "lorenatest@test.com"
    Then Filter is Added
    And I check that email filter was added

  #User should be able to cancel add a filter on users for Email UD-T439

  Scenario: Add filter Email Cancel

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And Add filter for email "lorenatest@test.com"
    Then I press cancel button

  #User should be able to cancel add a filter on users for Phone UD-T444

  Scenario: Add filter Phone Cancel

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And Add filter for phone "+59834563"
    Then I press cancel button

  #User should be able to cancel add a filter on users for Schools UD-T433

  Scenario: Add filter Schools Cancel

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And Add filter for school
    Then I press cancel button

  #User should be able to cancel add a filter on users for Organization roles UD-T413

  Scenario: Add filter Organization Roles Cancel

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And Add filter for organization roles
    Then I press cancel button

  #User should be able to cancel add a filter on users for Active Status UD-T426

  Scenario: Add filter Status Active Cancel

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And Add filter for status as active
    Then I press cancel button

  #User should be able to cancel add a filter on users for Inactive Status UD-T580

  Scenario: Add filter Status Inactive Cancel

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And Add filter for status as inactive
    Then I press cancel button

  #User should be able to edit filter on users for Organization roles UD-T409

  Scenario: Edit filter Organization Roles

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And Add filter for organization roles
    Then Filter is Added
    And I edit values from added filter on organization roles
    And I check edited value was saved on organization roles

  #User should be able to edit filter on users for Schools UD-T429

  Scenario: Edit filter Schools

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And Add filter for school
    Then Filter is Added
    And I edit values from added filter on schools
    And I check edited value was saved on schools

  #User should be able to edit filter on users for Status UD-T422

  Scenario: Edit filter Status

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And Add filter for status as inactive
    Then Filter is Added
    And I edit status value as active
    And I check edited value was saved on status

  #User should be able to edit filter on users for Phone UD-T441

  Scenario: Edit filter Phone

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And Add filter for phone "+59834563"
    Then Filter is Added
    And I edit value from added filter on phone as "+59898723"
    And I check edited value was saved on phone

  #User should be able to edit filter on users for Email UD-T436

  Scenario: Edit filter Email

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And Add filter for email "lorenatest@test.com"
    Then Filter is Added
    And I edit value from added filter on email as "alicetest@gmail.com"
    And I check edited value was saved on email

  #User should be able to cancel edit filter on users for Email UD-T437

  Scenario: Edit filter Email Cancel

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And Add filter for email "lorenatest@test.com"
    Then Filter is Added
    And I edit value from added filter on email "alicetest@gmail.com" but I press cancel

  #User should be able to cancel edit filter on users for Phone UD-T442

  Scenario: Edit filter Phone Cancel

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And Add filter for phone "+59834563"
    Then Filter is Added
    And I edit value from added filter on phone "+59898723" but I press cancel

  #User should be able to cancel edit filter on users for Schools UD-T430

  Scenario: Edit filter Schools Cancel

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And Add filter for school
    Then Filter is Added
    And I edit value from added filter on schools but I press cancel

  #User should be able to cancel edit filter on users for Organization Roles UD-T410

  Scenario: Edit filter Organization Roles Cancel

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And Add filter for organization roles
    Then Filter is Added
    And I edit value from added filter on organization roles but I press cancel

  #User should be able to cancel edit filter on users for Status UD-T423

  Scenario: Edit filter Status Cancel

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And Add filter for status as inactive
    Then Filter is Added
    And I edit status value as active but I press cancel