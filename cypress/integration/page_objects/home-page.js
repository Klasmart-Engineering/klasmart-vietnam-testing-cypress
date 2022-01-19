class HomePage {
  /*---------------  Start Web Element  ---------------*/

  dashboardWelcomeText = ".MuiTypography-h4";
  homeTab =
    "body > div:nth-child(1) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > a:nth-child(1) > div:nth-child(2) > span:nth-child(1)";
  profileRoleTextOrgAdmin =
    ".MuiListItem-container > .MuiButtonBase-root > .MuiListItemText-root > .MuiListItemText-secondary";
  changeProfile = "button[aria-label='account of current user'] div";
  selectSecondProfile = "ul:nth-child(2) > div:nth-child(1)";
  //'ul.MuiList-root.MuiList-dense.MuiList-padding > div'
  selectThirdProfile = "ul:nth-child(2) > div:nth-child(2)";

  /*----------------  End Web Element  ----------------*/

  getWelcomeText() {
    cy.wait(3000);
    return cy.get(this.dashboardWelcomeText);
  }

  clickOnSignoutLink() {
    cy.contains("Sign out").should("be.visible").click();
  }

  getHomeTab() {
    return cy.get(this.homeTab);
  }

  getSwitchProfileOrgAdminText() {
    return cy.get(this.profileRoleTextOrgAdmin).should("be.visible");
  }

  clickSwitchBetweenProfiles() {
    cy.wait(4000);
    cy.get(this.changeProfile).should("be.visible").click();
  }

  clickSecondProfile() {
    cy.get(this.selectSecondProfile).should("be.visible").click();
  }

  clickThirdProfile() {
    cy.get(this.selectThirdProfile).should("be.visible").click();
  }
}

export const homePage = new HomePage();
