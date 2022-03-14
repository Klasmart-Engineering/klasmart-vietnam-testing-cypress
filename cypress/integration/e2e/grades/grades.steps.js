import { When, Then } from "cypress-cucumber-preprocessor/steps";
import { signInPage } from "../../page_objects/sign-in-page";
import { userPage } from "../../page_objects/user-page";
import { schoolPage } from "../../page_objects/schools-page";
import { gradesPage } from "../../page_objects/grades-page";

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

When("I navigate to the grades page", () => {
  gradesPage.clickOnGradesTab(); 
});

Given("I create a grade {string}", (gradeName) => {
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

Given("I search for grade {string}", (search) => {
  gradesPage.searchInputText(search);
  gradesPage.getGradeName();
});

Then("I can search for grade {string}", (search) => {
  gradesPage.searchInputText(search);
  gradesPage.getGradeName();
});

Then("I can search for edited grade {string}", (search) => {
  userPage.searchInputText(search);
  gradesPage.getEditedGradeName();
});

Given(
  "I search {string} to be edited as {string}",
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
  }
);

And("I search edited grade {string}", (search) => {
  gradesPage.searchInputText(search);
  gradesPage.getEditedGradeName();
});

When("I delete the grade", () => {
  gradesPage.clickMoreActions();
    userPage.clickOnMoreActionsDeleteButton();
    userPage.sendDeleteText();
    gradesPage.clickOnDeleteFinalButton();
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

Given("I open the filter from options", () => {
  userPage.clickOnAddFilterButton();
  userPage.clickOnColumnFilter();
  gradesPage.clickOnProgressFromColumn();
  userPage.clickOnValuesFilter();
  gradesPage.selectionOfProgressValues();
  userPage.closeListItems();
});

Given("I open the filter to options", () => {
  userPage.clickOnAddFilterButton();
  userPage.clickOnColumnFilter();
  gradesPage.clickOnProgressToColumn();
  userPage.clickOnValuesFilter();
  gradesPage.selectionOfProgressValues();
  userPage.closeListItems();
});

When("I add the filter", () => {
  userPage.clickOnAddFilterFinalButton();
});

Then("the progress filter should be applied", () => {
  gradesPage.getProgressLabelFilterText();
});

Then("I press cancel button", () => {
  userPage.clickOnCancelFilterButton();
});

And("I edit the values on a filter", () => {
  userPage.clickOnFilterLabel();
  userPage.clickOnValuesFilter();
  gradesPage.selectionOfProgressValues();
  gradesPage.editProgressFilterValues();
  userPage.closeListItems();
  userPage.clickOnAddFilterFinalButton();
});

Then("the edited value should be saved on progress", () => {
  gradesPage.getEditedLabelFilterTextProgress();
});

When("I try to edit the values on a filter", () => {
  userPage.clickOnFilterLabel();
  userPage.clickOnValuesFilter();
  gradesPage.selectionOfProgressValues();
  gradesPage.editProgressFilterValues();
  userPage.closeListItems();
});

Then("I should be able to cancel editing", () => {
  userPage.clickOnCancelFilterButton();
  gradesPage.getProgressLabelFilterText();
})

Then("I get a {string} message", (message) => {
  userPage.getNotificationText(message).contains(message);
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
