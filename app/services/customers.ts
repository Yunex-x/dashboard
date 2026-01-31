import apiClient from "../lib/apiClient";
import type { Customer } from "../types/customer";

const mockCustomers: Customer[] = [
  {
    name: "Alice Smith",
    joined: "2026-01-10",
    email: "alice@example.com",
    active: true,
    totalSpent: 1200.5,
  },
  {
    name: "Bob Johnson",
    joined: "2026-01-15",
    email: "bob@example.com",
    active: false,
    totalSpent: 300.0,
  },
  {
    name: "Charlie Lee",
    joined: "2026-01-20",
    email: "charlie@example.com",
    active: true,
    totalSpent: 980.2,
  },
  {
    name: "Diana King",
    joined: "2026-01-22",
    email: "diana@example.com",
    active: false,
    totalSpent: 150.0,
  },
  {
    name: "Evan Wright",
    joined: "2026-01-25",
    email: "evan@example.com",
    active: true,
    totalSpent: 2100.0,
  },
  {
    name: "Fiona Green",
    joined: "2026-01-26",
    email: "fiona@example.com",
    active: true,
    totalSpent: 99.99,
  },
];

// toggle this later when backend exists
const USE_MOCK = false;

export const getCustomers = async (): Promise<Customer[]> => {
  if (USE_MOCK) {
    return mockCustomers;
  }

  const res = await apiClient.get<Customer[]>("/customers");
  return res.data ;
};
