import { When, Then, Given } from "cypress-cucumber-preprocessor/steps";
import { signInPage } from "../../page_objects/sign-in-page";
import { classesPage } from "../../page_objects/classes-page";
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

When("I navigate to the Classes Page", () => {
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

Then("I search class {string}", (search) => {
  userPage.searchInputText(search);
  classesPage.getClassName();
});

When("I get {string} message", (message) => {
  userPage.getNotificationText(message).contains(message);
});

When(
  "I search {string} to edit the class name to be {string}",
  (search, className, message) => {
    userPage.searchInputText(search);
    classesPage.clickMoreActions();
    classesPage.clickOnMoreActionsEditButton();
    classesPage.editClassName(className);
    classesPage.clickOnSaveEditionButton();
  }
);

Then("I get a {string} message", (message) => {
  userPage.getNotificationText(message).contains(message);
});

Then("I can search for edited class {string}", (search) => {
  userPage.searchInputText(search);
  classesPage.getEditedClassName();
});

Given("I Add a filter for status as active", () => {
  userPage.clickOnAddFilterButton();
  userPage.clickOnColumnFilter();
  userPage.clickOnStatusColumn();
  userPage.clickOnValuesFilter();
  userPage.selectActiveStatusValue();
  userPage.clickOnAddFilterFinalButton();
});

When(
  "I search {string} to be deleted",
  (search, message) => {
    userPage.searchInputText(search);
    classesPage.clickMoreActions();
    classesPage.clickOnMoreActionsDeleteButton();
    userPage.sendDeleteText();
    classesPage.clickOnDeleteFinalButton();
    userPage.getNotificationText(message).contains(message);
  }
);

When(
  "I search {string} to be deleted on edition",
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

Then("All pagination buttons should work", () => {
  cy.wait(8000);
  userPage.clickOnNextPage();
  userPage.clickOnPreviousPage();
  userPage.clickOnLastPage();
  userPage.clickOnFirstPage();
});

Given("I check different rows per page", () => {
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

Given("I check first page pagination", () => {
  cy.wait(8000);
  userPage.clickOnLastPage();
  userPage.clickOnFirstPage();
  userPage.getNextPageButtonState();
  userPage.getLastPageButtonState();
});

Given("I check last page pagination", () => {
  cy.wait(8000);
  userPage.clickOnLastPage();
  userPage.getNextPageButtonState();
  userPage.getLastPageButtonState();
});

Given("I check next page pagination", () => {
  cy.wait(8000);
  userPage.clickOnNextPage();
  userPage.getNextPageButtonState();
  userPage.getLastPageButtonState();
  userPage.getPreviousPageButtonState();
  userPage.getFirstPageButtonState();
});

Given("I check previous page pagination", () => {
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

Given("I search class {string}", (search) => {
  userPage.searchInputText(search);
  classesPage.getSearchClassName();
});

Given("I sort column by asc and desc", () => {
  classesPage.sortFirstAsc();
  schoolPage.sortFirstDesc();
  userPage.sortSecondAsc();
  userPage.sortSecondDesc();
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
  // this doesn't use the string provided and doesn't check for it's value
  classesPage.getColumnText();
});

Given("I click add columns", () => {
  userPage.clickOnAddColumns();
});

When("I select the columns to add", () => {
  userPage.selectColumns();
})

When("I check locked columns {string} and {string} are present", () => {
  // this doesn't use the string provided and doesn't check for it's value
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
  classesPage.getAgeRangesFromLabelFilterText();
});
