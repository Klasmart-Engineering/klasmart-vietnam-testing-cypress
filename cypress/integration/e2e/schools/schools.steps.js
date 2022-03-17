import { When, Then } from "cypress-cucumber-preprocessor/steps";
import { signInPage } from "../../page_objects/sign-in-page";
import { userPage } from "../../page_objects/user-page";
import { schoolPage } from "../../page_objects/schools-page";
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

When("I navigate to the schools page", () => {
  schoolPage.clickOnSchoolsTab();
});

Then("I press on create school button", () => {
  schoolPage.clickOnCreateSchoolButton();
});

And(
  "I add maximum characters on fields {string} and {string}",
  (name, shortCode) => {
    schoolPage.fillName(name);
    schoolPage.fillShortCode(shortCode);
    schoolPage.getNextButtonState();
    schoolPage.getPreviousButtonState();
  }
);

And("I get following error messages {string} and {string}", () => {
  schoolPage.getMaxNameLenghtText();
  schoolPage.getMaxShortCodeLenghtText();
});

And("I close creation of Schools", () => {
  schoolPage.clickOnCloseSchool();
});

And("I add spaces on fields {string} and {string}", (name, shortCode) => {
  schoolPage.fillName(name);
  schoolPage.fillShortCode(shortCode);
  schoolPage.getNextButtonState();
  schoolPage.getPreviousButtonState();
});

And("I add correct data on fields {string} and {string}", (name, shortCode) => {
  schoolPage.fillName(name);
  schoolPage.fillShortCode(shortCode);
  schoolPage.getNextButtonState();
  schoolPage.getPreviousButtonState();
});

And("I select an existing program", () => {
  schoolPage.clickOnNextButton();
  schoolPage.selectProgramItems();
  schoolPage.clickOnNextButton();
});

And("I select other existing programs", () => {
  schoolPage.clickOnNextButton();
  schoolPage.selectOtherProgramItems();
  schoolPage.clickOnNextButton();
});

And("I create a new school and get {string} message", (message) => {
  schoolPage.clickOnCreateFinalButton();
  userPage.getNotificationText(message).contains(message);
});

And("I search new school to validate {string}", (search) => {
  userPage.searchInputText(search);
  schoolPage.getSchoolName();
});

And("I fill all fields for a new program {string}", (progName) => {
  schoolPage.clickOnNextButton();
  schoolPage.clickOnCreateProgram();
  schoolPage.fillProgramName(progName);
  schoolPage.clickOnGrades();
  schoolPage.selectionGrades();
  userPage.closeListItems();
  schoolPage.clickOnAgeRanges();
  schoolPage.selectionAgeRanges();
  userPage.closeListItems();
});

And("I add maximum value {string}", (progName) => {
  schoolPage.editProgramName(progName);
  schoolPage.clickOnGrades();
  schoolPage.clickOnSelectAllItems();
  schoolPage.clickOnSelectAllItems();
  userPage.closeListItems();
  schoolPage.clickOnAgeRanges();
  schoolPage.clickOnSelectAllItems();
  schoolPage.clickOnSelectAllItems();
  userPage.closeListItems();
  schoolPage.getNextProgramButtonState();
  schoolPage.getPreviousProgramButtonState();
});

And(
  "I get error messages {string} {string} {string}",
  (progMessage, gradesMessage, ageMessage) => {
    schoolPage.getProgramErrorMessageText(progMessage);
    schoolPage.getGradesErrorMessageText(gradesMessage);
    schoolPage.getAgeRangesErrorMessageText(ageMessage);
  }
);

And("I add valid data for a new program {string}", (progName) => {
  schoolPage.editProgramName(progName);
  schoolPage.clickOnGrades();
  schoolPage.selectionGrades();
  userPage.closeListItems();
  schoolPage.clickOnAgeRanges();
  schoolPage.selectionAgeRanges();
  userPage.closeListItems();
  schoolPage.clickOnNextProgramButton();
  schoolPage.selectSubjectItems();
  schoolPage.clickOnNextProgramButton();
  schoolPage.clickOnCreateProgramButton();
});

And("I create a new program and get {string} message", (message) => {
  userPage.getNotificationText(message).contains(message);
});

And("I search new program to validate {string}", (search) => {
  schoolPage.searchProgramInputText(search);
  schoolPage.getProgramName();
});

And(
  "I press on create subject {string} and get {string} message",
  (subName, message) => {
    schoolPage.clickOnNextProgramButton();
    schoolPage.clickOnCreateSubjectButton();
    schoolPage.clickOnCategory();
    schoolPage.selectSubCategoryAndCategoryItems();
    schoolPage.clickOnSelectButtonCategory();
    schoolPage.clickOnSubCategory();
    schoolPage.selectSubCategoryAndCategoryItems();
    schoolPage.clickOnSelectButtonCategory();
    schoolPage.clickOnAddMoreCategories();
    schoolPage.clickOnRemoveAddMoreCategories();
    schoolPage.fillSubjectName(subName);
    schoolPage.clickOnCreateSubjectFinalButton();
    userPage.getNotificationText(message).contains(message);
  }
);

And("I search new subject to validate {string}", (search) => {
  schoolPage.searchSubjectInputText(search);
  schoolPage.getSubjectName();
});

And("I press on create subject {string}", () => {
  schoolPage.clickOnNextProgramButton();
  schoolPage.clickOnCreateSubjectButton();
});

