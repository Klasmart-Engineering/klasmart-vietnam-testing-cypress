import { Then, When } from "cypress-cucumber-preprocessor/steps";
import { homePage } from "../page_objects/home-page";
import {signInPage} from '../page_objects/sign-in-page';
import {userPage} from '../page_objects/user-page';
import {gradesPage} from '../page_objects/grades-page';
import {schoolPage} from '../page_objects/schools-page';

Then("I can display either {string} rows in the list", (numbersPerPage) => {

  // split the string into an array
  var rows = numbersPerPage.split(",")

  // loop over the array and update the number of rows to display each time
  for(let number in rows)
  {
    cy.log(rows[number])
    userPage.clickOnRowsPerPage();
    userPage.clickOnNumOfPages(rows[number]);
  }
})

Given("I click on add columns", () => {
  userPage.clickOnAddColumns();
})

Given("I click on upload csv", () => {
  userPage.clickOnUploadCsvButton();
})

When("I select columns to add", () => {
  userPage.selectColumns();
});

Given("I sort the {string} column by asc and desc", (columnName) => {
  gradesPage.sortFirstAsc(columnName);
  schoolPage.sortFirstDesc();
  userPage.sortSecondAsc();
  userPage.sortSecondDesc();
});

Then("I get a {string} message", (message) => {
  userPage.getNotificationText(message).contains(message);
});

Then(`I see {string} in the title`, title => {
  cy.title().should("include", title);
});

Then("I should see the welcome message {string}", async (text) => {
  await homePage.getWelcomeText().contains(text);
 });
 
 Then("I am taken to {string}", async (text) => {
   homePage.getNotPartOfOrgText().should('have.text',text);
 });

 Then("I sign out", () => {
  homePage.clickOnProfile();
  homePage.clickOnSignoutLink();
 });

 Then('I should see login page', () => {
   signInPage.checkURL();
 });

 Then("All pagination buttons should work", () => {
  cy.wait(5000);
  userPage.clickOnNextPage();
  userPage.clickOnPreviousPage();
  userPage.clickOnLastPage();
  userPage.getNextPageButtonState();
  userPage.getLastPageButtonState();
  userPage.clickOnFirstPage();
  userPage.getPreviousPageButtonState();
  userPage.getFirstPageButtonState();
});