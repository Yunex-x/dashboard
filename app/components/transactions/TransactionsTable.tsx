"use client";

import { useTransactionsTable } from "@/app/hooks/useTransactionsTable";
import { transactionStatusBadge } from "@/app/services/TransactionsTable";
import { Transaction } from "@/app/types/TransactionsTable";

export default function TransactionsTable({
  transactions = [],
}: {
  transactions?: Transaction[];
}) {
  const { loading, hasData } = useTransactionsTable(transactions);

  return (
    <div className="bg-white border border-[#DCE3F1] rounded-[14px] p-6 shadow-[0_2px_6px_rgba(59,130,246,0.08)] w-full overflow-x-auto">
      <h2 className="text-[17px] font-semibold text-[#0F172A] mb-4">
        Recent Transactions
      </h2>

      <table className="min-w-full text-left text-[15px]">
        <thead>
          <tr className="bg-[#F8FAFF] text-[#64748B] text-xs border-b">
            <th className="py-3 px-6">Date</th>
            <th className="py-3 px-6">Customer</th>
            <th className="py-3 px-6">Amount</th>
            <th className="py-3 px-6">Status</th>
          </tr>
        </thead>

        <tbody>
          {loading ? (
            Array.from({ length: 4 }).map((_, i) => (
              <tr key={i} className="animate-pulse">
                {Array.from({ length: 4 }).map((_, j) => (
                  <td key={j} className="py-4 px-6">
                    <div className="h-4 bg-[#DCE3F1] rounded w-3/5" />
                  </td>
                ))}
              </tr>
            ))
          ) : !hasData ? (
            <tr>
              <td colSpan={4} className="py-8 text-center text-[#64748B]">
                No transactions found.
              </td>
            </tr>
          ) : (
            transactions.map((tx, i) => (
              <tr key={i} className="even:bg-[#F8FAFF] border-b">
                <td className="py-3 px-6">{tx.date}</td>
                <td className="py-3 px-6">{tx.customer}</td>
                <td className="py-3 px-6">${tx.amount.toFixed(2)}</td>
                <td className="py-3 px-6">
                  <span
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold
                      ${transactionStatusBadge[tx.status]}
                    `}
                  >
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
