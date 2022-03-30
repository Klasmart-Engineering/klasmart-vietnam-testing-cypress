import { When, Then, Given } from "cypress-cucumber-preprocessor/steps";
import { classesPage } from "../../page_objects/classes-page";
import { userPage } from "../../page_objects/user-page";
import { schoolPage } from "../../page_objects/schools-page";

When("I navigate to the classes page", () => {
  classesPage.clickOnClassesTab();
});

Given("I create a class {string}", (className) => {
  classesPage.clickOnCreateButton();
  classesPage.className(className);
  /*classesPage.clickOnSchools(); #ISSUE ON SCHOOLS WAITING FIX TO BE USED AD-2241
  classesPage.selectionOfSchoolValues();
  userPage.closeListItems();
  classesPage.clickOnProgram();
  schoolPage.clickOnSelectAllItems();
  userPage.closeListItems();
  classesPage.clickOnGrade();
  schoolPage.clickOnSelectAllItems();
  userPage.closeListItems();
  classesPage.clickOnAgeRange();
  schoolPage.clickOnSelectAllItems();
  userPage.closeListItems();
  classesPage.clickOnSubjects();
  schoolPage.clickOnSelectAllItems();
  userPage.closeListItems();*/
  classesPage.clickOnCreateFinalButton();
});

Then("I search for class {string}", (search) => {
  userPage.searchInputText(search);
  classesPage.getClassName();
});

When("I search for class {string}", (search) => {
  userPage.searchInputText(search);
  classesPage.getClassName();
});

When("I get {string} message", (message) => {
  userPage.getNotificationText(message).contains(message);
});

Given(
  "I search {string} to be edited as {string} and get {string} message",
  (search, className, message) => {
    userPage.searchInputText(search);
    classesPage.clickMoreActions();
    classesPage.clickOnMoreActionsEditButton();
    classesPage.editClassName(className);
    classesPage.clickOnSaveEditionButton();
    userPage.getNotificationText(message).contains(message);
  }
);

When("I search edited class {string}", (search) => {
  userPage.searchInputText(search);
  classesPage.getEditedClassName();
});

Given("Add filter for status as active", () => {
  userPage.clickOnAddFilterButton();
  userPage.clickOnColumnFilter();
  userPage.clickOnStatusColumn();
  userPage.clickOnValuesFilter();
  userPage.selectActiveStatusValue();
});

When("I add the filter", () => {
  userPage.clickOnAddFilterFinalButton();
});

Then(
  "I search {string} to be deleted and get {string} message",
  (search, message) => {
    userPage.searchInputText(search);
    classesPage.clickMoreActions();
    classesPage.clickOnMoreActionsDeleteButton();
    userPage.sendDeleteText();
    classesPage.clickOnDeleteFinalButton();
    userPage.getNotificationText(message).contains(message);
  }
);

Given("I sort class columns by asc and desc", () => {
  classesPage.sortFirstAsc();
  schoolPage.sortFirstDesc();
  userPage.sortSecondAsc();
  userPage.sortSecondDesc();
});

Then(
  "I search {string} to be deleted on edition and get {string} message",
  (search, message) => {
    userPage.searchInputText(search);
    classesPage.clickMoreActions();
    classesPage.clickOnMoreActionsEditButton();
    classesPage.clickOnDeleteEditionButton();
    userPage.sendDeleteText();
    classesPage.clickOnDeleteFinalButton();
    userPage.getNotificationText(message).contains(message);
  }
);

Then("I search {string} to see the details of the class", (search) => {
  userPage.searchInputText(search);
  classesPage.clickMoreActions();
  classesPage.clickOnMoreActionsViewDetailsButton();
});

Given("I check all buttons from pagination", () => {
  cy.wait(8000);
  userPage.clickOnNextPage();
  userPage.clickOnPreviousPage();
  userPage.clickOnLastPage();
  userPage.clickOnFirstPage();
});

