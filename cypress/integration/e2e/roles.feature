Feature: Roles

  Background:
    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to the roles page

  #User should be able to create a new role UD-T34

  Scenario: Create role
    Then I create a new role with name as "Role AUT01" and description as "Test"
    And I get "A new role has been created successfully" message
    And I search role "Role AUT01"

  #User should be able to edit a role UD-T35

  Scenario: Edit role
    Then I edit an existent role "Role AUT01" with name as "Role AUT00" and description as "Test1"
    And I get "The role has been edited successfully" message
    And I search edited role "Role AUT00"

  #User should be able to delete a role UD-T39

  Scenario: Delete role
    Then I delete an existent role with name as "Role AUT00" and description as "Test1"
    And I get "The role has been deleted successfully" message

  #User should be able to add columns UD-T36
  @smoke
  Scenario: Add columns
    And I add columns to be shown
    And I check locked columns "Id" and "Role" are present

  #User should be able to remove columns UD-T562
@focus   @smoke
  Scenario: Remove columns
    And I remove columns to be shown
    And I check locked column "Role" is present

  #User should be able to search a role UD-T37
  @smoke
  Scenario: Search role
    And I search new role to validate "Teacher"

  #User should be able to see data paginated UD-T40
  @smoke
  Scenario: Pagination
    And All pagination buttons should work

  #User should be able to paginate by rows per page UD-T572
  @smoke
  Scenario: Rows Per Page
    Then I can display either "10,25,50" rows in the list

  #User should be able to see correct pagination when applies ascending and descending order UD-T578
  
  Scenario: Sorting and pagination
    Given I sort the "name" column by asc and desc
    And All pagination buttons should work

  #User should be able to search and see the pagination according to inserted searching UD-T577
 
  Scenario: Search and pagination
    And All pagination buttons should work
    And I search new role to validate "Teacher"

  #User should be able to sort by ascending and descending order UD-T38
  @smoke
  Scenario: Sorting
    Given I sort the "name" column by asc and desc

  #User should be able to see first page from pagination UD-T576
 
  Scenario: First page pagination
    Then I check first page pagination

  #User should be able to see last page from pagination UD-T575
 
  Scenario: Last page pagination
    Then I check last page pagination

  #User should be able to see next page from pagination UD-T573
 
  Scenario: Next page pagination
    Then I check next page pagination

  #User should be able to see previous page from pagination UD-T574
  
  Scenario: Previous page pagination
    Then I check previous page pagination

  #User should be able to cancel creation of a new role UD-T571
 
  Scenario: Cancel create role
    Then I create a new role with name as "Automation Role" and description as "Test" and I cancel it

  #User should not be able to create a role as empty UD-T567
  @smoke
  Scenario: Create role as empty
    Then I create a new role with empty name "   " and empty description as "   "

  #User should not be able to create a role with more than maximum characters UD-T566
  @smoke
  Scenario: Create role with more than maximum characters
    Then I create a new role with more than maximum characters allowed for name "maximum text for name" and description "maximum text for description on"

  #User should not be able to create a role with more than minimum characters UD-T565
  @smoke
  Scenario: Create role with less than minimum characters
    Then I create a new role with less than minimum characters allowed for name "a"

  #User should not be able to create a role with special characters UD-T564
  @smoke
  Scenario: Create role with special characters
    Then I create a new role with special characters not allowed for name "$#$%&/()" and description "$#$%&/()"

  #User should not be able to create a role with same name UD-T563

  Scenario: Create duplicate role
    Then I create a repeated name for role as "Teacher"

  #User should be able clear permissions assigned for a role UD-T569

  Scenario: Clear permissions role
    #CREATE DATA IF IT NOT EXISTS
    Then I edit an existent role "Automation Role" and clear all permissions assigned

  #User should be able copy from role edition UD-T568

  Scenario: Copy from role edition
    #CREATE DATA IF IT NOT EXISTS
    Then I edit an existent role "Automation Role" and copy permission from existing role
    And I get "The role has been edited successfully" message

  #User should be able reset permissions assigned for a role UD-T570

  Scenario: Reset permissions role
    #CREATE DATA IF IT NOT EXISTS
    Then I edit an existent role "Automation Role" and reset permission assigned
    And I get "The role has been edited successfully" message
