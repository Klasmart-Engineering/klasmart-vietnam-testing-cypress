import { _ } from "core-js";

class SignInPage {
  /*---------------  Start Web Element  ---------------*/

  selectYourCountryText = ".MuiTypography-root.MuiTypography-h5";
  countryList =
    ".MuiTypography-root.MuiListItemText-primary.MuiTypography-body1.MuiTypography-displayBlock";
  signInButton = "#next";
  privacyCheckBox =
    "div:nth-child(4) > div > label > span > span.MuiIconButton-label";
  privacyLink =
    ".MuiTypography-root.MuiLink-root.MuiLink-underlineHover.MuiTypography-caption.MuiTypography-colorInherit";
  clickHereLink =
    "div[class='MuiListItemText-root'] span[class='MuiTypography-root MuiListItemText-primary MuiTypography-body1 MuiTypography-displayBlock']";
  nonExistingAccountError = ".error.pageLevel";
  selectProfile = ".MuiList-root > :nth-child(1) > .MuiListItem-root";
  emailErrorMessage = "#email-input-label";
  passwordErrorMessage = "#email-input-helper-text";
  signInPasswordText = "#password-input-helper-text > span";
  signInEmailPhoneText = "#email-input-helper-text > span";
  createAccountLink =
    '[style="padding-top: 8px;"] > :nth-child(2) > .MuiTypography-root';
  forgotPasswordLink =
    '[style="padding-top: 8px;"] > :nth-child(1) > .MuiTypography-root';
  signupWithPhone = "#SignupWithPhone";
  signupWithEmail = "#SignupWithEmail";
  invalidErrorMessage = ":nth-child(2) > .MuiTypography-root";
  findYourCountry =
    ".MuiList-root > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root";
  emailPhoneInput = "#signInName";
  passwordInput = "#password";
  selectProfile = ".MuiList-root > :nth-child(1) > .MuiListItem-root";
  continueButton = "button[type='submit'] span[class='MuiButton-label']";
  createAccountText =
    ".MuiCardContent-root > .MuiGrid-spacing-xs-4 > :nth-child(2) > .MuiTypography-root";
  forgotPasswordText =
    ".MuiGrid-spacing-xs-4 > :nth-child(2) > .MuiTypography-root";
  privacyPopUpText = "#nav-menu-title";
  signInText = ".MuiGrid-spacing-xs-4 > :nth-child(2) > .MuiTypography-root";
  ukFlag = ":nth-child(1) > .MuiButtonBase-root > img";
  sriLankaFlag = ":nth-child(3) > .MuiButtonBase-root > img";
  usFlag = ":nth-child(5) > .MuiButtonBase-root > img";
  koreaFlag = ":nth-child(7) > .MuiButtonBase-root > img";
  vietNamFlag = ":nth-child(9) > .MuiButtonBase-root > img";
  indiaFlag = ":nth-child(2) > .MuiButtonBase-root > img";
  pakistanFlag = ":nth-child(4) > .MuiButtonBase-root > img";
  indonesiaFlag = ":nth-child(6) > .MuiButtonBase-root > img";
  tailandFlag = ":nth-child(8) > .MuiButtonBase-root > img";
  ukFlagText =
    "div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > span:nth-child(1)";
  sriFlagText =
    "div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > span:nth-child(1)";
  usFlagText =
    "div:nth-child(5) > div:nth-child(1) > div:nth-child(2) > span:nth-child(1)";
  koreaFlagText =
    "div:nth-child(7) > div:nth-child(1) > div:nth-child(2) > span:nth-child(1)";
  vietNamFlagText =
    "div:nth-child(9) > div:nth-child(1) > div:nth-child(2) > span:nth-child(1)";
  indiaFlagText =
    "div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > span:nth-child(1)";
  pakistanFlagText =
    "div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > span:nth-child(1)";
  indonesiaFlagText =
    "div:nth-child(6) > div:nth-child(1) > div:nth-child(2) > span:nth-child(1)";
  tailandFlagText =
    "div:nth-child(8) > div:nth-child(1) > div:nth-child(2) > span:nth-child(1)";
  signInTextFlags = ".MuiTypography-root.MuiTypography-h4";

  /*----------------  End Web Element  ----------------*/

  getSelectYourCountryOrRegionText() {
    return cy.get(this.selectYourCountryText).should("be.visible");
  }

