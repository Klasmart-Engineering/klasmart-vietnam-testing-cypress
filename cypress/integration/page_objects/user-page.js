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
  finalCreateUserButton =
    ":nth-child(3) > .MuiButton-root > .MuiBox-root > .MuiTypography-root";
  notificationText = "#notistack-snackbar";
  finalCancelUserButton =
    ".MuiDialogActions-root > :nth-child(2) > .MuiButton-root";
  addFilterButton = ".MuiChip-label";
  columnFilter =
    "div[data-testid='ColumnSelectTextField'] div div[role='button']";
  valuesFilter = "div > div > div:nth-child(1) > div:nth-child(3) > div > div";
  valuesFilterInputs =
    ":nth-child(3) > .MuiInputBase-root > .MuiInputBase-input";
  addFilterFinalButton =
    "body div[role='presentation'] div div div div:nth-child(2) span:nth-child(1) button:nth-child(1) div:nth-child(1) p:nth-child(1)";
  cancelFilterButton =
    "body div[role='presentation'] div div div:nth-child(1) span:nth-child(1) button:nth-child(1) div:nth-child(1) p:nth-child(1)";
  labelFilterAdded = "span:nth-child(1) > p:nth-child(1)";
  clearFilter = ".MuiSvgIcon-root.MuiChip-deleteIcon";
  clearAllFilters = '[data-testid="ClearIcon"]';
  addMoreFilters = ".MuiSvgIcon-root.MuiChip-icon.MuiSvgIcon-colorAction";
  searchInput = "input[placeholder='Search']";
  moreActionsEdit = '[tabindex="0"] > .MuiTypography-root';
  moreActionsDelete = '[tabindex="-1"] > .MuiTypography-root';
  deleteInput = "input[aria-invalid='true']";
  deleteFinalButton =
    ".MuiDialogActions-root > :nth-child(2) > .MuiButtonBase-root";
  cancelFinalDeleteButton =
    ".MuiDialogActions-root > :nth-child(1) > .MuiButton-root";
  saveEditionButton = ":nth-child(4) > .MuiButton-root";
  deleteEditionButton =
    ":nth-child(1) > .MuiButton-root > .MuiBox-root > .MuiTypography-root";
  cancelEditionButton =
    ":nth-child(6) > .MuiDialog-container > .MuiPaper-root > .MuiDialogActions-root > :nth-child(1) > .MuiButtonBase-root";
  cancelEditFinalButton =
    ".MuiDialogActions-root > :nth-child(3) > .MuiButtonBase-root";
  addColumns = "button[aria-label='Add columns']";
  nextPage = ".MuiTablePagination-root div > span:nth-child(3) > button";
  previousPage = ".MuiTablePagination-root div > span:nth-child(2) > button";
  lastPage = ".MuiTablePagination-root div > span:nth-child(4) > button";
  firstPage = ".MuiTablePagination-root div > span:nth-child(1) > button";
  rowsPerPage = ".MuiInputBase-root div[role='button']";
  tenPages = "div[id='menu-'] li:nth-child(1)";
  twentyFivePages = "div[id='menu-'] li:nth-child(2)";
  fiftyPages = "div[id='menu-'] li:nth-child(3)";
  uploadCsvButton = '[aria-label="Upload CSV"] > .MuiButtonBase-root';
  dragAndDrop = '[data-testid="dropzone"]';
  validationCsvText =
    ".MuiAccordionSummary-content > .MuiBox-root > .MuiTypography-root";
  uploadCsvFinalButton =
    '[aria-label="Upload file"] > .MuiButtonBase-root > [data-testid="CloudUploadIcon"]';

  /*----------------  End Web Element  ----------------*/

  clickOnCreateUserButton() {
    cy.xpath(this.createUserButton).should("be.visible").click();
  }

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

  clickOnPreferNotToSayGender() {
    cy.get(this.preferNotToSayGender).should("be.visible").click();
  }

  clickOnFemaleGender() {
    cy.get(this.femaleGender).should("be.visible").click();
  }

  clickOnMaleGender() {
    cy.get(this.maleGender).should("be.visible").click();
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
    cy.get(this.finalCreateUserButton).click({ force: true });
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
      if ($el.text() == "A5 Schools") {
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
    cy.get(".MuiDialogContent-root").scrollTo("bottom");
    cy.get(this.alternativeEmailInput)
      .should("be.visible")
      .type(alternativeEmail)
      .type("{enter}");
  }

  alternativePhone(alternativePhone) {
    cy.get(".MuiDialogContent-root").scrollTo("bottom");
    cy.get(this.alternativePhoneInput)
      .should("be.visible")
      .type(alternativePhone)
      .type("{enter}");
  }

  clickOnSchools() {
    cy.get(this.schoolsMultipleList).should("be.visible").click();
    cy.wait(33000);
  }

  getShortCodeText() {
    return cy.get(this.shortCodeText).scrollIntoView().should("be.visible");
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

  clickOnGradeColumn() {
    cy.get("ul[role='listbox']>li").each(($el) => {
      if ($el.text() == "Grade") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      }
    });
  }

  clickOnClassColumn() {
    cy.get("ul[role='listbox']>li").each(($el) => {
      if ($el.text() == "Class") {
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
    cy.wait(2000);
    cy.get(this.valuesFilter).should("be.visible").click();
  }

  clickOnValuesFilterInputs() {
    cy.wait(2000);
    cy.get(this.valuesFilterInputs).should("be.visible").click();
  }

  clickOnAddFilterButton() {
    cy.get(this.addFilterButton).should("be.visible").click();
  }

  clickOnAddFilterFinalButton() {
    cy.get(this.addFilterFinalButton)
      .should("be.visible")
      .click({ force: true });
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
      if ($el.eq() == "2020") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      } else if ($el.text() == "Automation 102") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      } else if ($el.text() == "Automation 105") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      } else if ($el.text() == "Automation 103") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      }
    });
  }

  selectionOfClassValues() {
    cy.get("ul[role='listbox']>li").each(($el) => {
      if ($el.eq() == "2020") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      } else if ($el.text() == "ABB 01") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      } else if ($el.text() == "ABB 02") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      } else if ($el.text() == "ABB 03") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      }
    });
  }

  selectionOfGradeValues() {
    cy.get("ul[role='listbox']>li").each(($el) => {
      if ($el.eq() == "Grade 1") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      } else if ($el.text() == "Grade 2") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      } else if ($el.text() == "Grade 3") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      } else if ($el.text() == "Grade 4") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      }
    });
  }

  searchInputText(search) {
    cy.viewport(1280, 750);
    cy.get(this.searchInput).clear();
    cy.get(this.searchInput).should("be.visible").type(search).type("{enter}");
    cy.wait(7000);
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
    cy.wait(7000);
  }

  clickOnMoreActionsEditButton() {
    cy.get(this.moreActionsEdit).should("be.visible").click();
    cy.wait(7000);
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
    cy.get(this.labelFilterAdded).should("include.text", "Automation 102");
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
      if ($el.eq() == "Automation 108") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      } else if ($el.text() == "Automation 109") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      }
    });
  }

  getEditedLabelFilterTextSchools() {
    cy.get(this.labelFilterAdded).should("include.text", "Automation 109");
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
    cy.get(
      '[aria-label="All columns already have a filter specified"]'
    ).realHover();
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

  editionGivenName(givenName) {
    cy.get(this.givenNameInput)
      .should("be.visible")
      .clear()
      .type(givenName)
      .type("{enter}");
  }

  editionFamilyName(familyName) {
    cy.get(this.familyNameInput)
      .should("be.visible")
      .clear()
      .type(familyName)
      .type("{enter}");
  }

  editionShortCode(shortCode) {
    cy.get(this.shortCodeInput)
      .should("be.visible")
      .clear()
      .type(shortCode)
      .type("{enter}");
  }

  clickOnEditionSaveButton() {
    cy.get(this.saveEditionButton).should("be.visible").click();
  }

  clickOnEditionDeleteButton() {
    cy.get(this.deleteEditionButton).should("be.visible").click();
  }

  clickOnCancelButtonPopUpEdition() {
    cy.get(this.cancelEditionButton).should("be.visible").click();
  }

  clickOnCancelButtonEdition() {
    cy.get(this.cancelEditFinalButton).should("be.visible").click();
  }

  getUserSearch() {
    cy.get("table td:nth-child(1)").each(($el) => {
      if ($el.text() == "Bruno") {
        cy.log("User was found");
        return;
      } else {
        $el.text() == "No records to display";
        cy.log("No records to display");
        return;
      }
    });
  }

  clickOnAddColumns() {
    cy.viewport(1280, 750);
    cy.get(this.addColumns).should("be.visible").click();
  }

  selectColumns() {
    cy.get(":checkbox").uncheck({ force: true });
    cy.get("div:nth-child(4) ul li").click({ multiple: true });
  }

  getFirstColumnText() {
    return cy
      .get("table thead:nth-child(1) tr th:nth-child(1)")
      .contains("Given Name");
  }

  getSecondColumnText() {
    return cy
      .get("table thead:nth-child(1) tr th:nth-child(2)")
      .contains("Family Name");
  }

  clickOnRemoveOrganizationRolesColumnsButton() {
    cy.get("table thead:nth-child(1) tr th:nth-child(3)").each(($el) => {
      if ($el.text() == "Organization Roles") {
        cy.get(
          "table thead:nth-child(1) tr th:nth-child(3) span button"
        ).click();
        cy.log("Organization Roles found");
        return;
      }
    });
  }

  clickOnRemoveSchoolColumnsButton() {
    cy.get("table thead:nth-child(1) tr th:nth-child(3)").each(($el) => {
      if ($el.text() == "School") {
        cy.get(
          "table thead:nth-child(1) tr th:nth-child(3) span button"
        ).click();
        cy.log("School found");
        return;
      }
    });
  }

  clickOnRemoveContactInfoColumnsButton() {
    cy.get("table thead:nth-child(1) tr th:nth-child(3)").each(($el) => {
      if ($el.text() == "Contact Info") {
        cy.get(
          "table thead:nth-child(1) tr th:nth-child(3) span button"
        ).click();
        cy.log("Contact Info found");
        return;
      }
    });
  }

  clickOnRemoveStatusColumnsButton() {
    cy.get("table thead:nth-child(1) tr th:nth-child(3)").each(($el) => {
      if ($el.text() == "Status") {
        cy.get(
          "table thead:nth-child(1) tr th:nth-child(3) span button"
        ).click();
        cy.log("Status found");
        return;
      }
    });
  }

  clickOnRemoveJoinDateColumnsButton() {
    cy.get("table thead:nth-child(1) tr th:nth-child(3)").each(($el) => {
      if ($el.text() == "Join Date") {
        cy.get(
          "table thead:nth-child(1) tr th:nth-child(3) span button"
        ).click();
        cy.log("Join Date found");
        return;
      }
    });
  }

  clickOnNextPage() {
    cy.viewport(1280, 750);
    cy.get(this.nextPage)
      .scrollIntoView()
      .should("be.visible")
      .click({ force: true });
    cy.wait(5000);
  }

  clickOnPreviousPage() {
    cy.viewport(1280, 750);
    cy.get(this.previousPage)
      .scrollIntoView()
      .should("be.visible")
      .click({ force: true });
    cy.wait(5000);
  }

  clickOnLastPage() {
    cy.viewport(1280, 750);
    cy.get(this.lastPage)
      .scrollIntoView()
      .should("be.visible")
      .click({ force: true });
    cy.wait(5000);
  }

  clickOnFirstPage() {
    cy.viewport(1280, 750);
    cy.get(this.firstPage)
      .scrollIntoView()
      .should("be.visible")
      .click({ force: true });
    cy.wait(5000);
  }

  clickOnRowsPerPage() {
    cy.viewport(1280, 750);
    cy.get(this.rowsPerPage)
      .scrollIntoView()
      .should("be.visible")
      .click({ force: true });
    cy.wait(5000);
  }

  clickOnNumOfPages(numberPerPage) {
    var locator;
    switch (numberPerPage) {
      case "10":
        locator = this.tenPages;
        break;
      case "25":
        locator = this.twentyFivePages;
        break;
      case "50":
        locator = this.fiftyPages;
        break;
      default:
        cy.log("defaulted");
        break;
    }

    cy.viewport(1280, 750);
    cy.get(locator)
      .scrollIntoView()
      .should("be.visible")
      .click({ force: true });
    cy.wait(5000);

    // check the correct number of rows is displayed
    cy.get("tbody tr").should("have.length", numberPerPage);
  }

  getFirstPageButtonState() {
    cy.viewport(1280, 750);
    cy.get(this.firstPage)
      .scrollIntoView()
      .then(($btn) => {
        if ($btn.is(":disabled")) {
          cy.log("Button is disable");
        } else {
          $btn.prop("disabled", true);
          cy.log("Button is enable");
        }
      });
  }

  getNextPageButtonState() {
    cy.viewport(1280, 750);
    cy.get(this.nextPage)
      .scrollIntoView()
      .then(($btn) => {
        if ($btn.is(":disabled")) {
          cy.log("Button is disable");
        } else {
          $btn.prop("disabled", true);
          cy.log("Button is enable");
        }
      });
  }

  getPreviousPageButtonState() {
    cy.viewport(1280, 750);
    cy.get(this.previousPage)
      .scrollIntoView()
      .then(($btn) => {
        if ($btn.is(":disabled")) {
          cy.log("Button is disable");
        } else {
          $btn.prop("disabled", true);
          cy.log("Button is enable");
        }
      });
  }

  getLastPageButtonState() {
    cy.viewport(1280, 750);
    cy.get(this.lastPage)
      .scrollIntoView()
      .then(($btn) => {
        if ($btn.is(":disabled")) {
          cy.log("Button is disable");
        } else {
          $btn.prop("disabled", true);
          cy.log("Button is enable");
        }
      });
  }

  clickOnUploadCsvButton() {
    cy.get(this.uploadCsvButton).should("be.visible").click();
  }

  selectMultipleFixtureFile() {
    cy.get(this.dragAndDrop)
      .should("be.visible")
      .click({ force: true })
      .attachFile("multiple_users_alpha.csv", {
        subjectType: "drag-n-drop",
        events: ["dragenter", "drop"],
      });
    cy.wait(10400);
  }

  getValidationCsvText() {
    return cy
      .get(this.validationCsvText)
      .should("include.text", "All validations passed");
  }

  clickOnUploadCsvFinalButton() {
    cy.get(this.uploadCsvFinalButton).should("be.visible").click();
  }

  selectFixtureFile() {
    cy.get(this.dragAndDrop)
      .should("be.visible")
      .click({ force: true })
      .attachFile("user_alpha.csv", {
        subjectType: "drag-n-drop",
        events: ["dragenter", "drop"],
      });
    cy.wait(4000);
  }
}

export const userPage = new UserPage();
