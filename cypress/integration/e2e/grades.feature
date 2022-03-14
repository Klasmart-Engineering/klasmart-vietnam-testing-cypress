Feature: Grades

  Background:
    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to the grades page

  #User should be able to create any grades UD-T135

  Scenario: Create grade
    Given I create a grade "Automation 01"
    When I get a "Grade successfully created" message
    Then I can search for grade "Automation 01"

  #User should be able to edit any customized grade UD-T131

  Scenario: Edit grade
    Given I search "Automation 01" to be edited as "Grade Edited" 
    When I get a "Grade successfully saved" message
    Then I can search for edited grade "Grade Edited"

  #User should be able to delete any grade UD-T132

  Scenario: Delete grade
    Given I search for grade "Grade Edited"
    When I delete the grade
    Then I get a "Grade successfully deleted" message

  #User should be able to see data paginated UD-T643
  @smoke
  Scenario: Pagination
    And I check all buttons from pagination

  #User should be able to paginate by rows per page UD-T123
  @smoke
  Scenario: Rows Per Page
    Then I check different rows per page

  #User should be able to see correct pagination when applies ascending and descending order UD-T129

  Scenario: Sorting and pagination
    And I sort column by asc and desc
    And I check all buttons from pagination

  #User should be able to search and see the pagination according to inserted searching UD-T176

  Scenario: Search and pagination
    And I check all buttons from pagination
    And I can search for grade "Grade"

  #User should be able to sort by ascending and descending order UD-T136
  @smoke
  Scenario: Sorting
    And I sort column by asc and desc

  #User should be able to see first page from pagination UD-T127

  Scenario: First page pagination
    Then I check first page pagination

  #User should be able to see last page from pagination UD-T126

  Scenario: Last page pagination
    Then I check last page pagination

  #User should be able to see next page from pagination UD-T124

  Scenario: Next page pagination
    Then I check next page pagination

  #User should be able to see previous page from pagination UD-T125

  Scenario: Previous page pagination
    Then I check previous page pagination

  #User should be able to search according to inserted searching UD-T134
  @smoke
  Scenario: Search
    And I can search for grade "Grade"

  #User should be able to add a filter on grades for Progress From UD-T139
  @smoke
  Scenario: Add filter Progress From
    Given I open the filter from options
    When I add the filter
    Then the progress filter should be applied

  #User should be able to add a filter on grades for Progress To UD-T146
  @smoke
  Scenario: Add filter Progress To
    Given I open the filter to options
    When I add the filter
    Then the progress filter should be applied

  #User should be able to cancel add a filter on grades for Progress From UD-T138

  Scenario: Add filter Progress From Cancel
    Given I open the filter from options
    Then I press cancel button

  #User should be able to cancel add a filter on grades for Progress To UD-T147

  Scenario: Add filter Progress To Cancel
    Given I open the filter to options
    Then I press cancel button

  #User should be able to edit filter on grades for Progress From UD-T143 and UD-T145
  @smoke
  Scenario: Edit filter Progress From
    Given I open the filter from options
    When I add the filter
    And I edit the values on a filter
    Then the edited value should be saved on progress

  #User should be able to edit filter on grades for Progress To UD-T151 and UD-T153
  @smoke
  Scenario: Edit filter Progress To
    Given I open the filter to options
    When I add the filter
    And I edit the values on a filter
    Then the edited value should be saved on progress

  #User should be able to cancel edit filter on grades for Progress From UD-T144

  Scenario: Edit filter Progress From Cancel
    Given I open the filter from options
    When I add the filter
    And I try to edit the values on a filter 
    Then I should be able to cancel editing

  #User should be able to cancel edit filter on grades for Progress To UD-T152

  Scenario: Edit filter Progress To Cancel
    Given I open the filter to options
    When I add the filter
    And I try to edit the values on a filter
    Then I should be able to cancel editing

  #User should be able to clear Progress From filter for grades UD-T141
  @smoke
  Scenario: Clear filter Progress From
    Given I open the filter from options
    When I add the filter
    And I clear the filter applied

  #User should be able to clear Progress To filter for grades UD-T150
  @smoke
  Scenario: Clear filter Progress To
    Given I open the filter to options
    When I add the filter
    And I clear the filter applied

  #User should be able to clear all filter for grades UD-T140
  @smoke
  Scenario: Clear all filters
    Then Add all existent filters
    And I clear all filters applied

  #User should be able to disable filter for grades UD-T142
  @smoke
  Scenario: Disable filter
    Then Add all existent filters
    And I check filter is disable

  #User should be able to see correct order for values on filters UD-T606
  @smoke
  Scenario: Filter order values
    Then I check the order of values is correct on grades

  #User should be able to remove columns UD-T610
  @smoke
  Scenario: Remove columns
    And I remove columns to be shown
    And I check locked column "Name" is present

  #User should be able to add columns UD-T130
  @smoke
  Scenario: Add columns
    And I add columns to be shown
    And I check locked columns "ID" and "School Name" are present

  #User should be able to add multiple filter, search any grade and change paginations that will no affect the result UD-T335

  Scenario: Add multiple filters search and pagination
    Then Add all existent filters
    And I can search for grade "Grade"
    And I check all buttons from pagination