"use client";
import { useState } from "react";
import TransactionsSummary from "@/app/components/transactions-summary";
import TransactionsTable from "@/app/components/transactions";
import TransactionsFilter from "@/app/components/transactions-filter";

export default function TransactionPage() {
    const [filter, setFilter] = useState("all");

    // Use the same transactions array as in the table
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
        <div className="p-8 flex flex-col gap-8">
            <h1 className="text-3xl font-bold mb-4">Transactions</h1>
            <TransactionsSummary />
            <TransactionsFilter onChange={setFilter} />
            <TransactionsTable transactions={filteredTransactions} />
        </div>
    );
}
