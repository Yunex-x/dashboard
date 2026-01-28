
"use client";
import React, { useEffect, useState } from "react";

const statusColors: Record<string, string> = {
    Completed: "text-green-800 bg-green-100 dark:text-green-200 dark:bg-green-900",
    Pending: "text-yellow-800 bg-yellow-100 dark:text-yellow-200 dark:bg-yellow-900",
    Failed: "text-red-800 bg-red-100 dark:text-red-200 dark:bg-red-900",
};

export default function TransactionsTable({ transactions = [] }: { transactions?: Array<{ date: string; customer: string; amount: number; status: string }> }) {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => setLoading(false), 1200); // simulate loading
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 overflow-x-auto">
            <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100 tracking-tight">Recent Transactions</h2>
            <table className="min-w-full text-left">
                <thead>
                    <tr className="text-gray-500 dark:text-gray-400 text-sm border-b">
                        <th className="py-2 px-4">Date</th>
                        <th className="py-2 px-4">Customer</th>
                        <th className="py-2 px-4">Amount</th>
                        <th className="py-2 px-4">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {loading ? (
                        Array.from({ length: 4 }).map((_, i) => (
                            <tr key={i} className="animate-pulse border-b last:border-0">
                                <td className="py-2 px-4 whitespace-nowrap">
                                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-20"></div>
                                </td>
                                <td className="py-2 px-4 whitespace-nowrap">
                                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-32"></div>
                                </td>
                                <td className="py-2 px-4 whitespace-nowrap">
                                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-16"></div>
                                </td>
                                <td className="py-2 px-4 whitespace-nowrap">
                                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-16"></div>
                                </td>
                            </tr>
                        ))
                    ) : transactions.length === 0 ? (
                        <tr>
                            <td colSpan={4} className="py-6 text-center text-gray-400 dark:text-gray-500">No transactions found.</td>
                        </tr>
                    ) : (
                        transactions.map((tx, i) => (
                            <tr key={i} className="border-b last:border-0 hover:bg-gray-50 dark:hover:bg-gray-800 transition">
                                <td className="py-2 px-4 whitespace-nowrap">{tx.date}</td>
                                <td className="py-2 px-4 whitespace-nowrap">{tx.customer}</td>
                                <td className="py-2 px-4 whitespace-nowrap">${tx.amount.toFixed(2)}</td>
                                <td className="py-2 px-4 whitespace-nowrap">
                                    <span className={`inline-block rounded px-2 py-1 text-xs font-semibold ${statusColors[tx.status]}`}>{tx.status}</span>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}
