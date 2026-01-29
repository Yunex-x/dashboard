import { Notification, RouteTitles } from "@/app/types/header";

export const routeTitles: RouteTitles = {
  "/overview": "Overview",
  "/transactions": "Transactions",
  "/customers": "Customers",
  "/performance": "Performance",
};

export const notificationsMock: Notification[] = [
  { id: 1, title: "Payment received", time: "2h ago" },
  { id: 2, title: "New customer: Jane Doe", time: "4h ago" },
  { id: 3, title: "Performance report ready", time: "1d ago" },
];
