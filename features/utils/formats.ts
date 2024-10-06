import { format } from 'date-fns';

const CurrencyFormat = new Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD' });

export const toDollars = CurrencyFormat.format.bind(CurrencyFormat);

export const displayDate = (date: Date) => format(date, 'dd MMM yyyy');