Feature: Age Ranges

  Background:
    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to age ranges page

  #User should be able to create any age range UD-T155
  #DATA NEEDS TO BE CHANGED FOR EACH RUN

  Scenario: Create age range
    Given I create an age range from "44" months to "24" years
    Then I get "Age range successfully created" message

  #User should be able to edit any age range UD-T156
  #DATA NEEDS TO BE CHANGED FOR EACH RUN

  Scenario: Edit age range
    Given I edit an age range from "43" months to "37" years
    Then I get "Age range successfully saved" message

  #User should be able to delete any age range UD-T158
  #DATA NEEDS TO BE CHANGED FOR EACH RUN

  Scenario: Delete age range
    Given I delete an age range
    Then I get "Age range successfully deleted" message

  #User should be able to delete any age range from edition mode UD-T157
  #DATA NEEDS TO BE CHANGED FOR EACH RUN

  Scenario: Delete from edition mode
    Given I press edit on an age range
    When I press delete button
    Then I get "Age range successfully deleted" message

  #User should be able to paginate by rows per page UD-T206
  @smoke
  Scenario: Rows Per Page
    Then I can display either "10,25,50" rows in the list

  #User should be able to see correct pagination when applies ascending and descending order UD-T212
  #User should be able to see correct pagination by pressing previous page button UD-T208
  #User should be able to paginate the information provided for age ranges UD-T154
  #User should be able to see correct pagination by pressing next page button UD-T207
  #User should be able to see last page from pagination UD-T209
  #User should be able to see first page from pagination UD-T210
  #User should be able to sort data from age ranges by ID or Age Range column UD-T213
  #User should be able to order age ranges by ascending and descending order UD-T160

  Scenario: Sorting and pagination
    Given I sort column "1" called "ageRange" by asc and desc
    Then All pagination buttons should work

  #User should not be able to create same age range UD-T585
  @smoke
  Scenario: Duplicate age range
    Given I create an age range from "0" years to "99" years
    Then I get "Sorry, something went wrong, please try again" message

  #User should not be able to create empty or less than minimum age range UD-T583
  #User should not be able to create any age range with more than maximum value UD-T584
  @smoke
  Scenario Outline: Create age ranges with <type> details
    When I enter an age range value for from <from> and <to>
    Then I should receive error messages <message1> and <message2>

    Examples:
      | type    | from  | to    | message1 | message2 |
      | minimum | "-1"  | "0"   | "Min 0"  | "Min 1"  |
      | maximum | "100" | "100" | "Max 99" | "Max 99" |
      | blank   | " "   | " "   | "Min 0"  | "Min 1"  |


  #User should be able to filter data from age ranges by columns UD-T159
  @smoke
  Scenario: Remove columns
    Given I remove columns to be shown
    When I check locked column "Age Range" is present

  #User should be able to filter data from programs by columns UD-T159
  @smoke
  Scenario: Add columns
    Given I add columns to be shown
    When I check locked columns "ID" and "Age Range" are present

  #User should be able to cancel creation of age range UD-T586
  @smoke
  Scenario: Cancel create age range
    When I enter an age range value for from "40" and "10"
    Then I cancel creation of age range

