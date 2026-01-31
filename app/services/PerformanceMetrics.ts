// app/services/performanceMetrics.ts

import apiClient from "../lib/apiClient";
import { PerformanceEntry } from "@/app/types/PerformanceMetrics";

const mockPerformanceMetrics: PerformanceEntry[] = [
  { day: "2026-01-20", revenue: 1200 },
  { day: "2026-01-21", revenue: 900 },
  { day: "2026-01-22", revenue: 1500 },
  { day: "2026-01-23", revenue: 800 },
  { day: "2026-01-24", revenue: 1700 },
  { day: "2026-01-25", revenue: 1100 },
  { day: "2026-01-26", revenue: 1400 },
];

const USE_MOCK = true;

export const getPerformanceMetrics = async (): Promise<PerformanceEntry[]> => {
  if (USE_MOCK) return mockPerformanceMetrics;

  const res = await apiClient.get<PerformanceEntry[]>("/performance-metrics");
  return res.data;
};
