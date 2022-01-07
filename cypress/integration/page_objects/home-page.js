
class HomePage {

    /*---------------  Start Web Element  ---------------*/

    dashboardWelcomeText = 'h4:nth-child(2)';
    homeTab = 'body > div:nth-child(1) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > a:nth-child(1) > div:nth-child(2) > span:nth-child(1)';
    profileRoleTextOrgAdmin = '.MuiListItem-container > .MuiButtonBase-root > .MuiListItemText-root > .MuiListItemText-secondary'
    changeProfile = "button[aria-label='account of current user'] div"
    selectSecondProfile = 'ul.MuiList-root.MuiList-dense.MuiList-padding > div'
    //"div[id='customized-menu'] div div[role='button']"
    selectThirdProfile = "div[id='customized-menu'] div:nth-child(2) div:nth-child(2) span:nth-child(1)"

     /*----------------  End Web Element  ----------------*/

    getWelcomeText() {
        return cy.get(this.dashboardWelcomeText);
    }
    
    clickOnSignoutLink() {
        cy.contains('Sign out')
        .should('be.visible')
        .click();
    }

    getHomeTab() {
        return cy.get(this.homeTab);
    }

    getSwitchProfileOrgAdminText() {
        return cy.get(this.profileRoleTextOrgAdmin).should('be.visible');
    }

    clickSwitchBetweenProfiles() {
        cy.get(this.changeProfile).should('be.visible').click();
    }

    clickSecondProfile() {
        cy.get(this.selectSecondProfile).should('be.visible').click();
    }
    
    clickThirdProfile() {
        cy.get(this.selectThirdProfile).should('be.visible').click();
    }
    
};

export const homePage = new HomePage();
