import { Locator, Page } from '@playwright/test';

export class PayBillsPage {
    readonly page: Page;
    readonly payeeSelect: Locator;
    readonly payeeDetailsButton: Locator;
    readonly payeeDetails: Locator;
    readonly accountSelect: Locator;
    readonly currencySelect: Locator;

    readonly amountInput: Locator;
    readonly dateInput: Locator;
    readonly descriptionInput: Locator;
    readonly submitButton: Locator;
    readonly successMessage: Locator;
    readonly successMessageClose: Locator;


    readonly purchaseForeignCurrency: Locator;
    readonly purchaseAmount: Locator;
    readonly purchaseInDollars: Locator;
    readonly purchaseCalculateCosts: Locator
    readonly purchaseConversionAmount: Locator
    readonly purchaseCash: Locator
    readonly purchaseMessage: Locator
    readonly purchaseMessageText: string

    constructor(page: Page) {
        this.page = page;
        this.payeeSelect = page.locator('#sp_payee');
        this.accountSelect = page.locator('#sp_account');
        this.currencySelect = page.locator('#pc_currency');
        
        this.payeeDetailsButton = page.locator('#sp_get_payee_details');
        this.payeeDetails = page.locator('#sp_payee_details');
        this.amountInput = page.locator('#sp_amount');
        this.dateInput = page.locator('#sp_date');
        this.descriptionInput = page.locator('#sp_description');
        this.submitButton = page.locator('#pay_saved_payees');

        this.successMessage = page.locator('#alert_content > span');
        this.successMessageClose = page.locator('.close')
       
        this.purchaseForeignCurrency = page.locator('text=Purchase Foreign Currency')
        this.purchaseAmount = page.locator('#pc_amount')
        this.purchaseInDollars = page.locator('#pc_inDollars_true')
        this.purchaseCalculateCosts = page.locator('#pc_calculate_costs')
        this.purchaseConversionAmount = page.locator('#pc_conversion_amount')
        this.purchaseCash = page.locator('#purchase_cash')
        this.purchaseMessage = page.locator('#alert_content')
        this.purchaseMessageText = 'Foreign currency cash was successfully purchased'
    }
}