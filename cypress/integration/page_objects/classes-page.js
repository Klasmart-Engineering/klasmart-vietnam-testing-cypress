/// <reference types="cypress" />

class ClassesPage {
  /*---------------  Start Web Element  ---------------*/

  classesTab = '[href="#/admin/classes"]';
  createClassButton = ".MuiButtonBase-root.MuiFab-root";
  classNameInput = "#class-dialog-name";
  createFinalButton =
    ":nth-child(3) > .MuiButton-root > .MuiBox-root > .MuiTypography-root";
  schoolField = "#class-dialog-school";
  programField = ":nth-child(3) >.MuiOutlinedInput-root.MuiInputBase-root";
  gradeField = ":nth-child(4) >.MuiOutlinedInput-root.MuiInputBase-root";
  ageRangeField = ":nth-child(5) >.MuiOutlinedInput-root.MuiInputBase-root";
  subjectsField = ":nth-child(6) >.MuiOutlinedInput-root.MuiInputBase-root";
  moreActionsViewDetails = '[tabindex="0"] > .MuiTypography-root';
  moreActionsEdit = "ul:nth-child(1) > li:nth-child(2) > p:nth-child(2)";
  moreActionsDelete = "ul:nth-child(1) > li:nth-child(3) > p:nth-child(2)";
  saveEditionButton =
    ":nth-child(4) > .MuiButton-root > .MuiBox-root > .MuiTypography-root";
  deleteEditionButton =
    ":nth-child(1) > .MuiButton-root > .MuiBox-root > .MuiTypography-root";
  cancelEditionButton =
    ":nth-child(3) > .MuiButton-root > .MuiBox-root > .MuiTypography-root";
  deleteFinalButton = "button[type='submit']";
  nameInputMessages = "#class-dialog-name-helper-text";
  createWindowsMessage = "#scroll-dialog-title";
  labelFilterAdded = "div:nth-child(2) > div:nth-child(1) > span:nth-child(1)";
  addFilterButton = ".MuiChip-label";
  dragAndDrop = '[data-testid="dropzone"]';
  classRosterWindowsText = ".MuiDialogContent-root .MuiPaper-root #tableTitle";

  /*----------------  End Web Element  ----------------*/

  clickOnClassesTab() {
    cy.get(this.classesTab).should("be.visible").click();
  }

  clickOnCreateButton() {
    cy.get(this.createClassButton).should("be.visible").click();
  }

  clickOnSaveEditionButton() {
    cy.get(this.saveEditionButton).should("be.visible").click();
  }

  clickOnDeleteEditionButton() {
    cy.get(this.deleteEditionButton).should("be.visible").click();
  }

  clickOnCancelEditionButton() {
    cy.get(this.cancelEditionButton).should("be.visible").click();
  }

  className(className) {
    cy.get(this.classNameInput)
      .should("be.visible")
      .type(className)
      .type("{enter}");
  }

  clickOnCreateFinalButton() {
    cy.get(this.createFinalButton).should("be.visible").click();
  }

  getClassName() {
    cy.get("table td:nth-child(1)").each(($el) => {
      if ($el.text() == "Aut class 01") {
        cy.log("Class was found");
        return;
      } else {
        $el.text() == "No records to display";
        cy.log("ERROR!!! Class was not created");
        return;
      }
    });
    cy.get("input[placeholder='Search']").clear();
  }

  getSearchClassName() {
    cy.get("table td:nth-child(1)").each(($el) => {
      if ($el.text() == "Class") {
        cy.log("Class was found");
        return;
      } else {
        $el.text() == "No records to display";
        cy.log("ERROR!!! Class was not created");
        return;
      }
    });
    cy.get("input[placeholder='Search']").clear();
  }

  clickOnSchools() {
    cy.get(this.schoolField).should("be.visible").click();
    cy.wait(33000);
  }

  clickOnProgram() {
    cy.get(this.programField).should("be.visible").click();
    cy.wait(2000);
  }

  clickOnGrade() {
    cy.get(this.gradeField).should("be.visible").click();
    cy.wait(2000);
  }

  clickOnAgeRange() {
    cy.get(this.ageRangeField).should("be.visible").click();
    cy.wait(2000);
  }

  clickOnSubjects() {
    cy.get(this.subjectsField).should("be.visible").click();
    cy.wait(2000);
  }