  goToHomePage() {
    cy.visit(`${Cypress.env('ENV')}`);
  }

  clickOnCreateAccountLink() {
    cy.get(this.createAccountLink).should("be.visible").click();
  }

  clickOnsignupWithEmail() {
    cy.get(this.signupWithEmail).should("be.visible").click();
  }

  clickOnsignupWithPhone() {
    cy.get(this.signupWithPhone).should("be.visible").click();
  }

  clickOnProfile() {
    cy.get(this.selectProfile).should("be.visible").click();
  }
  clickHere() {
    cy.get(this.clickHereLink).should("be.visible").click();
  }

  clickForgotPasswordLink() {
    cy.get(this.forgotPasswordLink).should("be.visible").click();
  }

  clickOnCreateButton() {
    cy.get(this.createButton).check({ force: true });
  }

  enterEmailOrPhone(emailOrPhone) {
    cy.get(this.emailPhoneInput)
      .should("be.visible")
      .type(emailOrPhone)
      .type("{enter}");
  }

  enterPassword(password) {
    cy.get(this.passwordInput)
      .should("be.visible")
      .type(password)
      .type("{enter}");
  }

  clickOnSignInButton() {
    cy.get(this.signInButton).should("be.visible").click({ force: true });
  }

  clickOnContinueButton() {
    cy.get(this.continueButton).should("be.visible").click();
  }

  getInvalidEmailError() {
    return cy.get(this.invalidEmailError).should("be.visible");
  }

  getInvalidLoginError() {
    return cy.get(this.invalidLoginError).should("be.visible");
  }

  getNonExistingAccountErrorMessage() {
    return cy.get(this.nonExistingAccountError).should("be.visible");
  }

  checkURL() {
    return cy.url().should("include", "auth.sso.kidsloop.live/");
  }

  getInvalidCredentialErrorMessage() {
    return cy.get(this.invalidErrorMessage).should("be.visible");
  }

  getClickOnYourCountryOrRegionText() {
    cy.get(this.findYourCountry).should("be.visible").click({ force: true });
  }

  enterCredentials(emailOrPhone, password) {
    cy.get(this.emailPhoneInput)
      .should("be.visible")
      .type(emailOrPhone)
      .type("{enter}");
    cy.get(this.passwordInput)
      .should("be.visible")
      .type(password)
      .type("{enter}");
  }

  clickSelectProfile() {
    cy.get(this.selectProfile).should("be.visible").click();
  }

  getErrorEmailText() {
    return cy.get(this.emailErrorMessage).should("be.visible");
  }

  getErrorPasswordText() {
    return cy.get(this.passwordErrorMessage).should("be.visible");
  }

  getSignInPasswordText() {
    return cy.get(this.signInPasswordText).should("be.visible");
  }

  getSignInEmailPhoneText() {
    return cy.get(this.signInEmailPhoneText).should("be.visible");
  }

  getAccountPageText() {
    return cy.get(this.createAccountText).should("be.visible");
  }

  getForgotPasswordPageText() {
    return cy.get(this.forgotPasswordText).should("be.visible");
  }

  getPrivacyLinkPageText() {
    return cy.get(this.privacyPopUpText).should("be.visible");
  }

  clickPrivacyLink() {
    cy.get(this.privacyLink).should("be.visible").click();
  }

  getSignInText() {
    return cy.get(this.signInText).should("be.visible");
  }

  checkUkURL() {
    return cy.url().should("include", "https://auth.kidsloop.co.uk/?locale=en");
  }

  checkSriLankaURL() {
    return cy.url().should("include", "https://auth.kidsloop.lk/?locale=en");
  }

  checkUsURL() {
    return cy.url().should("include", "https://auth.kidsloop.live/?locale=en");
  }

  checkKoreaURL() {
    return cy.url().should("include", "https://auth.kidsloop.live/?locale=ko");
  }

  checkVietNamURL() {
    return cy.url().should("include", "https://auth.kidsloop.vn/?locale=vi");
  }

  checkIndiaURL() {
    return cy.url().should("include", "https://auth.kidsloop.in/?locale=en");
  }

  checkPakistanURL() {
    return cy.url().should("include", "https://auth.kidsloop.pk/?locale=en");
  }

  checkIndonesiaURL() {
    return cy.url().should("include", "https://auth.kidsloop.id/?locale=id");
  }

