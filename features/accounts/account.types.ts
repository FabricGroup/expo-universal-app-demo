export type Account = {
  name: string;
  balance: number;
  recentTransactions: Transaction[];
}

export type Transaction = {
  date: Date;
  amount: number;
  description: string;
}