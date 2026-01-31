// app/services/revenue.ts

import apiClient from "../lib/apiClient";
import { Revenue } from "@/app/types/RevenueChart";

const mockRevenues: Revenue[] = [
  { month: "Jan", revenue: 9000 },
  { month: "Feb", revenue: 11000 },
  { month: "Mar", revenue: 10500 },
  { month: "Apr", revenue: 12000 },
  { month: "May", revenue: 12500 },
  { month: "Jun", revenue: 13000 },
  { month: "Jul", revenue: 12800 },
  { month: "Aug", revenue: 13500 },
  { month: "Sep", revenue: 14000 },
  { month: "Oct", revenue: 14500 },
  { month: "Nov", revenue: 15000 },
  { month: "Dec", revenue: 15500 },
];

const USE_MOCK = true;

export const getRevenues = async (): Promise<Revenue[]> => {
  if (USE_MOCK) return mockRevenues;

  const res = await apiClient.get<Revenue[]>("/revenues");
  return res.data;
};
