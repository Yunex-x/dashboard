import { Transaction, TransactionsSummaryData } from "../types/transactions-summary";

const transactions: Transaction[] = [
  { date: "2026-01-25", customer: "Alice Smith", amount: 320.5, status: "Completed" },
  { date: "2026-01-24", customer: "Bob Johnson", amount: 150.0, status: "Pending" },
  { date: "2026-01-23", customer: "Charlie Lee", amount: 780.2, status: "Completed" },
  { date: "2026-01-22", customer: "Diana King", amount: 50.0, status: "Failed" },
  { date: "2026-01-21", customer: "Evan Wright", amount: 210.0, status: "Completed" },
  { date: "2026-01-20", customer: "Fiona Green", amount: 99.99, status: "Completed" },
];

export const getTransactionsSummary =
  async (): Promise<TransactionsSummaryData> => {
    const totalTransactions = transactions.length;
    const totalRevenue = transactions.reduce(
      (sum, tx) => sum + (tx.status === "Completed" ? tx.amount : 0),
      0
    );
    const successful = transactions.filter(
      (tx) => tx.status === "Completed"
    ).length;
    const failed = transactions.filter(
      (tx) => tx.status === "Failed"
    ).length;

    return {
      totalTransactions,
      totalRevenue,
      successful,
      failed,
    };
  };
