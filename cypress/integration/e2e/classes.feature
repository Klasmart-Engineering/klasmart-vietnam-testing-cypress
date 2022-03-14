Feature: Classes

  Background:
    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to actual section

  #User should be able to create any class UD-T592
  #DATA NEEDS TO BE CHANGES FOR EACH RUN
  Scenario: Create class
    Given I create a class "Aut class 01"
    When I get "Class created" message
    Then I search class "Aut class 01"

  #User should be able to edit any class UD-T106
  #DATA NEEDS TO BE CHANGES FOR EACH RUN

  Scenario: Edit class
    Given Add filter for status as active
    When Filter is Added
    Then I search "Aut class 01" to be edited as "Edit class 01" and get "Class has been saved successfully" message
    And I search edited grade "Edit class 01"

  #User should be able to delete any grade UD-T132

  Scenario: Delete grade
    Given Add filter for status as active
    When Filter is Added
    Then I search "Edit class 01" to be deleted and get "Class has been deleted successfully" message

  #User should be able to delete an existent class from edition mode UD-T582
  #DATA NEEDS TO BE CHANGES FOR EACH RUN

  Scenario: Delete class edition
    Given Add filter for status as active
    When Filter is Added
    Then I search "Aut class 02" to be deleted on edition and get "Class has been deleted successfully" message

  #User should be able to see data paginated UD-T102
  @smoke
  Scenario: Pagination
    Given I check all buttons from pagination

  #User should be able to paginate by rows per page UD-T179
  @smoke
  Scenario: Rows Per Page
    Given I check different rows per page

  #User should be able to see first page from pagination UD-T183

  Scenario: First page pagination
    Given I check first page pagination

  #User should be able to see last page from pagination UD-T182

  Scenario: Last page pagination
    Given I check last page pagination

  #User should be able to see next page from pagination UD-T180

  Scenario: Next page pagination
    Given I check next page pagination

  #User should be able to see previous page from pagination UD-T181

  Scenario: Previous page pagination
    Given I check previous page pagination

  #User should be able to search according to inserted searching UD-T104
  @smoke
  Scenario: Search
    Given I search class "Class"

  #User should be able to sort by ascending and descending order UD-T188

  Scenario: Sorting
    Given I sort column by asc and desc

  #User should be able to see correct order for values on filters UD-T608
  @smoke
  Scenario: Filter order values
    Given I check the order of values is correct on classes

  #User should be able to remove columns UD-T656
  @smoke
  Scenario: Remove columns
    Given I remove columns to be shown
    When I check locked column "Class" is present

  #User should be able to add columns UD-T105
  @smoke
  Scenario: Add columns
    Given I add columns to be shown
    When I check locked columns "ID" and "Class" are present

  #User should be able to see error for maximum characters on classes name UD-T591
  @smoke
  Scenario: Maximum characters
    Given I add more than maximum characters "more than maximum characters allowed for name c" on class name field
    When I should see an error message "The class name has a max length of 45 characters"

  #User should be able to see required message on classes name UD-T588
  @smoke
  Scenario: Required field message
    Given I left in blank class name " "
    When I should see an error message "The class name is required"

  #User should be able to see button create enable if minimum character were introduced on class name UD-T590
  @smoke
  Scenario: Minimum character
    Given I add minimum character on class name "A"
    When I check the create button should be enable

  #User should be able to see create class window UD-T587
  @smoke
  Scenario: Create class window
    Given I press on create class button
    When new window is open I should see "Create class" message

  #User should not be able to create a class with white spaces UD-T589
  @smoke
  Scenario: White spaces
    Given I add white spaces instead characters "     "
    When I check the create button should be disable

  #User should be able to add a filter on classes for Age Ranges From UD-T189
  @smoke
  Scenario: Add filter Age Ranges From
    Given Add filter for age ranges from
    When Filter is Added
    Then I check that age ranges filter was added