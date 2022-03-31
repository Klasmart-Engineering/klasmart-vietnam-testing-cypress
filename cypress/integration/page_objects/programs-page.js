/// <reference types="cypress" />

class ProgramsPage {
  /*---------------  Start Web Element  ---------------*/

  programsTab = '[href="#/admin/programs"]';
  createProgramButton = ".MuiButtonBase-root.MuiFab-root";
  programNameInput =
    ":nth-child(1) > .MuiFormControl-root > .MuiOutlinedInput-root";
  gradesNameInput =
    "div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)";
  ageRangesInput =
    "div:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2)";
  nextButton =
    "span:nth-child(3) button:nth-child(1) div:nth-child(1) p:nth-child(1)";
  saveButton =
    "span:nth-child(2) button:nth-child(1) div:nth-child(1) p:nth-child(1)";
  selectButton =
    ":nth-child(9) > .MuiDialog-container > .MuiPaper-elevation24 > .MuiDialogActions-root > :nth-child(3) > .MuiButton-root > .MuiBox-root";
  /*----------------  End Web Element  ----------------*/

  clickOnProgramsTab() {
    cy.get(this.programsTab).should("be.visible").click();
  }

  clickOnCreateProgramButton() {
    cy.get(this.createProgramButton).should("be.visible").click();
  }

  clickOnGradesNameInput() {
    cy.get(this.gradesNameInput).should("be.visible").click();
  }

  clickOnAgeRangesInput() {
    cy.get(this.ageRangesInput).should("be.visible").click();
  }

  programName(programName) {
    cy.get(this.programNameInput)
      .should("be.visible")
      .type(programName)
      .type("{enter}");
  }

  editProgram(editName) {
    cy.get(this.programNameInput)
      .should("be.visible")
      .clear()
      .type(editName)
      .type("{enter}");
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
    cy.get("input[placeholder='Search']").clear();
  }

  selectionOfGradesValues() {
    cy.get("ul[role='listbox']>li").each(($el) => {
      if ($el.text() == "Automation") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      } else if ($el.text() == "Grade 1") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      } else if ($el.text() == "Grade 2") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      }
    });
  }

  selectionOfAgeRangesValues() {
    cy.get("ul[role='listbox']>li").each(($el) => {
      if ($el.text() == "None") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      } else if ($el.text() == "0 - 10 Year(s)") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      } else if ($el.text() == "0 - 2 Year(s)") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      }
    });
  }

  clickMoreActions() {
    cy.get("tbody tr:nth-child(1) td:nth-child(5) button:nth-child(1)").click();
  }

  editionOfGradesValues() {
    cy.get("ul[role='listbox']>li").each(($el) => {
      if ($el.text() == "Automation") {
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

  editionOfAgeRangesValues() {
    cy.get("ul[role='listbox']>li").each(($el) => {
      if ($el.text() == "None") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      } else if ($el.text() == "0 - 5 Year(s)") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      } else if ($el.text() == "0 - 16 Year(s)") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      }
    });
  }

  editProgramName() {
    cy.get("table td:nth-child(1)").each(($el) => {
      if ($el.text() == "Automation Program Edited") {
        cy.log("Program was found");
        return;
      } else {
        $el.text() == "No records to display";
        cy.log("ERROR!!! Program was not edited");
        return;
      }
    });
    cy.get("input[placeholder='Search']").clear();
  }

  clickOnNextButton() {
    cy.get(this.nextButton).should("be.visible").click({ force: true });
  }

  clickOnSaveButton() {
    cy.get(this.saveButton).should("be.visible").click({ force: true });
  }

  getFilterOrderValues() {
    cy.get("ul[role='listbox']>li")
      .should("have.length", 4)
      .then(($els) => {
        // we get a list of jQuery elements
        // convert the jQuery object into a plain array
        return (
          Cypress.$.makeArray($els)
            // extract inner text from each
            .map((el) => el.innerText)
        );
      })
      .should("deep.equal", [
        "Grades",
        "Age Ranges (From)",
        "Age Ranges (To)",
        "Subjects",
      ]);

    // Lodash to get property "innerText"
    // from every item in the array
    cy.log("**using Lodash**");
    cy.get("ul[role='listbox']>li")
      .should("have.length", 4)
      .then(($els) => {
        // jQuery => Array => get "innerText" from each
        return Cypress._.map(Cypress.$.makeArray($els), "innerText");
      })
      .should("deep.equal", [
        "Grades",
        "Age Ranges (From)",
        "Age Ranges (To)",
        "Subjects",
      ]);
  }

  getColumnText() {
    return cy
      .get("table thead:nth-child(1) tr th:nth-child(1)")
      .contains("Name");
  }

  getSecondColumnText() {
    return cy
      .get("table thead:nth-child(1) tr th:nth-child(2)")
      .contains("Name");
  }

  removeAllColumns() {
    cy.get("table thead:nth-child(1) tr th:nth-child(5)").click();
    cy.get(":checkbox").uncheck({ force: true });
  }

  selectSubCategoryAndCategoryItems() {
    cy.wait(3000);
    cy.xpath("(//tbody)[3]//tr[1]/td[1]/span[1]")
      .should("be.visible")
      .scrollIntoView()
      .click({ force: true });
  }

  clickOnSelectButtonCategory() {
    cy.get(this.selectButton).should("be.visible").click();
  }

  clickOnAllSubcategoriesItems() {
    cy.wait(3000);
    cy.xpath("(//table)[3]//th[1]//div[1]/span[1]").click();
  }

  searchSubjectInputText(search) {
    cy.viewport(1280, 750);
    cy.xpath("(//input[@placeholder='Search'])[2]")
      .should("be.visible")
      .type(search)
      .type("{enter}");
    cy.wait(5000);
  }
}

export const programsPage = new ProgramsPage();
