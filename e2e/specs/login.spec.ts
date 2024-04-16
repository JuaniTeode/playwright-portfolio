import { test, expect } from '@playwright/test'
import assertionManager from '../managers/assertionManager'
import  LoginManager  from '../managers/loginManager';
import { users, urls } from '../testdata/testdata'
import { HomePage } from '../pageobjects/HomePage'
import { LoginPage } from '../pageobjects/loginpage';


test.describe('Login/Logout Flow', () => {
    let loginPage: LoginPage
    let homePage: HomePage
    let loginManager: LoginManager

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page)
        homePage = new HomePage(page)
        loginManager = new LoginManager(loginPage, homePage);

        await page.goto(urls.baseUrl)
    })

    test("Verify the user can Login with correct username and password", async ({ page }) => {

        await loginManager.login(users.user.username, users.user.password, page);
        await assertionManager.assertUserIsLoggedIn(loginPage.userMenu, homePage.myProfileButton)
    })

    test("Verify the user can Logout", async ({ page }) => {

        await loginManager.login(users.user.username, users.user.password, page);
        await loginManager.logout()

        await expect(page).toHaveURL(urls.baseUrl + urls.index)
    })

    test("Verify the user cannot Login with incorrect password", async ({ page }) => {

        await loginManager.login(users.wrongPass.username, users.wrongPass.password, page);
        await assertionManager.assertElementContainsText(loginPage.errorMessage, loginPage.errorMessageText);
    })

    test("Verify the user cannot Login with incorrect user", async ({ page }) => {

        await loginManager.login(users.wrongUser.username, users.wrongUser.password, page);
        await assertionManager.assertElementContainsText(loginPage.errorMessage, loginPage.errorMessageText);
    })

    test("Verify the user cannot Login with incorrect user and password", async ({ page }) => {

        await loginManager.login(users.wrong.username, users.wrong.password, page);
        await assertionManager.assertElementContainsText(loginPage.errorMessage, loginPage.errorMessageText);
    })

})