Given("I search class {string}", (search) => {
  userPage.searchInputText(search);
  classesPage.getSearchClassName();
});

Given("I check the order of values is correct on classes", () => {
  userPage.clickOnAddFilterButton();
  userPage.clickOnColumnFilter();
  classesPage.getFilterOrderValues();
});

Given("I remove columns to be shown", () => {
  classesPage.removeAllColumns();
});

When("I check locked column {string} is present", () => {
  classesPage.getColumnText();
});

Given("I add columns to be shown", () => {
  userPage.clickOnAddColumns();
  userPage.selectColumns();
});

When("I check locked columns {string} and {string} are present", () => {
  schoolPage.getFirstColumnText();
  classesPage.getSecondColumnText();
});

Given(
  "I add more than maximum characters {string} on class name field",
  (className) => {
    classesPage.clickOnCreateButton();
    classesPage.className(className);
  }
);

When("I should see an error message {string}", () => {
  classesPage.getClassNameText();
});

Given("I left in blank class name {string}", (className) => {
  classesPage.clickOnCreateButton();
  classesPage.className(className);
});

Given("I add minimum character on class name {string}", (className) => {
  classesPage.clickOnCreateButton();
  classesPage.className(className);
});

When("I check the create button should be enable", () => {
  classesPage.getCreateButtonState();
});

Given("I press on create class button", () => {
  classesPage.clickOnCreateButton();
});

When("new window is open I should see {string} message", (title) => {
  classesPage.getCreateWindowsMessage(title);
});

Given("I add white spaces instead characters {string}", (className) => {
  classesPage.clickOnCreateButton();
  classesPage.className(className);
});

When("I check the create button should be disable", () => {
  classesPage.getCreateButtonState();
});

Given("Add filter for age ranges from", () => {
  userPage.clickOnAddFilterButton();
  userPage.clickOnColumnFilter();
  classesPage.clickOnAgeRangesFromColumn();
  userPage.clickOnValuesFilter();
  classesPage.selectionOfAgeRangesFromValues();
  userPage.closeListItems();
});

Then("I check that age ranges filter was added", () => {
  classesPage.getAgeRangesFromFilterText();
});

Given("Add filter for age ranges to", () => {
  userPage.clickOnAddFilterButton();
  userPage.clickOnColumnFilter();
  classesPage.clickOnAgeRangesToColumn();
  userPage.clickOnValuesFilter();
  classesPage.selectionOfAgeRangesToValues();
  userPage.closeListItems();
});

Then("I check that age ranges to filter was added", () => {
  classesPage.getAgeRangesToFilterText();
});

When("I press cancel button", () => {
  userPage.clickOnCancelFilterButton();
});

Then("I edit values from added filter on age ranges from", () => {
  userPage.clickOnFilterLabel();
  userPage.clickOnValuesFilter();
  classesPage.selectionOfAgeRangesFromValues();
  classesPage.selectionOfEditAgeRangesFromValues();
  userPage.closeListItems();
  userPage.clickOnAddFilterFinalButton();
});

And("I check edited value was saved on age ranges from", () => {
  classesPage.getAgeRangesFromEditFilterText();
});

Then("I edit values from added filter on age ranges to", () => {
  userPage.clickOnFilterLabel();
  userPage.clickOnValuesFilter();
  classesPage.selectionOfAgeRangesToValues();
  classesPage.selectionOfEditAgeRangesToValues();
  userPage.closeListItems();
  userPage.clickOnAddFilterFinalButton();
});

And("I check edited value was saved on age ranges to", () => {
  classesPage.getAgeRangesToEditFilterText();
});

Then(
  "I edit value from added filter on age ranges from but I press cancel",
  () => {
    userPage.clickOnFilterLabel();
    userPage.clickOnValuesFilter();
    classesPage.selectionOfAgeRangesFromValues();
    classesPage.selectionOfEditAgeRangesFromValues();
    userPage.closeListItems();
    userPage.clickOnCancelFilterButton();
    classesPage.getAgeRangesFromFilterText();
  }
);

