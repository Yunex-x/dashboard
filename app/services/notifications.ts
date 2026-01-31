// app/services/notifications.ts

import apiClient from "../lib/apiClient";
import { Notification } from "@/app/types/header";

const mockNotifications: Notification[] = [
  { id: 1, title: "Payment received", time: "2h ago" },
  { id: 2, title: "New customer: Jane Doe", time: "4h ago" },
  { id: 3, title: "Performance report ready", time: "1d ago" },
];

const USE_MOCK = true;

export const getNotifications = async (): Promise<Notification[]> => {
  if (USE_MOCK) return mockNotifications;

  const res = await apiClient.get<Notification[]>("/notifications");
  return res.data;
};
