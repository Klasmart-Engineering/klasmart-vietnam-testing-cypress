import { When, Then } from "cypress-cucumber-preprocessor/steps";
import { userPage } from "../../page_objects/user-page";
import { gradesPage } from "../../page_objects/grades-page";

When("I navigate to the users page", () => {
  userPage.clickOnUsersTab();
});

And(
  "I fill required fields as {string} {string} {string} and {string}",
  (givenName, familyName, contactInfo, shortCode) => {
    userPage.clickOnCreateUserButton();
    userPage.givenName(givenName);
    userPage.familyName(familyName);
    userPage.contactInfo(contactInfo);
    userPage.shortCode(shortCode);
    userPage.clickOnRoles();
    userPage.selectionRoles();
    userPage.closeListItems();
    userPage.clickOnCreateUserFinalButton();
  }
);

Then("I create a new user and obtain {string} message", (text) => {
  userPage.getNotificationText().should("have.text", text);
});

Then("I have got {string} error message", (text) => {
  userPage.getNotificationText().should("have.text", text);
});

And("{string} error message", (text) => {
  userPage.getShortCodeText().should("have.text", text);
});

And("I fill optional fields {string}", (shortCode) => {
  userPage.clickOnCreateUserButton();
  userPage.clickOnBirthday();
  userPage.shortCode(shortCode);
  userPage.checkCreateButtonState();
});

Then("I cancel creation", () => {
  userPage.clickOnCancelUserFinalButton();
});

And(
  "fill all existent fields as {string} {string} {string} {string} {string}",
  (givenName, familyName, contactInfo, shortCode, otherGender) => {
    userPage.clickOnCreateUserButton();
    userPage.givenName(givenName);
    userPage.familyName(familyName);
    userPage.contactInfo(contactInfo);
    userPage.clickOnBirthday();
    userPage.shortCode(shortCode);
    userPage.clickOnOtherGender();
    userPage.otherGender(otherGender);
    userPage.clickOnRoles();
    userPage.selectionRoles();
    userPage.closeListItems();
    userPage.clickOnSchools();
    userPage.selectionSchools();
    userPage.closeListItems();
  }
);

And(
  "I fill only required fields as {string} {string} and {string}",
  (givenName, familyName, contactInfo) => {
    userPage.clickOnCreateUserButton();
    userPage.givenName(givenName);
    userPage.familyName(familyName);
    userPage.contactInfo(contactInfo);
    userPage.clickOnRoles();
    userPage.selectionRoles();
    userPage.closeListItems();
    userPage.clickOnCreateUserFinalButton();
  }
);

And("Add filter for status as active", () => {
  userPage.clickOnAddFilterButton();
  userPage.clickOnColumnFilter();
  userPage.clickOnStatusColumn();
  userPage.clickOnValuesFilter();
  userPage.selectActiveStatusValue();
});

Then(
  "I search {string} user to be deleted and get {string} message",
  (search, message) => {
    userPage.searchInputText(search);
    userPage.clickMoreActions();
    userPage.clickOnMoreActionsDeleteButton();
    userPage.sendDeleteText();
    userPage.clickOnDeleteFinalButton();
    userPage.getNotificationText(message).contains(message);
  }
);

And("Add filter for status as inactive", () => {
  userPage.clickOnAddFilterButton();
  userPage.clickOnColumnFilter();
  userPage.clickOnStatusColumn();
  userPage.clickOnValuesFilter();
  userPage.selectInactiveStatusValue();
});

Then("I search {string} user to be deleted but I cancel it", (search) => {
  userPage.searchInputText(search);
  userPage.clickMoreActions();
  userPage.clickOnMoreActionsDeleteButton();
  userPage.sendDeleteText();
  userPage.clickOnCancelFinalButton();
});

And("Add filter for school", () => {
  userPage.clickOnAddFilterButton();
  userPage.clickOnColumnFilter();
  userPage.clickOnSchoolsColumn();
  userPage.clickOnValuesFilter();
  userPage.selectionOfSchoolValues();
  userPage.closeListItems();
});

And("Add filter for organization roles", () => {
  userPage.clickOnAddFilterButton();
  userPage.clickOnColumnFilter();
  userPage.clickOnOrganizationRolesColumn();
  userPage.clickOnValuesFilter();
  userPage.selectionOfOrganizationRolesValues();
  userPage.closeListItems();
});

And("Add filter for email {string}", (email) => {
  userPage.clickOnAddFilterButton();
  userPage.clickOnColumnFilter();
  userPage.clickOnEmailColumn();
  userPage.clickOnValuesFilterInputs();
  userPage.addEmailText(email);
});

And("Add filter for phone {string}", (phone) => {
  userPage.clickOnAddFilterButton();
  userPage.clickOnColumnFilter();
  userPage.clickOnPhoneColumn();
  userPage.clickOnValuesFilterInputs();
  userPage.addPhoneText(phone);
});

