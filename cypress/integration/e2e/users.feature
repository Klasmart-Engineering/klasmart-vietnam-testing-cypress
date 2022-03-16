Feature: Users

  #User should be able to create a new user UD-T19

  Scenario: Create user
    #DATA SHOULD BE CHANGED FOR EACH RUN
    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And I fill required fields as "Bruno" "Laguana" "brulagua@gmail.com" and "BRU435"
    Then I create a new user and obtain "User has been created successfully" message

  #User should be able to edit an existent user UD-T24

  Scenario: Edit user
    #DATA SHOULD BE CHANGED FOR EACH RUN
    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And Add filter for status as active
    Then Filter is Added
    Then I search "Bruno" user to be edited "Luis" "Marchins" "OIUY7976" and get "User has been saved successfully" message

  #User should be able to inactivate an existent user from edition mode UD-T32

  Scenario: Inactive User from edition mode
    #DATA SHOULD BE CHANGED FOR EACH RUN
    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And Add filter for status as active
    Then Filter is Added
    Then I search "Luis" user to be deleted on edition mode and get "User has been deleted successfully" message

  #User should not be able to inactivate an existent user from edition mode UD-T33
  @smoke
  Scenario: Inactive User from edition mode cancel

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And Add filter for status as active
    Then Filter is Added
    Then I search "Tamara" user to be deleted on edition mode but I cancel

  #User should not be able to add the same exactly user UD-T529

  Scenario: Create duplicated user with same shortcode
    #DATA SHOULD BE CHANGED FOR EACH RUN
    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And I fill required fields as "Micael" "Macabi" "micamactest@gmail.com" and "M1C4M4C"
    Then I create a new user and obtain "User has been created successfully" message
    And I fill required fields as "Micael" "Macabi" "micamactest@gmail.com" and "M1C4M4C"
    And "Short Code already exists." error message
    Then I have got "User already exists" error message

  #User should not be able to add the same exactly user UD-T23

  Scenario: Create duplicated users without shortcode
    #DATA SHOULD BE CHANGED FOR EACH RUN
    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And I fill only required fields as "Miguel" "Straneo" and "miguestratests@gmail.com"
    Then I create a new user and obtain "User has been created successfully" message
    And I fill only required fields as "Miguel" "Straneo" and "miguestratests@gmail.com"
    Then I have got "User already exists" error message

  #User should not be able to create a new user UD-T22

  Scenario: Create user without required fields

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And I fill optional fields "4B3J4"

  #User should not see new user added UD-T20

  Scenario: Cancel user creation

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And fill all existent fields as "Mauro" "Nogeira" "maunog@gmail.com" "457FDH" "non-binary"
    Then I cancel creation

  #User should be able to inactive an user UD-T25

  Scenario: Delete user
    #DATA SHOULD BE CHANGED FOR EACH RUN
    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And Add filter for status as active
    Then Filter is Added
    Then I search "Luis" user to be deleted and get "User has been deleted successfully" message

  #User should be able to add a filter on users for Active Status UD-T425
  @smoke
  Scenario: Add filter Status Active

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And Add filter for status as active
    Then Filter is Added
    And I check that active status filter was added

  #User should be able to add a filter on users for Inactive Status UD-T579
  @smoke
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
    Then Filter is Added
    Then I search "Test" user to be deleted but I cancel it

  #User should be able to add a filter on users for Schools UD-T432 and UD-T434
  @smoke
  Scenario: Add filter Schools

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And Add filter for school
    Then Filter is Added
    And I check that shools filter was added

  #User should be able to add a filter on users for Organization roles UD-T412 and UD-T414
  @smoke
  Scenario: Add filter Organization Roles

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And Add filter for organization roles
    Then Filter is Added
    And I check that organization roles filter was added

  #User should be able to add a filter on users for Phone UD-T443
  @smoke
  Scenario: Add filter Phone

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And Add filter for phone "+59834563"
    Then Filter is Added
    And I check that phone filter was added

  #User should be able to add a filter on users for Email UD-T438
  @smoke
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

  #User should be able to edit filter on users for Organization roles UD-T409 and UD-T411
  @smoke
  Scenario: Edit filter Organization Roles

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And Add filter for organization roles
    Then Filter is Added
    And I edit values from added filter on organization roles
    And I check edited value was saved on organization roles

  #User should be able to edit filter on users for Schools UD-T429 and UD-T431
  @smoke
  Scenario: Edit filter Schools

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And Add filter for school
    Then Filter is Added
    And I edit values from added filter on schools
    And I check edited value was saved on schools

  #User should be able to edit filter on users for Status UD-T422
  @smoke
  Scenario: Edit filter Status

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And Add filter for status as inactive
    Then Filter is Added
    And I edit status value as active
    And I check edited value was saved on status

  #User should be able to edit filter on users for Phone UD-T441
  @smoke
  Scenario: Edit filter Phone

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And Add filter for phone "+59834563"
    Then Filter is Added
    And I edit value from added filter on phone as "+59898723"
    And I check edited value was saved on phone

  #User should be able to edit filter on users for Email UD-T436
  @smoke
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

  #User should be able to clear email filter for users UD-T435
  @smoke
  Scenario: Clear filter Email

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And Add filter for email "lorenatest@test.com"
    Then Filter is Added
    And I clear the filter applied

  #User should be able to clear organization roles filter for users UD-T408
  @smoke
  Scenario: Clear filter Organization Roles

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And Add filter for organization roles
    Then Filter is Added
    And I clear the filter applied

  #User should be able to clear phone filter for users UD-T440
  @smoke
  Scenario: Clear filter Phone

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And Add filter for phone "+59834563"
    Then Filter is Added
    And I clear the filter applied

  #User should be able to clear schools filter for users UD-T428
  @focus @smoke
  Scenario: Clear filter Schools

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And Add filter for school
    Then Filter is Added
    And I clear the filter applied

  #User should be able to clear status filter for users UD-T421
  @smoke
  Scenario: Clear filter Status Active

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And Add filter for status as active
    Then Filter is Added
    And I clear the filter applied

  #User should be able to clear all filter for users UD-T407
  @smoke
  Scenario: Clear all filters

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    Then Add all existent filters and email "lorenatest@test.com" and phone "+59834563"
    And I clear all filters applied

  #User should be able to disable filter for users UD-T415
  @smoke
  Scenario: Disable filter

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    Then Add all existent filters and email "lorenatest@test.com" and phone "+59834563"
    And I check filter is disable

  #User should be able to see correct order for values on filters UD-T581 ----*** DEFECT AD-964 ***----

  Scenario: Filter order values

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    Then I check the order of values is correct on users

  #User should be able to search any word by exact match of it UD-T30
  @smoke
  Scenario: Search users

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And I search "Bruno"

  #User should be able to add columns UD-T26
  @smoke
  Scenario: Add columns

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And I add columns to be shown
    And I check locked columns "Given Name" and "Family Name" are present

  #User should be able to remove columns UD-T28
  @smoke
  Scenario: Remove columns

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And I remove columns to be shown
    And I check locked columns "Given Name" and "Family Name" are present

  #User should be able to sort data from users UD-T169
  @smoke
  Scenario: Sorting

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And I sort column by asc and desc

  #User should be able to see data paginated UD-T29
  @smoke
  Scenario: Pagination

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And I check all buttons from pagination


  #User should be able to paginate by rows per page UD-T162
  @smoke
  Scenario: Rows Per Page

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    Then I check different rows per page

  #User should be able to see correct pagination when applies ascending and descending order UD-T168

  Scenario: Sorting and pagination

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And I sort column by asc and desc
    And I check all buttons from pagination

  #User should be able to search and see the pagination according to inserted searching UD-T167

  Scenario: Search and pagination

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And I check all buttons from pagination
    And I search "Test"

  #User should be able to add multiple filter, search any user and change paginations that will no affect the result UD-T416

  Scenario: Add multiple filters search and pagination

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    Then Add all existent filters and email "lorenatest@test.com" and phone "+5982325463"
    And I search "Andres"
    And I check all buttons from pagination

  #User should be able to see first page from pagination UD-T166

  Scenario: First page pagination

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    Then I check first page pagination

  #User should be able to see last page from pagination UD-T165

  Scenario: Last page pagination

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    Then I check last page pagination

  #User should be able to see next page from pagination UD-T163

  Scenario: Next page pagination

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    Then I check next page pagination

  #User should be able to see previous page from pagination UD-T164

  Scenario: Previous page pagination

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    Then I check previous page pagination

  #User should be able to create multiple users UD-T406

  Scenario: Create Multiple Users with CSV file
    #FILE NEEDS TO BE CHANGED ON FIXTURE FOLDER OR TEST DEPENDING ON ENVIRONMENT
    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    Then Upload correct multiple CSV file
    And I get "Users have been added successfully" message

  #User should be able to create a user using CSV file UD-T31

  Scenario: Create User with CSV file
    #FILE NEEDS TO BE CHANGED ON FIXTURE FOLDER OR TEST DEPENDING ON ENVIRONMENT
    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    Then Upload correct CSV file
    And I get "Users have been added successfully" message


