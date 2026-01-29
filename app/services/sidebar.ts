import { SidebarItem } from "@/app/types/sidebar";
import { Menu, Users, TrendingUp, Layers } from "lucide-react";

export const sidebarMenu: SidebarItem[] = [
  { label: "Overview", icon: Layers, route: "/overview" },
  { label: "Transactions", icon: Menu, route: "/transactions" },
  { label: "Customers", icon: Users, route: "/customers" },
  { label: "Performance", icon: TrendingUp, route: "/performance" },
];

export const getPerformanceData = async (): Promise<PerformanceEntry[]> => {
  // Return an empty array or fetch/generate real PerformanceEntry data here
  return [];
};