Then(
  "I edit value from added filter on age ranges to but I press cancel",
  () => {
    userPage.clickOnFilterLabel();
    userPage.clickOnValuesFilter();
    classesPage.selectionOfAgeRangesToValues();
    classesPage.selectionOfEditAgeRangesToValues();
    userPage.closeListItems();
    userPage.clickOnCancelFilterButton();
    classesPage.getAgeRangesToFilterText();
  }
);

Then("I clear the filter applied", () => {
  userPage.clickClearFilter();
  userPage.getAddFilterLabelState();
});

Given("Add filter for grades", () => {
  userPage.clickOnAddFilterButton();
  userPage.clickOnColumnFilter();
  classesPage.clickOnGradesColumn();
  userPage.clickOnValuesFilter();
  classesPage.selectionOfGradesValues();
  userPage.closeListItems();
});

Then("I check that grades filter was added", () => {
  classesPage.getGradesFilterText();
});

Then("I edit values from added filter on grades", () => {
  userPage.clickOnFilterLabel();
  userPage.clickOnValuesFilter();
  classesPage.selectionOfGradesValues();
  classesPage.selectionOfEditGradesValues();
  userPage.closeListItems();
  userPage.clickOnAddFilterFinalButton();
});

And("I check edited value was saved on grades", () => {
  classesPage.getGradesEditFilterText();
});

Then("I edit value from added filter on grades to but I press cancel", () => {
  userPage.clickOnFilterLabel();
  userPage.clickOnValuesFilter();
  classesPage.selectionOfGradesValues();
  classesPage.selectionOfEditGradesValues();
  userPage.closeListItems();
  userPage.clickOnCancelFilterButton();
  classesPage.getGradesFilterText();
});

Given("Add filter for programs", () => {
  userPage.clickOnAddFilterButton();
  userPage.clickOnColumnFilter();
  classesPage.clickOnProgramsColumn();
  userPage.clickOnValuesFilter();
  classesPage.selectionOfProgramsValues();
  userPage.closeListItems();
});

Then("I check that programs filter was added", () => {
  classesPage.getProgramsFilterText();
});

Then("I edit values from added filter on programs", () => {
  userPage.clickOnFilterLabel();
  userPage.clickOnValuesFilter();
  classesPage.selectionOfProgramsValues();
  classesPage.selectionOfEditProgramsValues();
  userPage.closeListItems();
  userPage.clickOnAddFilterFinalButton();
});

And("I check edited value was saved on programs", () => {
  classesPage.getProgramsEditFilterText();
});

Then("I edit value from added filter on programs to but I press cancel", () => {
  userPage.clickOnFilterLabel();
  userPage.clickOnValuesFilter();
  classesPage.selectionOfProgramsValues();
  classesPage.selectionOfEditProgramsValues();
  userPage.closeListItems();
  userPage.clickOnCancelFilterButton();
  classesPage.getProgramsFilterText();
});

Given("Add filter for school", () => {
  userPage.clickOnAddFilterButton();
  userPage.clickOnColumnFilter();
  userPage.clickOnSchoolsColumn();
  userPage.clickOnValuesFilter();
  userPage.selectionOfSchoolValues();
  userPage.closeListItems();
});

Then("I check that shools filter was added", () => {
  userPage.getSchoolLabelFilterText();
});

Then("I edit values from added filter on schools", () => {
  userPage.clickOnFilterLabel();
  userPage.clickOnValuesFilter();
  userPage.selectionOfSchoolValues();
  userPage.editSchoolsFilterValues();
  userPage.closeListItems();
  userPage.clickOnAddFilterFinalButton();
});

And("I check edited value was saved on schools", () => {
  userPage.getEditedLabelFilterTextSchools();
});

