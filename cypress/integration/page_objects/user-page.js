/// <reference types="cypress" />
class UserPage {

    /*---------------  Start Web Element  ---------------*/

    usersTab = '[href="#/admin/users"]'
    createUserButton = `//*[contains(@class,'MuiButtonBase-root') and .//*[contains(.,'Create User')]]`
    givenNameInput = '#givenName'
    familyNameInput = '#familyName'
    contactInfoInput ='#contactInfo'
    shortCodeInput = '#shortcode'
    shortCodeText = '#shortcode-helper-text'
    birthdayInput = '#birthday'
    rolesCheckboxs = '#roles'
    schoolsMultipleList = '#schools'
    alternativeContactInfo = '.MuiAccordionSummary-content'
    alternativeEmailInput = '#alternativeEmail'
    alternativePhoneInput = '#alternativePhone'
    femaleGender = '#gender > :nth-child(1)'
    maleGender = '#gender > :nth-child(2)'
    preferNotToSayGender = '#gender > :nth-child(3)'
    otherGenderSelection = '#gender > :nth-child(4)'
    otherGenderInput = '#genderOther'
    finalCreateUserButton = `//*[@id='body']//div[3]//span[1][contains(.//span, 'Create')]`
    notificationText = '#notistack-snackbar'
    finalCancelUserButton = 'span:nth-child(2) > button:nth-child(1) > span:nth-child(1) > div:nth-child(1) > span:nth-child(1)'
    addFilterButton = '.MuiChip-label'
    columnFilter = "div[data-testid='ColumnSelectTextField'] div div[role='button']"
    valuesFilter = '[data-testid="ValueSelectTextField"] > .MuiInputBase-root > .MuiSelect-root'
    addFilterFinalButton = '.MuiButtonBase-root.MuiButton-root.MuiButton-contained'
    cancelFilterButton = "body div[role='presentation'] div div div:nth-child(1) span:nth-child(1) button:nth-child(1) span:nth-child(1) div:nth-child(1) span:nth-child(1)"
    labelFilterAdded = '[data-testid="statusChipLabel"] > .MuiChip-label'
    clearFilter = '[data-testid="statusChipLabel"] > .MuiSvgIcon-root > path'
    clearAllFilters = '[data-testid="clearFilters"] > .MuiIconButton-label > .MuiSvgIcon-root'
    addMoreFilters = "span[title='Add Filter'] div[role='button']"
    searchInput = "input[placeholder='Search']"
    moreActionsEdit = 'li:nth-child(1) > p:nth-child(2)'
    moreActionsDelete = 'li:nth-child(2) > p:nth-child(2)'
    deleteInput = "input[aria-invalid='true']"
    deleteFinalButton = '.MuiDialogActions-root > :nth-child(2) > .MuiButtonBase-root'
    cancelFinalDeleteButton = '.MuiDialogActions-root > :nth-child(1) > .MuiButtonBase-root'

     /*----------------  End Web Element  ----------------*/

    clickOnUsersTab() {
        cy.get(this.usersTab).should('be.visible').click();
    }