Then("I press cancel button", () => {
  userPage.clickOnCancelFilterButton();
});

Then("Filter is Added", () => {
  userPage.clickOnAddFilterFinalButton();
});

And("I check that phone filter was added", () => {
  userPage.getPhoneLabelFilterText();
});

And("I check that email filter was added", () => {
  userPage.getEmailLabelFilterText();
});

And("I check that organization roles filter was added", () => {
  userPage.getOrganizationRolesLabelFilterText();
});

And("I check that shools filter was added", () => {
  userPage.getSchoolLabelFilterText();
});

And("I check that inactive status filter was added", () => {
  userPage.getInactiveStatusLabelFilterText();
});

And("I check that active status filter was added", () => {
  userPage.getActiveStatusLabelFilterText();
});

And("I edit values from added filter on organization roles", () => {
  userPage.clickOnFilterLabel();
  userPage.clickOnValuesFilter();
  userPage.selectionOfOrganizationRolesValues();
  userPage.editOrganizationRolesFilterValues();
  userPage.closeListItems();
  userPage.clickOnAddFilterFinalButton();
});

And("I check edited value was saved on organization roles", () => {
  userPage.getEditedLabelFilterTextOrganizationRoles();
});

And("I edit values from added filter on schools", () => {
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

And("I edit status value as active", () => {
  userPage.clickOnFilterLabel();
  userPage.clickOnValuesFilter();
  userPage.selectActiveStatusValue();
  userPage.clickOnAddFilterFinalButton();
});

And("I check edited value was saved on status", () => {
  userPage.getEditedLabelFilterTextStatus();
});

And("I edit value from added filter on phone as {string}", (phone) => {
  userPage.clickOnFilterLabel();
  userPage.clickOnValuesFilterInputs();
  userPage.editPhoneText(phone);
  userPage.clickOnAddFilterFinalButton();
});

And("I check edited value was saved on phone", () => {
  userPage.getEditedLabelFilterTextPhone();
});

And("I edit value from added filter on email as {string}", (email) => {
  userPage.clickOnFilterLabel();
  userPage.clickOnValuesFilterInputs();
  userPage.editEmailText(email);
  userPage.clickOnAddFilterFinalButton();
});

And("I check edited value was saved on email", () => {
  userPage.getEditedLabelFilterTextEmail();
});

And(
  "I edit value from added filter on email {string} but I press cancel",
  (email) => {
    userPage.clickOnFilterLabel();
    userPage.clickOnValuesFilterInputs();
    userPage.editEmailText(email);
    userPage.clickOnCancelFilterButton();
    userPage.getEmailLabelFilterText();
  }
);

And(
  "I edit value from added filter on phone {string} but I press cancel",
  (phone) => {
    userPage.clickOnFilterLabel();
    userPage.clickOnValuesFilterInputs();
    userPage.editPhoneText(phone);
    userPage.clickOnCancelFilterButton();
    userPage.getPhoneLabelFilterText();
  }
);

And("I edit value from added filter on schools but I press cancel", () => {
  userPage.clickOnFilterLabel();
  userPage.clickOnValuesFilter();
  userPage.selectionOfSchoolValues();
  userPage.editSchoolsFilterValues();
  userPage.closeListItems();
  userPage.clickOnCancelFilterButton();
  userPage.getSchoolLabelFilterText();
});

And(
  "I edit value from added filter on organization roles but I press cancel",
  () => {
    userPage.clickOnFilterLabel();
    userPage.clickOnValuesFilter();
    userPage.selectionOfOrganizationRolesValues();
    userPage.editOrganizationRolesFilterValues();
    userPage.closeListItems();
    userPage.clickOnCancelFilterButton();
    userPage.getOrganizationRolesLabelFilterText();
  }
);

And("I edit status value as active but I press cancel", () => {
  userPage.clickOnFilterLabel();
  userPage.clickOnValuesFilter();
  userPage.selectActiveStatusValue();
  userPage.clickOnCancelFilterButton();
  userPage.getInactiveStatusLabelFilterText();
});

And("I clear the filter applied", () => {
  cy.viewport(1920, 1280);
  userPage.clickClearFilter();
  userPage.getAddFilterLabelState();
});

Then(
  "Add all existent filters and email {string} and phone {string}",
  (email, phone) => {
    userPage.clickOnAddFilterButton();
    userPage.clickOnColumnFilter();
    userPage.clickOnStatusColumn();
    userPage.clickOnValuesFilter();
    userPage.selectActiveStatusValue();
    userPage.clickOnAddFilterFinalButton();
    //Add status filter
    userPage.clickAddMoreFilters();
    userPage.clickOnColumnFilter();
    userPage.clickOnOrganizationRolesColumn();
    userPage.clickOnValuesFilter();
    userPage.selectionOfOrganizationRolesValues();
    userPage.closeListItems();
    userPage.clickOnAddFilterFinalButton();
    //Add organization roles filter
    userPage.clickAddMoreFilters();
    userPage.clickOnColumnFilter();
    userPage.clickOnSchoolsColumn();
    userPage.clickOnValuesFilter();
    userPage.selectionOfSchoolValues();
    userPage.closeListItems();
    userPage.clickOnAddFilterFinalButton();
    //Add schools filter
    userPage.clickAddMoreFilters();
    userPage.clickOnColumnFilter();
    userPage.clickOnEmailColumn();
    userPage.clickOnValuesFilterInputs();
    userPage.addEmailText(email);
    userPage.clickOnAddFilterFinalButton();
    //Add email filter
    userPage.clickAddMoreFilters();
    userPage.clickOnColumnFilter();
    userPage.clickOnPhoneColumn();
    userPage.clickOnValuesFilterInputs();
    userPage.addPhoneText(phone);
    userPage.clickOnAddFilterFinalButton();
    //Add phone filter
    userPage.clickAddMoreFilters();
    userPage.clickOnColumnFilter();
    userPage.clickOnClassColumn();
    userPage.clickOnValuesFilter();
    userPage.selectionOfClassValues();
    userPage.closeListItems();
    userPage.clickOnAddFilterFinalButton();
    //Add class filter
    userPage.clickAddMoreFilters();
    userPage.clickOnColumnFilter();
    userPage.clickOnGradeColumn();
    userPage.clickOnValuesFilter();
    userPage.selectionOfGradeValues();
    userPage.closeListItems();
    userPage.clickOnAddFilterFinalButton();
    //Add grade filter
  }
);

And("I clear all filters applied", () => {
  userPage.clickClearAllFilters();
  userPage.getAddFilterLabelState();
});

Then("I check filter is disable", () => {
  userPage.getFilterMouseOverText();
});

Then("I check the order of values is correct on users", () => {
  userPage.clickOnAddFilterButton();
  userPage.clickOnColumnFilter();
  userPage.getFilterOrderValues();
});

Then(
  "I search {string} user to be edited {string} {string} {string} and get {string} message",
  (search, givenName, familyName, shortCode, message) => {
    userPage.searchInputText(search);
    userPage.clickMoreActions();
    userPage.clickOnMoreActionsEditButton();
    userPage.editionGivenName(givenName);
    userPage.editionFamilyName(familyName);
    userPage.editionShortCode(shortCode);
    userPage.clickOnPreferNotToSayGender();
    userPage.clickOnRoles();
    userPage.closeListItems();
    userPage.clickOnEditionSaveButton();
    userPage.getNotificationText(message).contains(message);
  }
);

Then(
  "I search {string} user to be deleted on edition mode and get {string} message",
  (search, message) => {
    userPage.searchInputText(search);
    userPage.clickMoreActions();
    userPage.clickOnMoreActionsEditButton();
    userPage.clickOnEditionDeleteButton();
    userPage.sendDeleteText();
    userPage.clickOnDeleteFinalButton();
    userPage.getNotificationText(message).contains(message);
  }
);

Then(
  "I search {string} user to be deleted on edition mode but I cancel",
  (search) => {
    userPage.searchInputText(search);
    userPage.clickMoreActions();
    userPage.clickOnMoreActionsEditButton();
    userPage.clickOnEditionDeleteButton();
    userPage.sendDeleteText();
    userPage.clickOnCancelButtonPopUpEdition();
    userPage.clickOnCancelButtonEdition();
  }
);

And("I search {string}", (search) => {
  userPage.searchInputText(search);
  userPage.getUserSearch();
});

And("I add columns to be shown", () => {
  userPage.clickOnAddColumns();
  userPage.selectColumns();
});

And("I check locked columns {string} and {string} are present", () => {
  userPage.getFirstColumnText();
  userPage.getSecondColumnText();
});

And("I remove columns to be shown", () => {
  userPage.clickOnRemoveOrganizationRolesColumnsButton();
  userPage.clickOnRemoveSchoolColumnsButton();
  userPage.clickOnRemoveContactInfoColumnsButton();
  userPage.clickOnRemoveStatusColumnsButton();
  userPage.clickOnRemoveJoinDateColumnsButton();
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

Then("Upload correct multiple CSV file", () => {
  userPage.clickOnUploadCsvButton();
  userPage.selectMultipleFixtureFile();
  userPage.getValidationCsvText();
  userPage.clickOnUploadCsvFinalButton();
});

And("I get {string} message", (message) => {
  userPage.getNotificationText(message).contains(message);
});

Then("Upload correct CSV file", () => {
  userPage.clickOnUploadCsvButton();
  userPage.selectFixtureFile();
  userPage.getValidationCsvText();
  userPage.clickOnUploadCsvFinalButton();
});

Given(
  "I sort column {string} called {string} by asc and desc",
  (columnNumber, columnName) => {
    // desc first because by default the column is sorted in asc order
    gradesPage.sortColumn(columnName, columnNumber, "desc");
    gradesPage.sortColumn(columnName, columnNumber, "asc");
  }
);
