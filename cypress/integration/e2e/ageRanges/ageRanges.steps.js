import { When, Then } from "cypress-cucumber-preprocessor/steps";
import { signInPage } from "../../page_objects/sign-in-page";
import { userPage } from "../../page_objects/user-page";
import { ageRangesPage } from "../../page_objects/ageRanges-page";

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
  }
);

When("I navigate to actual section", () => {
  ageRangesPage.clickOnAgeRangesTab();
});

Then(
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

And("I get {string} message", (message) => {
  userPage.getNotificationText(message).contains(message);
});

Then(
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

And("Add filter for age ranges", () => {
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

And("Add filter for age ranges from", () => {
  userPage.clickOnAddFilterButton();
  userPage.clickOnColumnFilter();
  ageRangesPage.clickOnAgeRangesFromColumn();
  userPage.clickOnValuesFilter();
  ageRangesPage.selectionOfFirstValueRange();
  userPage.closeListItems();
});

And("Add filter for age ranges to", () => {
  userPage.clickOnAddFilterButton();
  userPage.clickOnColumnFilter();
  ageRangesPage.clickOnAgeRangesToColumn();
  userPage.clickOnValuesFilter();
  ageRangesPage.selectionOfFirstValueRange();
  userPage.closeListItems();
});

And("I check that age ranges to filter was added", () => {
  ageRangesPage.getAgeRangesToLabelFilterText();
});

And("I check that age ranges from filter was added", () => {
  ageRangesPage.getAgeRangesFromLabelFilterText();
});

Then("Filter is Added", () => {
  userPage.clickOnAddFilterFinalButton();
});
