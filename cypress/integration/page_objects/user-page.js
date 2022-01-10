/// <reference types="cypress" />
class UserPage {
  /*---------------  Start Web Element  ---------------*/

  usersTab = '[href="#/admin/users"]';
  createUserButton = `//*[contains(@class,'MuiButtonBase-root') and .//*[contains(.,'Create User')]]`;
  givenNameInput = "#givenName";
  familyNameInput = "#familyName";
  contactInfoInput = "#contactInfo";
  shortCodeInput = "#shortcode";
  shortCodeText = "#shortcode-helper-text";
  birthdayInput = "#birthday";
  rolesCheckboxs = "#roles";
  schoolsMultipleList = "#schools";
  alternativeContactInfo = ".MuiAccordionSummary-content";
  alternativeEmailInput = "#alternativeEmail";
  alternativePhoneInput = "#alternativePhone";
  femaleGender = "#gender > :nth-child(1)";
  maleGender = "#gender > :nth-child(2)";
  preferNotToSayGender = "#gender > :nth-child(3)";
  otherGenderSelection = "#gender > :nth-child(4)";
  otherGenderInput = "#genderOther";
  finalCreateUserButton = `//*[@id='body']//div[3]//span[1][contains(.//span, 'Create')]`;
  notificationText = "#notistack-snackbar";
  finalCancelUserButton =
    "span:nth-child(2) > button:nth-child(1) > span:nth-child(1) > div:nth-child(1) > span:nth-child(1)";
  addFilterButton = ".MuiChip-label";
  columnFilter =
    "div[data-testid='ColumnSelectTextField'] div div[role='button']";
  valuesFilter = ".MuiOutlinedInput-root.Mui-error";
  valuesFilterInputs =
    ":nth-child(3) > .MuiInputBase-root > .MuiInputBase-input";
  addFilterFinalButton =
    ".MuiButtonBase-root.MuiButton-root.MuiButton-contained";
  cancelFilterButton =
    "body div[role='presentation'] div div div:nth-child(1) span:nth-child(1) button:nth-child(1) span:nth-child(1) div:nth-child(1) span:nth-child(1)";
  labelFilterAdded =
    "span:nth-child(1) > span:nth-child(1) > span:nth-child(2)";
  clearFilter = ".MuiSvgIcon-root.MuiChip-deleteIcon";
  clearAllFilters =
    '[data-testid="clearFilters"] > .MuiIconButton-label > .MuiSvgIcon-root';
  addMoreFilters = ".MuiSvgIcon-root.MuiChip-icon.MuiSvgIcon-colorAction";
  searchInput = "input[placeholder='Search']";
  moreActionsEdit = '[tabindex="0"] > .MuiTypography-root';
  moreActionsDelete = '[tabindex="-1"] > .MuiTypography-root';
  deleteInput = "input[aria-invalid='true']";
  deleteFinalButton =
    ".MuiDialogActions-root > :nth-child(2) > .MuiButtonBase-root";
  cancelFinalDeleteButton =
    ":nth-child(1) > .MuiButtonBase-root > .MuiButton-label > .MuiBox-root > .MuiTypography-root";

  /*----------------  End Web Element  ----------------*/

  clickOnUsersTab() {
    cy.get(this.usersTab).should("be.visible").click();
  }

  clickOnCreateUserButton() {
    cy.xpath(this.createUserButton).should("be.visible").click();
  }

  givenName(givenName) {
    cy.get(this.givenNameInput)
      .should("be.visible")
      .type(givenName)
      .type("{enter}");
  }

  familyName(familyName) {
    cy.get(this.familyNameInput)
      .should("be.visible")
      .type(familyName)
      .type("{enter}");
  }

  contactInfo(contactInfo) {
    cy.get(this.contactInfoInput)
      .should("be.visible")
      .type(contactInfo)
      .type("{enter}");
  }

