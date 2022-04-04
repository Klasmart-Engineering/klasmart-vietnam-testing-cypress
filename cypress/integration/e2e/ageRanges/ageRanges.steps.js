import { When, Then, Given } from "cypress-cucumber-preprocessor/steps";
import { userPage } from "../../page_objects/user-page";
import { ageRangesPage } from "../../page_objects/ageRanges-page";
import { classesPage } from "../../page_objects/classes-page";
import { schoolPage } from "../../page_objects/schools-page";

When("I navigate to age ranges page", () => {
  ageRangesPage.clickOnAgeRangesTab();
});

Given(
  "I create an age range from {string} months to {string} years",
  (from, to) => {
    ageRangesPage.clickOnCreateAgeRangeButton();
    ageRangesPage.editAgeRangeFrom(from);
    ageRangesPage.clickOnAgeRangeFromUnit();
    ageRangesPage.unitMonthSelection();
    ageRangesPage.editAgeRangeTo(to);
    ageRangesPage.clickOnAgeRangeToUnit();
    ageRangesPage.unitYearSelection();
    ageRangesPage.clickOnCreateFinalButton();
  }
);

Given(
  "I edit an age range from {string} months to {string} years",
  (from, to) => {
    ageRangesPage.clickMoreActions();
    ageRangesPage.clickOnMoreActionsEditButton();
    ageRangesPage.editAgeRangeFrom(from);
    ageRangesPage.clickOnAgeRangeFromUnit();
    ageRangesPage.unitMonthSelection();
    ageRangesPage.editAgeRangeTo(to);
    ageRangesPage.clickOnAgeRangeToUnit();
    ageRangesPage.unitYearSelection();
    ageRangesPage.clickOnSaveEditionButton();
  }
);

Given("I delete an age range", () => {
  ageRangesPage.clickMoreActions();
  ageRangesPage.clickOnMoreActionsDeleteButton();
  userPage.sendDeleteText();
  classesPage.clickOnDeleteFinalButton();
});

Given("I press edit on an age range", () => {
  ageRangesPage.clickMoreActions();
  ageRangesPage.clickOnMoreActionsEditButton();
});

When("I press delete button", () => {
  ageRangesPage.clickOnDeleteEdition();
  userPage.sendDeleteText();
  classesPage.clickOnDeleteFinalButton();
});

Given(
  "I create an age range from {string} years to {string} years",
  (from, to) => {
    ageRangesPage.clickOnCreateAgeRangeButton();
    ageRangesPage.editAgeRangeFrom(from);
    ageRangesPage.clickOnAgeRangeFromUnit();
    ageRangesPage.unitYearSelection();
    ageRangesPage.editAgeRangeTo(to);
    ageRangesPage.clickOnAgeRangeToUnit();
    ageRangesPage.unitYearSelection();
    ageRangesPage.clickOnCreateFinalButton();
  }
);

When(
  "I enter an age range value for from {string} and {string}",
  (from, to) => {
    ageRangesPage.clickOnCreateAgeRangeButton();
    ageRangesPage.editAgeRangeFrom(from);
    ageRangesPage.clickOnAgeRangeFromUnit();
    ageRangesPage.unitYearSelection();
    ageRangesPage.editAgeRangeTo(to);
    ageRangesPage.clickOnAgeRangeToUnit();
    ageRangesPage.unitYearSelection();
  }
);

Then(
  "I should receive error messages {string} and {string}",
  (message1, message2) => {
    ageRangesPage.getFromHelperText(message1);
    ageRangesPage.getToHelperText(message2);
  }
);

Given("I remove columns to be shown", () => {
  ageRangesPage.removeAllColumns();
});

Given("I add columns to be shown", () => {
  userPage.clickOnAddColumns();
  userPage.selectColumns();
});

When("I check locked column {string} is present", () => {
  ageRangesPage.getColumnText();
});

When("I check locked columns {string} and {string} are present", () => {
  schoolPage.getFirstColumnText();
  ageRangesPage.getSecondColumnText();
});

Then("I cancel creation of age range", () => {
  ageRangesPage.clickOnCancelButton();
});
