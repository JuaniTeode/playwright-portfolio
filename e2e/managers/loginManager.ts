import { Page } from "@playwright/test";
import { HomePage } from "../pageobjects/HomePage";
import { LoginPage } from "../pageobjects/loginpage";

export default class LoginManager {

    private readonly loginPage: LoginPage;
    private readonly homePage: HomePage;

    constructor(loginPage: LoginPage, homePage: HomePage) {
        this.loginPage = loginPage;
        this.homePage = homePage;
    }

    /**
     * Logs in with the provided username and password.
     * 
     * @param {string} username - The username to use for login.
     * @param {string} password - The password to use for login.
     * @param {any} page - The Playwright page object on which to perform the login.
     * @returns {Promise<void>} - A Promise that resolves when the login is complete.
     */
    public async login(username:string,password:string, page: Page): Promise<void> {
        await this.homePage.signInButton.click()
        await this.loginPage.usernameInput.fill(username)
        await this.loginPage.passwordInput.fill(password)
        await this.loginPage.submitButton.click()
        
        // Navigate back to the previous page if loggin is successful since SSl Certs cause trouble
        if (await this.loginPage.errorCode.isVisible()) {
            await page.goBack();
        }    
    }

    /**
     * Logs out from the current session.
     * 
     * @param {any} page - The Playwright page object from which to perform the logout.
     * @returns {Promise<void>} - A Promise that resolves when the logout is complete.
     */
    public async logout(): Promise<void> {
        await this.loginPage.userMenu.click()
        await this.loginPage.logout.click()
    }

}