Then("I edit value from added filter on schools but I press cancel", () => {
  userPage.clickOnFilterLabel();
  userPage.clickOnValuesFilter();
  userPage.selectionOfSchoolValues();
  userPage.editSchoolsFilterValues();
  userPage.closeListItems();
  userPage.clickOnCancelFilterButton();
  userPage.getSchoolLabelFilterText();
});

Then("I check that active status filter was added", () => {
  userPage.getActiveStatusLabelFilterText();
});

Given("Add filter for status as inactive", () => {
  userPage.clickOnAddFilterButton();
  userPage.clickOnColumnFilter();
  userPage.clickOnStatusColumn();
  userPage.clickOnValuesFilter();
  userPage.selectInactiveStatusValue();
});

Then("I check that inactive status filter was added", () => {
  userPage.getInactiveStatusLabelFilterText();
});

Then("I edit status value as active", () => {
  userPage.clickOnFilterLabel();
  userPage.clickOnValuesFilter();
  userPage.selectActiveStatusValue();
  userPage.clickOnAddFilterFinalButton();
});

And("I check edited value was saved on status", () => {
  userPage.getEditedLabelFilterTextStatus();
});

Then("I edit status value as active but I press cancel", () => {
  userPage.clickOnFilterLabel();
  userPage.clickOnValuesFilter();
  userPage.selectActiveStatusValue();
  userPage.clickOnCancelFilterButton();
  userPage.getInactiveStatusLabelFilterText();
});

Given("Add filter for subjects", () => {
  userPage.clickOnAddFilterButton();
  userPage.clickOnColumnFilter();
  classesPage.clickOnSubjectsColumn();
  userPage.clickOnValuesFilter();
  classesPage.selectionOfSubjectsValues();
  userPage.closeListItems();
});

Then("I check that subjects filter was added", () => {
  classesPage.getSubjectsFilterText();
});

Then("I edit values from added filter on subjects", () => {
  userPage.clickOnFilterLabel();
  userPage.clickOnValuesFilter();
  classesPage.selectionOfSubjectsValues();
  classesPage.selectionOfEditSubjectsValues();
  userPage.closeListItems();
  userPage.clickOnAddFilterFinalButton();
});

And("I check edited value was saved on subjects", () => {
  classesPage.getSubjectsEditFilterText();
});

Then("I edit value from added filter on subjects to but I press cancel", () => {
  userPage.clickOnFilterLabel();
  userPage.clickOnValuesFilter();
  classesPage.selectionOfSubjectsValues();
  classesPage.selectionOfEditSubjectsValues();
  userPage.closeListItems();
  userPage.clickOnCancelFilterButton();
  classesPage.getSubjectsFilterText();
});

Then("I clear all filters applied", () => {
  userPage.clickClearAllFilters();
  userPage.getAddFilterLabelState();
});

