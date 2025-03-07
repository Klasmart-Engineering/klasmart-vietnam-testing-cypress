import { Then, When } from "cypress-cucumber-preprocessor/steps";
import { homePage } from "../page_objects/home-page";
import { signInPage } from "../page_objects/sign-in-page";
import { userPage } from "../page_objects/user-page";
import { gradesPage } from "../page_objects/grades-page";

Given(
  "I sign in with valid credentials {string} and {string}",
  (email, pass) => {
    signInPage.goToHomePage();
    signInPage.getClickOnYourCountryOrRegionText();
    signInPage.enterEmailOrPhone(email);
    signInPage.enterPassword(pass);
    signInPage.clickOnSignInButton();
    // signInPage.clickSelectProfile();
    signInPage.clickOnContinueButton();
    signInPage.clickOnCurrentProfile();
  }
);

Given("I sort column {string} called {string} by asc and desc", (columnNumber, columnName) => {
  // desc first because by default the column is sorted in asc order
  gradesPage.sortColumn(columnName, columnNumber, "desc");
  gradesPage.sortColumn(columnName, columnNumber, "asc");
});

Then("I can display either {string} rows in the list", (numbersPerPage) => {
  // split the string into an array
  var rows = numbersPerPage.split(",");

  // loop over the array and update the number of rows to display each time
  for (let number in rows) {
    cy.log(rows[number]);
    userPage.clickOnRowsPerPage();
    userPage.clickOnNumOfPages(rows[number]);
  }
});

Then(`I see {string} in the title`, (title) => {
  cy.title().should("include", title);
});

Then("I should see the welcome message {string}", async (text) => {
  await homePage.getWelcomeText().contains(text);
});

Then("I am taken to {string}", async (text) => {
  homePage.getNotPartOfOrgText().should("have.text", text);
});

Then("I sign out", () => {
  homePage.clickOnProfile();
  homePage.clickOnSignoutLink();
});

Then("I should see login page", () => {
  signInPage.checkURL();
});

Then("All pagination buttons should work", () => {
  cy.wait(8000);
  userPage.clickOnNextPage();
  userPage.clickOnPreviousPage();
  userPage.clickOnLastPage();
  userPage.getNextPageButtonState();
  userPage.getLastPageButtonState();
  userPage.clickOnFirstPage();
  userPage.getPreviousPageButtonState();
  userPage.getFirstPageButtonState();
});

Then("I get {string} message", (message) => {
  userPage.getNotificationText(message).contains(message);
});
