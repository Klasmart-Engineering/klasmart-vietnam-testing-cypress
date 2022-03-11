import { When, Then } from "cypress-cucumber-preprocessor/steps";
import { signInPage } from "../../page_objects/sign-in-page";
import { userPage } from "../../page_objects/user-page";
import { schoolPage } from "../../page_objects/schools-page";
import { gradesPage } from "../../page_objects/grades-page";
import { assert } from "chai";

Given(
  "I sign in with valid credentials {string} and {string}",
  (email, pass) => {
    signInPage.goToHomePage();
    signInPage.getClickOnYourCountryOrRegionText();
    signInPage.enterEmailOrPhone(email);
    signInPage.enterPassword(pass);
    signInPage.clickOnSignInButton();
    signInPage.clickSelectProfile();
    signInPage.clickOnContinueButton();
    signInPage.clickOnCurrentProfile();
  }
);

When("I navigate to actual section", () => {
  gradesPage.clickOnGradesTab(); 
});

Then("I create a grade {string}", (gradeName) => {
  gradesPage.clickOnCreateGradeButton();
  gradesPage.clickOnCancelCreateButton();
  gradesPage.clickOnCreateGradeButton();
  gradesPage.getGradeHelperText();
  gradesPage.gradeName(gradeName);
  gradesPage.getProgressFromHelperText();
  gradesPage.getProgressToHelperText();
  gradesPage.clickOnProgressFrom();
  gradesPage.selectionProgressFrom();
  gradesPage.clickOnProgressTo();
  gradesPage.selectionProgressTo();
  gradesPage.clickOnCreateGradeFinalButton();
});

And("I get {string} message", (message) => {
  userPage.getNotificationText(message).contains(message);
});

And("I search grade {string}", (search) => {
  gradesPage.searchInputText(search);
  gradesPage.getGradeName();
});

Then(
  "I search {string} to be edited as {string} and get {string} message",
  (search, name, message) => {
    gradesPage.searchInputText(search);
    gradesPage.clickMoreActions();
    userPage.clickOnMoreActionsEditButton();
    gradesPage.editName(name);
    gradesPage.clickOnProgressFrom();
    gradesPage.editSelectionProgressFrom();
    gradesPage.clickOnProgressTo();
    gradesPage.editSelectionProgressTo();
    gradesPage.clickOnSaveEditionButton();
    userPage.getNotificationText(message).contains(message);
  }
);

And("I search edited grade {string}", (search) => {
  gradesPage.searchInputText(search);
  gradesPage.getEditedGradeName();
});

Then(
  "I search {string} to be deleted and get {string} message",
  (search, message) => {
    gradesPage.searchInputText(search);
    gradesPage.clickMoreActions();
    userPage.clickOnMoreActionsDeleteButton();
    userPage.sendDeleteText();
    gradesPage.clickOnDeleteFinalButton();
    userPage.getNotificationText(message).contains(message);
  }
);

Then(
  "I search {string} to be deleted on edition and get {string} message",
  (search, message) => {
    gradesPage.searchInputText(search);
    gradesPage.clickMoreActions();
    userPage.clickOnMoreActionsEditButton();
    gradesPage.clickOnDeleteEditionButton();
    userPage.sendDeleteText();
    gradesPage.clickOnDeleteFinalButton();
    userPage.getNotificationText(message).contains(message);
  }
);

And("I check all buttons from pagination", () => {
  cy.wait(8000);
  userPage.clickOnNextPage();
  userPage.clickOnPreviousPage();
  userPage.clickOnLastPage();
  userPage.clickOnFirstPage();
});

Then("I check different rows per page", () => {
  cy.wait(8000);
  userPage.clickOnRowsPerPage();
  userPage.clickOnTenPages();
  userPage.clickOnRowsPerPage();
  userPage.clickOnTwentyFivePages();
  userPage.clickOnRowsPerPage();
  userPage.clickOnFiftyPages();
  userPage.clickOnRowsPerPage();
  userPage.clickOnTwentyFivePages();
});

And("I sort column by asc and desc", () => {
  gradesPage.sortFirstAsc();
  schoolPage.sortFirstDesc();
  userPage.sortSecondAsc();
  userPage.sortSecondDesc();
});

Then("I check first page pagination", () => {
  cy.wait(8000);
  userPage.clickOnLastPage();
  userPage.clickOnFirstPage();
  userPage.getNextPageButtonState();
  userPage.getLastPageButtonState();
});

