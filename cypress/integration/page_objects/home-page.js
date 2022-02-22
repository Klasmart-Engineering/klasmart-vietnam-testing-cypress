class HomePage {
  /*---------------  Start Web Element  ---------------*/

  dashboardWelcomeText = ".MuiTypography-h4";
  homeTab =
    "body > div:nth-child(1) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > a:nth-child(1) > div:nth-child(2) > span:nth-child(1)";
  profileRoleTextOrgAdmin =
    ".MuiListItem-container > .MuiButtonBase-root > .MuiListItemText-root > .MuiListItemText-secondary";
  changeProfile = "button[aria-label='account of current user'] div";
  selectSecondProfile = "ul:nth-child(2) > div:nth-child(1)";
  selectThirdProfile = "ul:nth-child(2) > div:nth-child(2)";
  switchView = ".MuiButton-root.MuiButton-textSizeLarge";

  /*----------------  End Web Element  ----------------*/

  getWelcomeText() {
    cy.wait(4000);
    return cy.get(this.dashboardWelcomeText);
  }

  getNewWelcomeText() {
    cy.wait(4000);
    var today = new Date();
    var curHr = today.getHours();

    if (curHr < 12) {
      cy.log("Good Morning");
      return cy
        .get(this.dashboardWelcomeText)
        .should("include.text", "Good Morning");
    } else if (curHr < 17) {
      cy.log("Good Afternoon");
      return cy
        .get(this.dashboardWelcomeText)
        .should("include.text", "Good Afternoon");
    } else {
      cy.log("Good Evening");
      return cy
        .get(this.dashboardWelcomeText)
        .should("include.text", "Good Evening");
    }
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

  clickOnSwitchView() {
    cy.viewport(1280, 750);
    cy.get(".MuiToolbar-root > .MuiGrid-container").scrollIntoView();
    cy.get(this.switchView).contains("Switch View").click();
  }
}

export const homePage = new HomePage();
