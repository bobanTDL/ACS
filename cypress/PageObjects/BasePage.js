export class BasePage{

    static openHomePage() {
        cy.visit("/")
    }
    static clickButton(selector) {
        cy.get(selector).click()
    }
    static verifyCodeIsDisplayed(selector) {
        cy.get(selector).should("exist")
    }
    static verifyCodeIsNotDisplayed(selector) {
        cy.get(selector).should("not.exist")
    }

    static verifyButtonIsHideCode(selector) {
        cy.get(selector).should("have.text", "Hide code")
    }

    static verifyIdentityIsDisplayed(selector) {
        cy.get(selector).should("exist")
    }

    static verifyFieldsAreEnabled(selector) {
        cy.get(selector).should("be.enabled")
    }

    static verifyFieldsAreDisabled(selector) {
        cy.get(selector).should("be.disabled")


    }
}