Then("I check last page pagination", () => {
  cy.wait(8000);
  userPage.clickOnLastPage();
  userPage.getNextPageButtonState();
  userPage.getLastPageButtonState();
});

Then("I check next page pagination", () => {
  cy.wait(8000);
  userPage.clickOnNextPage();
  userPage.getNextPageButtonState();
  userPage.getLastPageButtonState();
  userPage.getPreviousPageButtonState();
  userPage.getFirstPageButtonState();
});

Then("I check previous page pagination", () => {
  cy.wait(8000);
  userPage.clickOnNextPage();
  userPage.clickOnPreviousPage();
  userPage.clickOnNextPage();
  userPage.clickOnNextPage();
  userPage.clickOnNextPage();
  userPage.clickOnPreviousPage();
  userPage.clickOnPreviousPage();
  userPage.getNextPageButtonState();
  userPage.getLastPageButtonState();
  userPage.getPreviousPageButtonState();
  userPage.getFirstPageButtonState();
});

And("Add filter for progress from", () => {
  userPage.clickOnAddFilterButton();
  userPage.clickOnColumnFilter();
  gradesPage.clickOnProgressFromColumn();
  userPage.clickOnValuesFilter();
  gradesPage.selectionOfProgressValues();
  userPage.closeListItems();
});

And("Add filter for progress to", () => {
  userPage.clickOnAddFilterButton();
  userPage.clickOnColumnFilter();
  gradesPage.clickOnProgressToColumn();
  userPage.clickOnValuesFilter();
  gradesPage.selectionOfProgressValues();
  userPage.closeListItems();
});

Then("Filter is Added", () => {
  userPage.clickOnAddFilterFinalButton();
});

And("I check that progress filter was added", () => {
  gradesPage.getProgressLabelFilterText();
});

Then("I press cancel button", () => {
  userPage.clickOnCancelFilterButton();
});

And("I edit values from added filter on progress", () => {
  userPage.clickOnFilterLabel();
  userPage.clickOnValuesFilter();
  gradesPage.selectionOfProgressValues();
  gradesPage.editProgressFilterValues();
  userPage.closeListItems();
  userPage.clickOnAddFilterFinalButton();
});

And("I check edited value was saved on progress", () => {
  gradesPage.getEditedLabelFilterTextProgress();
});

And("I edit value from added filter on progress but I press cancel", () => {
  userPage.clickOnFilterLabel();
  userPage.clickOnValuesFilter();
  gradesPage.selectionOfProgressValues();
  gradesPage.editProgressFilterValues();
  userPage.closeListItems();
  userPage.clickOnCancelFilterButton();
  gradesPage.getProgressLabelFilterText();
});

And("I clear the filter applied", () => {
  userPage.clickClearFilter();
  userPage.getAddFilterLabelState();
});

Then("Add all existent filters", () => {
  //Add progress from filter
  userPage.clickOnAddFilterButton();
  userPage.clickOnColumnFilter();
  gradesPage.clickOnProgressFromColumn();
  userPage.clickOnValuesFilter();
  gradesPage.selectionOfProgressValues();
  userPage.closeListItems();
  userPage.clickOnAddFilterFinalButton();
  userPage.clickAddMoreFilters();
  //Add progress to filter
  userPage.clickOnValuesFilter();
  gradesPage.selectionOfProgressValues();
  userPage.closeListItems();
  userPage.clickOnAddFilterFinalButton();
});

And("I clear all filters applied", () => {
  userPage.clickClearAllFilters();
  userPage.getAddFilterLabelState();
});

And("I check filter is disable", () => {
  userPage.getFilterMouseOverText();
});

Then("I check the order of values is correct on grades", () => {
  userPage.clickOnAddFilterButton();
  userPage.clickOnColumnFilter();
  gradesPage.getFilterOrderValues();
});

And("I remove columns to be shown", () => {
  gradesPage.removeAllColumns();
});

And("I check locked column {string} is present", () => {
  gradesPage.getColumnText();
});

And("I add columns to be shown", () => {
  userPage.clickOnAddColumns();
  userPage.selectColumns();
});

And("I check locked columns {string} and {string} are present", () => {
  schoolPage.getFirstColumnText();
  gradesPage.getSecondColumnText();
});
