import { CheckCircle, XCircle } from "lucide-react";

// Import the same transactions data as in transactions.tsx
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
        <div className="bg-white rounded-lg shadow p-6 flex flex-col gap-4">
            <h2 className="text-lg font-semibold mb-2">Transactions Summary</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                    <div className="text-gray-500 text-sm">Total Transactions</div>
                    <div className="text-2xl font-bold">{totalTransactions}</div>
                </div>
                <div>
                    <div className="text-gray-500 text-sm">Total Revenue</div>
                    <div className="text-2xl font-bold">${totalRevenue.toFixed(2)}</div>
                </div>
                <div className="flex items-center gap-2">
                    <CheckCircle className="text-green-600" size={20} />
                    <span className="text-gray-500 text-sm">Successful</span>
                    <span className="text-lg font-semibold text-green-700">{successful}</span>
                </div>
                <div className="flex items-center gap-2">
                    <XCircle className="text-red-600" size={20} />
                    <span className="text-gray-500 text-sm">Failed</span>
                    <span className="text-lg font-semibold text-red-700">{failed}</span>
                </div>
            </div>
        </div>
    );
}
