"use client";
import React, { useEffect, useState } from "react";

const statusBadge: Record<string, string> = {
    Completed: "bg-[#DCFCE7] text-[#22C55E]",
    Pending: "bg-[#FEF3C7] text-[#F59E0B]",
    Failed: "bg-[#FEE2E2] text-[#EF4444]",
};

export default function TransactionsTable({
    transactions = [],
}: {
    transactions?: Array<{ date: string; customer: string; amount: number; status: string }>;
}) {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => setLoading(false), 1200); // simulate loading
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="bg-white border border-[#DCE3F1] rounded-[14px] p-6 shadow-[0_2px_6px_rgba(59,130,246,0.08)] w-full overflow-x-auto">
            <h2 className="text-[17px] font-semibold text-[#0F172A] mb-4">Recent Transactions</h2>
            <table className="min-w-full text-left text-[15px]">
                <thead>
                    <tr className="bg-[#F8FAFF] text-[#64748B] text-xs border-b border-[#E2E8F0]">
                        <th className="py-3 px-6 font-semibold first:rounded-tl-[14px] last:rounded-tr-[14px]">Date</th>
                        <th className="py-3 px-6 font-semibold">Customer</th>
                        <th className="py-3 px-6 font-semibold">Amount</th>
                        <th className="py-3 px-6 font-semibold">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {loading ? (
                        Array.from({ length: 4 }).map((_, i) => (
                            <tr key={i} className="animate-pulse even:bg-[#F8FAFF] border-b border-[#E2E8F0] last:border-0">
                                {Array.from({ length: 4 }).map((_, j) => (
                                    <td key={j} className="py-4 px-6">
                                        <div className="h-4 rounded bg-[#DCE3F1] w-3/5" />
                                    </td>
                                ))}
                            </tr>
                        ))
                    ) : transactions.length === 0 ? (
                        <tr>
                            <td colSpan={4} className="py-8 text-center text-[#64748B] text-[15px]">No transactions found.</td>
                        </tr>
                    ) : (
                        transactions.map((tx, i) => (
                            <tr
                                key={i}
                                className={`
                                    even:bg-[#F8FAFF] border-b border-[#E2E8F0] last:border-0
                                    hover:bg-[#EAF1FF] transition-colors
                                `}
                            >
                                <td className="py-3 px-6 whitespace-nowrap">{tx.date}</td>
                                <td className="py-3 px-6 whitespace-nowrap text-[#334155]">{tx.customer}</td>
                                <td className="py-3 px-6 whitespace-nowrap text-[#0F172A]">${tx.amount.toFixed(2)}</td>
                                <td className="py-3 px-6 whitespace-nowrap">
                                    <span className={`
                                        inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-[999px]
                                        ${statusBadge[tx.status] || "bg-[#F8FAFF] text-[#64748B]"}
                                    `}>
                                        {tx.status}
                                    </span>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}