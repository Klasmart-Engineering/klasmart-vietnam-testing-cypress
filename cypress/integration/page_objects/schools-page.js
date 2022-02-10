/// <reference types="cypress" />

class SchoolPage {
  /*---------------  Start Web Element  ---------------*/

  schoolsTab = '[href="#/admin/schools"]';
  createSchoolButton = ".MuiFab-label > .MuiBox-root > .MuiTypography-root";
  schoolNameInput =
    ":nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input";
  shortCodeInput =
    "div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)";
  nextButton = "//span[contains(text(),'Next')]";
  previousButton =
    "div[role='presentation'] span:nth-child(1) button:nth-child(1)";
  schoolNameErrorMessages =
    "div:nth-child(1) > div:nth-child(1) > p:nth-child(3)";
  shortCodeErrorMessages =
    "div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > p:nth-child(3)";
  closeSchoolButton = "button[aria-label='close']";
  createFinalButton =
    ":nth-child(2) > .MuiButtonBase-root > .MuiButton-label > .MuiBox-root > .MuiTypography-root";
  createProgramSchool =
    "div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > span:nth-child(2) > button:nth-child(1)";
  inputProgramName = "div:nth-child(1) > div > div > input";
  inputAgeRangesProgram =
    "div:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)";
  inputGradesProgram =
    "div[data-testid='GradesSelectTextField'] div div[role='button']";
  nextProgramButton =
    "div:nth-child(8) > div:nth-child(3) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > span:nth-child(2) > button:nth-child(1)";
  previousProgramButton =
    "div:nth-child(8) > div:nth-child(3) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > span:nth-child(1)";
  programNameErrorMessage =
    ":nth-child(1) > .MuiFormControl-root > .MuiFormHelperText-root";
  gradesErrorMessage =
    ":nth-child(2) > .MuiFormControl-root > .MuiFormHelperText-root";
  ageRangesErrorMessage =
    ":nth-child(3) > .MuiFormControl-root > .MuiFormHelperText-root";
  searchProgramInput = "(//input[@placeholder='Search'])[2]";
  createSubjectButton = "//span[contains(text(),'Create Subject')]";
  subjectNameInput = "#subjectName";
  subjectCategoryField =
    "div:nth-child(2) > div:nth-child(1) > span:nth-child(2) > button:nth-child(1) > span:nth-child(1)";
  subjectSubCategoryField =
    "span:nth-child(5) > button:nth-child(1) > span:nth-child(1)";
  selectButton = "//span[contains(text(),'Select')]";
  createSubjectFinalButton =
    "div:nth-child(4) > span:nth-child(3) > button:nth-child(1)";
  addMoreCategories =
    "button[class='MuiButtonBase-root MuiButton-root MuiButton-outlined']";
  cancelCreateSubject =
    "div:nth-child(4) > span:nth-child(2) > button:nth-child(1)";
  removeAddMoreCategories =
    "//div[@role='none presentation']//div[3]//div[3]//span[1]//button[1]";
  searchSubjectInput = "(//input[@placeholder='Search'])[3]";
  createCategoryButton =
    "div.MuiDialogContent-root.MuiDialogContent-dividers > div > div.MuiToolbar-root.MuiToolbar-regular.MuiToolbar-gutters > span > button";
  subAndCategoryNameInput = "form input[type='text']";
  subAndCategoryNameErrorMessage =
    "form > .MuiFormControl-root > .MuiFormHelperText-root";
  createCategoryFinalButton =
    "#body > div:nth-child(14) > div.MuiDialog-container.MuiDialog-scrollPaper > div > div.MuiDialogActions-root.MuiDialogActions-spacing > span:nth-child(2) > button > span.MuiButton-label > div > span";
  cancelCreateCategory =
    "#body > div:nth-child(14) > div.MuiDialog-container.MuiDialog-scrollPaper > div > div.MuiDialogActions-root.MuiDialogActions-spacing > span:nth-child(1) > button > span.MuiButton-label > div > span";
  createSubCategory =
    "div.MuiDialogContent-root.MuiDialogContent-dividers > div > div.MuiToolbar-root.MuiToolbar-regular.MuiToolbar-gutters > span > button";
  createSubCategoryFinalButton =
    "#body > div:nth-child(15) > div.MuiDialog-container.MuiDialog-scrollPaper > div > div.MuiDialogActions-root.MuiDialogActions-spacing > span:nth-child(2) > button > span.MuiButton-label > div > span";
  previousButtonEdition =
    "span:nth-child(1) > button > span.MuiButton-label > div > span";
  saveButtonEdition =
    "span:nth-child(2) > button > span.MuiButton-label > div > span";
  nextButtonEdition =
    "span:nth-child(3) > button > span.MuiButton-label > div > span";
  searchInput = "input[placeholder='Search']";
  dragAndDrop =
    ".MuiTypography-root.MuiTypography-body1.MuiTypography-colorTextSecondary";
  subcategoryErrorMessage = "p:nth-child(6)";
  programsRequiredText = ".MuiFormHelperText-root";
  programPagesSelector = "div:nth-child(1) > button:nth-child(2)";
  allPagesSelector = "div:nth-child(6) ul[role='menu'] li:nth-child(1)";
  thisPageSelector = "div:nth-child(6) ul[role='menu'] li:nth-child(2)";
  nonePageSelector = "div:nth-child(6) ul[role='menu'] li:nth-child(3)";

