Feature: Roles

  #User should be able to create a new role UD-T34

  Scenario: Create role
    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    Then I create a new role with name as "Role AUT01" and description as "Test"
    And I get "A new role has been created successfully" message
    And I search role "Role AUT01"

  #User should be able to edit a role UD-T35

  Scenario: Edit role
    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    Then I edit an existent role "Role AUT01" with name as "Role AUT00" and description as "Test1"
    And I get "The role has been edited successfully" message
    And I search edited role "Role AUT00"

  #User should be able to delete a role UD-T39

  Scenario: Delete role
    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    Then I delete an existent role with name as "Role AUT00" and description as "Test1"
    And I get "The role has been deleted successfully" message

  #User should be able to add columns UD-T36
  @smoke
  Scenario: Add columns

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And I add columns to be shown
    And I check locked columns "Id" and "Role" are present

  #User should be able to remove columns UD-T562
  @smoke
  Scenario: Remove columns

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And I remove columns to be shown
    And I check locked column "Role" is present

  #User should be able to search a role UD-T37
  @smoke
  Scenario: Search role

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And I search new role to validate "Teacher"

  #User should be able to see data paginated UD-T40
  @smoke
  Scenario: Pagination

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And I check all buttons from pagination

  #User should be able to paginate by rows per page UD-T572
  @smoke
  Scenario: Rows Per Page

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    Then I check different rows per page

  #User should be able to see correct pagination when applies ascending and descending order UD-T578
  
  Scenario: Sorting and pagination

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And I sort column by asc and desc
    And I check all buttons from pagination

  #User should be able to search and see the pagination according to inserted searching UD-T577
 
  Scenario: Search and pagination

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And I check all buttons from pagination
    And I search new role to validate "Teacher"

  #User should be able to sort by ascending and descending order UD-T38
  @smoke
  Scenario: Sorting

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And I sort column by asc and desc

  #User should be able to see first page from pagination UD-T576
 
  Scenario: First page pagination

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    Then I check first page pagination

  #User should be able to see last page from pagination UD-T575
 
  Scenario: Last page pagination

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    Then I check last page pagination

  #User should be able to see next page from pagination UD-T573
 
  Scenario: Next page pagination

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    Then I check next page pagination

  #User should be able to see previous page from pagination UD-T574
  
  Scenario: Previous page pagination

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    Then I check previous page pagination

  #User should be able to cancel creation of a new role UD-T571
 
  Scenario: Cancel create role
    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    Then I create a new role with name as "Automation Role" and description as "Test" and I cancel it

  #User should not be able to create a role as empty UD-T567
  @smoke
  Scenario: Create role as empty
    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    Then I create a new role with empty name "   " and empty description as "   "

  #User should not be able to create a role with more than maximum characters UD-T566
  @smoke
  Scenario: Create role with more than maximum characters
    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    Then I create a new role with more than maximum characters allowed for name "maximum text for name" and description "maximum text for description on"

  #User should not be able to create a role with more than minimum characters UD-T565
  @smoke
  Scenario: Create role with less than minimum characters
    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    Then I create a new role with less than minimum characters allowed for name "a"

  #User should not be able to create a role with special characters UD-T564
  @smoke
  Scenario: Create role with special characters
    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    Then I create a new role with special characters not allowed for name "$#$%&/()" and description "$#$%&/()"

  #User should not be able to create a role with same name UD-T563

  Scenario: Create duplicate role
    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    Then I create a repeated name for role as "Teacher"

  #User should be able clear permissions assigned for a role UD-T569

  Scenario: Clear permissions role
    #CREATE DATA IF IT NOT EXISTS
    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    Then I edit an existent role "Automation Role" and clear all permissions assigned

  #User should be able copy from role edition UD-T568

  Scenario: Copy from role edition
    #CREATE DATA IF IT NOT EXISTS
    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    Then I edit an existent role "Automation Role" and copy permission from existing role
    And I get "The role has been edited successfully" message

  #User should be able reset permissions assigned for a role UD-T570

  Scenario: Reset permissions role
    #CREATE DATA IF IT NOT EXISTS
    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    Then I edit an existent role "Automation Role" and reset permission assigned
    And I get "The role has been edited successfully" message
