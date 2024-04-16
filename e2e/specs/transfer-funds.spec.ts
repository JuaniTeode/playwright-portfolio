import { test, expect } from '@playwright/test'
import { urls, users } from '../testdata/testdata'
import LoginManager from '../managers/loginManager'
import { HomePage } from '../pageobjects/HomePage'
import { LoginPage } from '../pageobjects/loginpage'

test.describe('Transfer Funds and Make Payments', () => {
  let loginPage: LoginPage
  let homePage: HomePage
  let loginManager: LoginManager

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page)
    homePage = new HomePage(page)
    loginManager = new LoginManager(loginPage, homePage);
    
    await page.goto(urls.baseUrl)
    await loginManager.login(users.user.username, users.user.password, page)
  })

  test('Transfer funds', async ({ page }) => {
    await page.getByText('Transfer Funds', { exact: true }).click();
    await page.selectOption('#tf_fromAccountId', '2')
    await page.selectOption('#tf_toAccountId', '3')
    await page.fill('#tf_amount', '500')
    await page.fill('#tf_description', 'Test message')
    await page.click('#btn_submit')

    const boardHeader = page.locator('h2.board-header')
    await expect(boardHeader).toContainText('Verify')
    await page.click('#btn_submit')

    const message = page.locator('.alert-success')
    await expect(message).toContainText(
      'You successfully submitted your transaction'
    )
  })
})
