export type TransactionStatus = "Completed" | "Pending" | "Failed";

export interface Transaction {
  date: string;
  customer: string;
  amount: number;
  status: TransactionStatus;
}
