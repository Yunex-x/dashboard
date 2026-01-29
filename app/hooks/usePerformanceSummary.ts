import { useEffect, useState } from "react";
import { getPerformanceSummary } from "@/app/services/PerformanceSummary";
import { PerformanceSummaryData } from "@/app/types/PerformanceSummary";

export function usePerformanceSummary() {
  const [performance, setPerformance] =
    useState<PerformanceSummaryData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPerformanceSummary()
      .then((res) => {
        setPerformance(res);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {
    performance,
    loading,
  };
}
