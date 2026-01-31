// app/services/performanceSummary.ts

import apiClient from "../lib/apiClient";
import { PerformanceSummaryData } from "@/app/types/PerformanceSummary";

const mockPerformanceSummary: PerformanceSummaryData = {
  conversionRate: 4.8,
  growthRate: 7.2,
  aov: 325.75,
};

const USE_MOCK = true;

export const getPerformanceSummary =
  async (): Promise<PerformanceSummaryData> => {
    if (USE_MOCK) return mockPerformanceSummary;

    const res = await apiClient.get<PerformanceSummaryData>("/performance-summary");
    return res.data;
  };
