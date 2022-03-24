import { When, Then, Given } from "cypress-cucumber-preprocessor/steps";
import { signInPage } from "../../page_objects/sign-in-page";
import { userPage } from "../../page_objects/user-page";
import { ageRangesPage } from "../../page_objects/ageRanges-page";

Given("I navigate to the age ranges page", () => {
  ageRangesPage.clickOnAgeRangesTab();
});

When(
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

Then("I get {string} message", (message) => {
  userPage.getNotificationText(message).contains(message);
});

When(
  "I edit an age range from {string} months to {string} years",
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

And("I add a filter for age ranges", () => {
  //Add age ranges from filter
  userPage.clickOnAddFilterButton();
  userPage.clickOnColumnFilter();
  ageRangesPage.clickOnAgeRangesFromColumn();
  userPage.clickOnValuesFilter();
  ageRangesPage.selectionOfEditedAgeRangesFromValues();
  userPage.closeListItems();
  userPage.clickOnAddFilterFinalButton();
  userPage.clickAddMoreFilters();
  //Add age ranges to filter
  userPage.clickOnValuesFilter();
  ageRangesPage.selectionOfEditedAgeRangesToValues();
  userPage.closeListItems();
  userPage.clickOnAddFilterFinalButton();
});

When("I add a filter for age ranges from", () => {
  userPage.clickOnAddFilterButton();
  userPage.clickOnColumnFilter();
  ageRangesPage.clickOnAgeRangesFromColumn();
  userPage.clickOnValuesFilter();
  ageRangesPage.selectionOfFirstValueRange();
  userPage.closeListItems();
  userPage.clickOnAddFilterFinalButton();
});

When("I add a filter for age ranges to", () => {
  userPage.clickOnAddFilterButton();
  userPage.clickOnColumnFilter();
  ageRangesPage.clickOnAgeRangesToColumn();
  userPage.clickOnValuesFilter();
  ageRangesPage.selectionOfFirstValueRange();
  userPage.closeListItems();
  userPage.clickOnAddFilterFinalButton();
});

Then("The age ranges to filter should be added", () => {
  ageRangesPage.getAgeRangesToLabelFilterText();
});

Then("The age ranges from filter should be added", () => {
  ageRangesPage.getAgeRangesFromLabelFilterText();
});
