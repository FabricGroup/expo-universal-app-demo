const CurrencyFormat = new Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD' });

export const toDollars = CurrencyFormat.format.bind(CurrencyFormat);