import { useEffect, useState } from "react";
import { getPerformanceMetrics } from "@/app/services/PerformanceMetrics";
import { PerformanceEntry } from "@/app/types/PerformanceMetrics";

export function usePerformanceMetrics() {
  const [data, setData] = useState<PerformanceEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPerformanceMetrics()
      .then((res) => setData(res))
      .finally(() => setLoading(false));
  }, []);

  if (data.length === 0) {
    return {
      loading,
      best: null,
      worst: null,
      trend: null,
    };
  }

  const best = data.reduce((max, d) =>
    d.revenue > max.revenue ? d : max
  );

  const worst = data.reduce((min, d) =>
    d.revenue < min.revenue ? d : min
  );

  const trend =
    data[data.length - 1].revenue > data[0].revenue ? "up" : "down";

  return {
    loading,
    best,
    worst,
    trend,
  };
}