  selectionOfSchoolValues() {
    cy.get("ul[role='listbox']>li").each(($el) => {
      if ($el.eq() == "Automation 192") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      } else if ($el.text() == "Automation 2") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      } else if ($el.text() == "Automation 194") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      } else if ($el.text() == "Automation 196") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      }
    });
  }

  clickMoreActions() {
    cy.get("tbody tr:nth-child(1) td:nth-child(8) button:nth-child(1)").click();
  }

  editClassName(className) {
    cy.get(this.classNameInput)
      .should("be.visible")
      .clear()
      .type(className)
      .type("{enter}");
  }

  getEditedClassName() {
    cy.get("table td:nth-child(1)").each(($el) => {
      if ($el.text() == "Edit class 01") {
        cy.log("Class was found");
        return;
      } else {
        $el.text() == "No records to display";
        cy.log("ERROR!!! Class was not edited");
        return;
      }
    });
    cy.get("input[placeholder='Search']").clear();
  }

  clickOnMoreActionsDeleteButton() {
    cy.get(this.moreActionsDelete).should("be.visible").click();
    cy.wait(7000);
  }

  clickOnMoreActionsEditButton() {
    cy.get(this.moreActionsEdit).should("be.visible").click();
    cy.wait(7000);
  }

  clickOnMoreActionsViewDetailsButton() {
    cy.get(this.moreActionsViewDetails).should("be.visible").click();
    cy.wait(7000);
  }

  clickOnDeleteFinalButton() {
    cy.get(this.deleteFinalButton).should("be.visible").click();
  }

  sortFirstAsc() {
    cy.get("table thead:nth-child(1) tr th:nth-child(8)").click();
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

  getFilterOrderValues() {
    cy.get("ul[role='listbox']>li")
      .should("have.length", 7)
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
        "Schools",
        "Age Ranges (From)",
        "Age Ranges (To)",
        "Grades",
        "Programs",
        "Subjects",
        "Status",
      ]);

    // Lodash to get property "innerText"
    // from every item in the array
    cy.log("**using Lodash**");
    cy.get("ul[role='listbox']>li")
      .should("have.length", 7)
      .then(($els) => {
        // jQuery => Array => get "innerText" from each
        return Cypress._.map(Cypress.$.makeArray($els), "innerText");
      })
      .should("deep.equal", [
        "Schools",
        "Age Ranges (From)",
        "Age Ranges (To)",
        "Grades",
        "Programs",
        "Subjects",
        "Status",
      ]);
  }

  removeAllColumns() {
    cy.get("table thead:nth-child(1) tr th:nth-child(8)").click();
    cy.get(":checkbox").uncheck({ force: true });
  }

  // this checks for the same text as method below??
  getColumnText() {
    return cy
      .get("table thead:nth-child(1) tr th:nth-child(1)")
      .contains("Class");
  }

  getSecondColumnText() {
    return cy
      .get("table thead:nth-child(1) tr th:nth-child(2)")
      .contains("Class");
  }

  getClassNameText() {
    return cy
      .get(this.nameInputMessages, { timeout: 50000 })
      .should("be.visible");
  }

  getCreateButtonState() {
    var stateEnable = false;
    cy.get(this.createFinalButton).then(($btn) => {
      if ($btn.is(":disabled")) {
        cy.log("Button is disabled");
        assert.isBoolean(stateEnable, "ERROR!! NO CHARACTERS WERE INTRODUCED");
      } else {
        cy.log("Button is enabled");
      }
    });
  }

  getCreateWindowsMessage() {
    return cy
      .get(this.createWindowsMessage, { timeout: 50000 })
      .should("be.visible");
  }

  clickOnAgeRangesFromColumn() {
    cy.get("ul[role='listbox']>li").each(($el) => {
      if ($el.text() == "Age Ranges (From)") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      }
    });
  }

  clickOnAgeRangesToColumn() {
    cy.get("ul[role='listbox']>li").each(($el) => {
      if ($el.text() == "Age Ranges (To)") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      }
    });
  }

  selectionOfAgeRangesFromValues() {
    cy.get("ul[role='listbox']>li").each(($el) => {
      if ($el.text() == "0 Year(s)") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      }
    });
  }

  selectionOfAgeRangesToValues() {
    cy.get("ul[role='listbox']>li").each(($el) => {
      if ($el.text() == "4 Year(s)") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      }
    });
  }

  getAgeRangesFromFilterText() {
    cy.get(this.labelFilterAdded).should("include.text", "0 Year(s)");
  }

  getAgeRangesToFilterText() {
    cy.get(this.labelFilterAdded).should("include.text", "4 Year(s)");
  }

  selectionOfEditAgeRangesFromValues() {
    cy.get("ul[role='listbox']>li").each(($el) => {
      if ($el.text() == "1 Year(s)") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      }
    });
  }

  selectionOfEditAgeRangesToValues() {
    cy.get("ul[role='listbox']>li").each(($el) => {
      if ($el.text() == "2 Year(s)") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      }
    });
  }

  getAgeRangesFromEditFilterText() {
    cy.get(this.labelFilterAdded).should("include.text", "1 Year(s)");
  }

  getAgeRangesToEditFilterText() {
    cy.get(this.labelFilterAdded).should("include.text", "2 Year(s)");
  }

  clickOnGradesColumn() {
    cy.get("ul[role='listbox']>li").each(($el) => {
      if ($el.text() == "Grades") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      }
    });
  }

  selectionOfGradesValues() {
    cy.get("ul[role='listbox']>li").each(($el) => {
      if ($el.text() == "Grade 1") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      }
    });
  }

  getGradesFilterText() {
    cy.get(this.labelFilterAdded).should("include.text", "Grade 1");
  }

  selectionOfEditGradesValues() {
    cy.get("ul[role='listbox']>li").each(($el) => {
      if ($el.text() == "Grade 2") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      }
    });
  }

  getGradesEditFilterText() {
    cy.get(this.labelFilterAdded).should("include.text", "Grade 2");
  }

  clickOnProgramsColumn() {
    cy.get("ul[role='listbox']>li").each(($el) => {
      if ($el.text() == "Programs") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      }
    });
  }

  selectionOfProgramsValues() {
    cy.get("ul[role='listbox']>li").each(($el) => {
      if ($el.text() == "Bada Talk") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      } else if ($el.text() == "Bada Sound") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      } else if ($el.text() == "Bada STEM") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      }
    });
  }

  getProgramsFilterText() {
    cy.get(this.labelFilterAdded).should("include.text", "Bada STEM");
  }

  getProgramsEditFilterText() {
    cy.get(this.labelFilterAdded).should("include.text", "Bada Math");
  }

  selectionOfEditProgramsValues() {
    cy.get("ul[role='listbox']>li").each(($el) => {
      if ($el.text() == "Bada Rhyme") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      } else if ($el.text() == "Bada Math") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      } else if ($el.text() == "Bada Genius") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      }
    });
  }

  clickOnSubjectsColumn() {
    cy.get("ul[role='listbox']>li").each(($el) => {
      if ($el.text() == "Subjects") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      }
    });
  }

  selectionOfSubjectsValues() {
    cy.get("ul[role='listbox']>li").each(($el) => {
      if ($el.text() == "Language/Literacy") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      } else if ($el.text() == "Language") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      } else if ($el.text() == "Math") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      }
    });
  }

  getSubjectsFilterText() {
    cy.get(this.labelFilterAdded).should("include.text", "Math");
  }

  getSubjectsEditFilterText() {
    cy.get(this.labelFilterAdded).should("include.text", "Science");
  }

  selectionOfEditSubjectsValues() {
    cy.get("ul[role='listbox']>li").each(($el) => {
      if ($el.text() == "Language") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      } else if ($el.text() == "Science") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      } else if ($el.text() == "Literacy") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      }
    });
  }

  selectFixtureFile() {
    cy.get(this.dragAndDrop)
      .should("be.visible")
      .click({ force: true })
      .attachFile("class_alpha.csv", {
        subjectType: "drag-n-drop",
        events: ["dragenter", "drop"],
      });
    cy.wait(4000);
  }

  selectMultipleFixtureFile() {
    cy.get(this.dragAndDrop)
      .should("be.visible")
      .click({ force: true })
      .attachFile("multiple_classes_alpha.csv", {
        subjectType: "drag-n-drop",
        events: ["dragenter", "drop"],
      });
    cy.wait(10400);
  }

  clickOnClassLink() {
    cy.get("tbody tr:nth-child(1) td:nth-child(1) a").click();
  }

  getClassRosterWindowsText() {
    return cy.get(this.classRosterWindowsText).contains("Class Roster");
  }
}

export const classesPage = new ClassesPage();
