import { Locator, expect } from "@playwright/test";

class AssertionManager {

    /**
     * Asserts that an element identified by the given selector contains the expected text.
     * 
     * @param {any} page - The Playwright page object on which to perform the assertion.
     * @param {string} selector - The CSS selector used to locate the element.
     * @param {string} expectedText - The text expected to be contained within the element.
     * @returns {Promise<void>} - A Promise that resolves when the assertion is complete.
     * @throws {Error} - If the element does not contain the expected text.
     */
    
    public async assertElementContainsText(selector: Locator, expectedText: string): Promise<void> {
        const elementText = await selector.textContent();
        expect(elementText).toContain(expectedText);
    }

    public async assertUserIsLoggedIn(userMenu: Locator, myProfileButton: Locator): Promise<void>{
        await userMenu.click();
        await expect(myProfileButton).toBeVisible();
    }

    public async assertFeebackFieldsAreClear(yourName: Locator, yourAdress: Locator, subject: Locator, comment: Locator): Promise<void>{
        await expect(yourName).toBeEmpty()
        await expect(yourAdress).toBeEmpty()
        await expect(subject).toBeEmpty()
        await expect(comment).toBeEmpty()
    }
}

export default new AssertionManager();