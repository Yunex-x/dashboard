// app/services/kpi.ts

import apiClient from "../lib/apiClient";
import { Kpi } from "@/app/types/kpi";

const mockKpis: Kpi[] = [
  {
    title: "Total Revenue",
    value: "$120,000",
    icon: "DollarSign",
    change: "+5.2% MoM",
  },
  {
    title: "Monthly Revenue",
    value: "$12,500",
    icon: "BarChart2",
    change: "+2.1% MoM",
  },
  {
    title: "Customers",
    value: 3200,
    icon: "Users",
    change: "-0.5% MoM",
  },
  {
    title: "Growth %",
    value: "8.2%",
    icon: "TrendingUp",
    change: "+1.1% MoM",
  },
];

const USE_MOCK = true;

export const getKpis = async (): Promise<Kpi[]> => {
  if (USE_MOCK) return mockKpis;

  const res = await apiClient.get<Kpi[]>("/kpis");
  return res.data;
};