Given("Add all existent filters", () => {
  cy.viewport(1920, 1280);
  //Add schools filter
  userPage.clickOnAddFilterButton();
  userPage.clickOnColumnFilter();
  userPage.clickOnSchoolsColumn();
  userPage.clickOnValuesFilter();
  classesPage.selectionOfSchoolValues();
  userPage.closeListItems();
  userPage.clickOnAddFilterFinalButton();
  //Add age ranges from filter
  userPage.clickAddMoreFilters();
  userPage.clickOnColumnFilter();
  classesPage.clickOnAgeRangesFromColumn();
  userPage.clickOnValuesFilter();
  classesPage.selectionOfAgeRangesFromValues();
  userPage.closeListItems();
  userPage.clickOnAddFilterFinalButton();
  //Add age ranges to filter
  userPage.clickAddMoreFilters();
  userPage.clickOnColumnFilter();
  classesPage.clickOnAgeRangesToColumn();
  userPage.clickOnValuesFilter();
  classesPage.selectionOfAgeRangesToValues();
  userPage.closeListItems();
  userPage.clickOnAddFilterFinalButton();
  //Add grades filter
  userPage.clickAddMoreFilters();
  userPage.clickOnColumnFilter();
  classesPage.clickOnGradesColumn();
  userPage.clickOnValuesFilter();
  classesPage.selectionOfGradesValues();
  userPage.closeListItems();
  userPage.clickOnAddFilterFinalButton();
  //Add programs filter
  userPage.clickAddMoreFilters();
  userPage.clickOnColumnFilter();
  classesPage.clickOnProgramsColumn();
  userPage.clickOnValuesFilter();
  classesPage.selectionOfProgramsValues();
  userPage.closeListItems();
  userPage.clickOnAddFilterFinalButton();
  //Add subjects filter
  userPage.clickAddMoreFilters();
  userPage.clickOnColumnFilter();
  classesPage.clickOnSubjectsColumn();
  userPage.clickOnValuesFilter();
  classesPage.selectionOfSubjectsValues();
  userPage.closeListItems();
  userPage.clickOnAddFilterFinalButton();
  //Add status filter
  userPage.clickAddMoreFilters();
  userPage.clickOnColumnFilter();
  userPage.clickOnStatusColumn();
  userPage.clickOnValuesFilter();
  userPage.selectActiveStatusValue();
  userPage.clickOnAddFilterFinalButton();
});

Then("I check filter is disable", () => {
  userPage.getFilterMouseOverText();
});

And("I check all buttons from pagination", () => {
  cy.wait(8000);
  userPage.clickOnNextPage();
  userPage.clickOnPreviousPage();
  userPage.clickOnLastPage();
  userPage.clickOnFirstPage();
});

Then("Upload correct CSV file", () => {
  userPage.clickOnUploadCsvButton();
  classesPage.selectFixtureFile();
  userPage.getValidationCsvText();
  userPage.clickOnUploadCsvFinalButton();
});

Then("Upload correct multiple CSV file", () => {
  userPage.clickOnUploadCsvButton();
  classesPage.selectMultipleFixtureFile();
  userPage.getValidationCsvText();
  userPage.clickOnUploadCsvFinalButton();
});

And("I get {string} message", (message) => {
  userPage.getNotificationText(message).contains(message);
});

Then("I press over an existent class {string}", (search) => {
  userPage.searchInputText(search);
  classesPage.clickOnClassLink();
});

And("I should see {string} window", (message) => {
  classesPage.getClassRosterWindowsText(message);
});

And("I should be able to add users", () => {
  classesPage.clickOnClassRosterAddUserButton();
  classesPage.clickOnStudentTabSchoolRoster();
  classesPage.selectStudentsAndTeachers();
  classesPage.clickOnTeacherTabSchoolRoster();
  classesPage.selectStudentsAndTeachers();
  classesPage.clickOnSchoolRosterAddUserButton();
  classesPage.getStudents();
  classesPage.clickOnTeacherTabClassRoster();
  classesPage.getTeachers();
});

And("I should be able to remove users", () => {
  classesPage.clickMoreActionsClassRoster();
  classesPage.clickOnRemoveUser();
  userPage.sendDeleteText();
  classesPage.clickOnDeleteFinalButton();
  classesPage.clickOnTeacherTabClassRoster();
  classesPage.clickMoreActionsClassRoster();
  classesPage.clickOnRemoveUser();
  userPage.sendDeleteText();
  classesPage.clickOnDeleteFinalButton();
  classesPage.clickOnCloseClassRosterWindow();
});

When("I sort class roster columns by asc and desc", () => {
  classesPage.sortRosterFirstAsc();
  schoolPage.sortFirstDesc();
  userPage.sortSecondAsc();
  userPage.sortSecondDesc();
});

Given(
  "I access to an existent class {string} on class roster for student",
  (search) => {
    userPage.clickOnAddFilterButton();
    userPage.clickOnColumnFilter();
    userPage.clickOnStatusColumn();
    userPage.clickOnValuesFilter();
    userPage.selectActiveStatusValue();
    userPage.clickOnAddFilterFinalButton();
    userPage.searchInputText(search);
    classesPage.clickOnClassLink();
  }
);

