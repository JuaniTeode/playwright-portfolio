import { PayBillsPage } from '../pageobjects/PayBillsPage'

export class PayBillsManager {
    private readonly payBillsPage: PayBillsPage;

    constructor(payBillsPage: PayBillsPage) {
        this.payBillsPage = payBillsPage;
    }

    public async sendPayment(payee: string, account: string, amount: string, date: string, description: string): Promise<void> {
        await this.payBillsPage.payeeSelect.selectOption(payee);
        await this.payBillsPage.payeeDetailsButton.click();
        await this.payBillsPage.payeeDetails.waitFor({ state: 'visible' });

        await this.payBillsPage.accountSelect.selectOption(account);
        await this.payBillsPage.amountInput.fill(amount);
        await this.payBillsPage.dateInput.fill(date);
        await this.payBillsPage.descriptionInput.fill(description);
        await this.payBillsPage.submitButton.click();
    }

    public generateCurrencyData(currency: any): { currencyId: string; currencyValue: string; currencyName: string }[] {
        return Object.keys(currency).map(currencyId => ({
            currencyId,
            currencyValue: currency[currencyId].value,
            currencyName: currency[currencyId].name
        }));
    }

    public async currencySelection(amount: string, currency: string): Promise<void> {
        await this.payBillsPage.currencySelect.selectOption(currency);
        await this.payBillsPage.purchaseAmount.fill(amount)
        await this.payBillsPage.purchaseInDollars.click()
    }
}