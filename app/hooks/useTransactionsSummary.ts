import { useEffect, useState } from "react";
import { getTransactionsSummary } from "@/app/services/transactions-summary";
import { TransactionsSummaryData } from "@/app/types/transactions-summary";

export function useTransactionsSummary() {
  const [summary, setSummary] =
    useState<TransactionsSummaryData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTransactionsSummary()
      .then((res) => {
        setSummary(res);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {
    summary,
    loading,
  };
}
