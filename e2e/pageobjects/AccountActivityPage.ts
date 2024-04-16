import { Locator, Page } from '@playwright/test'

export default class AccountActivityPage {
    readonly page: Page;
    readonly accountIdSelect: Locator;
    readonly accountIdSelectString: string;
    readonly transactionRows: Locator;
    readonly noResultsMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.accountIdSelect = page.locator('#aa_accountId');
        this.accountIdSelectString = '#aa_accountId';
        this.transactionRows = page.locator('#all_transactions_for_account tbody tr');
        this.noResultsMessage = page.locator('.well');
    }
}