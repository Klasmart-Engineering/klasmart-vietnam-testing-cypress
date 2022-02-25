Feature: Grades

  #User should be able to create any grades UD-T135

  Scenario: Create grade
    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    Then I create a grade "Automation 01"
    And I get "Grade successfully created" message
    And I search grade "Automation 01"

  #User should be able to edit any customized grade UD-T131

  Scenario: Edit grade
    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    Then I search "Automation 01" to be edited as "Grade Edited" and get "Grade successfully saved" message
    And I search edited grade "Grade Edited"

  #User should be able to delete any grade UD-T132

  Scenario: Delete grade
    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    Then I search "Grade Edited" to be deleted and get "Grade successfully deleted" message

  #User should be able to delete an existent grade from edition mode UD-T133

  Scenario: Delete grade edition
    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    Then I search "Grade Edited" to be deleted on edition and get "Grade successfully deleted" message

  #User should be able to see data paginated UD-T643
  @smoke
  Scenario: Pagination

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And I check all buttons from pagination

  #User should be able to paginate by rows per page UD-T123
  @smoke
  Scenario: Rows Per Page

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    Then I check different rows per page

  #User should be able to see correct pagination when applies ascending and descending order UD-T129
 
  Scenario: Sorting and pagination

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And I sort column by asc and desc
    And I check all buttons from pagination

  #User should be able to search and see the pagination according to inserted searching UD-T176
 
  Scenario: Search and pagination

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And I check all buttons from pagination
    And I search grade "Grade"

  #User should be able to sort by ascending and descending order UD-T136
  @smoke
  Scenario: Sorting

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And I sort column by asc and desc

  #User should be able to see first page from pagination UD-T127
  
  Scenario: First page pagination

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    Then I check first page pagination

  #User should be able to see last page from pagination UD-T126

  Scenario: Last page pagination

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    Then I check last page pagination

  #User should be able to see next page from pagination UD-T124
 
  Scenario: Next page pagination

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    Then I check next page pagination

  #User should be able to see previous page from pagination UD-T125
  
  Scenario: Previous page pagination

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    Then I check previous page pagination

  #User should be able to search according to inserted searching UD-T134
  @smoke
  Scenario: Search

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And I search grade "Grade"

  #User should be able to add a filter on grades for Progress From UD-T139
  @smoke
  Scenario: Add filter Progress From

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And Add filter for progress from
    Then Filter is Added
    And I check that progress filter was added

  #User should be able to add a filter on grades for Progress To UD-T146
  @smoke
  Scenario: Add filter Progress To

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And Add filter for progress to
    Then Filter is Added
    And I check that progress filter was added

  #User should be able to cancel add a filter on grades for Progress From UD-T138
  
  Scenario: Add filter Progress From Cancel

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And Add filter for progress from
    Then I press cancel button

  #User should be able to cancel add a filter on grades for Progress To UD-T147
  
  Scenario: Add filter Progress To Cancel

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And Add filter for progress to
    Then I press cancel button

  #User should be able to edit filter on grades for Progress From UD-T143 and UD-T145
  @smoke
  Scenario: Edit filter Progress From

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And Add filter for progress from
    Then Filter is Added
    And I edit values from added filter on progress
    And I check edited value was saved on progress

  #User should be able to edit filter on grades for Progress To UD-T151 and UD-T153
  @smoke
  Scenario: Edit filter Progress To

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And Add filter for progress to
    Then Filter is Added
    And I edit values from added filter on progress
    And I check edited value was saved on progress

  #User should be able to cancel edit filter on grades for Progress From UD-T144
  
  Scenario: Edit filter Progress From Cancel

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And Add filter for progress from
    Then Filter is Added
    And I edit value from added filter on progress but I press cancel

  #User should be able to cancel edit filter on grades for Progress To UD-T152
  
  Scenario: Edit filter Progress To Cancel

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And Add filter for progress to
    Then Filter is Added
    And I edit value from added filter on progress but I press cancel

  #User should be able to clear Progress From filter for grades UD-T141
  @smoke
  Scenario: Clear filter Progress From

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And Add filter for progress from
    Then Filter is Added
    And I clear the filter applied

  #User should be able to clear Progress To filter for grades UD-T150
  @smoke
  Scenario: Clear filter Progress To

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And Add filter for progress to
    Then Filter is Added
    And I clear the filter applied

  #User should be able to clear all filter for grades UD-T140
  @smoke
  Scenario: Clear all filters

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    Then Add all existent filters
    And I clear all filters applied

  #User should be able to disable filter for grades UD-T142
  @smoke
  Scenario: Disable filter

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    Then Add all existent filters
    And I check filter is disable

  #User should be able to see correct order for values on filters UD-T606
  @smoke
  Scenario: Filter order values

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    Then I check the order of values is correct on grades

  #User should be able to remove columns UD-T610
  @smoke
  Scenario: Remove columns

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And I remove columns to be shown
    And I check locked column "Name" is present

  #User should be able to add columns UD-T130
  @smoke
  Scenario: Add columns

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    And I add columns to be shown
    And I check locked columns "ID" and "School Name" are present

  #User should be able to add multiple filter, search any grade and change paginations that will no affect the result UD-T335
 
  Scenario: Add multiple filters search and pagination

    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section
    Then Add all existent filters
    And I search grade "Grade"
    And I check all buttons from pagination