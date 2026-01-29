import { PerformanceEntry } from "@/app/types/PerformanceMetrics";
const PerformanceMetrics: PerformanceEntry[] = [
    { day: "2026-01-20", revenue: 1200 },
    { day: "2026-01-21", revenue: 900 },
    { day: "2026-01-22", revenue: 1500 },
    { day: "2026-01-23", revenue: 800 },
    { day: "2026-01-24", revenue: 1700 },
    { day: "2026-01-25", revenue: 1100 },
    { day: "2026-01-26", revenue: 1400 },
];

export const getPerformanceData = async (): Promise<PerformanceEntry[]> => {
  return PerformanceMetrics;
};
