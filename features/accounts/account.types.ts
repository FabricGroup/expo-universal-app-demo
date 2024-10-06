export type Account = {
  name: string;
  balance: number;
  recentTransactions: Transaction[];
}

export type Transaction = {
  id: string;
  date: Date;
  amount: number;
  description: string;
}