/// <reference types="cypress" />

class GradesPage {
  /*---------------  Start Web Element  ---------------*/

  gradesTab = '[href="#/admin/grades"]';
  createGradeButton = ".MuiButtonBase-root.MuiFab-root";
  cancelCreationButton =
    "span:nth-child(2) > button:nth-child(1) > div:nth-child(1) > p:nth-child(1)";
  createGradeFinalButton =
    ":nth-child(3) > .MuiButton-root > .MuiBox-root > .MuiTypography-root";
  gradeNameInput = "#gradeNameInput";
  progressFromInput = "#progressFromSelect";
  progressToInput = "#progressToSelect";
  gradeHelperText = "#gradeNameInput-helper-text";
  progressFromHelperText = "#progressFromSelect-helper-text";
  progressToHelperText = "#progressToSelect-helper-text";
  searchInput = "input[placeholder='Search for grades by their ID or name']";
  deleteEditionButton =
    "span:nth-child(1) button:nth-child(1) div:nth-child(1) p:nth-child(1)";
  saveEditionButton =
    ":nth-child(4) > .MuiButton-root > .MuiBox-root > .MuiTypography-root";
  deleteFinalButton = "button[type='submit'] div p";
  labelFilterAdded =
    "div:nth-child(5) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)";

  /*----------------  End Web Element  ----------------*/

  clickOnGradesTab() {
    cy.get(this.gradesTab).should("be.visible").click();
  }

  clickOnCreateGradeButton() {
    cy.get(this.createGradeButton).should("be.visible").click();
  }

  clickOnCancelCreateButton() {
    cy.get(this.cancelCreationButton).should("be.visible").click();
  }

  clickOnCreateGradeFinalButton() {
    cy.get(this.createGradeFinalButton).should("be.visible").click();
  }

  clickOnProgressFrom() {
    cy.get(this.progressFromInput).should("be.visible").click();
  }

  clickOnProgressTo() {
    cy.get(this.progressToInput).should("be.visible").click();
  }

  gradeName(gradeName) {
    cy.get(this.gradeNameInput)
      .should("be.visible")
      .type(gradeName)
      .type("{enter}");
  }

  getGradeHelperText() {
    return cy
      .get(this.gradeHelperText, { timeout: 50000 })
      .should("be.visible");
  }

  getProgressFromHelperText() {
    return cy
      .get(this.progressFromHelperText, { timeout: 50000 })
      .should("be.visible");
  }

  getProgressToHelperText() {
    return cy
      .get(this.progressToHelperText, { timeout: 50000 })
      .should("be.visible");
  }

  selectionProgressFrom() {
    cy.get("ul[role='listbox']>li").each(($el) => {
      if ($el.text() == "PreK-1 (0ecb8fa9)") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      }
    });
  }

  selectionProgressTo() {
    cy.get("ul[role='listbox']>li").each(($el) => {
      if ($el.text() == "PreK-2 (66fcda51)") {
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
    cy.wait(9000);
  }

  getGradeName() {
    cy.get("table td:nth-child(1)").each(($el) => {
      if ($el.text() == "Automation 01") {
        cy.log("Grade was found");
        return;
      } else {
        $el.text() == "No records to display";
        cy.log("ERROR!!! Grade was not created");
        return;
      }
    });
    cy.get(this.searchInput).clear();
  }

  editName(name) {
    cy.get(this.gradeNameInput)
      .should("be.visible")
      .clear()
      .type(name)
      .type("{enter}");
  }

  editSelectionProgressFrom() {
    cy.get("ul[role='listbox']>li").each(($el) => {
      if ($el.text() == "K (81dcbcc6)") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      }
    });
  }

  editSelectionProgressTo() {
    cy.get("ul[role='listbox']>li").each(($el) => {
      if ($el.text() == "Kindergarten (a9f0217d)") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      }
    });
  }

  clickOnDeleteEditionButton() {
    cy.get(this.deleteEditionButton).should("be.visible").click();
  }

  clickOnSaveEditionButton() {
    cy.get(this.saveEditionButton).should("be.visible").click();
  }

  clickMoreActions() {
    cy.get("tbody tr:nth-child(1) td:nth-child(4) button:nth-child(1)").click();
  }

  getEditedGradeName() {
    cy.get("table td:nth-child(1)").each(($el) => {
      if ($el.text() == "Grade Edited") {
        cy.log("Edited grade was found");
        return;
      } else {
        $el.text() == "No records to display";
        cy.log("ERROR!!! Grade was not edited");
        return;
      }
    });
    cy.get(this.searchInput).clear();
  }

  clickOnDeleteFinalButton() {
    cy.get(this.deleteFinalButton).should("be.visible").click();
  }

  sortFirstAsc() {
    cy.get("table thead:nth-child(1) tr th:nth-child(4)").click();
    cy.get(":checkbox").uncheck({ force: true });
    cy.get(":checkbox").check({ force: true });
    cy.get("body").trigger("keydown", { keyCode: 27 });
    cy.wait(500);
    cy.get("body").trigger("keyup", { keyCode: 27 });
    cy.xpath("//div[contains(text(),'I')]").click({ force: true });
    cy.wait(5000);
    cy.get("tbody tr td:nth-child(1)").then((items) => {
      const unsortedItems = items
        .map((index, html) => Cypress.$(html).text().toLowerCase())
        .get();
      unsortedItems.forEach((unsortedItems) => cy.log(unsortedItems));
      const sortedItems = unsortedItems.slice().sort();
      expect(unsortedItems, "Items are sorted in asc order").to.deep.equal(
        sortedItems
      );
      sortedItems.forEach((sortedItems) => cy.log(sortedItems));
    });
  }

  clickOnProgressFromColumn() {
    cy.get("ul[role='listbox']>li").each(($el) => {
      if ($el.text() == "Progress From") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      }
    });
  }

  clickOnProgressToColumn() {
    cy.get("ul[role='listbox']>li").each(($el) => {
      if ($el.text() == "Progress To") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      }
    });
  }

  selectionOfProgressValues() {
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
      }
    });
  }

  getProgressLabelFilterText() {
    cy.get(this.labelFilterAdded).should("include.text", "Grade 2");
  }

  editProgressFilterValues() {
    cy.get("ul[role='listbox']>li").each(($el) => {
      if ($el.eq() == "Grade 1") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      } else if ($el.text() == "Grade 4") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      } else if ($el.text() == "Grade 1") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      }
    });
  }

  getEditedLabelFilterTextProgress() {
    cy.get(this.labelFilterAdded).should("include.text", "Grade 1");
  }

  getFilterOrderValues() {
    cy.get("ul[role='listbox']>li")
      .should("have.length", 2)
      .then(($els) => {
        // we get a list of jQuery elements
        // convert the jQuery object into a plain array
        return (
          Cypress.$.makeArray($els)
            // extract inner text from each
            .map((el) => el.innerText)
        );
      })
      .should("deep.equal", ["Progress From", "Progress To"]);

    // Lodash to get property "innerText"
    // from every item in the array
    cy.log("**using Lodash**");
    cy.get("ul[role='listbox']>li")
      .should("have.length", 2)
      .then(($els) => {
        // jQuery => Array => get "innerText" from each
        return Cypress._.map(Cypress.$.makeArray($els), "innerText");
      })
      .should("deep.equal", ["Progress From", "Progress To"]);
  }

  removeAllColumns() {
    cy.get("table thead:nth-child(1) tr th:nth-child(4)").click();
    cy.get(":checkbox").uncheck({ force: true });
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
}

export const gradesPage = new GradesPage();
