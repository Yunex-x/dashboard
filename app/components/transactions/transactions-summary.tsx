"use client";

import { getTransactionsSummary } from "@/app/services/transactions-summary";
import { TransactionsSummaryData } from "@/app/types/transactions-summary";
import { CheckCircle, XCircle } from "lucide-react";
import { useEffect, useState } from "react";


export default function TransactionsSummary() {
  const [summary, setSummary] =
    useState<TransactionsSummaryData | null>(null);

  useEffect(() => {
    getTransactionsSummary().then((res) => {
      setSummary(res);
    });
  }, []);

  if (!summary) {
    return (
      <div className="bg-white border border-[#DCE3F1] rounded-[14px] p-6">
        Loading summary…
      </div>
    );
  }

  return (
    <div className="bg-white border border-[#DCE3F1] rounded-[14px] p-6 shadow-[0_2px_6px_rgba(59,130,246,0.08)] flex flex-col gap-6">
      <h2 className="text-[17px] font-semibold text-[#0F172A] mb-2">
        Transactions Summary
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Transactions */}
        <div className="flex flex-col items-center gap-2 p-4 bg-[#F8FAFF] border border-[#DCE3F1] rounded-[14px]">
          <span className="text-[#64748B] text-[13px]">
            Total Transactions
          </span>
          <span className="text-[24px] font-bold text-[#0F172A]">
            {summary.totalTransactions}
          </span>
        </div>

        {/* Total Revenue */}
        <div className="flex flex-col items-center gap-2 p-4 bg-[#F8FAFF] border border-[#DCE3F1] rounded-[14px]">
          <span className="text-[#64748B] text-[13px]">Total Revenue</span>
          <span className="text-[24px] font-bold text-[#2563EB]">
            ${summary.totalRevenue.toFixed(2)}
          </span>
        </div>

        {/* Successful */}
        <div className="flex flex-col items-center gap-2 p-4 bg-[#DCFCE7] border border-[#DCE3F1] rounded-[14px]">
          <span className="inline-flex items-center gap-2">
            <CheckCircle className="text-[#22C55E]" size={20} />
            <span className="text-[#64748B] text-[13px]">Successful</span>
          </span>
          <span className="text-[24px] font-bold text-[#22C55E]">
            {summary.successful}
          </span>
        </div>

        {/* Failed */}
        <div className="flex flex-col items-center gap-2 p-4 bg-[#FEE2E2] border border-[#DCE3F1] rounded-[14px]">
          <span className="inline-flex items-center gap-2">
            <XCircle className="text-[#EF4444]" size={20} />
            <span className="text-[#64748B] text-[13px]">Failed</span>
          </span>
          <span className="text-[24px] font-bold text-[#EF4444]">
            {summary.failed}
          </span>
        </div>
      </div>
    </div>
  );
}
