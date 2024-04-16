export const users = {
    user: {
        name: 'Name',
        surname: 'Surname',
        email: 'username@zero.com',
        username: 'username',
        password: 'password'
    },
    wrongUser: {
        username: 'wronguser',
        password: 'password'
    },
    wrongPass: {
        username: 'username',
        password: 'wrongpassword'
    },
    wrong: {
        username: 'wronguser',
        password: 'wrongpassword'
    }
};

export const urls = {
    baseUrl: 'http://zero.webappsecurity.com',
    login: '/login',
    dashboard: '/online-banking',
    index: '/index.html'
};

export const accounts = {
    savings: {
        name: 'Savings',
        position: '0',
        count: '3'
    },
    checkings: {
        name: 'Checkings',
        position: '1',
        count: '3'
    },
    savings2: {
        name: 'Savings',
        position: '2',
        count: '3'
    },
    loans: {
        name: 'Loans',
        position: '3',
        count: '2'
    },
    creditCards: {
        name: 'Credit Cards',
        position: '4',
        count: '0'
    },
    bookearage: {
        name: 'Bookearage',
        position: '5',
        count: '0'
    }

}

export const currency = {
    aud: {
        value: 'AUD',
        name: 'Australia (dollar)'
    },
    cad: {
        value: 'CAD',
        name: 'Canada (dollar)'
    },
    chf: {
        value: 'CHF',
        name: 'Switzerland (franc)'
    },
    cny: {
        value: 'CNY',
        name: 'China (yuan)'
    },
    dkk: {
        value: 'DKK',
        name: 'Denmark (krone)'
    },
    eur: {
        value: 'EUR',
        name: 'Eurozone (euro)'
    },
    gbp: {
        value: 'GBP',
        name: 'Great Britain (pound)'
    },
    hkd: {
        value: 'HKD',
        name: 'Hong Kong (dollar)'
    },
    jpy: {
        value: 'JPY',
        name: 'Japan (yen)'
    },
    mxn: {
        value: 'MXN',
        name: 'Mexico (peso)'
    },
    nok: {
        value: 'NOK',
        name: 'Norway (krone)'
    },
    nzd: {
        value: 'NZD',
        name: 'New Zealand (dollar)'
    },
    sek: {
        value: 'SEK',
        name: 'Sweden (krona)'
    },
    sgd: {
        value: 'SGD',
        name: 'Singapore (dollar)'
    },
    thb: {
        value: 'THB',
        name: 'Thailand (baht)'
    }
};

export const payments = {
        apple: {
            payee: 'Apple',
            account: '6', // Account ID
            amount: '5000',
            date: '2021-11-09',
            description: 'some random message'
        },
        // more payment entries
}