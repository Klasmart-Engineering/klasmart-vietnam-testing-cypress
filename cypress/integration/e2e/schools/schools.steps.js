import { When, Then, And, Given } from "cypress-cucumber-preprocessor/steps";
import { signInPage } from "../../page_objects/sign-in-page";
import { userPage } from "../../page_objects/user-page";
import { schoolPage } from "../../page_objects/schools-page";
import { assert } from "chai";

When("I navigate to the schools page", () => {
  schoolPage.clickOnSchoolsTab();
});

Given("I am in the school creation window", () => {
  schoolPage.clickOnCreateSchoolButton();
});

When("I enter {string} and {string} for name and shortcode", (name, shortCode) => {
  schoolPage.fillName(name);
  schoolPage.fillShortCode(shortCode);
  schoolPage.getNextButtonState();
  schoolPage.getPreviousButtonState();
})

Then("I should receive error messages {string} and {string}", (error1, error2) => {
  schoolPage.getMaxNameLengthText(error1);
  schoolPage.getMaxShortCodeLengthText(error2);
})

When("I create a new school with name {string} and shortcode (string)", (name, shortCode) => {
  schoolPage.fillName(name);
  schoolPage.fillShortCode(shortCode);
  schoolPage.getNextButtonState();
  schoolPage.getPreviousButtonState();
  schoolPage.clickOnNextButton();
  schoolPage.selectProgramItems();
  schoolPage.clickOnNextButton();
  schoolPage.clickOnCreateFinalButton();
})

When("I enter a valid name and shortcode {string} and {string}", (name, shortCode) => {
  schoolPage.fillName(name);
  schoolPage.fillShortCode(shortCode);
  schoolPage.getNextButtonState();
  schoolPage.getPreviousButtonState();
});

And("I select other existing programs", () => {
  schoolPage.clickOnNextButton();
  schoolPage.selectOtherProgramItems();
  schoolPage.clickOnNextButton();
});

Then("a {string} message is displayed", (message) => {
  userPage.getNotificationText(message).contains(message);
});

And("{string} exists in the schools list", (search) => {
  userPage.searchInputText(search);
  schoolPage.getSchoolName();
});

When("I try to create a duplicate school with the details {string} and {string}", (name, shortCode) => {
  schoolPage.fillName(name);
  schoolPage.fillShortCode(shortCode);
  schoolPage.getNextButtonState();
  schoolPage.getPreviousButtonState();
  schoolPage.clickOnNextButton();
  schoolPage.selectOtherProgramItems();
  schoolPage.clickOnNextButton();
})

When("I fill all fields for a new program {string}", (progName) => {
  schoolPage.clickOnNextButton();
  schoolPage.clickOnCreateProgram();
  schoolPage.fillProgramName(progName);
  schoolPage.clickOnGrades();
  schoolPage.selectionGrades();
  userPage.closeListItems();
  schoolPage.clickOnAgeRanges();
  schoolPage.selectionAgeRanges();
  userPage.closeListItems();
  schoolPage.clickOnNextProgramButton();
});

When("I enter invalid details for a new program {string}", (progName) => {
  schoolPage.clickOnNextButton();
  schoolPage.clickOnCreateProgram();
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

Then(
  "I get error messages {string} {string} {string}",
  (progMessage, gradesMessage, ageMessage) => {
    schoolPage.getProgramErrorMessageText(progMessage);
    schoolPage.getGradesErrorMessageText(gradesMessage);
    schoolPage.getAgeRangesErrorMessageText(ageMessage);
  }
);

Then("I get {string} message", (message) => {
  userPage.getNotificationText(message).contains(message);
});

And("I search new program to validate {string}", (search) => {
  schoolPage.searchProgramInputText(search);
  schoolPage.getProgramName();
});

And("I select an existing subject before confirming creation", () => {
  schoolPage.selectSubjectItems();
  schoolPage.clickOnNextProgramButton();
  schoolPage.clickCreateProgramFinal();
})

And(
  "I create a new subject {string}",
  (subName) => {
    schoolPage.clickOnCreateSubjectButton();
    schoolPage.clickOnCategory();
    schoolPage.selectSubCategoryAndCategoryItems();
    schoolPage.clickOnSelectButtonCategory();
    schoolPage.fillSubjectName(subName);
    schoolPage.clickOnCreateSubjectFinalButton();
  }
);

And("I search new subject to validate {string}", (search) => {
  schoolPage.searchSubjectInputText(search);
  schoolPage.getSubjectName();
});

And("I press on create subject", () => {
  schoolPage.clickOnCreateSubjectButton();
});

And(
  "I create a category {string}",
  (catName) => {
    schoolPage.clickOnCategory();
    schoolPage.clickOnCreateCategory();
    schoolPage.getCategoryRequiredText();
    schoolPage.fillCategoryName(catName);
    schoolPage.clickOnCreateCategoryFinalButton();
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
  "I create subcategory {string}",
  (subCatName) => {
    schoolPage.clickOnSubCategory();
    schoolPage.clickOnCreateSubCategory();
    schoolPage.getSubCategoryRequiredText();
    schoolPage.fillSubCategoryName(subCatName);
    schoolPage.clickOnCreateSubCategoryFinalButton();
  }
);

Given("I search for {string}", (search) => {
    userPage.searchInputText(search);
  }
);

When("I edit the school details to be {string} and {string}", (name, shortCode) => {
  schoolPage.clickMoreActions();
  userPage.clickOnMoreActionsEditButton();
  schoolPage.editName(name);
  schoolPage.editShortCode(shortCode);
  schoolPage.clickOnNextButtonEdition();
  schoolPage.clickOnNextButtonEdition();
  schoolPage.clickOnSaveButtonEdition();
})

When("I delete the school",() => {
    schoolPage.clickMoreActions();
    userPage.clickOnMoreActionsDeleteButton();
    userPage.sendDeleteText();
    userPage.clickOnDeleteFinalButton();
  }
);

Then("columns {string} and {string} should be present", () => {
  schoolPage.getFirstColumnText();
  schoolPage.getSecondColumnText();
});

Then("only the locked column School Name is present", () => {
  schoolPage.getSecondColumnText();
});

When("I remove columns from school list", () => {
  schoolPage.removeAllColumns();
});

When("I search {string}", (search) => {
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

Given 

When("I upload a correct CSV file with a single school", () => {
  schoolPage.selectFixtureFile();
  userPage.getValidationCsvText();
  userPage.clickOnUploadCsvFinalButton();
});

When("I upload a correct CSV file with multiple schools", () => {
  schoolPage.selectMultipleFixtureFile();
  userPage.getValidationCsvText();
  userPage.clickOnUploadCsvFinalButton();
});

And("I get {string} message", (message) => {
  userPage.getNotificationText(message).contains(message);
});

And("I select all subcategories and unselect them", () => {
  schoolPage.clickOnSubCategory();
  schoolPage.clickOnAllSubcategoriesItems();
  schoolPage.clickOnAllSubcategoriesItems();
  schoolPage.clickOnSelectButtonCategory();
  cy.wait(2000);
});

Then("an error should be displayed for not selecting any subcategories", () => {
  schoolPage.getSubCategoryErrorMessageText();
})

Then("I can select all programs", () => {
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
});

Then("I can select all pages on programs", () => {
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

Then("I can select this page on programs", () => {
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

And("I can unselect all programs by clicking none", () => {
  schoolPage.clickOnProgramPagesSelector();
  schoolPage.clickOnNonePageSelector();
  schoolPage.getProgramRequiredTextItems();
});
