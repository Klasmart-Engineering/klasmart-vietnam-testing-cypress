import { Then } from "cypress-cucumber-preprocessor/steps";
import { homePage } from "../page_objects/home-page";
import {signInPage} from '../page_objects/sign-in-page';
import {userPage} from '../page_objects/user-page';

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