import { useEffect, useState } from "react";
import { Transaction } from "../types/TransactionsTable";

export function useTransactionsTable(transactions: Transaction[]) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, [transactions]);

  return {
    loading,
    hasData: transactions.length > 0,
  };
}
