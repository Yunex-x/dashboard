import { PerformanceSummaryData } from "@/app/types/PerformanceSummary";

const performanceSummary: PerformanceSummaryData = {
  conversionRate: 4.8,
  growthRate: 7.2,
  aov: 325.75,
};

export const getPerformanceSummary =
  async (): Promise<PerformanceSummaryData> => {
    return performanceSummary;
  };
