import { Locator, Page } from '@playwright/test'

export class LoginPage {
    // Define selectors
    readonly page: Page
    readonly usernameInput: Locator
    readonly passwordInput: Locator
    readonly submitButton: Locator
    readonly errorMessage: Locator
    readonly userMenu: Locator
    readonly errorCode: Locator
    readonly logout: Locator

    readonly errorMessageText: string

    // Init selectors using constructor
    constructor(page: Page) {
        this.page = page
        this.usernameInput = page.locator('#user_login')
        this.passwordInput = page.locator('#user_password')
        this.submitButton = page.locator('text=Sign in')
        this.errorMessage = page.locator('.alert-error')
        this.userMenu = page.locator('text=username')
        this.errorCode = page.locator('.error-code')
        this.logout = page.locator('text=Logout')

        this.errorMessageText = 'Login and/or password are wrong' 
    }
}