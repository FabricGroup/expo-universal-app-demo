import { subDays } from 'date-fns';
import { Account } from './account.types';

const today = new Date();

export const DEMO_CHECKING_ACCOUNT: Account = {
  name: "Checking Account",
  balance: 6310, 
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
      amount: 5000,
      description: "Paycheck"
    },
    {
      id: 'd',
      date: subDays(today, 6),
      amount: -200,
      description: "Groceries"
    },
    {
      id: 'e',
      date: subDays(today, 8),
      amount: -50,
      description: "Gas"
    },
    {
      id: 'f',
      date: subDays(today, 10),
      amount: -500,
      description: "Transfer to Savings"
    },
    {
      id: 'g',
      date: subDays(today, 12),
      amount: -100,
      description: "Utilities"
    },
    {
      id: 'h',
      date: subDays(today, 14),
      amount: -300,
      description: "Dining Out"
    },
    {
      id: 'i',
      date: subDays(today, 16),
      amount: -500,
      description: "Transfer to Savings"
    }
  ]
}

export const DEMO_SAVINGS_ACCOUNT: Account = {
  name: "Savings Account",
  balance: 24500,
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
    },
    {
      id: 'z',
      date: subDays(today, 10),
      amount: 500,
      description: "Transfer from Checking"
    },
    {
      id: 'aa',
      date: subDays(today, 16),
      amount: 500,
      description: "Transfer from Checking"
    },
    {
      id: 'bb',
      date: subDays(today, 18),
      amount: 1000,
      description: "Bonus"
    },
    {
      id: 'cc',
      date: subDays(today, 20),
      amount: 200,
      description: "Interest"
    }
  ]
}