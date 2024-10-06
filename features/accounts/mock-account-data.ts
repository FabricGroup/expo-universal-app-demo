import { subDays } from 'date-fns';
import { Account } from './account.types';

const today = new Date();

export const DEMO_CHECKING_ACCOUNT: Account = {
  name: "Checking Account",
  balance: 1240,
  recentTransactions: [
    {
      date: subDays(today, 1),
      amount: -40,
      description: "Coffee"
    },
    {
      date: subDays(today, 2),
      amount: -1000,
      description: "Rent"
    },
    {
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
      date: subDays(today, 2),
      amount: 500,
      description: "Deposit"
    },
    {
      date: subDays(today, 5),
      amount: 1000,
      description: "Deposit"
    }
  ]
}