/// <reference types="cypress" />

class RolesPage {
  /*---------------  Start Web Element  ---------------*/

  rolesTab = '[href="#/admin/roles"]';
  createRoleButton = "span > button.MuiFab-extended";
  nameInput = "form div:nth-child(1) div:nth-child(1) input";
  descriptionInput = "form div:nth-child(2) div";
  continueAndFinishButton = ".MuiGrid-root .MuiTypography-button";
  createSaveDeleteRoleFinalButton =
    "span:nth-child(2) button:nth-child(1) div:nth-child(1) p:nth-child(1)";
  searchInput = "input[placeholder='Search']";
  cancelCreationFinalButton =
    "span:nth-child(1) button:nth-child(1) div:nth-child(1) p:nth-child(1)";
  closeRoleCreationWindows = "button[aria-label='close']";
  roleTextModule = "#tableTitle";
  nameInputErrorMessage =
    "div:nth-child(1) > div:nth-child(1) > p:nth-child(3)";
  descriptionInputErrorMessage = "div:nth-child(2) > p:nth-child(3)";
  clearButton = "div[role='dialog'] div div div div div button[type='button']";
  copyFromRole = "#filled";
  resetButton = "div[role='presentation'] button:nth-child(2)";

  /*----------------  End Web Element  ----------------*/

  clickOnRolesTab() {
    cy.get(this.rolesTab).should("be.visible").click();
  }

  clickOnCreateRoleButton() {
    cy.get(this.createRoleButton).should("be.visible").click();
  }

  fillName(name) {
    cy.get(this.nameInput).should("be.visible").type(name).type("{enter}");
  }

  editName(name) {
    cy.get(this.nameInput)
      .should("be.visible")
      .clear()
      .type(name)
      .type("{enter}");
  }

  fillDescription(description) {
    cy.get(this.descriptionInput)
      .should("be.visible")
      .type(description)
      .type("{enter}");
  }

  editDescription(description) {
    cy.get(this.descriptionInput)
      .should("be.visible")
      .clear()
      .type(description)
      .type("{enter}");
  }

  clickOnContinueAndFinisheButton() {
    cy.get(this.continueAndFinishButton).should("be.visible").click();
  }

  selectRandomEditionActions() {
    cy.get(
      "div:nth-child(1) > div:nth-child(1) > label:nth-child(1) > span:nth-child(1)"
    )
      .eq(Math.floor(Math.random() * 9))
      .click({ force: true });
  }

  selectRandomActions() {
    cy.get(":checkbox").uncheck({ force: true });
    cy.get(
      "div:nth-child(1) > div:nth-child(1) > label:nth-child(1) > span:nth-child(1)"
    )
      .eq(Math.floor(Math.random() * 9))
      .click({ force: true });
  }

  clickOnCreateSaveDeleteRoleFinalButton() {
    cy.get(this.createSaveDeleteRoleFinalButton).should("be.visible").click();
  }

  getRoleName() {
    cy.get("table td:nth-child(1)").each(($el) => {
      if ($el.text() == "Role AUT01") {
        cy.log("Role was found");
        return;
      } else {
        $el.text() == "No records to display";
        cy.log("ERROR!!! Role was not created");
        return;
      }
    });
    cy.get(this.searchInput).clear();
  }

  getEditRoleName() {
    cy.get("table td:nth-child(1)").each(($el) => {
      if ($el.text() == "Role AUT00") {
        cy.log("Role was found");
        return;
      } else {
        $el.text() == "No records to display";
        cy.log("ERROR!!! Role was not edited");
        return;
      }
    });
    cy.get(this.searchInput).clear();
  }

  getFirstColumnText() {
    return cy.get("table thead:nth-child(1) tr th:nth-child(1)").contains("Id");
  }

  getSecondColumnText() {
    return cy
      .get("table thead:nth-child(1) tr th:nth-child(2)")
      .contains("Role");
  }

  getLockedColumnText() {
    return cy
      .get("table thead:nth-child(1) tr th:nth-child(1)")
      .contains("Role");
  }

  getRoleName() {
    cy.get("table td:nth-child(1)").each(($el) => {
      if ($el.text() == "Teacher") {
        cy.log("Role was found");
        return;
      } else {
        $el.text() == "No records to display";
        cy.log("ERROR!!! Role was not created");
        return;
      }
    });
    cy.get(this.searchInput).clear();
  }

  clickOnCancelCreationButton() {
    cy.get(this.cancelCreationFinalButton).should("be.visible").click();
  }

  clickOnCloseRoleWindows() {
    cy.get(this.closeRoleCreationWindows).should("be.visible").click();
  }

  getTitleModuleText() {
    return cy.get(this.roleTextModule).contains("Roles");
  }

  getNameErrorMessageText() {
    return cy.get(this.nameInputErrorMessage).contains("Required");
  }

  getSpecialCharactersNameMessageText() {
    return cy
      .get(this.nameInputErrorMessage)
      .contains(
        "The input can only contain letters, numbers, space and & / , -."
      );
  }

  getSpecialCharactersDescriptionMessageText() {
    return cy
      .get(this.descriptionInputErrorMessage)
      .contains(
        "The input can only contain letters, numbers, space and & / , -."
      );
  }

  getMaxDescriptionMessageText() {
    return cy
      .get(this.descriptionInputErrorMessage)
      .contains("Description can't be longer than 30 characters");
  }

  getMaxNameMessageText() {
    return cy
      .get(this.nameInputErrorMessage)
      .contains("Role name should not be longer than 20 characters");
  }

  getMinNameMessageText() {
    return cy
      .get(this.nameInputErrorMessage)
      .contains("Role name should be at least 2 characters");
  }

  getRepeatedNameMessageText() {
    return cy
      .get(this.nameInputErrorMessage)
      .contains("That name has already been taken");
  }

  clickOnClearButton() {
    cy.get(this.clearButton).should("be.visible").click({ force: true });
  }

  clickOnCopyFromRole() {
    cy.get(this.copyFromRole).should("be.visible").click();
  }

  copyFromRoleSelection() {
    cy.get("ul[role='listbox']>li").each(($el) => {
      if ($el.text() == "Parent") {
        cy.wrap($el).click();
        cy.log("Existent Role was found");
        return;
      }
    });
  }

  clickOnResetButton() {
    cy.get(this.resetButton).should("be.visible").click();
  }

  goToTheTop() {
    cy.viewport(1280, 750);
    cy.get(
      ".MuiAppBar-root > .MuiToolbar-root > :nth-child(2)"
    ).scrollIntoView();
  }
}

export const rolesPage = new RolesPage();
