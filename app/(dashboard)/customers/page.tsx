"use client";
import { useState } from "react";
import CustomersTable from "@/app/components/customers-table";
import CustomersFilter from "@/app/components/CustomersFilter";
import CustomersSummary from "@/app/components/CustomersSummary";

const customers = [
    { name: "Alice Smith", email: "alice@example.com", active: true, totalSpent: 1200.5 },
    { name: "Bob Johnson", email: "bob@example.com", active: false, totalSpent: 300.0 },
    { name: "Charlie Lee", email: "charlie@example.com", active: true, totalSpent: 980.2 },
    { name: "Diana King", email: "diana@example.com", active: false, totalSpent: 150.0 },
    { name: "Evan Wright", email: "evan@example.com", active: true, totalSpent: 2100.0 },
    { name: "Fiona Green", email: "fiona@example.com", active: true, totalSpent: 99.99 },
];

export default function CustomersPage() {
    const [filter, setFilter] = useState("all");
    const filtered =
        filter === "all"
            ? customers
            : customers.filter((c) => (filter === "active" ? c.active : !c.active));
    return (
        <div className="p-8 flex flex-col gap-8">
            <h1 className="text-3xl font-bold mb-4">Customers</h1>
            <CustomersSummary />
            <CustomersFilter onChange={setFilter} />
            <CustomersTable data={filtered} />
        </div>
    );
}
