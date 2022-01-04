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

When("I navigate to actual section", ()=> {
    userPage.clickOnUsersTab();
});

And("I fill required fields as {string} {string} {string} and {string}" , (givenName,familyName,contactInfo,shortCode)=> {
    userPage.clickOnCreateUserButton();
    userPage.givenName(givenName);
    userPage.familyName(familyName);
    userPage.contactInfo(contactInfo);
    userPage.shortCode(shortCode);
    userPage.clickOnRoles();
    userPage.selectionRoles();
    userPage.closeListItems();
    userPage.clickOnCreateUserFinalButton();
});

Then("I create a new user and obtain {string} message" , (text) => {
    userPage.getNotificationText().should('have.text',text);
});

Then("I have got {string} error message" , (text) => {
    userPage.getNotificationText().should('have.text',text);
});

And("{string} error message" , (text) => {
    userPage.getShortCodeText().should('have.text',text);
});

And("I fill optional fields {string}" , (shortCode)=> {
    userPage.clickOnCreateUserButton();
    userPage.clickOnBirthday();
    userPage.shortCode(shortCode);
    userPage.checkCreateButtonState();
}); 

Then("I cancel creation" , () => {
    userPage.clickOnCancelUserFinalButton();
});

And("fill all existent fields as {string} {string} {string} {string} {string} {string} and {string}" , (givenName,familyName,contactInfo,shortCode,otherGender,alternativeEmail,alternativePhone)=> {
    userPage.clickOnCreateUserButton();
    userPage.givenName(givenName);
    userPage.familyName(familyName);
    userPage.contactInfo(contactInfo);
    userPage.clickOnBirthday();
    userPage.shortCode(shortCode);
    userPage.clickOnOtherGender();
    userPage.otherGender(otherGender);
    userPage.clickOnRoles();
    userPage.selectionRoles();
    userPage.closeListItems();
    userPage.clickOnSchools();
    userPage.selectionSchools();
    userPage.closeListItems();
    userPage.clickOnAlternativeContactInfo();
    userPage.alternativeEmail(alternativeEmail);
    userPage.alternativePhone(alternativePhone);
});

And("I fill only required fields as {string} {string} and {string}" , (givenName,familyName,contactInfo)=> {
    userPage.clickOnCreateUserButton();
    userPage.givenName(givenName);
    userPage.familyName(familyName);
    userPage.contactInfo(contactInfo);
    userPage.clickOnRoles();
    userPage.selectionRoles();
    userPage.closeListItems();
    userPage.clickOnCreateUserFinalButton();
});

And("Add filter for status as active", ()=> {
    userPage.clickOnAddFilterButton();
    userPage.clickOnColumnFilter();
    userPage.clickOnStatusColumn();
    userPage.clickOnValuesFilter();
    userPage.selectActiveStatusValue();
    userPage.clickOnAddFilterFinalButton();
    userPage.getActiveStatusLabelFilterText();
});

Then("I search {string} user to be deleted and get {string} message", (search, message)=> {
    userPage.searchInputText(search);
    userPage.clickMoreActions();
    userPage.clickOnMoreActionsDeleteButton();
    userPage.sendDeleteText();
    userPage.clickOnDeleteFinalButton();
    userPage.getNotificationText(message);
});

And("Add filter for status as inactive", ()=> {
    userPage.clickOnAddFilterButton();
    userPage.clickOnColumnFilter();
    userPage.clickOnStatusColumn();
    userPage.clickOnValuesFilter();
    userPage.selectInactiveStatusValue();
    userPage.clickOnAddFilterFinalButton();
    userPage.getInactiveStatusLabelFilterText();
});

Then("I search {string} user to be deleted but I cancel it", (search)=> {
    userPage.searchInputText(search);
    userPage.clickMoreActions();
    userPage.clickOnMoreActionsDeleteButton();
    userPage.sendDeleteText();
    userPage.clickOnCancelFinalButton();
});
