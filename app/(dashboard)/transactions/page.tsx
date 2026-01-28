"use client";
import { useState } from "react";
import TransactionsSummary from "@/app/components/transactions/transactions-summary";
import TransactionsTable from "@/app/components/transactions/transactions";
import TransactionsFilter from "@/app/components/transactions/transactions-filter";

export default function TransactionPage() {
    const [filter, setFilter] = useState("all");

    const transactions = [
        { date: "2026-01-25", customer: "Alice Smith", amount: 320.5, status: "Completed" },
        { date: "2026-01-24", customer: "Bob Johnson", amount: 150.0, status: "Pending" },
        { date: "2026-01-23", customer: "Charlie Lee", amount: 780.2, status: "Completed" },
        { date: "2026-01-22", customer: "Diana King", amount: 50.0, status: "Failed" },
        { date: "2026-01-21", customer: "Evan Wright", amount: 210.0, status: "Completed" },
        { date: "2026-01-20", customer: "Fiona Green", amount: 99.99, status: "Completed" },
    ];

    const filteredTransactions = filter === "all"
        ? transactions
        : transactions.filter(tx => tx.status === filter);

    return (
        <div className=" min-h-screen flex flex-col items-center">
            <div className="w-full max-w-5xl px-4 py-10 flex flex-col gap-8">
                <h1 className="text-[28px] font-bold text-[#0F172A] mb-2 tracking-tight">Transactions</h1>
                <TransactionsSummary />
                <TransactionsFilter onChange={setFilter} />
                <TransactionsTable transactions={filteredTransactions} />
            </div>
        </div>
    );
}