import { subDays } from 'date-fns';
import { Account } from './account.types';

const today = new Date();

export const DEMO_CHECKING_ACCOUNT: Account = {
  name: "Checking Account",
  balance: 1240,
  recentTransactions: [
    {
      id: 'a',
      date: subDays(today, 1),
      amount: -40,
      description: "Coffee"
    },
    {
      id: 'b',
      date: subDays(today, 2),
      amount: -1000,
      description: "Rent"
    },
    {
      id: 'c',
      date: subDays(today, 4),
      amount: 200,
      description: "Paycheck"
    }
  ]
}

export const DEMO_SAVINGS_ACCOUNT: Account = {
  name: "Savings Account",
  balance: 5000,
  recentTransactions: [
    {
      id: 'x',
      date: subDays(today, 2),
      amount: 500,
      description: "Deposit"
    },
    {
      id: 'y',
      date: subDays(today, 5),
      amount: 1000,
      description: "Deposit"
    }
  ]
}