import { test, expect } from '@playwright/test'
import { accounts, urls, users } from '../testdata/testdata'
import { HomePage } from '../pageobjects/HomePage';
import { LoginPage } from '../pageobjects/loginpage';
import LoginManager from '../managers/loginManager';
import AccountActivityPage from '../pageobjects/AccountActivityPage';
import { AccountActivityManager } from '../managers/AccountActivityManager';

test.describe('Filter Transactions', () => {

  let loginPage: LoginPage
  let homePage: HomePage
  let accountActivityPage: AccountActivityPage
  let loginManager: LoginManager
  let accountActivityManager: AccountActivityManager

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page)
    homePage = new HomePage(page)
    accountActivityPage = new AccountActivityPage(page)
    loginManager = new LoginManager(loginPage, homePage);
    accountActivityManager = new AccountActivityManager(accountActivityPage)

    await page.goto(urls.baseUrl)
    await loginManager.login(users.user.username, users.user.password, page);
    await page.getByText('Checking Account Activity', { exact: true }).click();
  })

  test('Verify the results for each account', async ({ page }) => {
    
    const accountData = accountActivityManager.generateAccountData(accounts);
    let index = 0;

    // Iterate through each account data
    for (const data of accountData) {
      index ++
      await accountActivityManager.selectAccount(accountActivityPage.accountIdSelectString,index.toString(), page);
      // Assert the count of transactions
      await expect(accountActivityPage.transactionRows).toHaveCount(parseInt(data.expectedCount));
    }
  })
})
