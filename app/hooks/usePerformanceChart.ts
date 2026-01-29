import { useEffect, useState } from "react";
import { getPerformanceData } from "@/app/services/PerformanceChart";
import { PerformancePoint } from "@/app/types/PerformanceChart";

export function usePerformanceChart() {
  const [data, setData] = useState<PerformancePoint[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPerformanceData()
      .then((res) => {
        setData(res);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {
    data,
    loading,
  };
}