And(
  "I create a category {string} checking required message {string} then getting {string} message",
  (catName, textMess, message) => {
    schoolPage.clickOnCategory();
    schoolPage.clickOnCreateCategory();
    schoolPage.getCategoryRequiredText(textMess);
    schoolPage.fillCategoryName(catName);
    schoolPage.clickOnCreateCategoryFinalButton();
    userPage.getNotificationText(message).contains(message);
  }
);

And("I select a category", () => {
  schoolPage.clickOnCategory();
  schoolPage.selectSubCategoryAndCategoryItems();
  schoolPage.clickOnSelectButtonCategory();
});

And("I check locked column {string} is present", () => {
  schoolPage.getColumnText();
});

And(
  "I create subcategory {string} checking required message {string} then getting {string} message",
  (subCatName, textMess, message) => {
    schoolPage.clickOnSubCategory();
    schoolPage.clickOnCreateSubCategory();
    schoolPage.getSubCategoryRequiredText(textMess);
    schoolPage.fillSubCategoryName(subCatName);
    schoolPage.clickOnCreateSubCategoryFinalButton();
    userPage.getNotificationText(message).contains(message);
  }
);

Then(
  "I search {string} to be edited {string} {string} and get {string} message",
  (search, name, shortCode, message) => {
    userPage.searchInputText(search);
    schoolPage.clickMoreActions();
    userPage.clickOnMoreActionsEditButton();
    schoolPage.clickOnPreviousButtonEdition();
    schoolPage.clickOnPreviousButtonEdition();
    schoolPage.editName(name);
    schoolPage.editShortCode(shortCode);
    schoolPage.clickOnNextButtonEdition();
    schoolPage.selectProgramItems();
    schoolPage.clickOnNextButtonEdition();
    schoolPage.clickOnSaveButtonEdition();
    userPage.getNotificationText(message).contains(message);
  }
);

Then(
  "I search {string} to be deleted and get {string} message",
  (search, message) => {
    userPage.searchInputText(search);
    schoolPage.clickMoreActions();
    userPage.clickOnMoreActionsDeleteButton();
    userPage.sendDeleteText();
    userPage.clickOnDeleteFinalButton();
    userPage.getNotificationText(message).contains(message);
  }
);

And("I add columns to be shown", () => {
  userPage.clickOnAddColumns();
  userPage.selectColumns();
});

And("I check locked columns {string} and {string} are present", () => {
  schoolPage.getFirstColumnText();
  schoolPage.getSecondColumnText();
});

And("I check locked column {string} is present", () => {
  schoolPage.getSecondColumnText();
});

And("I remove columns to be shown", () => {
  schoolPage.removeAllColumns();
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
  schoolPage.sortFirstAsc();
  schoolPage.sortFirstDesc();
  userPage.sortSecondAsc();
  userPage.sortSecondDesc();
});

And("I search {string}", (search) => {
  userPage.searchInputText(search);
  userPage.getUserSearch();
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

Then("Upload correct CSV file", () => {
  userPage.clickOnUploadCsvButton();
  schoolPage.selectFixtureFile();
  userPage.getValidationCsvText();
  userPage.clickOnUploadCsvFinalButton();
});

Then("Upload correct multiple CSV file", () => {
  userPage.clickOnUploadCsvButton();
  schoolPage.selectMultipleFixtureFile();
  userPage.getValidationCsvText();
  userPage.clickOnUploadCsvFinalButton();
});

And("I get {string} message", (message) => {
  userPage.getNotificationText(message).contains(message);
});

And("I select all categories and unselect them", () => {
  schoolPage.clickOnSubCategory();
  schoolPage.clickOnAllSubcategoriesItems();
  schoolPage.clickOnAllSubcategoriesItems();
  schoolPage.clickOnSelectButtonCategory();
  cy.wait(2000);
  schoolPage.getSubCategoryErrorMessageText();
});

And("I select all programs and unselect them", () => {
  schoolPage.clickOnNextButton();
  schoolPage.clickOnAllProgramsItems();
  schoolPage.getSelectedItemsText();
  schoolPage.getQuantityOfProgramsSelected();
  schoolPage.getSelectedItemsText();
  schoolPage.getQuantityOfProgramsSelected();

  cy.get("@totalNumberText").then(($tn) => {
    cy.get("@programCount").then(($pc) => {
      expect($tn).to.equal($pc);
    });
  });
  schoolPage.clickOnAllProgramsItems();
  schoolPage.getProgramRequiredTextItems();
});

And("I select all pages on programs", () => {
  schoolPage.clickOnNextButton();
  cy.wait(2000);
  schoolPage.clickOnProgramPagesSelector();
  schoolPage.clickOnAllPagesSelector();
  schoolPage.getTotalResultsPageItems();
  schoolPage.getQuantityOfProgramsSelected();

  cy.get("@programCount").then(($pc) => {
    cy.get("@totalResults").then(($tr) => {
      expect($pc).to.equal($tr);
    });
  });
});

And("I select this page on programs", () => {
  schoolPage.clickOnNextButton();
  cy.wait(2000);
  schoolPage.clickOnProgramPagesSelector();
  schoolPage.clickOnThisPageSelector();
  schoolPage.getSelectedItemsText();
  schoolPage.getQuantityOfProgramsSelected();

  cy.get("@programCount").then(($pc) => {
    cy.get("@totalNumberText").then(($tn) => {
      expect($pc).to.equal($tn);
    });
  });
});

And("I select none page on programs", () => {
  schoolPage.clickOnNextButton();
  cy.wait(2000);
  schoolPage.clickOnProgramPagesSelector();
  schoolPage.clickOnNonePageSelector();
  schoolPage.getProgramRequiredTextItems();
});
