class UserPage {

    /*---------------  Start Web Element  ---------------*/

    usersTab = '[href="#/admin/users"]'
    createUserButton = "button[type='button'] div span" 
    givenNameInput = '#givenName'
    familyNameInput = '#familyName'
    contactInfoInput ='#contactInfo'
    shortCodeInput = '#shortcode'
    birthdayInput = '#birthday'
    rolesCheckboxs = '#roles'
    schoolsMultipleList = '#schools'
    alternativeContactInfo = '.MuiAccordionSummary-content'
    femaleGender = '#gender > :nth-child(1)'
    maleGender = '#gender > :nth-child(2)'
    preferNotToSayGender = '#gender > :nth-child(3)'
    OtherGender = '#gender > :nth-child(4)'
    finalCreateUserButton = 'body > div:nth-child(5) > div:nth-child(3) > div:nth-child(1) > div:nth-child(4) > span:nth-child(3) > button:nth-child(1) > span:nth-child(1) > div:nth-child(1) > span:nth-child(1)'
    notificationText = '#notistack-snackbar'

     /*----------------  End Web Element  ----------------*/

    clickOnUsersTab() {
        cy.get(this.usersTab).should('be.visible').click();
    }

    clickOnCreateUserButton() {
        cy.get(this.createUserButton).should('be.visible').click();
    }

    givenName(givenName) {
        cy.get(this.givenNameInput)
            .should('be.visible')
            .type(givenName)
            .type('{enter}');
    }

    familyName(familyName) {
        cy.get(this.familyNameInput)
            .should('be.visible')
            .type(familyName)
            .type('{enter}');
    }

    contactInfo(contactInfo) {
        cy.get(this.contactInfoInput)
            .should('be.visible')
            .type(contactInfo)
            .type('{enter}');
    }

    shortCode(shortCode) {
        cy.get(this.shortCodeInput)
            .should('be.visible')
            .type(shortCode)
            .type('{enter}');
    }

    clickOnRoles() {
        cy.get(this.rolesCheckboxs).should('be.visible').click();
    }

    selectionRoles() {
        cy.get('ul>li').each(($el) => {
                if ($el.text() == 'Student') {
                    cy.wrap($el).click()
                    cy.log('Element found')
                    return
                }
                    else if ($el.text() == 'Parent'){
                        cy.wrap($el).click()
                        cy.log('Element found')
                        return
                    }
                        else if ($el.text() == 'Teacher'){
                            cy.wrap($el).click()
                            cy.log('Element found')
                            return
                        }
                            else if ($el.text() == 'Organization Admin'){
                                cy.wrap($el).click()
                                cy.log('Element found')
                                return
                            }
        })
 
    }

    clickOutside() {
        cy.get(':nth-child(3) > .MuiButtonBase-root > .MuiButton-label > .MuiBox-root > .MuiTypography-root').click({force: true});
    }

    clickOnCreateUserFinalButton() {
        cy.get(this.finalCreateUserButton).click({force: true});
    }

    getNotificationText() {
        return cy.get(this.notificationText,{ timeout: 10000 }).should('be.visible');
    }

}

export const userPage = new UserPage(); 