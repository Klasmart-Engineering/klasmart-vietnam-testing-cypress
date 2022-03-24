import { When, Then } from "cypress-cucumber-preprocessor/steps";
import { signInPage } from "../../page_objects/sign-in-page";
import { userPage } from "../../page_objects/user-page";
import { rolesPage } from "../../page_objects/roles-page";
import { gradesPage } from "../../page_objects/grades-page";
import { schoolPage } from "../../page_objects/schools-page";

When("I navigate to the roles page", () => {
  rolesPage.clickOnRolesTab();
});

Then(
  "I create a new role with name as {string} and description as {string}",
  (name, description) => {
    rolesPage.clickOnCreateRoleButton();
    rolesPage.fillName(name);
    rolesPage.fillDescription(description);
    rolesPage.clickOnContinueAndFinisheButton();
    rolesPage.selectRandomEditionActions();
    rolesPage.goToTheTop();
    rolesPage.clickOnContinueAndFinisheButton();
    rolesPage.clickOnContinueAndFinisheButton();
    rolesPage.clickOnCreateSaveDeleteRoleFinalButton();
  }
);

And("I get {string} message", (message) => {
  userPage.getNotificationText(message).contains(message);
});

And("I search role {string}", (search) => {
  userPage.searchInputText(search);
  rolesPage.getRoleName();
});

Then(
  "I edit an existent role {string} with name as {string} and description as {string}",
  (search, name, description) => {
    userPage.searchInputText(search);
    gradesPage.clickMoreActions();
    userPage.clickOnMoreActionsEditButton();
    rolesPage.editName(name);
    rolesPage.editDescription(description);
    rolesPage.clickOnContinueAndFinisheButton();
    rolesPage.selectRandomEditionActions();
    rolesPage.goToTheTop();
    rolesPage.clickOnContinueAndFinisheButton();
    rolesPage.clickOnContinueAndFinisheButton();
    rolesPage.clickOnCreateSaveDeleteRoleFinalButton();
  }
);

And("I search edited role {string}", (search) => {
  userPage.searchInputText(search);
  rolesPage.getEditRoleName();
});

Then(
  "I delete an existent role with name as {string} and description as {string}",
  (search) => {
    userPage.searchInputText(search);
    gradesPage.clickMoreActions();
    userPage.clickOnMoreActionsDeleteButton();
    rolesPage.clickOnContinueAndFinisheButton();
    rolesPage.clickOnCreateSaveDeleteRoleFinalButton();
  }
);

And("I add columns to be shown", () => {
  userPage.clickOnAddColumns();
  userPage.selectColumns();
});

And("I check locked columns {string} and {string} are present", () => {
  rolesPage.getFirstColumnText();
  rolesPage.getSecondColumnText();
});

And("I remove columns to be shown", () => {
  gradesPage.removeAllColumns();
});

And("I check locked column {string} is present", () => {
  rolesPage.getLockedColumnText();
});

And("I search new role to validate {string}", (search) => {
  userPage.searchInputText(search);
  rolesPage.getRoleName();
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

Then(
  "I create a new role with name as {string} and description as {string} and I cancel it",
  (name, description) => {
    rolesPage.clickOnCreateRoleButton();
    rolesPage.fillName(name);
    rolesPage.fillDescription(description);
    rolesPage.clickOnContinueAndFinisheButton();
    rolesPage.selectRandomActions();
    rolesPage.clickOnContinueAndFinisheButton();
    rolesPage.clickOnContinueAndFinisheButton();
    rolesPage.clickOnCancelCreationButton();
    rolesPage.clickOnCloseRoleWindows();
    rolesPage.getTitleModuleText();
  }
);

Then(
  "I create a new role with empty name {string} and empty description as {string}",
  (name, description) => {
    rolesPage.clickOnCreateRoleButton();
    rolesPage.fillName(name);
    rolesPage.fillDescription(description);
    rolesPage.getNameErrorMessageText();
  }
);

Then(
  "Then I create a new role with more than maximum characters allowed for name {string} and description {string}",
  (name, description) => {
    rolesPage.clickOnCreateRoleButton();
    rolesPage.fillName(name);
    rolesPage.fillDescription(description);
    rolesPage.getNameErrorMessageText();
  }
);

Then(
  "I create a new role with more than maximum characters allowed for name {string} and description {string}",
  (name, description) => {
    rolesPage.clickOnCreateRoleButton();
    rolesPage.fillName(name);
    rolesPage.fillDescription(description);
    rolesPage.getMaxNameMessageText();
    rolesPage.getMaxDescriptionMessageText();
  }
);

Then(
  "I create a new role with less than minimum characters allowed for name {string}",
  (name) => {
    rolesPage.clickOnCreateRoleButton();
    rolesPage.fillName(name);
    rolesPage.getMinNameMessageText();
  }
);

Then(
  "I create a new role with special characters not allowed for name {string} and description {string}",
  (name, description) => {
    rolesPage.clickOnCreateRoleButton();
    rolesPage.fillName(name);
    rolesPage.fillDescription(description);
    rolesPage.getSpecialCharactersNameMessageText();
    rolesPage.getSpecialCharactersDescriptionMessageText();
  }
);

Then("I create a repeated name for role as {string}", (name) => {
  rolesPage.clickOnCreateRoleButton();
  rolesPage.fillName(name);
  rolesPage.getRepeatedNameMessageText();
});

Then(
  "I edit an existent role {string} and clear all permissions assigned",
  (search) => {
    userPage.searchInputText(search);
    gradesPage.clickMoreActions();
    userPage.clickOnMoreActionsEditButton();
    rolesPage.clickOnContinueAndFinisheButton();
    rolesPage.clickOnClearButton();
  }
);

Then(
  "I edit an existent role {string} and copy permission from existing role",
  (search) => {
    userPage.searchInputText(search);
    gradesPage.clickMoreActions();
    userPage.clickOnMoreActionsEditButton();
    rolesPage.clickOnContinueAndFinisheButton();
    rolesPage.clickOnCopyFromRole();
    rolesPage.copyFromRoleSelection();
    rolesPage.goToTheTop();
    rolesPage.clickOnContinueAndFinisheButton();
    rolesPage.clickOnContinueAndFinisheButton();
    rolesPage.clickOnCreateSaveDeleteRoleFinalButton();
  }
);

Then(
  "I edit an existent role {string} and reset permission assigned",
  (search) => {
    userPage.searchInputText(search);
    gradesPage.clickMoreActions();
    userPage.clickOnMoreActionsEditButton();
    rolesPage.clickOnContinueAndFinisheButton();
    rolesPage.selectRandomActions();
    rolesPage.goToTheTop();
    rolesPage.clickOnResetButton();
    rolesPage.goToTheTop();
    rolesPage.clickOnContinueAndFinisheButton();
    rolesPage.clickOnContinueAndFinisheButton();
    rolesPage.clickOnCreateSaveDeleteRoleFinalButton();
  }
);
