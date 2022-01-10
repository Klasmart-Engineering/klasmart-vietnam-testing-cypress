import { When, Then } from "cypress-cucumber-preprocessor/steps";
import { signInPage } from "../../page_objects/sign-in-page";
import { userPage } from "../../page_objects/user-page";

Given(
  "I sign in with valid credentials {string} and {string}",
  (email, pass) => {
    signInPage.goToHomePage();
    signInPage.getClickOnYourCountryOrRegionText();
    signInPage.enterEmailOrPhone(email);
    signInPage.enterPassword(pass);
    signInPage.acceptPrivacyPolicy();
    signInPage.clickOnSignInButton();
    signInPage.clickSelectProfile();
    signInPage.clickOnContinueButton();
  }
);

When("I navigate to actual section", () => {
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
  "fill all existent fields as {string} {string} {string} {string} {string} {string} and {string}",
  (
    givenName,
    familyName,
    contactInfo,
    shortCode,
    otherGender,
    alternativeEmail,
    alternativePhone
  ) => {
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
    userPage.clickOnAlternativeContactInfo();
    userPage.alternativeEmail(alternativeEmail);
    userPage.alternativePhone(alternativePhone);
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
    userPage.getNotificationText(message);
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
  }
);

And("I clear all filters applied", () => {
  userPage.clickClearAllFilters();
  userPage.getAddFilterLabelState();
});

And("I check filter is disable", () => {
  userPage.getFilterMouseOverText();
});

Then("I check the order of values is correct on users", () => {
  userPage.clickOnAddFilterButton();
  userPage.clickOnColumnFilter();
  userPage.getFilterOrderValues();
});
