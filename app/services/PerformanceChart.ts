import { PerformancePoint } from "../types/PerformanceChart";
const performanceData: PerformancePoint[] = [
  { month: "Jan", revenue: 9000, users: 120 },
  { month: "Feb", revenue: 11000, users: 140 },
  { month: "Mar", revenue: 10500, users: 135 },
  { month: "Apr", revenue: 12000, users: 150 },
  { month: "May", revenue: 12500, users: 160 },
  { month: "Jun", revenue: 13000, users: 170 },
  { month: "Jul", revenue: 12800, users: 175 },
  { month: "Aug", revenue: 13500, users: 180 },
  { month: "Sep", revenue: 14000, users: 185 },
  { month: "Oct", revenue: 14500, users: 190 },
  { month: "Nov", revenue: 15000, users: 200 },
  { month: "Dec", revenue: 15500, users: 210 },
];

export const getPerformanceData = async (): Promise<PerformancePoint[]> => {
  return performanceData;
};
