import AccountActivityPage from "../pageobjects/AccountActivityPage";
import { Locator, Page } from '@playwright/test';

export class AccountActivityManager {
    private readonly accountActivityPage: AccountActivityPage;
    private readonly page: Page;

    constructor(accountActivityPage: AccountActivityPage) {
        this.accountActivityPage = accountActivityPage;
    }

    /**
     * Selects an account ID from the dropdown menu on the page.
     * 
     * @param accountId The ID of the account to select.
     * @param count The expected count of transactions.
     * @param page The Playwright page object.
     */
    public async selectAccount(accountIdSelector: string, option: string, page: Page): Promise<void> {
        await page.selectOption(accountIdSelector, option);
    }

    public generateAccountData(accounts: any): { accountId: string; expectedCount: string }[] {
        // Generate accountData array by mapping account keys
        return Object.keys(accounts).map(accountId => ({
            accountId,
            expectedCount: accounts[accountId].count
        }));
    }
}