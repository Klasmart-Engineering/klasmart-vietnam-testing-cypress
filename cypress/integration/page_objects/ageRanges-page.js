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
  moreActionsEdit = "ul:nth-child(1) > li:nth-child(1) > p:nth-child(2)";
  moreActionsDelete = "ul:nth-child(1) > li:nth-child(2) > p:nth-child(2)";
  deleteOnEdition =
    "span:nth-child(1) button:nth-child(1) div:nth-child(1) p:nth-child(1)";
  saveEditionButton =
    ":nth-child(4) > .MuiButton-root > .MuiBox-root > .MuiTypography-root";
  ageRangeFromHelperText = "#age-range-from-helper-text";
  ageRangeToHelperText = "#age-range-to-helper-text";
  cancelButton =
    "span:nth-child(2) > button:nth-child(1) > div:nth-child(1) > p:nth-child(1)";

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

  clickOnCancelButton() {
    cy.get(this.cancelButton).should("be.visible").click();
  }

  clickOnSaveEditionButton() {
    cy.get(this.saveEditionButton).should("be.visible").click();
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

  clickMoreActions() {
    cy.get("tbody tr:nth-child(1) td:nth-child(2) button:nth-child(1)").click();
  }

  clickOnMoreActionsDeleteButton() {
    cy.get(this.moreActionsDelete).should("be.visible").click();
    cy.wait(7000);
  }

  clickOnMoreActionsEditButton() {
    cy.get(this.moreActionsEdit).should("be.visible").click();
    cy.wait(7000);
  }

  clickOnDeleteEdition() {
    cy.get(this.deleteOnEdition).should("be.visible").click();
    cy.wait(7000);
  }

  getFromHelperText(message1) {
    return cy
      .get(this.ageRangeFromHelperText, { timeout: 50000 })
      .contains(message1)
      .should("be.visible");
  }

  getToHelperText(message2) {
    return cy
      .get(this.ageRangeToHelperText, { timeout: 50000 })
      .contains(message2)
      .should("be.visible");
  }

  removeAllColumns() {
    cy.get("table thead:nth-child(1) tr th:nth-child(2)").click();
    cy.get(":checkbox").uncheck({ force: true });
  }

  getColumnText() {
    return cy
      .get("table thead:nth-child(1) tr th:nth-child(1)")
      .contains("Age Range");
  }

  getSecondColumnText() {
    return cy
      .get("table thead:nth-child(1) tr th:nth-child(2)")
      .contains("Age Range");
  }
}

export const ageRangesPage = new AgeRangesPage();
