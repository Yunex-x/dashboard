import { CheckCircle, XCircle } from "lucide-react";

const transactions = [
    { date: "2026-01-25", customer: "Alice Smith", amount: 320.5, status: "Completed" },
    { date: "2026-01-24", customer: "Bob Johnson", amount: 150.0, status: "Pending" },
    { date: "2026-01-23", customer: "Charlie Lee", amount: 780.2, status: "Completed" },
    { date: "2026-01-22", customer: "Diana King", amount: 50.0, status: "Failed" },
    { date: "2026-01-21", customer: "Evan Wright", amount: 210.0, status: "Completed" },
    { date: "2026-01-20", customer: "Fiona Green", amount: 99.99, status: "Completed" },
];

const totalTransactions = transactions.length;
const totalRevenue = transactions.reduce((sum, tx) => sum + (tx.status === "Completed" ? tx.amount : 0), 0);
const successful = transactions.filter(tx => tx.status === "Completed").length;
const failed = transactions.filter(tx => tx.status === "Failed").length;

export default function TransactionsSummary() {
    return (
        <div className="bg-white border border-[#DCE3F1] rounded-[14px] p-6 shadow-[0_2px_6px_rgba(59,130,246,0.08)] flex flex-col gap-6">
            <h2 className="text-[17px] font-semibold text-[#0F172A] mb-2">Transactions Summary</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Total Transactions */}
                <div className="flex flex-col items-center gap-2 p-4 bg-[#F8FAFF] border border-[#DCE3F1] rounded-[14px]">
                    <span className="text-[#64748B] text-[13px]">Total Transactions</span>
                    <span className="text-[24px] font-bold text-[#0F172A]">{totalTransactions}</span>
                </div>
                {/* Total Revenue */}
                <div className="flex flex-col items-center gap-2 p-4 bg-[#F8FAFF] border border-[#DCE3F1] rounded-[14px]">
                    <span className="text-[#64748B] text-[13px]">Total Revenue</span>
                    <span className="text-[24px] font-bold text-[#2563EB]">${totalRevenue.toFixed(2)}</span>
                </div>
                {/* Successful */}
                <div className="flex flex-col items-center gap-2 p-4 bg-[#DCFCE7] border border-[#DCE3F1] rounded-[14px]">
                    <span className="inline-flex items-center gap-2">
                        <CheckCircle className="text-[#22C55E]" size={20} />
                        <span className="text-[#64748B] text-[13px]">Successful</span>
                    </span>
                    <span className="text-[24px] font-bold text-[#22C55E]">{successful}</span>
                </div>
                {/* Failed */}
                <div className="flex flex-col items-center gap-2 p-4 bg-[#FEE2E2] border border-[#DCE3F1] rounded-[14px]">
                    <span className="inline-flex items-center gap-2">
                        <XCircle className="text-[#EF4444]" size={20} />
                        <span className="text-[#64748B] text-[13px]">Failed</span>
                    </span>
                    <span className="text-[24px] font-bold text-[#EF4444]">{failed}</span>
                </div>
            </div>
        </div>
    );
}