    clickOnCreateUserButton() {
        cy.xpath(this.createUserButton).should('be.visible').click();
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
        cy.get("ul[role='listbox']>li").each(($el) => {
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

    closeListItems() {
        cy.get('#menu- > .MuiPaper-root').type('{esc}', { force: true });
    }

    clickOnCreateUserFinalButton() {
        cy.xpath(this.finalCreateUserButton).click({ force: true });
    }

    getNotificationText() {
        return cy.get(this.notificationText,{ timeout: 10000 }).should('be.visible');
    }

    clickOnBirthday() {
        cy.get(this.birthdayInput).click()
        .type('1987-02');
    }

    checkCreateButtonState() {
        cy.get("[class ='MuiButtonBase-root MuiButton-root MuiButton-text Mui-disabled Mui-disabled']").should('be.disabled');
        cy.get(this.finalCancelUserButton).should('be.visible');
    }

    clickOnCancelUserFinalButton() {
        cy.get(this.finalCancelUserButton).should('be.visible').click({ force: true });
    }

    clickOnOtherGender() {
        cy.get(this.otherGenderSelection).should('be.visible').click();
    }

    otherGender(otherGender) {
        cy.get(this.otherGenderInput)
            .should('be.visible')
            .type(otherGender)
            .type('{enter}');
    }

    selectionSchools() {
        cy.get("ul[role='listbox']>li").each(($el) => {
                if ($el.text() == 'Student') {
                    cy.wrap($el).click()
                    cy.log('Element found')
                    return
                }
                    else if ($el.text() == 'London School'){
                        cy.wrap($el).click()
                        cy.log('Element found')
                        return
                    }
                        else if ($el.text() == 'Colegio Ingles'){
                            cy.wrap($el).click()
                            cy.log('Element found')
                            return
                        }
                            else if ($el.text() == 'My New School'){
                                cy.wrap($el).click()
                                cy.log('Element found')
                                return
                            }
        })
 
    }

    clickOnAlternativeContactInfo() {
        cy.get(this.alternativeContactInfo).should('be.visible').click();
    }

    alternativeEmail(alternativeEmail) {
        cy.get(this.alternativeEmailInput)
            .should('be.visible')
            .type(alternativeEmail)
            .type('{enter}');
    }

    alternativePhone(alternativePhone) {
        cy.get(this.alternativePhoneInput)
            .should('be.visible')
            .type(alternativePhone)
            .type('{enter}');
    }
    
    clickOnSchools() {
        cy.get(this.schoolsMultipleList, {timeout: 5000}).should('be.visible').click();
    }

    getShortCodeText() {
        return cy.get(this.shortCodeText,{ timeout: 10000 }).should('be.visible');
    }

    clickOnAddFilterButton() {
        cy.get(this.addFilterButton).should('be.visible').click();
    }

    clickOnColumnFilter() {
        cy.get(this.columnFilter).should('be.visible').click();
    }

    clickOnOrganizationRolesColumn() {
        cy.get("ul[role='listbox']>li").each(($el) => {
            if ($el.text() == 'Organization Roles') {
                cy.wrap($el).click()
                cy.log('Element found')
                return
            
            }
        })
    }

    selectionOfOrganizationRolesValues() {
        cy.get("ul[role='listbox']>li").each(($el) => {
                if ($el.eq() == 'School Admin') {
                    cy.wrap($el).click()
                    cy.log('Element found')
                    return
                }
                    else if ($el.text() == 'Parent'){
                        cy.wrap($el).click()
                        cy.log('Element found')
                        return
                    }
                        else if ($el.text() == 'Student'){
                            cy.wrap($el).click()
                            cy.log('Element found')
                            return
                        }
                            else if ($el.text() == 'Teacher'){
                                cy.wrap($el).click()
                                cy.log('Element found')
                                return
                            }
        })
 
    }

    clickOnStatusColumn() {
        cy.get("ul[role='listbox']>li").each(($el) => {
            if ($el.text() == 'Status') {
                cy.wrap($el).click()
                cy.log('Element found')
                return
            
            }
        })
    }

    clickOnSchoolsColumn() {
        cy.get("ul[role='listbox']>li").each(($el) => {
            if ($el.text() == 'Schools') {
                cy.wrap($el).click()
                cy.log('Element found')
                return
            
            }
        })
    }

    clickOnEmailColumn() {
        cy.get("ul[role='listbox']>li").each(($el) => {
            if ($el.text() == 'Email') {
                cy.wrap($el).click()
                cy.log('Element found')
                return
            
            }
        })
    }

    clickOnPhoneColumn() {
        cy.get("ul[role='listbox']>li").each(($el) => {
            if ($el.text() == 'Phone') {
                cy.wrap($el).click()
                cy.log('Element found')
                return
            
            }
        })
    }

    clickOnValuesFilter() {
        cy.get(this.valuesFilter).should('be.visible').click();
    }

    clickOnAddFilterButton() {
        cy.get(this.addFilterButton).should('be.visible').click();
    }

    clickOnAddFilterFinalButton() {
        cy.get(this.addFilterFinalButton).should('be.visible').click();
    }

    clickOnCancelButton() {
        cy.get(this.cancelFilterButton).should('be.visible').click();
    }

    selectActiveStatusValue() {
        cy.get("ul[role='listbox']>li").each(($el) => {
            if ($el.text() == 'Active') {
                cy.wrap($el).click()
                cy.log('Element found')
                return
            
            }
        })
    }

    selectInactiveStatusValue() {
        cy.get("ul[role='listbox']>li").each(($el) => {
            if ($el.text() == 'Inactive') {
                cy.wrap($el).click()
                cy.log('Element found')
                return
            
            }
        })
    }

    selectionOfSchoolValues() {
        cy.get("ul[role='listbox']>li").each(($el) => {
                if ($el.eq() == 'Automation 10') {
                    cy.wrap($el).click()
                    cy.log('Element found')
                    return
                }
                    else if ($el.text() == 'Automation 100'){
                        cy.wrap($el).click()
                        cy.log('Element found')
                        return
                    }
                        else if ($el.text() == 'Automation 103'){
                            cy.wrap($el).click()
                            cy.log('Element found')
                            return
                        }
                            else if ($el.text() == 'Automation 106'){
                                cy.wrap($el).click()
                                cy.log('Element found')
                                return
                            }
        })
 
    }

    searchInputText(search) {
        cy.get(this.searchInput)
            .should('be.visible')
            .type(search)
            .type('{enter}');
    }

    clickMoreActions() {
        cy.get("tbody tr:nth-child(1) td:nth-child(6)").each(($el) => {
             
                if ($el.text() == 'Active') {
                    cy.log('Status is Active')
                    cy.get('tbody tr:nth-child(1) td:nth-child(8) button:nth-child(1)').click();
                   
                } else {
                        if ($el.text() == 'Inactive') {
                            cy.log('Status is Inactive')
                           
                        }
                    }
        })
    }

    clickOnMoreActionsDeleteButton() {
        cy.get(this.moreActionsDelete).should('be.visible').click();
    }

    clickOnMoreActionsEditButton() {
        cy.get(this.moreActionsEdit).should('be.visible').click();
    }

    sendDeleteText() {
        cy.get('strong').then(($stxt) => {

            // store the user text
            const txt = $stxt.text()
          
            // send stored text to delete input field
            cy.get(this.deleteInput)
            .should('be.visible') 
            .type(txt)
          })

    }   

    clickOnDeleteFinalButton() {
        cy.get(this.deleteFinalButton).should('be.visible').click();
    }

    clickOnCancelFinalButton() {
        cy.get(this.cancelFinalDeleteButton).should('be.visible').click();
    }

    getActiveStatusLabelFilterText() {
        cy.get(this.labelFilterAdded).should('include.text', 'Active');
    }

    getInactiveStatusLabelFilterText() {
        cy.get(this.labelFilterAdded).should('include.text', 'Inactive');
    }


}

export const userPage = new UserPage(); 