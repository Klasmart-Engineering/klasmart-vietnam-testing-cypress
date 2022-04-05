import { When, Then, Given } from "cypress-cucumber-preprocessor/steps";
import { programsPage } from "../../page_objects/programs-page";
import { userPage } from "../../page_objects/user-page";
import { schoolPage } from "../../page_objects/schools-page";
import { classesPage } from "../../page_objects/classes-page";
import { gradesPage } from "../../page_objects/grades-page";

When("I navigate to programs page", () => {
  programsPage.clickOnProgramsTab();
});

Given("I create a program {string}", (programName) => {
  programsPage.clickOnCreateProgramButton();
  programsPage.programName(programName);
  programsPage.clickOnGradesNameInput();
  programsPage.selectionOfGradesValues();
  userPage.closeListItems();
  programsPage.clickOnAgeRangesInput();
  programsPage.selectionOfAgeRangesValues();
  userPage.closeListItems();
  schoolPage.clickOnNextButton();
  schoolPage.selectProgramItems();
  schoolPage.clickOnNextButton();
  schoolPage.clickOnCreateFinalButton();
});

Then("I can search for program {string}", (search) => {
  userPage.searchInputText(search);
  programsPage.getProgramName();
});

Given(
  "I search program {string} to be edited as {string}",
  (search, editName) => {
    userPage.searchInputText(search);
    programsPage.clickMoreActions();
    classesPage.clickOnMoreActionsEditButton();
    programsPage.editProgram(editName);
    programsPage.clickOnGradesNameInput();
    programsPage.editionOfGradesValues();
    userPage.closeListItems();
    programsPage.clickOnAgeRangesInput();
    programsPage.editionOfAgeRangesValues();
    userPage.closeListItems();
    programsPage.clickOnNextButton();
    schoolPage.selectOtherProgramItems();
    programsPage.clickOnNextButton();
    programsPage.clickOnSaveButton();
  }
);

Then("I can search for edited program {string}", (search) => {
  userPage.searchInputText(search);
  programsPage.editProgramName();
});

And("I delete the program", () => {
  programsPage.clickMoreActions();
  classesPage.clickOnMoreActionsDeleteButton();
  userPage.sendDeleteText();
  gradesPage.clickOnDeleteFinalButton();
});

Given("I open the filter window", () => {
  userPage.clickOnAddFilterButton();
});

