import { When,Then } from "cypress-cucumber-preprocessor/steps";
import { signInPage } from '../../page_objects/sign-in-page';
import {userPage} from '../../page_objects/user-page';

Given("I sign in with valid credentials {string} and {string}" , (email, pass)=> {
    signInPage.goToHomePage();
    signInPage.getClickOnYourCountryOrRegionText();
    signInPage.enterEmailOrPhone(email);
    signInPage.enterPassword(pass);
    signInPage.acceptPrivacyPolicy();
    signInPage.clickOnSignInButton();
    signInPage.clickSelectProfile();
    signInPage.clickOnContinueButton();
});


When("I enter to user tab and fill required fields as {string} {string} {string} and {string}" , (givenName,familyName,contactInfo,shortCode)=> {
    userPage.clickOnUsersTab();
    userPage.clickOnCreateUserButton();
    userPage.givenName(givenName);
    userPage.familyName(familyName);
    userPage.contactInfo(contactInfo);
    userPage.shortCode(shortCode);
    userPage.clickOnRoles();
    userPage.selectionRoles();
    userPage.clickOutside();
});

Then("I create a new user and obtain {string} message" , (text) => {
    userPage.clickOnCreateUserFinalButton();
    userPage.getNotificationText().should('have.text',text);
  });



