Feature: Schools

  Background:
    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to the schools page

  #User should not be able to create a School with more than maximum characters allowed UD-T623
  #User should not be able to create a School with spaces UD-T624

  @smoke
  # Scenario Outline: Create School with <type> details
  #   Given I press on create school button
  #   When I enter <name> and <shortcode> for name and shortcode
  #   Then I should receive error messages <error1> and <error2>
  #   And I close creation of Schools

  #   Examples:
  #     | type                     | name                                                                                                                        | shortcode     | error1                          | error2                                    |
  #     | invalid character length | "Try maximum allowed on automation test insert text as long as possible to break the functionality and get some errors ins" | "4357643JURT" | "Max length of 120 characters." | "Input needs to be maximum 10 characters" |
  #     | blank                    | " "                                                                                                                         | " "           | "The school name is required."  | "The value is not alphanumeric"           |

  #User should be able to create a School UD-T41
  #User should be able to search a School UD-T53

  Scenario: Create School
    Given I press on create school button
    When I enter a valid name and shortcode "Automation School 01" and "ERDF566"
    And I select an existing program
    And I create the new school
    Then a "School has been created successfully" message is displayed
    And I search "Automation School 01" to validate school exists

  #User should not be able to create a School with same shortcode UD-T54  ----*** DEFECT AD-693 ***----

  Scenario: Create Duplicate School
    Given I press on create school button
    When I try to create a duplicate school with the details "Automation School 01" and "ERDF566"
    Then a "ERROR!!! Duplicate shortcode" message is displayed

  #User should be able to create a Program to assign to a School UD-T44 (positive validation)
@focus 
  Scenario: Create Program on School
    Given I press on create school button
    When I enter a valid name and shortcode "Automation School 01" and "ERDF566"
    And I fill all fields for a new program "Automation Program"
    Then I get "Program has been successfully created" message
    And I search new program to validate "Automation Program"

  #User should be able to create a Program to assign to a School UD-T44 (negative validation)

  Scenario: validation for creating programs during school creation
    Given I press on create school button
    When I enter a valid name and shortcode "Automation School 01" and "ERDF566"
    And I enter invalid details for a new program "This is a test for max characters to"
    Then I get error messages "The program name has a max length of 35 characters." "The Grade is required." "The Age Range is required."

  #User should be able to create a Subject to assign to a School UD-T45

  Scenario: Create Subject on School
    Given I press on create school button
    When I enter a valid name and shortcode "Automation School 02" and "RTEYUR"
    And I fill all fields for a new program "Automation Program 02"
    And I press on create subject "Automation Subject" and get "Subject has been successfully created" message
    And I search new subject to validate "Automation Subject"

  #User should be able to create a Category to assign to a School UD-T46

  Scenario: Create Category on School
    Given I press on create school button
    When I enter a valid name and shortcode "Automation School 02" and "RTEYUR"
    And I fill all fields for a new program "Automation Program 02"
    And I press on create subject "Automation Subject"
    And I create a category "Automation Category" checking required message "The Category name is required." then getting "Category has been successfully created" message

  #User should be able to create a SubCategory to assign to a School UD-T47

  Scenario: Create SubCategory on School
    Given I press on create school button
    When I enter a valid name and shortcode "Automation School 02" and "RTEYUR"
    And I fill all fields for a new program "Automation Program 02"
    And I press on create subject "Automation Subject"
    And I select a category
    And I create subcategory "Automation SubCategory" checking required message "The Subcategory name is required." then getting "Subcategory has been successfully created" message

  #User should be able to create edit a School UD-T49

  Scenario: Edit School
    Then I search "Automation School 01" to be edited "Automation Edited 01" "345RTYE" and get "School has been saved successfully" message

  #User should be able to create delete a School UD-T50

  Scenario: Delete School
    Then I search "Automation Edited 01" to be deleted and get "School has been deleted successfully" message

  #User should be able to add columns UD-T51
  @smoke
  Scenario: Add columns
    And I add columns to be shown
    And I check locked columns "ID" and "School Name" are present

  #User should be able to remove columns UD-T611 ----*** DEFECT AD-1628 ***----
  @smoke
  Scenario: Remove columns
    And I remove columns to be shown
    And I check locked column "School Name" is present


  #User should be able to paginate by rows per page UD-T171
  @smoke
  Scenario: Rows Per Page
    Then I can display either "10,25,50" rows in the list

  #User should be able to see correct pagination when applies ascending and descending order UD-T625
  #User should be able to sort by ascending and descending order UD-T178
  #User should be able to see data paginated covering test cases UD-T170,UD-T175,UD-T174,UD-T172,UD-T173
  #User should be able to search and see the pagination according to inserted searching UD-T176
  
  @smoke
  Scenario: Sorting, searching and pagination
    Given I sort the "name" column by asc and desc
    When I search "Automation"
    Then All pagination buttons should work

  #User should be able to create multiple schools UD-T42

  Scenario: Create Multiple Schools with CSV file
    #FILE NEEDS TO BE CHANGED ON FIXTURE FOLDER OR TEST DEPENDING ON ENVIRONMENT AND DATA
    Then Upload correct multiple CSV file
    And I get "Schools have been added successfully" message

  #User should be able to create a school using CSV file UD-T55

  Scenario: Create School with CSV file
    #FILE NEEDS TO BE CHANGED ON FIXTURE FOLDER OR TEST DEPENDING ON ENVIRONMENT AND DATA
    Then Upload correct CSV file
    And I get "Schools have been added successfully" message

  #User should be able to select different subcategories for a program on schools UD-T48 ----*** DEFECT AD-1798 ***----

  Scenario: Subcategories Page Selection
    Given I press on create school button
    When I enter a valid name and shortcode "Automation School 02" and "RTEYUR"
    And I fill all fields for a new program "Automation Program 02"
    And I press on create subject "Automation Subject"
    And I select a category
    And I select all categories and unselect them

  #User should be able to select different programs for a school UD-T43
  @smoke
  Scenario: Programs Page Selection
    Given I press on create school button
    When I enter a valid name and shortcode "Automation School 02" and "RTEYUR"
    And I select all programs and unselect them

  #User should be able to check all pages on programs inside schools UD-T341 ----*** DEFECT AD-75 ***----

  Scenario: Check All Pages on Programs
    Given I press on create school button
    When I enter a valid name and shortcode "Automation School 02" and "RTEYUR"
    And I select all pages on programs

  #User should be able to check the actual page on programs inside schools UD-T342
  @smoke
  Scenario: Check This Page on Programs
    Given I press on create school button
    When I enter a valid name and shortcode "Automation School 02" and "RTEYUR"
    And I select this page on programs

  #User should be able to not select any program inside schools UD-T343
  @smoke
  Scenario: Check None Page on Programs
    Given I press on create school button
    When I enter a valid name and shortcode "Automation School 02" and "RTEYUR"
    And I select none page on programs









