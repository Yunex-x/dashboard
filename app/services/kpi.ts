
import { Kpi } from "@/app/types/kpi";

export const Kpis = async (): Promise<Kpi[]> => {
  // mock for now (backend later)
  return [
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
};
export const getKpis = async (): Promise<Kpi[]> => {
  return Kpis();
};
