Feature: Schools

  Background:
    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to the schools page

  #User should not be able to create a School with more than maximum characters allowed UD-T623
  @smoke
  Scenario: Create School with maximum characters
    Then I press on create school button
    And I add maximum characters on fields "Try maximum allowed on automation test insert text as long as possible to break the functionality and get some errors ins" and "4357643JURT"
    And I get following error messages "Max length of 120 characters." and "Input needs to be maximum 10 characters"
    And I close creation of Schools


  #User should not be able to create a School with spaces UD-T624
  @smoke
  Scenario: Create School with spaces
    Then I press on create school button
    And I add spaces on fields " " and " "
    And I get following error messages "The school name is required." and "The value is not alphanumeric"
    And I close creation of Schools

  #User should be able to create a School UD-T41

  Scenario: Create School
    Then I press on create school button
    And I add correct data on fields "Automation School 01" and "ERDF566"
    And I select an existing program
    And I create a new school and get "School has been created successfully" message
    And I search new school to validate "Automation School 01"

  #User should not be able to create a School with same shortcode UD-T54  ----*** DEFECT AD-693 ***----

  Scenario: Create Duplicate School
    Then I press on create school button
    And I add correct data on fields "Automation School 01" and "ERDF566"
    And I select an existing program
    And I create a new school and get "School has been created successfully" message
    And I search new school to validate "Automation School 01"
    Then I press on create school button
    And I add correct data on fields "Automation School 01" and "ERDF566"
    And I select other existing programs
    And I create a new school and get "ERROR!!! Duplicate shortcode" message
    And I search new school to validate "Automation School 01"


  #User should be able to create a Program to assign to a School UD-T44

  Scenario: Create Program on School
    Then I press on create school button
    And I add correct data on fields "Automation School 01" and "ERDF566"
    And I fill all fields for a new program "Automation Program"
    And I add maximum value "This is a test for max characters to"
    And I get error messages "The program name has a max length of 35 characters." "The Grade is required." "The Age Range is required."
    And I add valid data for a new program "Automation Program"
    And I create a new program and get "Program has been successfully created" message
    And I search new program to validate "Automation Program"


  #User should be able to create a Subject to assign to a School UD-T45

  Scenario: Create Subject on School
    Then I press on create school button
    And I add correct data on fields "Automation School 02" and "RTEYUR"
    And I fill all fields for a new program "Automation Program 02"
    And I press on create subject "Automation Subject" and get "Subject has been successfully created" message
    And I search new subject to validate "Automation Subject"

  #User should be able to create a Category to assign to a School UD-T46

  Scenario: Create Category on School
    Then I press on create school button
    And I add correct data on fields "Automation School 02" and "RTEYUR"
    And I fill all fields for a new program "Automation Program 02"
    And I press on create subject "Automation Subject"
    And I create a category "Automation Category" checking required message "The Category name is required." then getting "Category has been successfully created" message

  #User should be able to create a SubCategory to assign to a School UD-T47

  Scenario: Create SubCategory on School
    Then I press on create school button
    And I add correct data on fields "Automation School 02" and "RTEYUR"
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

  #User should be able to search a School UD-T53
  @smoke
  Scenario: Search school
    And I search new school to validate "Automation School"

  #User should be able to see data paginated UD-T170
  @smoke
  Scenario: Pagination
    And All pagination buttons should work


  #User should be able to paginate by rows per page UD-T171
  @smoke
  Scenario: Rows Per Page
    Then I check different rows per page

  #User should be able to see correct pagination when applies ascending and descending order UD-T625
 
  Scenario: Sorting and pagination
    And I sort column by asc and desc
    And All pagination buttons should work

  #User should be able to search and see the pagination according to inserted searching UD-T176
  
  Scenario: Search and pagination
    And All pagination buttons should work
    And I search "Automation"

  #User should be able to sort by ascending and descending order UD-T178
  @smoke
  Scenario: Sorting
    And I sort column by asc and desc

  #User should be able to see first page from pagination UD-T175
  
  Scenario: First page pagination
    Then I check first page pagination

  #User should be able to see last page from pagination UD-T174

  Scenario: Last page pagination
    Then I check last page pagination

  #User should be able to see next page from pagination UD-T172
  
  Scenario: Next page pagination
    Then I check next page pagination

  #User should be able to see previous page from pagination UD-T173
  
  Scenario: Previous page pagination
    Then I check previous page pagination

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
    Then I press on create school button
    And I add correct data on fields "Automation School 02" and "RTEYUR"
    And I fill all fields for a new program "Automation Program 02"
    And I press on create subject "Automation Subject"
    And I select a category
    And I select all categories and unselect them

  #User should be able to select different programs for a school UD-T43
  @smoke
  Scenario: Programs Page Selection
    Then I press on create school button
    And I add correct data on fields "Automation School 02" and "RTEYUR"
    And I select all programs and unselect them

  #User should be able to check all pages on programs inside schools UD-T341 ----*** DEFECT AD-75 ***----
 
  Scenario: Check All Pages on Programs
    Then I press on create school button
    And I add correct data on fields "Automation School 02" and "RTEYUR"
    And I select all pages on programs

  #User should be able to check the actual page on programs inside schools UD-T342
  @smoke
  Scenario: Check This Page on Programs
    Then I press on create school button
    And I add correct data on fields "Automation School 02" and "RTEYUR"
    And I select this page on programs

  #User should be able to not select any program inside schools UD-T343
  @smoke
  Scenario: Check None Page on Programs
    Then I press on create school button
    And I add correct data on fields "Automation School 02" and "RTEYUR"
    And I select none page on programs









