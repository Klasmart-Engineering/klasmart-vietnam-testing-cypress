/// <reference types="cypress" />

class AgeRangesPage {
  /*---------------  Start Web Element  ---------------*/

  ageRangesTab = '[href="#/admin/age-ranges"]';
  createAgeRangeButton = ".MuiButtonBase-root.MuiFab-root";
  ageRangeFrom = "#age-range-from";
  ageRangeFromUnit =
    "div[data-testid='From UnitSelectTextField'] div div[role='button'] div span";
  ageRangeTo = "#age-range-to";
  ageRangeToUnit =
    "div[data-testid='To UnitSelectTextField'] div div[role='button']";
  createFinalButton =
    "span:nth-child(3) button:nth-child(1) div:nth-child(1) p:nth-child(1)";
  labelFilterAdded = "div:nth-child(2) > div:nth-child(1) > span:nth-child(1)";

  /*----------------  End Web Element  ----------------*/

  clickOnAgeRangesTab() {
    cy.viewport(1280, 750);
    cy.get(this.ageRangesTab).should("be.visible").scrollIntoView().click();
  }

  clickOnCreateAgeRangeButton() {
    cy.get(this.createAgeRangeButton).should("be.visible").click();
  }

  clickOnAgeRangeFromUnit() {
    cy.get(this.ageRangeFromUnit).should("be.visible").click();
  }

  clickOnAgeRangeToUnit() {
    cy.get(this.ageRangeToUnit).should("be.visible").click();
  }

  clickOnCreateFinalButton() {
    cy.get(this.createFinalButton).should("be.visible").click();
  }

  unitMonthSelection() {
    cy.get("ul[role='listbox']>li").each(($el) => {
      if ($el.text() == "Month(s)") {
        cy.wrap($el).click();
        cy.log("Month(s) was selected");
        return;
      }
    });
  }

  unitYearSelection() {
    cy.get("ul[role='listbox']>li").each(($el) => {
      if ($el.text() == "Year(s)") {
        cy.wrap($el).click();
        cy.log("Year(s) was selected");
        return;
      }
    });
  }

  editAgeRangeFrom(from) {
    cy.get(this.ageRangeFrom)
      .should("be.visible")
      .clear()
      .type(from)
      .type("{enter}");
  }

  editAgeRangeTo(to) {
    cy.get(this.ageRangeTo)
      .should("be.visible")
      .clear()
      .type(to)
      .type("{enter}");
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

  clickOnAgeRangesFromColumn() {
    cy.get("ul[role='listbox']>li").each(($el) => {
      if ($el.text() == "Age Ranges (From)") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      }
    });
  }

  selectionOfFirstValueRange() {
    cy.get("ul[role='listbox']>li").eq(1).click();
    cy.log("Element found");
  }

  selectionOfEditedAgeRangesFromValues() {
    cy.get("ul[role='listbox']>li").each(($el) => {
      if ($el.eq() == "3 Year(s)") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      }
    });
  }

  selectionOfEditedAgeRangesToValues() {
    cy.get("ul[role='listbox']>li").each(($el) => {
      if ($el.eq() == "23 Year(s)") {
        cy.wrap($el).click();
        cy.log("Element found");
        return;
      }
    });
  }

  getAgeRangesFromLabelFilterText() {
    cy.get(this.labelFilterAdded).should("include.text", "Age Ranges (From)");
  }

  getAgeRangesToLabelFilterText() {
    cy.get(this.labelFilterAdded).should("include.text", "Age Ranges (To)");
  }
}

export const ageRangesPage = new AgeRangesPage();