When("I add all possible filters", () => {
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

Given("Add filter for grades", () => {
  userPage.clickOnAddFilterButton();
  userPage.clickOnColumnFilter();
  classesPage.clickOnGradesColumn();
  userPage.clickOnValuesFilter();
  classesPage.selectionOfGradesValues();
  userPage.closeListItems();
});

When("I add the filter", () => {
  userPage.clickOnAddFilterFinalButton();
});

Then("I check that grades filter was added", () => {
  classesPage.getGradesFilterText();
});

When("I press cancel button", () => {
  userPage.clickOnCancelFilterButton();
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

Then("I clear the filter applied", () => {
  userPage.clickClearFilter();
  userPage.getAddFilterLabelState();
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

Then("I check that age ranges to filter was added", () => {
  classesPage.getAgeRangesToFilterText();
});

When("I press cancel button", () => {
  userPage.clickOnCancelFilterButton();
});

Given("Add filter for age ranges to", () => {
  userPage.clickOnAddFilterButton();
  userPage.clickOnColumnFilter();
  classesPage.clickOnAgeRangesToColumn();
  userPage.clickOnValuesFilter();
  classesPage.selectionOfAgeRangesToValues();
  userPage.closeListItems();
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

Then("I check that subjects filter was added", () => {
  classesPage.getSubjectsFilterText();
});

Given("Add filter for subjects", () => {
  userPage.clickOnAddFilterButton();
  userPage.clickOnColumnFilter();
  classesPage.clickOnSubjectsColumn();
  userPage.clickOnValuesFilter();
  classesPage.selectionOfSubjectsValues();
  userPage.closeListItems();
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

Given("Add all existent filters", () => {
  cy.viewport(1920, 1280);
  //Add grades filter
  userPage.clickOnAddFilterButton();
  userPage.clickOnColumnFilter();
  classesPage.clickOnGradesColumn();
  userPage.clickOnValuesFilter();
  classesPage.selectionOfGradesValues();
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
  //Add subjects filter
  userPage.clickAddMoreFilters();
  userPage.clickOnColumnFilter();
  classesPage.clickOnSubjectsColumn();
  userPage.clickOnValuesFilter();
  classesPage.selectionOfSubjectsValues();
  userPage.closeListItems();
  userPage.clickOnAddFilterFinalButton();
});

Then("I clear all filters applied", () => {
  userPage.clickClearAllFilters();
  userPage.getAddFilterLabelState();
});

Then("I check filter is disable", () => {
  userPage.getFilterMouseOverText();
});

Given("I check the order of values is correct on programs", () => {
  userPage.clickOnAddFilterButton();
  userPage.clickOnColumnFilter();
  programsPage.getFilterOrderValues();
});

Given("I remove columns to be shown", () => {
  programsPage.removeAllColumns();
});

Given("I add columns to be shown", () => {
  userPage.clickOnAddColumns();
  userPage.selectColumns();
});

When("I check locked column {string} is present", () => {
  programsPage.getColumnText();
});

When("I check locked columns {string} and {string} are present", () => {
  schoolPage.getFirstColumnText();
  programsPage.getSecondColumnText();
});

Then("I search {string} to see the details of the program", (search) => {
  userPage.searchInputText(search);
  programsPage.clickMoreActions();
  classesPage.clickOnMoreActionsViewDetailsButton();
});

Given("I press on create program {string}", (programName) => {
  programsPage.clickOnCreateProgramButton();
  programsPage.programName(programName);
  programsPage.clickOnGradesNameInput();
  programsPage.selectionOfGradesValues();
  userPage.closeListItems();
  programsPage.clickOnAgeRangesInput();
  programsPage.selectionOfAgeRangesValues();
  userPage.closeListItems();
  schoolPage.clickOnNextButton();
});

When("I press on create subject", () => {
  schoolPage.clickOnCreateSubjectButton();
});

And("I create a category {string}", (catName) => {
  schoolPage.clickOnCategory();
  schoolPage.clickOnCreateCategory();
  schoolPage.getCategoryRequiredText();
  schoolPage.fillCategoryName(catName);
  schoolPage.clickOnCreateCategoryFinalButton();
});

Then("I select a category", () => {
  schoolPage.clickOnCategory();
  programsPage.selectSubCategoryAndCategoryItems();
  programsPage.clickOnSelectButtonCategory();
});

And("I select all subcategories and unselect them", () => {
  schoolPage.clickOnSubCategory();
  programsPage.clickOnAllSubcategoriesItems();
  programsPage.clickOnAllSubcategoriesItems();
  programsPage.clickOnSelectButtonCategory();
  cy.wait(2000);
});

Then("an error should be displayed for not selecting any subcategories", () => {
  schoolPage.getSubCategoryErrorMessageText();
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

And("I create subcategory {string}", (subCatName) => {
  schoolPage.clickOnSubCategory();
  schoolPage.clickOnCreateSubCategory();
  schoolPage.getSubCategoryRequiredText();
  schoolPage.fillSubCategoryName(subCatName);
  schoolPage.clickOnCreateSubCategoryFinalButton();
});

And("I create a new subject {string}", (subName) => {
  schoolPage.clickOnCreateSubjectButton();
  schoolPage.clickOnCategory();
  programsPage.selectSubCategoryAndCategoryItems();
  programsPage.clickOnSelectButtonCategory();
  schoolPage.fillSubjectName(subName);
  schoolPage.clickOnCreateSubjectFinalButton();
});

And("I search new subject to validate {string}", (search) => {
  programsPage.searchSubjectInputText(search);
  schoolPage.getSubjectName();
});
