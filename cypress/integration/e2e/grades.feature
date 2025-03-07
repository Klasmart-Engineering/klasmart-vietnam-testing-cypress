Feature: Grades

  Background:
    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to the grades page

  #User should be able to create any grades UD-T135
  #User should be able to search according to inserted searching UD-T134

  Scenario: Create grade
    Given I create a grade "Automation 01"
    Then I get "Grade successfully created" message
    Then I can search for grade "Automation 01"

  #User should be able to edit any customized grade UD-T131

  Scenario: Edit grade
    Given I search "Automation 01" to be edited as "Grade Edited"
    Then I get "Grade successfully saved" message
    Then I can search for edited grade "Grade Edited"

  #User should be able to delete any grade UD-T132

  Scenario: Delete grade
    Given I search for grade "Grade Edited"
    When I delete the grade
    Then I get "Grade successfully deleted" message

  #User should be able to paginate by rows per page UD-T123 ----*** DEFECT AD-2234 ***----

  Scenario: Rows Per Page
    Then I can display either "10,25,50" rows in the list

  #User should be able to see correct pagination when applies ascending and descending order UD-T129
  #User should be able to search and see the pagination according to inserted searching UD-T176
  #User should be able to sort by ascending and descending order UD-T136
  #All paginations buttons are working covering UD-T127, UD-T126, UD-T124, UD-T125, UD-T643
  # ----*** DEFECT AD-2234 ***----

  Scenario: Sorting, searching and pagination
    Given I sort column "1" called "name" by asc and desc
    When I can search for grade "Grade"
    Then All pagination buttons should work

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

  Scenario: Cancel adding filter Progress From
    Given I open the filter from options
    When I press the cancel button
    Then the "Progress From" filter should not be applied
  #User should be able to cancel add a filter on grades for Progress To UD-T147

  Scenario: Cancel adding filter Progress To
    Given I open the filter to options
    When I press the cancel button
    Then the "Progress To" filter should not be applied

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

  Scenario: Cancel editing filter Progress From
    Given I open the filter from options
    When I add the filter
    And I try to edit the values on a filter
    Then I should be able to cancel editing

  #User should be able to cancel edit filter on grades for Progress To UD-T152

  Scenario: Cancel editing filter Progress To Cancel
    Given I open the filter to options
    When I add the filter
    And I try to edit the values on a filter
    Then I should be able to cancel editing

  #User should be able to clear Progress From filter for grades UD-T141
  @smoke
  Scenario: Clear filter Progress From
    Given I open the filter from options
    When I add the filter
    Then I can clear all the filters

  #User should be able to clear Progress To filter for grades UD-T150
  @smoke
  Scenario: Clear filter Progress To
    Given I open the filter to options
    When I add the filter
    Then I can clear all the filters

  #User should be able to clear all filter for grades UD-T140
  @smoke
  Scenario: Clear all filters
    Given I open the filter window
    When I add all possible filters
    Then I can clear all the filters

  #User should be able to disable filter for grades UD-T142
  @smoke
  Scenario: Filter should be disabled if all filters where previously added
    Given I open the filter window
    When I add all possible filters
    Then the filter option should be disabled

  #User should be able to see correct order for values on filters UD-T606
  @smoke
  Scenario: Filter order values
    Given I open the filter window
    When I click on column filters
    Then the order of values is correct on grades

  #User should be able to remove columns UD-T610
  @smoke
  Scenario: Remove columns
    Given I remove columns to be shown
    When I check locked column "Name" is present

  #User should be able to add columns UD-T130
  @smoke
  Scenario: Add columns
    Given I add columns to be shown
    Then columns "ID", "Progress From" and "Progress To" are visible in the list

  #User should be able to add multiple filter, search any grade and change paginations that will no affect the result UD-T335

  Scenario: Add multiple filters search and pagination
    Given I open the filter window
    When I add all possible filters
    Then I can search for grade "Grade"
    And All pagination buttons should work