  shortCode(shortCode) {
    cy.get(this.shortCodeInput)
      .should("be.visible")
      .type(shortCode)
      .type("{enter}");
  }

  clickOnRoles() {
    cy.get(this.rolesCheckboxs).should("be.visible").click();
  }

  selectionRoles() {
    cy.get("ul[role='listbox']>li").each(($el) => {
      if ($el.text() == "Student") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      } else if ($el.text() == "Parent") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      } else if ($el.text() == "Teacher") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      } else if ($el.text() == "Organization Admin") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      }
    });
  }

  closeListItems() {
    cy.get("#menu- > .MuiPaper-root").type("{esc}", { force: true });
  }

  clickOnCreateUserFinalButton() {
    cy.xpath(this.finalCreateUserButton).click({ force: true });
  }

  getNotificationText() {
    return cy
      .get(this.notificationText, { timeout: 50000 })
      .should("be.visible");
  }

  clickOnBirthday() {
    cy.get(this.birthdayInput).click().type("1987-02");
  }

  checkCreateButtonState() {
    cy.get(
      "[class ='MuiButtonBase-root MuiButton-root MuiButton-text Mui-disabled Mui-disabled']"
    ).should("be.disabled");
    cy.get(this.finalCancelUserButton).should("be.visible");
  }

  clickOnCancelUserFinalButton() {
    cy.get(this.finalCancelUserButton)
      .should("be.visible")
      .click({ force: true });
  }

  clickOnOtherGender() {
    cy.get(this.otherGenderSelection).should("be.visible").click();
  }

  otherGender(otherGender) {
    cy.get(this.otherGenderInput)
      .should("be.visible")
      .type(otherGender)
      .type("{enter}");
  }

  selectionSchools() {
    cy.get("ul[role='listbox']>li").each(($el) => {
      if ($el.text() == "Student") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      } else if ($el.text() == "London School") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      } else if ($el.text() == "Colegio Ingles") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      } else if ($el.text() == "My New School") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      }
    });
  }

  clickOnAlternativeContactInfo() {
    cy.get(this.alternativeContactInfo).should("be.visible").click();
  }

  alternativeEmail(alternativeEmail) {
    cy.get(this.alternativeEmailInput)
      .should("be.visible")
      .type(alternativeEmail)
      .type("{enter}");
  }

  alternativePhone(alternativePhone) {
    cy.get(this.alternativePhoneInput)
      .should("be.visible")
      .type(alternativePhone)
      .type("{enter}");
  }

  clickOnSchools() {
    cy.get(this.schoolsMultipleList, { timeout: 50000 })
      .should("be.visible")
      .click();
  }

  getShortCodeText() {
    cy.wait(70000);
    return cy.get(this.shortCodeText, { timeout: 70000 }).should("be.visible");
  }

  clickOnAddFilterButton() {
    cy.get(this.addFilterButton).should("be.visible").click();
  }

  clickOnColumnFilter() {
    cy.get(this.columnFilter).should("be.visible").click();
  }

  clickOnOrganizationRolesColumn() {
    cy.get("ul[role='listbox']>li").each(($el) => {
      if ($el.text() == "Organization Roles") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      }
    });
  }

  selectionOfOrganizationRolesValues() {
    cy.get("ul[role='listbox']>li").each(($el) => {
      if ($el.eq() == "School Admin") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      } else if ($el.text() == "Parent") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      } else if ($el.text() == "Student") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      } else if ($el.text() == "Teacher") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      }
    });
  }

  clickOnStatusColumn() {
    cy.get("ul[role='listbox']>li").each(($el) => {
      if ($el.text() == "Status") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      }
    });
  }

  clickOnSchoolsColumn() {
    cy.get("ul[role='listbox']>li").each(($el) => {
      if ($el.text() == "Schools") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      }
    });
  }

  clickOnEmailColumn() {
    cy.get("ul[role='listbox']>li").each(($el) => {
      if ($el.text() == "Email") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      }
    });
  }

  clickOnPhoneColumn() {
    cy.get("ul[role='listbox']>li").each(($el) => {
      if ($el.text() == "Phone") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      }
    });
  }

  clickOnValuesFilter() {
    cy.get(this.valuesFilter).should("be.visible").click();
  }

  clickOnValuesFilterInputs() {
    cy.get(this.valuesFilterInputs).should("be.visible").click();
  }

  clickOnAddFilterButton() {
    cy.get(this.addFilterButton).should("be.visible").click();
  }

  clickOnAddFilterFinalButton() {
    cy.get(this.addFilterFinalButton).should("be.visible").click();
  }

  clickOnCancelFilterButton() {
    cy.get(this.cancelFilterButton).should("be.visible").click();
  }

  selectActiveStatusValue() {
    cy.get("ul[role='listbox']>li").each(($el) => {
      if ($el.text() == "Active") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      }
    });
  }

  selectInactiveStatusValue() {
    cy.get("ul[role='listbox']>li").each(($el) => {
      if ($el.text() == "Inactive") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      }
    });
  }

  selectionOfSchoolValues() {
    cy.get("ul[role='listbox']>li").each(($el) => {
      if ($el.eq() == "Automation 10") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      } else if ($el.text() == "Automation 100") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      } else if ($el.text() == "Automation 103") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      } else if ($el.text() == "Automation 106") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      }
    });
  }

  searchInputText(search) {
    cy.get(this.searchInput).should("be.visible").type(search).type("{enter}");
  }

  clickMoreActions() {
    cy.get("tbody tr:nth-child(1) td:nth-child(6)").each(($el) => {
      if ($el.text() == "Active") {
        cy.log("Status is Active");
        cy.get(
          "tbody tr:nth-child(1) td:nth-child(8) button:nth-child(1)"
        ).click();
      } else {
        if ($el.text() == "Inactive") {
          cy.log("Status is Inactive");
        }
      }
    });
  }

  clickOnMoreActionsDeleteButton() {
    cy.get(this.moreActionsDelete).should("be.visible").click();
  }

  clickOnMoreActionsEditButton() {
    cy.get(this.moreActionsEdit).should("be.visible").click();
  }

  sendDeleteText() {
    cy.get("strong").then(($stxt) => {
      // store the user text
      const txt = $stxt.text();

      // send stored text to delete input field
      cy.get(this.deleteInput).should("be.visible").type(txt);
    });
  }

  clickOnDeleteFinalButton() {
    cy.get(this.deleteFinalButton).should("be.visible").click();
  }

  clickOnCancelFinalButton() {
    cy.get(this.cancelFinalDeleteButton).should("be.visible").click();
  }

  getActiveStatusLabelFilterText() {
    cy.get(this.labelFilterAdded).should("include.text", "Active");
  }

  getInactiveStatusLabelFilterText() {
    cy.get(this.labelFilterAdded).should("include.text", "Inactive");
  }

  getSchoolLabelFilterText() {
    cy.get(this.labelFilterAdded).should("include.text", "Automation 100");
  }

  getOrganizationRolesLabelFilterText() {
    cy.get(this.labelFilterAdded).should("include.text", "Teacher");
  }

  getPhoneLabelFilterText() {
    cy.get(this.labelFilterAdded).should("include.text", "+59834563");
  }

  getEmailLabelFilterText() {
    cy.get(this.labelFilterAdded).should("include.text", "lorenatest@test.com");
  }

  addPhoneText(phone) {
    cy.get(this.valuesFilterInputs)
      .should("be.visible")
      .type(phone)
      .type("{enter}");
  }

  addEmailText(email) {
    cy.get(this.valuesFilterInputs)
      .should("be.visible")
      .type(email)
      .type("{enter}");
  }

  editOrganizationRolesFilterValues() {
    cy.get("ul[role='listbox']>li").each(($el) => {
      if ($el.eq() == "Parent") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      } else if ($el.text() == "Student") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      }
    });
  }

  clickOnFilterLabel() {
    cy.get(this.labelFilterAdded).click();
  }

  getEditedLabelFilterTextOrganizationRoles() {
    cy.get(this.labelFilterAdded).should("include.text", "Student");
  }

  editSchoolsFilterValues() {
    cy.get("ul[role='listbox']>li").each(($el) => {
      if ($el.eq() == "Automation 104") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      } else if ($el.text() == "Automation 101") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      }
    });
  }

  getEditedLabelFilterTextSchools() {
    cy.get(this.labelFilterAdded).should("include.text", "Automation 101");
  }

  getEditedLabelFilterTextStatus() {
    cy.get(this.labelFilterAdded).should("include.text", "Active");
  }

  editPhoneText(phone) {
    cy.get(this.valuesFilterInputs)
      .should("be.visible")
      .clear()
      .type(phone)
      .type("{enter}");
  }

  editEmailText(email) {
    cy.get(this.valuesFilterInputs)
      .should("be.visible")
      .clear()
      .type(email)
      .type("{enter}");
  }

  getEditedLabelFilterTextPhone() {
    cy.get(this.labelFilterAdded).should("include.text", "+59898723");
  }

  getEditedLabelFilterTextEmail() {
    cy.get(this.labelFilterAdded).should("include.text", "alicetest@gmail.com");
  }

  clickClearAllFilters() {
    cy.get(this.clearAllFilters).should("be.visible").click();
  }

  clickClearFilter() {
    cy.get(this.clearFilter).should("be.visible").click();
  }

  getAddFilterLabelState() {
    cy.get(this.addFilterButton).should("include.text", "Add Filter");
  }

  clickAddMoreFilters() {
    cy.get(this.addMoreFilters).should("be.visible").click();
  }

  getFilterMouseOverText() {
    cy.get(this.addFilterFinalButton).focused().realHover();
    cy.contains("All columns already have a filter specified");
  }

  getFilterOrderValues() {
    cy.get("ul[role='listbox']>li")
      .should("have.length", 5)
      .then(($els) => {
        // we get a list of jQuery elements
        // convert the jQuery object into a plain array
        return (
          Cypress.$.makeArray($els)
            // extract inner text from each
            .map((el) => el.innerText)
        );
      })
      //.should('deep.equal', ['Organization Roles', 'Status', 'Schools', 'Email', 'Phone'])
      .should("deep.equal", [
        "Organization Roles",
        "Schools",
        "Email",
        "Phone",
        "Status",
      ]);

    // Lodash to get property "innerText"
    // from every item in the array
    cy.log("**using Lodash**");
    cy.get("ul[role='listbox']>li")
      .should("have.length", 5)
      .then(($els) => {
        // jQuery => Array => get "innerText" from each
        return Cypress._.map(Cypress.$.makeArray($els), "innerText");
      })
      //.should('deep.equal', ['Organization Roles', 'Status', 'Schools', 'Email', 'Phone'])
      .should("deep.equal", [
        "Organization Roles",
        "Schools",
        "Email",
        "Phone",
        "Status",
      ]);

    cy.log("**using Lodash to convert and map**");
    cy.get("ul[role='listbox']>li")
      .should("have.length", 5)
      .then(($els) => {
        expect(Cypress.dom.isJquery($els), "jQuery input").to.be.true;
        // Lodash can iterate over jQuery object
        return Cypress._.map($els, "innerText");
      })
      .should("be.an", "array")
      // .and('deep.equal', ['Organization Roles', 'Status', 'Schools', 'Email', 'Phone'])
      .and("deep.equal", [
        "Organization Roles",
        "Schools",
        "Email",
        "Phone",
        "Status",
      ]);
  }
}

export const userPage = new UserPage();
