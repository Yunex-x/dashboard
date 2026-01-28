"use client";
import { useState } from "react";
import CustomersTable from "@/app/components/customers/customers-table";
import CustomersFilter from "@/app/components/customers/CustomersFilter";
import CustomersSummary from "@/app/components/customers/CustomersSummary";

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
        <div className="bg-[#F5F8FF] min-h-screen flex flex-col items-center">
            <div className="w-full max-w-5xl px-4 py-10 flex flex-col gap-8">
                <h1 className="text-[28px] font-bold text-[#0F172A] mb-2 tracking-tight">Customers</h1>
                <CustomersSummary />
                <CustomersFilter onChange={setFilter} />
                <CustomersTable data={filtered} />
            </div>
        </div>
    );
}