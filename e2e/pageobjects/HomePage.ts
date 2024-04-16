import { Locator, Page } from '@playwright/test'

export class HomePage {
    // Define selectors
    readonly page: Page
    readonly myProfileButton: Locator
    readonly signInButton: Locator

    //top bar section
    readonly usernameMenu: Locator
    readonly logoutMenu: Locator

    readonly moreServices: Locator
    readonly payBills: Locator

    // Init selectors using constructor
    constructor(page: Page) {
        this.page = page
        this.myProfileButton = page.locator('text=My Profile');
        this.signInButton = page.locator('#signin_button')

        this.usernameMenu = page.getByText('username')
        this.logoutMenu = page.getByRole('link', { name: 'Logout' })

        this.moreServices = page.getByText('More Services')
        this.payBills = page.getByText('Pay Bills', { exact: true })
    }
}