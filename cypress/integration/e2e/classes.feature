Feature: Classes

  Background:
    Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
    When I navigate to classes section

  #User should be able to create any class UD-T592
  #DATA NEEDS TO BE CHANGES FOR EACH RUN
  Scenario: Create class
    Given I create a class "Aut class 01"
    When I get a "Class created" message
    Then I search class "Aut class 01"

  #User should be able to edit any class UD-T106
  #DATA NEEDS TO BE CHANGES FOR EACH RUN

  Scenario: Edit class
    Given I Add a filter for status as active
    When I search "Aut class 01" to edit the class name to be "Edit class 01" 
    Then I get a "Class has been saved successfully" message
    And I can search for edited class "Edit class 01"

  #User should be able to delete any grade UD-T132

  Scenario: Delete grade
    Given I Add a filter for status as active
    When I search "Edit class 01" to be deleted
    Then I get a "Class has been deleted successfully" message

  #User should be able to delete an existent class from edition mode UD-T582
  #DATA NEEDS TO BE CHANGES FOR EACH RUN

  Scenario: Delete class edition
    Given I Add a filter for status as active
    When I search "Aut class 02" to be deleted on edition
    Then I get a "Class has been deleted successfully" message

  #User should be able to see data paginated UD-T102
  @smoke
  Scenario: Pagination
    Given All pagination buttons should work

  #User should be able to paginate by rows per page UD-T179
  @smoke
  Scenario: Rows Per Page
    Then I can display either "10,25,50" rows in the list

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

  #User should be able to sort by ascending and descending order UD-T188 ----*** DEFECT AD-2246 ***----

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

  #User should be able to add a filter on classes for Age Ranges From UD-T189 and UD-T191
  @smoke
  Scenario: Add filter Age Ranges From
    Given Add filter for age ranges from
    When Filter is Added
    Then I check that age ranges filter was added

  #User should be able to add a filter on classes for Age Ranges To UD-T198 and UD-T200
  @smoke
  Scenario: Add filter Age Ranges To
    Given Add filter for age ranges to
    When Filter is Added
    Then I check that age ranges to filter was added

  #User should be able to cancel add a filter on classes for Age Ranges From UD-T190

  Scenario: Add filter Age Ranges From Cancel
    Given Add filter for age ranges from
    When I press cancel button

  #User should be able to cancel add a filter on classes for Age Ranges To UD-T199

  Scenario: Add filter Age Ranges To Cancel
    Given Add filter for age ranges to
    When I press cancel button

  #User should be able to edit filter on classes for Age Ranges From UD-T194 and UD-T196
  @smoke
  Scenario: Edit filter Age Ranges From
    Given Add filter for age ranges from
    When Filter is Added
    Then I edit values from added filter on age ranges from
    And I check edited value was saved on age ranges from

  #User should be able to edit filter on classes for Age Ranges To UD-T203 and UD-T205
  @smoke
  Scenario: Edit filter Age Ranges To
    Given Add filter for age ranges to
    When Filter is Added
    Then I edit values from added filter on age ranges to
    And I check edited value was saved on age ranges to

  #User should be able to cancel edit filter on classes for Age Ranges From UD-T195

  Scenario: Edit filter Age Ranges From Cancel
    Given Add filter for age ranges from
    When Filter is Added
    Then I edit value from added filter on age ranges from but I press cancel

  #User should be able to cancel edit filter on classes for Age Ranges To UD-T204

  Scenario: Edit filter Age Ranges To Cancel
    Given Add filter for age ranges to
    When Filter is Added
    Then I edit value from added filter on age ranges to but I press cancel

  #User should be able to clear Age Ranges From filter for classes UD-T296
  @smoke
  Scenario: Clear filter Age Ranges From
    Given Add filter for age ranges from
    When Filter is Added
    Then I clear the filter applied

  #User should be able to clear Age Ranges To filter for classes UD-T297
  @smoke
  Scenario: Clear filter Age Ranges To
    Given Add filter for age ranges from
    When Filter is Added
    Then I clear the filter applied

  #User should be able to add a filter on classes for Grades UD-T238 and UD-T240
  @smoke
  Scenario: Add filter Grades
    Given Add filter for grades
    When Filter is Added
    Then I check that grades filter was added

  #User should be able to cancel add a filter on classes for Grades UD-T239

  Scenario: Add filter Grades Cancel
    Given Add filter for grades
    When I press cancel button

  #User should be able to edit filter on classes for Grades UD-T243 and UD-T245
  @smoke
  Scenario: Edit filter Grades
    Given Add filter for grades
    When Filter is Added
    Then I edit values from added filter on grades
    And I check edited value was saved on grades

  #User should be able to cancel edit filter on classes for Grades UD-T244

  Scenario: Edit filter Grades Cancel
    Given Add filter for grades
    When Filter is Added
    Then I edit value from added filter on grades to but I press cancel

  #User should be able to clear Grades To filter for classes UD-T298
  @smoke
  Scenario: Clear filter Grades
    Given Add filter for grades
    When Filter is Added
    Then I clear the filter applied

  #User should be able to add a filter on classes for Programs UD-T222 and UD-T224
  @smoke
  Scenario: Add filter Programs
    Given Add filter for programs
    When Filter is Added
    Then I check that programs filter was added

  #User should be able to cancel add a filter on classes for Programs UD-T223

  Scenario: Add filter Programs Cancel
    Given Add filter for programs
    When I press cancel button

  #User should be able to edit filter on classes for Programs UD-T227 and UD-T229
  @smoke
  Scenario: Edit filter Programs
    Given Add filter for programs
    When Filter is Added
    Then I edit values from added filter on programs
    And I check edited value was saved on programs

  #User should be able to cancel edit filter on classes for Programs UD-T228

  Scenario: Edit filter Programs Cancel
    Given Add filter for programs
    When Filter is Added
    Then I edit value from added filter on programs to but I press cancel

  #User should be able to clear Programs To filter for classes UD-T299

  @smoke
  Scenario: Clear filter Programs
    Given Add filter for programs
    When Filter is Added
    Then I clear the filter applied

  #User should be able to add a filter on classes for Schools UD-T214 and UD-T216
  @smoke
  Scenario: Add filter Schools
    Given Add filter for school
    When Filter is Added
    Then I check that shools filter was added

  #User should be able to cancel add a filter on classes for Schools UD-T215

  Scenario: Add filter Schools Cancel
    Given Add filter for school
    When I press cancel button

  #User should be able to edit filter on classes for Schools UD-T219 and UD-T221
  @smoke
  Scenario: Edit filter Schools
    Given Add filter for school
    When Filter is Added
    Then I edit values from added filter on schools
    And I check edited value was saved on schools

  #User should be able to cancel edit filter on classes for Schools UD-T220

  Scenario: Edit filter Schools Cancel
    Given Add filter for school
    When Filter is Added
    Then I edit value from added filter on schools but I press cancel

  #User should be able to clear Schools To filter for classes UD-T295
  @smoke
  Scenario: Clear filter Schools
    Given Add filter for school
    When Filter is Added
    Then I clear the filter applied

  #User should be able to add a filter on users for Active Status UD-T246
  @smoke
  Scenario: Add filter Status Active
    Given Add filter for status as active
    When Filter is Added
    Then I check that active status filter was added

  #User should be able to add a filter on users for Inactive Status UD-T658
  @smoke
  Scenario: Add filter Status Inactive
    Given Add filter for status as inactive
    When Filter is Added
    Then I check that inactive status filter was added

  #User should be able to cancel add a filter on classes for Status active UD-T247

  Scenario: Add filter Status Active Cancel
    Given Add filter for status as active
    When I press cancel button

  #User should be able to cancel add a filter on classes for Status inactive UD-T659

  Scenario: Add filter Status Inactive Cancel
    Given Add filter for status as inactive
    When I press cancel button

  #User should be able to edit filter on classes for Status UD-T251
  @smoke
  Scenario: Edit filter Status
    Given Add filter for status as inactive
    When Filter is Added
    Then I edit status value as active
    And I check edited value was saved on status

  #User should be able to cancel edit filter on classes for Status UD-T252

  Scenario: Edit filter Status Cancel
    Given Add filter for status as inactive
    When Filter is Added
    Then I edit status value as active but I press cancel

  #User should be able to clear Status To filter for classes UD-T301
  @smoke
  Scenario: Clear filter Status
    Given Add filter for status as active
    When Filter is Added
    Then I clear the filter applied

  #User should be able to add a filter on classes for Subjects UD-T230 and UD-T232
  @smoke
  Scenario: Add filter Subjects
    Given Add filter for subjects
    When Filter is Added
    Then I check that subjects filter was added

  #User should be able to cancel add a filter on classes for Subjects UD-T231

  Scenario: Add filter Subjects Cancel
    Given Add filter for subjects
    When I press cancel button

  #User should be able to edit filter on classes for Subjects UD-T235 and UD-T237
  @smoke
  Scenario: Edit filter Subjects
    Given Add filter for subjects
    When Filter is Added
    Then I edit values from added filter on subjects
    And I check edited value was saved on subjects

  #User should be able to cancel edit filter on classes for Subjects UD-T236

  Scenario: Edit filter Subjects Cancel
    Given Add filter for subjects
    When Filter is Added
    Then I edit value from added filter on subjects to but I press cancel

  #User should be able to clear Subjects To filter for classes UD-T300
  @smoke
  Scenario: Clear filter Subjects
    Given Add filter for subjects
    When Filter is Added
    Then I clear the filter applied

  #User should be able to clear all filter for classes UD-T217
  @smoke
  Scenario: Clear all filters
    Given Add all existent filters
    Then I clear all filters applied

  #User should be able to disable filter for classes UD-T99
  @smoke
  Scenario: Disable filter
    Given Add all existent filters
    Then I check filter is disable

  #User should be able to add multiple filter, search any user and change paginations that will no affect the result UD-T337

  Scenario: Add multiple filters search and pagination
    Given Add all existent filters
    Then I search class "Class"
    And All pagination buttons should work

  #User should be able to search and see the pagination according to inserted searching UD-T184

  Scenario: Search and pagination
    And All pagination buttons should work
    Then I search class "Class"

  #User should be able to create multiple classes UD-T101

  Scenario: Create Multiple Classes with CSV file
    #FILE NEEDS TO BE CHANGED ON FIXTURE FOLDER OR TEST DEPENDING ON ENVIRONMENT
    Then Upload correct multiple CSV file
    And I get "Classes have been added successfully" message

  #User should be able to create a class using CSV file UD-T111

  Scenario: Create Class with CSV file
    #FILE NEEDS TO BE CHANGED ON FIXTURE FOLDER OR TEST DEPENDING ON ENVIRONMENT
    Then Upload correct CSV file
    And I get "Classes have been added successfully" message

  #User should be able to see the class roster UD-T109

  Scenario: Access Class Roster
    Given Add filter for status as active
    When Filter is Added
    Then I press over an existent class "Class"
    And I should see "Class Roster" window


  #User should be able to add users on class roster UD-T110

  Scenario: Add Users to Class Roster
    Given Add filter for status as active
    When Filter is Added
    Then I press over an existent class "Class"
    And I should be able to add users


  #User should be able to remove users on class roster UD-T344

  Scenario: Remove Users from Class Roster
    Given Add filter for status as active
    When Filter is Added
    Then I press over an existent class "Class"
    And I should be able to remove users