  checkTailandURL() {
    return cy.url().should("include", "https://auth.kidsloop.co.th/?locale=th");
  }

  clickOnUkFlag() {
    cy.get(this.ukFlag).should("be.visible").click();
  }

  clickOnSriLankaFlag() {
    cy.get(this.sriLankaFlag).should("be.visible").click();
  }

  clickOnUsFlag() {
    cy.get(this.usFlag).should("be.visible").click();
  }

  clickOnKoreaFlag() {
    cy.get(this.koreaFlag).should("be.visible").click();
  }

  clickOnVietNamFlag() {
    cy.get(this.vietNamFlag).should("be.visible").click();
  }

  clickOnIndiaFlag() {
    cy.get(this.indiaFlag).should("be.visible").click();
  }

  clickOnPakistanFlag() {
    cy.get(this.pakistanFlag).should("be.visible").click();
  }

  clickOnIndonesiaFlag() {
    cy.get(this.indonesiaFlag).should("be.visible").click();
  }

  clickOnTailandFlag() {
    cy.get(this.tailandFlag).should("be.visible").click();
  }

  getUkFlagNameText() {
    return cy.get(this.ukFlagText).should("be.visible");
  }

  getSriLankaFlagNameText() {
    return cy.get(this.sriFlagText).should("be.visible");
  }

  getUsFlagNameText() {
    return cy.get(this.usFlagText).should("be.visible");
  }

  getKoreaFlagNameText() {
    return cy.get(this.koreaFlagText).should("be.visible");
  }

  getVietNamFlagNameText() {
    return cy.get(this.vietNamFlagText).should("be.visible");
  }

  getIndiaFlagNameText() {
    return cy.get(this.indiaFlagText).should("be.visible");
  }

  getPakistanFlagNameText() {
    return cy.get(this.pakistanFlagText).should("be.visible");
  }

  getIndonesiaFlagNameText() {
    return cy.get(this.indonesiaFlagText).should("be.visible");
  }

  getTailandFlagNameText() {
    return cy.get(this.tailandFlagText).should("be.visible");
  }

  getSignInTextFlags() {
    return cy.get(this.signInTextFlags).should("be.visible");
  }

  goToUkPage() {
    cy.visit(
      "https://auth.kidsloop.co.uk/?locale=en&continue=https%3A%2F%2Fhub.alpha.kidsloop.net%2F%23%2F#/signin"
    );
  }

  goToSriLankaPage() {
    cy.visit(
      "https://auth.kidsloop.lk/?locale=en&continue=https%3A%2F%2Fhub.alpha.kidsloop.net%2F%23%2F#/signin"
    );
  }

  goToUsPage() {
    cy.visit(
      "https://auth.kidsloop.live/?locale=en&continue=https%3A%2F%2Fhub.alpha.kidsloop.net%2F%23%2F#/signin"
    );
  }

  goToKoreaPage() {
    cy.visit(
      "https://auth.kidsloop.live/?locale=ko&continue=https%3A%2F%2Fhub.alpha.kidsloop.net%2F%23%2F#/signin"
    );
  }

  goToVietNamPage() {
    cy.visit(
      "https://auth.kidsloop.vn/?locale=vi&continue=https%3A%2F%2Fhub.alpha.kidsloop.net%2F%23%2F#/signin"
    );
  }

  goToIndiaPage() {
    cy.visit(
      "https://auth.kidsloop.in/?locale=en&continue=https%3A%2F%2Fhub.alpha.kidsloop.net%2F%23%2F#/signin"
    );
  }

  goToPakistanPage() {
    cy.visit(
      "https://auth.kidsloop.pk/?locale=en&continue=https%3A%2F%2Fhub.alpha.kidsloop.net%2F%23%2F#/signin"
    );
  }

  goToIndonesiaPage() {
    cy.visit(
      "https://auth.kidsloop.id/?locale=id&continue=https%3A%2F%2Fhub.alpha.kidsloop.net%2F%23%2F#/signin"
    );
  }

  goToTailandPage() {
    cy.visit(
      "https://auth.kidsloop.co.th/?locale=th&continue=https%3A%2F%2Fhub.alpha.kidsloop.net%2F%23%2F#/signin"
    );
  }
}

export const signInPage = new SignInPage();