  /*----------------  End Web Element  ----------------*/

  clickOnSchoolsTab() {
    cy.get(this.schoolsTab).should("be.visible").click();
  }

  clickOnCreateSchoolButton() {
    cy.get(this.createSchoolButton).should("be.visible").click();
  }

  fillName(name) {
    cy.get(this.schoolNameInput)
      .should("be.visible")
      .type(name)
      .type("{enter}");
  }

  editName(name) {
    cy.get(this.schoolNameInput)
      .should("be.visible")
      .clear()
      .type(name)
      .type("{enter}");
  }

  fillShortCode(shortCode) {
    cy.get(this.shortCodeInput)
      .should("be.visible")
      .type(shortCode)
      .type("{enter}");
  }

  editShortCode(shortCode) {
    cy.get(this.shortCodeInput)
      .should("be.visible")
      .clear()
      .type(shortCode)
      .type("{enter}");
  }

  getNextButtonState() {
    cy.xpath(this.nextButton).then(($btn) => {
      if ($btn.is(":disabled")) {
        cy.log("Button is disable");
      } else {
        $btn.prop("disabled", true);
        cy.log("Button is enable");
      }
    });
  }

  getPreviousButtonState() {
    cy.get(this.previousButton)
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

  getMaxNameLenghtText() {
    return cy
      .get(this.schoolNameErrorMessages, { timeout: 50000 })
      .should("be.visible");
  }

  getMaxShortCodeLenghtText() {
    return cy
      .get(this.shortCodeErrorMessages, { timeout: 50000 })
      .should("be.visible");
  }

  clickOnCloseSchool() {
    cy.get(this.closeSchoolButton).should("be.visible").click();
  }

  clickOnNextButton() {
    cy.xpath(this.nextButton).should("be.visible").click({ force: true });
  }

  clickOnPreviousButton() {
    cy.get(this.previousButton).should("be.visible").click({ force: true });
  }

  selectProgramItems() {
    cy.xpath("(//tbody)[2]//tr[1]/td[1]/span")
      .should("be.visible")
      .scrollIntoView()
      .click({ force: true });
    cy.xpath("(//tbody)[2]//tr[3]/td[1]/span")
      .should("be.visible")
      .scrollIntoView()
      .click({ force: true });
    cy.xpath("(//tbody)[2]//tr[5]/td[1]/span")
      .should("be.visible")
      .scrollIntoView()
      .click({ force: true });
    cy.xpath("(//tbody)[2]//tr[6]/td[1]/span")
      .should("be.visible")
      .scrollIntoView()
      .click({ force: true });
  }

  selectOtherProgramItems() {
    cy.xpath("(//tbody)[2]//tr[2]/td[1]/span")
      .should("be.visible")
      .scrollIntoView()
      .click({ force: true });
    cy.xpath("(//tbody)[2]//tr[4]/td[1]/span")
      .should("be.visible")
      .scrollIntoView()
      .click({ force: true });
  }

  clickOnCreateFinalButton() {
    cy.get(this.createFinalButton).should("be.visible").click();
  }

  getSchoolName() {
    cy.get("table td:nth-child(1)").each(($el) => {
      if ($el.text() == "Automation School") {
        cy.log("School was found");
        return;
      } else {
        $el.text() == "No records to display";
        cy.log("ERROR!!! School was not created");
        return;
      }
    });
    cy.get(this.searchInput).clear();
  }

  clickOnCreateProgram() {
    cy.get(this.createProgramSchool).should("be.visible").click();
  }

  fillProgramName(progName) {
    cy.get(this.inputProgramName)
      .should("be.visible")
      .type(progName)
      .type("{enter}");
  }

  clickOnGrades() {
    cy.wait(6000);
    cy.get(this.inputGradesProgram).should("be.visible").click();
  }

  clickOnAgeRanges() {
    cy.wait(3000);
    cy.get(this.inputAgeRangesProgram).should("be.visible").click();
  }

  selectionGrades() {
    cy.get("ul[role='listbox']>li").each(($el) => {
      if ($el.text() == "None Specified") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      } else if ($el.text() == "K") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      } else if ($el.text() == "Preschool") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      } else if ($el.text() == "PreK-7") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      }
    });
  }

  selectionAgeRanges() {
    cy.get("ul[role='listbox']>li").each(($el) => {
      if ($el.text() == "3 - 4 Year(s)") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      } else if ($el.text() == "5 - 6 Year(s)") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      } else if ($el.text() == "7 - 8 Year(s)") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      } else if ($el.text() == "6 - 7 Year(s)") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      }
    });
  }

  clickOnNextProgramButton() {
    cy.get(this.nextProgramButton).should("be.visible").click();
  }

  clickOnCreateProgramButton() {
    cy.get(this.nextProgramButton).should("be.visible").click();
  }

  clickOnPreviousProgramButton() {
    cy.get(this.previousProgramButton).should("be.visible").click();
  }

  editProgramName(progName) {
    cy.get(this.inputProgramName)
      .should("be.visible")
      .clear()
      .type(progName)
      .type("{enter}");
  }

  getNextProgramButtonState() {
    cy.get(this.nextProgramButton).then(($btn) => {
      if ($btn.is(":disabled")) {
        cy.log("Button is disable");
      } else {
        $btn.prop("disabled", true);
        cy.log("Button is enable");
      }
    });
  }

  getPreviousProgramButtonState() {
    cy.get(this.previousProgramButton)
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

  clickOnSelectAllItems() {
    cy.get("ul[role='listbox']>li").each(($el) => {
      if ($el.text() == "Select All") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      }
    });
  }

  getProgramErrorMessageText() {
    return cy
      .get(this.programNameErrorMessage, { timeout: 50000 })
      .should(
        "include.text",
        "The program name has a max length of 35 characters."
      );
  }

  getGradesErrorMessageText() {
    return cy
      .get(this.gradesErrorMessage, { timeout: 50000 })
      .should("include.text", "The Grade is required.");
  }

  getAgeRangesErrorMessageText() {
    return cy
      .get(this.ageRangesErrorMessage, { timeout: 50000 })
      .should("include.text", "The Age Range is required.");
  }

  selectSubjectItems() {
    cy.xpath("(//tbody)[3]//tr[1]/td[1]/span")
      .should("be.visible")
      .scrollIntoView()
      .click({ force: true });
    cy.xpath("(//tbody)[3]//tr[3]/td[1]/span")
      .should("be.visible")
      .scrollIntoView()
      .click({ force: true });
    cy.xpath("(//tbody)[3]//tr[5]/td[1]/span")
      .should("be.visible")
      .scrollIntoView()
      .click({ force: true });
    cy.xpath("(//tbody)[3]//tr[7]/td[1]/span")
      .should("be.visible")
      .scrollIntoView()
      .click({ force: true });
  }

  getProgramName() {
    cy.get("table td:nth-child(1)").each(($el) => {
      if ($el.text() == "Automation Program") {
        cy.log("Program was found");
        return;
      } else {
        $el.text() == "No records to display";
        cy.log("ERROR!!! Program was not created");
        return;
      }
    });
  }

  searchProgramInputText(search) {
    cy.viewport(1280, 750);
    cy.xpath(this.searchProgramInput)
      .should("be.visible")
      .type(search)
      .type("{enter}");
    cy.wait(5000);
  }

  clickOnCreateSubjectButton() {
    cy.xpath(this.createSubjectButton).should("be.visible").click();
  }

  fillSubjectName(subName) {
    cy.get(this.subjectNameInput)
      .should("be.visible")
      .type(subName)
      .type("{enter}");
  }

  editSubjectName(subName) {
    cy.get(this.subjectNameInput)
      .should("be.visible")
      .clear()
      .type(subName)
      .type("{enter}");
  }

  clickOnCategory() {
    cy.get(this.subjectCategoryField).should("be.visible").click();
  }

  clickOnSubCategory() {
    cy.get(this.subjectSubCategoryField).should("be.visible").click();
  }

  selectSubCategoryAndCategoryItems() {
    cy.wait(2000);
    cy.xpath("(//tbody)[4]//tr[1]/td[1]/span[1]")
      .should("be.visible")
      .scrollIntoView()
      .click({ force: true });
  }

  clickOnSelectButtonCategory() {
    cy.xpath(this.selectButton).should("be.visible").click();
  }

  clickOnAddMoreCategories() {
    cy.get(this.addMoreCategories).should("be.visible").click();
  }

  clickOnCreateSubjectFinalButton() {
    cy.get(this.createSubjectFinalButton).should("be.visible").click();
  }

  clickOnRemoveAddMoreCategories() {
    cy.xpath(this.removeAddMoreCategories).should("be.visible").click();
  }

  getSubjectName() {
    cy.get("table td:nth-child(1)").each(($el) => {
      if ($el.text() == "Automation Subject") {
        cy.log("Subject was found");
        return;
      } else {
        $el.text() == "No records to display";
        cy.log("ERROR!!! Subject was not created");
        return;
      }
    });
  }

  searchSubjectInputText(search) {
    cy.viewport(1280, 750);
    cy.xpath(this.searchSubjectInput)
      .should("be.visible")
      .type(search)
      .type("{enter}");
    cy.wait(5000);
  }

  clickOnCreateCategory() {
    cy.get(this.createCategoryButton).should("be.visible").click();
  }

  fillCategoryName(catName) {
    cy.get(this.subAndCategoryNameInput).should("be.visible").type(catName);
  }

  editCategoryName(catName) {
    cy.get(this.subAndCategoryNameInput)
      .should("be.visible")
      .clear()
      .type(catName)
      .type("{enter}");
  }

  getCategoryRequiredText() {
    return cy
      .get(this.subAndCategoryNameErrorMessage)
      .should("include.text", "The Category name is required.");
  }

  clickOnCreateCategoryFinalButton() {
    cy.get(this.createCategoryFinalButton).should("be.visible").click();
  }

  clickOnCreateSubCategoryFinalButton() {
    cy.get(this.createSubCategoryFinalButton).should("be.visible").click();
  }

  clickOnCancelCreateCategory() {
    cy.get(this.cancelCreateCategory).should("be.visible").click();
  }

  clickOnCreateSubCategory() {
    cy.get(this.createSubCategory).should("be.visible").click();
  }

  getSubCategoryRequiredText() {
    return cy
      .get(this.subAndCategoryNameErrorMessage)
      .should("include.text", "The Subcategory name is required.");
  }

  fillSubCategoryName(subCatName) {
    cy.get(this.subAndCategoryNameInput).should("be.visible").type(subCatName);
  }

  editSubCategoryName(subCatName) {
    cy.get(this.subAndCategoryNameInput)
      .should("be.visible")
      .clear()
      .type(subCatName)
      .type("{enter}");
  }

  clickOnPreviousButtonEdition() {
    cy.get(this.previousButtonEdition).should("be.visible").click();
  }

  clickOnSaveButtonEdition() {
    cy.get(this.saveButtonEdition).should("be.visible").click();
  }

  clickOnNextButtonEdition() {
    cy.get(this.nextButtonEdition).should("be.visible").click();
  }

  clickMoreActions() {
    cy.get("tbody tr:nth-child(1) td:nth-child(3) button:nth-child(1)").click();
  }

  getFirstColumnText() {
    return cy.get("table thead:nth-child(1) tr th:nth-child(1)").contains("ID");
  }

  getSecondColumnText() {
    return cy
      .get("table thead:nth-child(1) tr th:nth-child(2)")
      .contains("School Name");
  }

  removeAllColumns() {
    cy.get("table thead:nth-child(1) tr th:nth-child(3)").click();
    cy.get(":checkbox").uncheck({force: true });
  }

  sortFirstAsc() {
    cy.get("table thead:nth-child(1) tr th:nth-child(3)").click();
    cy.get(":checkbox").uncheck({ force: true });
    cy.get(":checkbox").check({ force: true });
    cy.get("body").trigger("keydown", { keyCode: 27 });
    cy.wait(500);
    cy.get("body").trigger("keyup", { keyCode: 27 });
    cy.xpath("//div[contains(text(),'I')]").click({ force: true });
    cy.wait(5000);
    cy.get("tbody tr td:nth-child(1)").then((items) => {
      const unsortedItems = items
        .map((index, html) => Cypress.$(html).text())
        .get();
      unsortedItems.forEach((unsortedItems) => cy.log(unsortedItems));
      const sortedItems = unsortedItems.slice().sort();
      expect(unsortedItems, "Items are sorted in asc order").to.deep.equal(
        sortedItems
      );
      sortedItems.forEach((sortedItems) => cy.log(sortedItems));
    });
  }

  sortFirstDesc() {
    cy.xpath("//div[contains(text(),'I')]").click();
    cy.wait(5000);
    cy.get("tbody tr td:nth-child(1)").then((items) => {
      const unsortedItems = items
        .map((index, html) => Cypress.$(html).text())
        .get();
      unsortedItems.forEach((unsortedItems) => cy.log(unsortedItems));
      const sortedItems = unsortedItems.reverse();
      expect(unsortedItems, "Items are sorted in desc order").to.deep.equal(
        sortedItems
      );
      sortedItems.forEach((sortedItems) => cy.log(sortedItems));
    });
  }

  selectFixtureFile() {
    cy.get(this.dragAndDrop)
      .should("be.visible")
      .click({ force: true })
      .attachFile("school_alpha.csv", {
        subjectType: "drag-n-drop",
        events: ["dragenter", "drop"],
      });
    cy.wait(4000);
  }

  selectMultipleFixtureFile() {
    cy.get(this.dragAndDrop)
      .should("be.visible")
      .click({ force: true })
      .attachFile("multiple_schools_alpha.csv", {
        subjectType: "drag-n-drop",
        events: ["dragenter", "drop"],
      });
    cy.wait(10400);
  }

  clickOnAllSubcategoriesItems() {
    cy.wait(1000);
    cy.xpath("(//table)[4]//th[1]//div[1]/span[1]").click();
  }

  clickOnAllProgramsItems() {
    cy.wait(1000);
    cy.xpath("(//table)[2]//th[1]//div[1]/span[1]").click();
  }

  getSubCategoryErrorMessageText() {
    return cy
      .get(this.subcategoryErrorMessage, { timeout: 50000 })
      .should("include.text", "Minimum 1 subcategory is required.");
  }

  getSelectedItemsText() {
    cy.get(
      "div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)"
    )
      .invoke("text")
      .then((text) => {
        let splitText = text.split(" ")[0];
        expect(parseInt(splitText));
        const countOfElements = parseInt(splitText);
        cy.wrap(countOfElements).as("totalNumberText");
      });
  }

  getQuantityOfProgramsSelected() {
    cy.get(".MuiTableBody-root")
      .find("tr td:nth-child(1) span:nth-child(2)")
      .then(($elements) => {
        const countOfElements = $elements.length;
        cy.wrap(countOfElements).as("programCount");
      });
  }

  getTotalResultsPageItems() {
    cy.get("div:nth-child(8) > div:nth-child(1) > p:nth-child(4)")
      .invoke("text")
      .then((text) => {
        let splitText = text.split(" ")[1];
        expect(parseInt(splitText));
        const countOfElements = parseInt(splitText);
        cy.wrap(countOfElements).as("totalResults");
      });
  }

  getProgramRequiredTextItems() {
    return cy
      .get(this.programsRequiredText, { timeout: 50000 })
      .should("have.text", "Required");
  }

  clickOnProgramPagesSelector() {
    cy.wait(7000);
    cy.get(this.programPagesSelector).should("be.visible").click();
  }

  clickOnAllPagesSelector() {
    cy.get(this.allPagesSelector).should("be.visible").click();
  }

  clickOnThisPageSelector() {
    cy.get(this.thisPageSelector).should("be.visible").click();
  }

  clickOnNonePageSelector() {
    cy.get(this.nonePageSelector).should("be.visible").click();
  }
}

export const schoolPage = new SchoolPage();
