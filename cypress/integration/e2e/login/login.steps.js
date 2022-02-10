import { Given, And } from "cypress-cucumber-preprocessor/steps";
import { signInPage } from "../../page_objects/sign-in-page";
import { homePage } from "../../page_objects/home-page";

Given("I click can't find your country or region", () => {
  signInPage.goToHomePage();
  signInPage.getClickOnYourCountryOrRegionText();
});

When("I enter invalid email as {string}", (text) => {
  signInPage.enterEmailOrPhone(text);
});

Then("I enter invalid password as {string}", (text) => {
  signInPage.enterPassword(text);
  //signInPage.acceptPrivacyPolicy();
  signInPage.clickOnSignInButton();
});

And("I should see the error message {string}", (errorText) => {
  signInPage.getInvalidCredentialErrorMessage().should("have.text", errorText);
});

When("I enter custom email as {string}", (text) => {
  signInPage.enterEmailOrPhone(text);
});

Then("I enter custom password as {string}", (text) => {
  signInPage.enterPassword(text);
  //signInPage.acceptPrivacyPolicy();
  signInPage.clickOnSignInButton();
  signInPage.clickSelectProfile();
  signInPage.clickOnContinueButton();
});

And("I should see custom welcome message", () => {
  homePage.clickOnSwitchView();
  homePage.getNewWelcomeText();
  homePage.getWelcomeText().contains("Custom");
});

When("I enter student email as {string}", (text) => {
  signInPage.enterEmailOrPhone(text);
});

Then("I enter student password as {string}", (text) => {
  signInPage.enterPassword(text);
  signInPage.acceptPrivacyPolicy();
  signInPage.clickOnSignInButton();
  signInPage.clickSelectProfile();
  signInPage.clickOnContinueButton();
});

And("I should see student welcome message {string}", (text) => {
  homePage.getWelcomeText().should("have.text", text);
});

When("I enter parent email as {string}", (text) => {
  signInPage.enterEmailOrPhone(text);
});

Then("I enter parent password as {string}", (text) => {
  signInPage.enterPassword(text);
  signInPage.acceptPrivacyPolicy();
  signInPage.clickOnSignInButton();
  signInPage.clickSelectProfile();
  signInPage.clickOnContinueButton();
});

And("I should see parent welcome message {string}", (text) => {
  homePage.getWelcomeText().should("have.text", text);
});

When("I enter teacher email as {string}", (text) => {
  signInPage.enterEmailOrPhone(text);
});

Then("I enter teacher password as {string}", (text) => {
  signInPage.enterPassword(text);
  signInPage.acceptPrivacyPolicy();
  signInPage.clickOnSignInButton();
  signInPage.clickSelectProfile();
  signInPage.clickOnContinueButton();
});

And("I should see teacher welcome message", () => {
  homePage.clickOnSwitchView();
  homePage.getNewWelcomeText();
  homePage.getWelcomeText().should("include.text","Teacher");
});

When("I enter school admin email as {string}", (text) => {
  signInPage.enterEmailOrPhone(text);
});

Then("I enter school admin password as {string}", (text) => {
  signInPage.enterPassword(text);
  signInPage.acceptPrivacyPolicy();
  signInPage.clickOnSignInButton();
  signInPage.clickSelectProfile();
  signInPage.clickOnContinueButton();
});

And("I should see school admin welcome message {string}", (text) => {
  homePage.getWelcomeText().should("have.text", text);
});

When("I enter organization admin email as {string}", (text) => {
  signInPage.enterEmailOrPhone(text);
});

Then("I enter organization admin password as {string}", (text) => {
  signInPage.enterPassword(text);
  signInPage.acceptPrivacyPolicy();
  signInPage.clickOnSignInButton();
  signInPage.clickSelectProfile();
  signInPage.clickOnContinueButton();
});

And("I should see organization admin welcome message {string}", (text) => {
  homePage.getWelcomeText().should("have.text", text);
});

When("I enter a valid email as {string}", (text) => {
  signInPage.enterEmailOrPhone(text);
});

Then("I enter a valid password as {string}", (text) => {
  signInPage.enterPassword(text);
  signInPage.acceptPrivacyPolicy();
  signInPage.clickOnSignInButton();
  signInPage.clickSelectProfile();
  signInPage.clickOnContinueButton();
});

And("I should see the {string} tab and {string} message", (tab, text) => {
  homePage.getHomeTab().should("have.text", tab);
  homePage.getWelcomeText().should("have.text", text);
});