And("I search a student on class roster {string}", (search) => {
  classesPage.searchInputClassRoster(search);
  classesPage.getClassRosterName();
});

Given(
  "I access to an existent class {string} on class roster for teacher",
  (search) => {
    userPage.clickOnAddFilterButton();
    userPage.clickOnColumnFilter();
    userPage.clickOnStatusColumn();
    userPage.clickOnValuesFilter();
    userPage.selectActiveStatusValue();
    userPage.clickOnAddFilterFinalButton();
    userPage.searchInputText(search);
    classesPage.clickOnClassLink();
    classesPage.clickOnTeacherTabClassRoster();
  }
);

And("I search a teacher on class roster {string}", (search) => {
  classesPage.searchInputClassRoster(search);
  classesPage.getClassRosterName();
});

Given(
  "I access to an existent class {string} on school roster for teacher",
  (search) => {
    userPage.clickOnAddFilterButton();
    userPage.clickOnColumnFilter();
    userPage.clickOnStatusColumn();
    userPage.clickOnValuesFilter();
    userPage.selectActiveStatusValue();
    userPage.clickOnAddFilterFinalButton();
    userPage.searchInputText(search);
    classesPage.clickOnClassLink();
    classesPage.clickOnClassRosterAddUserButton();
    classesPage.clickOnTeacherTabSchoolRoster();
  }
);

And("I search a teacher on school roster {string}", (search) => {
  classesPage.searchInputClassRoster(search);
  classesPage.getClassRosterName();
});

Given(
  "I access to an existent class {string} on school roster for student",
  (search) => {
    userPage.clickOnAddFilterButton();
    userPage.clickOnColumnFilter();
    userPage.clickOnStatusColumn();
    userPage.clickOnValuesFilter();
    userPage.selectActiveStatusValue();
    userPage.clickOnAddFilterFinalButton();
    userPage.searchInputText(search);
    classesPage.clickOnClassLink();
    classesPage.clickOnClassRosterAddUserButton();
  }
);

And("I search a student on school roster {string}", (search) => {
  classesPage.searchInputClassRoster(search);
  classesPage.getClassRosterName();
});

When("I sort school roster columns by asc and desc", () => {
  classesPage.sortSchoolRosterFirstAsc();
  schoolPage.sortFirstDesc();
  userPage.sortSecondAsc();
  userPage.sortSecondDesc();
});

Then(
  "I can display either {string} rows in the list on class roster",
  (numbersPerPage) => {
    // split the string into an array
    var rows = numbersPerPage.split(",");

    // loop over the array and update the number of rows to display each time
    for (let number in rows) {
      cy.log(rows[number]);
      classesPage.clickOnRowsPerPageClassRoster();
      userPage.clickOnNumOfPages(rows[number]);
    }
  }
);

Then(
  "I can display either {string} rows in the list on school roster",
  (numbersPerPage) => {
    // split the string into an array
    var rows = numbersPerPage.split(",");

    // loop over the array and update the number of rows to display each time
    for (let number in rows) {
      cy.log(rows[number]);
      classesPage.clickOnRowsPerPageSchoolRoster();
      userPage.clickOnNumOfPages(rows[number]);
    }
  }
);

Then("I select none page school roster", () => {
  classesPage.clickOnPagesSelector();
  classesPage.clickOnNonePageSelector();
});

Then("I select this page on school roster", () => {
  classesPage.clickOnPagesSelector();
  classesPage.clickOnThisPageSelector();
  classesPage.getSelectedItemsText();
  classesPage.getQuantityOfItemsSelected();

  cy.get("@usersCount").then(($uc) => {
    cy.get("@totalNumberText").then(($tn) => {
      expect($uc).to.equal($tn);
    });
  });
});
