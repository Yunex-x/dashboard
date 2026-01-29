export type TransactionStatus = "Completed" | "Pending" | "Failed";

export interface Transaction {
  date: string;
  customer: string;
  amount: number;
  status: TransactionStatus;
}

export interface TransactionsSummaryData {
  totalTransactions: number;
  totalRevenue: number;
  successful: number;
  failed: number;
}
