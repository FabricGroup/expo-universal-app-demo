export type Account = {
  name: string;
  type: 'checking' | 'savings' | 'credit-card';
  id: string;
  balance: number;
  recentTransactions: Transaction[];
}

export type Transaction = {
  id: string;
  date: Date;
  amount: number;
  description: string;
}