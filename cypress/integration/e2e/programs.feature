Feature: Programs

    Background:
        Given I sign in with valid credentials "lorenab+organization@bluetrailsoft.com" and "Organization01!"
        When I navigate to programs page

    #User should be able to create new programs UD-T65

    Scenario: Create program
        Given I create a program "Automation Program"
        Then I get "Program has been successfully created" message
        Then I can search for program "Automation Program"

    #User should be able to edit any customized program UD-T70

    Scenario: Edit program
        Given I search program "Automation Program" to be edited as "Automation Program Edited"
        Then I get "Program has been successfully saved" message
        Then I can search for edited program "Automation Program Edited"

    #User should be able to delete any program UD-T71

    Scenario: Delete program
        Then I can search for program "Automation Program Edited"
        And I delete the program
        Then I get "Program successfully deleted" message

    #User should be able to paginate by rows per page UD-T58
    @smoke
    Scenario: Rows Per Page
        Then I can display either "10,25,50" rows in the list

    #User should be able to see first page from pagination UD-T62
    #User should be able to see last page from pagination UD-T61
    #User should be able to see correct pagination by pressing next page button UD-T59
    #User should be able to see correct pagination by pressing previous page button UD-T60
    #User should be able to search and see the pagination according to inserted searching UD-T63
    #User should be able to see correct pagination when applies ascending and descending order UD-T64 and UD-T57
    @smoke
    Scenario: Sorting, searching and pagination
        Given I sort column "1" called "name" by asc and desc
        When I can search for program "Automation Program"
        Then All pagination buttons should work

    #User should be able to add multiple filter, search any program and change paginations that will no affect the result UD-T274

    Scenario: Add multiple filters search and pagination
        Given Add all existent filters
        Then I can search for program "Automation Program"
        And All pagination buttons should work

    #User should be able to add a filter on programs for Grades UD-T75 and UD-T76
    @smoke
    Scenario: Add filter Grades
        Given Add filter for grades
        When I add the filter
        Then I check that grades filter was added

    #User should be able to cancel add a filter on programs for Grades UD-T77

    Scenario: Add filter Grades Cancel
        Given Add filter for grades
        When I press cancel button

    #User should be able to edit filter on programs for Grades UD-T78 and UD-T79
    @smoke
    Scenario: Edit filter Grades
        Given Add filter for grades
        When I add the filter
        Then I edit values from added filter on grades
        And I check edited value was saved on grades

    #User should be able to cancel edit filter on programs for Grades UD-T80

    Scenario: Edit filter Grades Cancel
        Given Add filter for grades
        When I add the filter
        Then I edit value from added filter on grades to but I press cancel

    #User should be able to clear Grades To filter for programs UD-T81
    @smoke
    Scenario: Clear filter Grades
        Given Add filter for grades
        When I add the filter
        Then I clear the filter applied

    #User should be able to add a filter on programs for Age Ranges From UD-T275 and UD-T277
    @smoke
    Scenario: Add filter Age Ranges From
        Given Add filter for age ranges from
        When I add the filter
        Then I check that age ranges filter was added

    #User should be able to add a filter on programs for Age Ranges To UD-T85 and UD-T83
    @smoke
    Scenario: Add filter Age Ranges To
        Given Add filter for age ranges to
        When I add the filter
        Then I check that age ranges to filter was added

    #User should be able to cancel add a filter on programs for Age Ranges From UD-T276

    Scenario: Add filter Age Ranges From Cancel
        Given Add filter for age ranges from
        When I press cancel button

    #User should be able to cancel add a filter on programs for Age Ranges To UD-T84

    Scenario: Add filter Age Ranges To Cancel
        Given Add filter for age ranges to
        When I press cancel button

    #User should be able to edit filter on programs for Age Ranges From UD-T280 and UD-T282
    @smoke
    Scenario: Edit filter Age Ranges From
        Given Add filter for age ranges from
        When I add the filter
        Then I edit values from added filter on age ranges from
        And I check edited value was saved on age ranges from

    #User should be able to edit filter on programs for Age Ranges To UD-T90 and UD-T88
    @smoke
    Scenario: Edit filter Age Ranges To
        Given Add filter for age ranges to
        When I add the filter
        Then I edit values from added filter on age ranges to
        And I check edited value was saved on age ranges to

    #User should be able to cancel edit filter on programs for Age Ranges From UD-T281

    Scenario: Edit filter Age Ranges From Cancel
        Given Add filter for age ranges from
        When I add the filter
        Then I edit value from added filter on age ranges from but I press cancel

    #User should be able to cancel edit filter on programs for Age Ranges To UD-T89

    Scenario: Edit filter Age Ranges To Cancel
        Given Add filter for age ranges to
        When I add the filter
        Then I edit value from added filter on age ranges to but I press cancel

    #User should be able to clear Age Ranges From filter for programs UD-T279
    @smoke
    Scenario: Clear filter Age Ranges From
        Given Add filter for age ranges from
        When I add the filter
        Then I clear the filter applied

    #User should be able to clear Age Ranges To filter for programs UD-T87
    @smoke
    Scenario: Clear filter Age Ranges To
        Given Add filter for age ranges from
        When I add the filter
        Then I clear the filter applied

    #User should be able to add a filter on programs for Subjects UD-T91 and UD-T93
    @smoke
    Scenario: Add filter Subjects
        Given Add filter for subjects
        When I add the filter
        Then I check that subjects filter was added

    #User should be able to cancel add a filter on programs for Subjects UD-T92

    Scenario: Add filter Subjects Cancel
        Given Add filter for subjects
        When I press cancel button

    #User should be able to edit filter on programs for Subjects UD-T96 and UD-T98
    @smoke
    Scenario: Edit filter Subjects
        Given Add filter for subjects
        When I add the filter
        Then I edit values from added filter on subjects
        And I check edited value was saved on subjects

    #User should be able to cancel edit filter on programs for Subjects UD-T97

    Scenario: Edit filter Subjects Cancel
        Given Add filter for subjects
        When I add the filter
        Then I edit value from added filter on subjects to but I press cancel

    #User should be able to clear Subjects To filter for programs UD-T94
    @smoke
    Scenario: Clear filter Subjects
        Given Add filter for subjects
        When I add the filter
        Then I clear the filter applied

    #User should be able to clear all filter for programs UD-T82
    @smoke
    Scenario: Clear all filters
        Given Add all existent filters
        Then I clear all filters applied

    #User should be able to disable filter for programs UD-T197
    @smoke
    Scenario: Disable filter
        Given Add all existent filters
        Then I check filter is disable

    #User should be able to see correct order for values on filters UD-T609
    @smoke
    Scenario: Filter order values
        Given I check the order of values is correct on programs

    #User should be able to filter data from programs by columns UD-T73
    @smoke
    Scenario: Remove columns
        Given I remove columns to be shown
        When I check locked column "Name" is present

    #User should be able to filter data from programs by columns UD-T73
    @smoke
    Scenario: Add columns
        Given I add columns to be shown
        When I check locked columns "ID" and "Name" are present

    #User should be able to view details of a program UD-T72

    Scenario: View Details program
        Then I search "Automation Program" to see the details of the program

    #User should be able to select different subcategories for a program UD-T69 ----*** DEFECT AD-1798 ***----

    Scenario: Subcategories Page Selection
        Given I press on create program "Automation Program"
        When I press on create subject
        Then I select a category
        And I select all subcategories and unselect them
        Then an error should be displayed for not selecting any subcategories

    #User should be able to check all pages on programs UD-T332 ----*** DEFECT AD-75 ***----

    Scenario: Check All Pages
        Given I press on create program "Automation Program"
        Then I can select all pages on programs

    #User should be able to check the actual page on programs UD-T333
    @smoke
    Scenario: Check This Page
        Given I press on create program "Automation Program"
        Then I can select this page on programs

    #User should be able to not select any subject from create program UD-T334
    @smoke
    Scenario: Check None
        Given I press on create program "Automation Program"
        And I can unselect all programs by clicking none

    #User should be able to create a Subject to assign to a Program UD-T66

    Scenario: Create Subject on Program
        Given I press on create program "Automation Program"
        And I create a new subject "Automation Subject"
        Then I get "Subject has been successfully created" message
        And I search new subject to validate "Automation Subject"

    #User should be able to create a Category to assign to a Program UD-T67

    Scenario: Create Category on Program
        Given I press on create program "Automation Program"
        When I press on create subject
        And I create a category "Automation Category"
        Then I get "Category has been successfully created" message

    #User should be able to create a SubCategory to assign to a Program UD-T68

    Scenario: Create SubCategory on Program
        Given I press on create program "Automation Program"
        When I press on create subject
        And I select a category
        And I create subcategory "Automation SubCategory"
        Then I get "Subcategory has been successfully created" message
