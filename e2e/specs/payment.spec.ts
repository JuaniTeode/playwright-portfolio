import { test, expect } from '@playwright/test'
import { users, payments, currency } from '../testdata/testdata'
import LoginManager from '../managers/loginManager'
import { HomePage } from '../pageobjects/HomePage'
import { LoginPage } from '../pageobjects/loginpage'
import { PayBillsManager } from '../managers/payBillsManager'
import { PayBillsPage } from '../pageobjects/PayBillsPage'

test.describe('New Payment', () => {
    let loginPage: LoginPage
    let homePage: HomePage
    let loginManager: LoginManager
    let payBillsPage: PayBillsPage
    let payBillsManager: PayBillsManager

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page)
        homePage = new HomePage(page)

        payBillsPage = new PayBillsPage(page)
        loginManager = new LoginManager(loginPage, homePage);
        payBillsManager = new PayBillsManager(payBillsPage)

        await page.goto('http://zero.webappsecurity.com/index.html')
        await loginManager.login(users.user.username, users.user.password, page)
        
        await homePage.moreServices.click()
        await homePage.payBills.click()
    })

    test('Verify the user can send a new payment', async ({ page }) => {

        // Get payment data from testData
        const paymentData = payments.apple;

        // Perform the payment
        await payBillsManager.sendPayment(
            paymentData.payee,
            paymentData.account,
            paymentData.amount,
            paymentData.date,
            paymentData.description
        );

        // Assert success message
        await expect(payBillsPage.successMessage).toBeVisible();
        await expect(payBillsPage.successMessage).toContainText('The payment was successfully submitted');
    });

    test.only('Verify the user can purchase 1000 USD with every currency', async ({ page }) => {
        
        const currencyData = payBillsManager.generateCurrencyData(currency);
        const amount = '1000.00'

        for (const currency of currencyData) {
            await payBillsPage.purchaseForeignCurrency.click()
            await payBillsManager.currencySelection(amount, currency.currencyName)
            await payBillsPage.purchaseCash.click()

            await expect(payBillsPage.purchaseMessage).toContainText(payBillsPage.purchaseMessageText)
            await payBillsPage.successMessageClose.click()
        }
    })

    test('Verify the user can caculate costs for 1000 USD with every currency', async ({ page }) => {

        const currencyData = payBillsManager.generateCurrencyData(currency);
        const amount = '1000.00'

        await payBillsPage.purchaseForeignCurrency.click()
        for (const currency of currencyData) {
            await payBillsManager.currencySelection(amount, currency.currencyName)
            await payBillsPage.purchaseCalculateCosts.click()

            await expect(payBillsPage.purchaseConversionAmount).toContainText(amount + ' U.S. dollar (USD)')
            await expect(payBillsPage.purchaseConversionAmount).toContainText(currency.currencyValue)
            // hacer todo y retornar los dos valores para asertar
        }
    })


})