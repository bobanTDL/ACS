import {BasePage} from "../PageObjects/BasePage";

describe("Home Page test cases", () => {

    it("1. Disabled field for entering Identity", () => {
        BasePage.openHomePage()
        BasePage.verifyFieldsAreDisabled("#TextField18")
    })

    it("2. ACS User identity Provisioning and Calling SDK Initialization section", () => {
        BasePage.openHomePage()
        BasePage.clickButton("#id__0")
        BasePage.verifyCodeIsDisplayed("#root > div > div:nth-child(2) > div:nth-child(1) > div > pre > code")
        BasePage.verifyButtonIsHideCode ("#id__0")
        BasePage.clickButton("#id__0")
        BasePage.verifyCodeIsNotDisplayed("#root > div > div:nth-child(2) > div:nth-child(1) > div > pre > code")
    })

    it("3. Placing and receiving call section", () => {
        BasePage.openHomePage()
        BasePage.clickButton("#id__15")
        BasePage.verifyCodeIsDisplayed("#root > div > div:nth-child(2) > div:nth-child(2) > div > pre > code")
        BasePage.verifyButtonIsHideCode ("#id__15")
        BasePage.clickButton("#id__15")
        BasePage.verifyCodeIsNotDisplayed("#root > div > div:nth-child(2) > div:nth-child(2) > div > pre > code")

    })

    it("4. Video, Screen sharing, and local video preview screen section", () => {
        BasePage.openHomePage()
        BasePage.clickButton("#id__66")
        BasePage.verifyCodeIsDisplayed("#root > div > div:nth-child(2) > div:nth-child(3) > div > pre > code")
        BasePage.verifyButtonIsHideCode ("#id__66")
        BasePage.clickButton("#id__66")
        BasePage.verifyCodeIsNotDisplayed("#root > div > div:nth-child(2) > div:nth-child(3) > div > pre > code")
    })

    it("5. Mute/ Unmute section", () => {
        BasePage.openHomePage()
        BasePage.clickButton("#id__69")
        BasePage.verifyCodeIsDisplayed("#root > div > div:nth-child(2) > div:nth-child(4) > div > pre > code")
        BasePage.verifyButtonIsHideCode ("#id__69")
        BasePage.clickButton("#id__69")
        BasePage.verifyCodeIsNotDisplayed("#root > div > div:nth-child(2) > div:nth-child(4) > div > pre > code")
    })

    it("6. Hold/ Unhold section", () => {
        BasePage.openHomePage()
        BasePage.clickButton("#id__72")
        BasePage.verifyCodeIsDisplayed("#root > div > div:nth-child(2) > div:nth-child(5) > div > pre > code")
        BasePage.verifyButtonIsHideCode ("#id__72")
        BasePage.clickButton("#id__72")
        BasePage.verifyCodeIsNotDisplayed("#root > div > div:nth-child(2) > div:nth-child(5) > div > pre > code")
    })

    it("7. Device manager section", () => {
        BasePage.openHomePage()
        BasePage.clickButton("#id__75")
        BasePage.verifyCodeIsDisplayed("#root > div > div:nth-child(2) > div:nth-child(6) > div > pre > code")
        BasePage.verifyButtonIsHideCode ("#id__75")
        BasePage.clickButton("#id__75")
        BasePage.verifyCodeIsNotDisplayed("#root > div > div:nth-child(2) > div:nth-child(6) > div > pre > code")
    })

    it("8. Provision user and initialize SDK button is functional", () => {
        BasePage.openHomePage()
        BasePage.clickButton("#id__9")
        cy.wait(5000)
        BasePage.verifyIdentityIsDisplayed("#root > div > div:nth-child(2) > div:nth-child(1) > div > div:nth-child(4) > div:nth-child(3) > span > b")
        BasePage.verifyFieldsAreEnabled("#TextField18")
    })


})