When("I enter an invalid email as {string}", (text) => {
  signInPage.enterEmailOrPhone(text);
});

Then("I enter an invalid password as {string}", (text) => {
  signInPage.enterPassword(text);
  signInPage.acceptPrivacyPolicy();
  signInPage.clickOnSignInButton();
});

And(
  "I should see the error message {string} for email and {string} for password",
  (errorEmail, errorPass) => {
    signInPage.getErrorEmailText().should("have.text", errorEmail);
    signInPage.getErrorPasswordText().should("have.text", errorPass);
  }
);

Then("I should see an error message {string} for password", (errorPass) => {
  signInPage.getErrorPasswordText().should("have.text", errorPass);
});

And("I should see an error message {string} for email", (errorEmail) => {
  signInPage.getErrorEmailText().should("have.text", errorEmail);
});

When("I enter a valid email as {string} with password as empty", (text) => {
  signInPage.enterEmailOrPhone(text);
  signInPage.acceptPrivacyPolicy();
  signInPage.clickOnSignInButton();
});

Then("I should see a password error message {string}", (errorPass) => {
  signInPage.getSignInPasswordText().should("have.text", errorPass);
});

Then("I enter a valid password as {string} with email as empty", (text) => {
  signInPage.enterPassword(text);
  signInPage.acceptPrivacyPolicy();
  signInPage.clickOnSignInButton();
});

And("I should see a email error message {string}", (errorEmail) => {
  signInPage.getSignInEmailPhoneText().should("have.text", errorEmail);
});

Then("I click create an account link", () => {
  signInPage.clickOnCreateAccountLink();
});

And(
  "I should see the page for create a new account with title as {string}",
  (titleText) => {
    signInPage.getAccountPageText().should("have.text", titleText);
  }
);

Then("I click forgot password link", () => {
  signInPage.clickForgotPasswordLink();
});

And(
  "I should see the page with {string} as title to recovery it",
  (titleText) => {
    signInPage.getForgotPasswordPageText().should("have.text", titleText);
  }
);

Then("I click privacy link", () => {
  signInPage.clickPrivacyLink();
});

And("I should see a popup window called {string}", (titleText) => {
  signInPage.getPrivacyLinkPageText().should("have.text", titleText);
});

Then("I should be redirected to {string}", (signIn) => {
  signInPage.getSignInText().should("have.text", signIn);
});

Given("auth United Kingdom page", () => {
  signInPage.goToUkPage();
  signInPage.checkUkURL();
});

Given("auth Sri Lanka page", () => {
  signInPage.goToSriLankaPage();
  signInPage.checkSriLankaURL();
});

Given("auth United States page", () => {
  signInPage.goToUsPage();
  signInPage.checkUsURL();
});

Given("auth Korea page", () => {
  signInPage.goToKoreaPage();
  signInPage.checkKoreaURL();
});

Given("auth Viet Nam page", () => {
  signInPage.goToVietNamPage();
  signInPage.checkVietNamURL();
});

Given("auth India page", () => {
  signInPage.goToIndiaPage();
  signInPage.checkIndiaURL();
});

Given("auth Pakistan page", () => {
  signInPage.goToPakistanPage();
  signInPage.checkPakistanURL();
});

Given("auth Indonesia page", () => {
  signInPage.goToIndonesiaPage();
  signInPage.checkIndonesiaURL();
});

Given("auth Tailand page", () => {
  signInPage.goToTailandPage();
  signInPage.checkTailandURL();
});

When("verify the correct flag {string} name", (languageFlag) => {
  signInPage.getSignInTextFlags().should("have.text", languageFlag);
});

And(
  "Change from {string} profile and validate other {string} account is present",
  (orgAdmin, profile) => {
    homePage.getSwitchProfileOrgAdminText().should("have.text", orgAdmin);
    homePage.clickSwitchBetweenProfiles();
    homePage.clickSecondProfile();
    homePage.getSwitchProfileOrgAdminText().should("have.text", profile);
  }
);

And(
  "Change from {string} profile and validate {string} account is present",
  (orgAdmin, custom) => {
    homePage.getSwitchProfileOrgAdminText().should("have.text", orgAdmin);
    homePage.clickSwitchBetweenProfiles();
    homePage.clickThirdProfile();
    homePage.getSwitchProfileOrgAdminText().should("have.text", custom);
  }
);
