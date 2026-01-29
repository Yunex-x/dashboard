export interface PerformancePoint {
  month: string;
  revenue: number;
  users: number;
}

export type ChartType = "line" | "bar";
export type MetricType = "revenue" | "users";
