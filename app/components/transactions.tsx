const statusColors: Record<string, string> = {
    Completed: "text-green-600 bg-green-50",
    Pending: "text-yellow-700 bg-yellow-50",
    Failed: "text-red-600 bg-red-50",
};

export default function TransactionsTable({ transactions }: { transactions: any[] }) {
    return (
        <div className="bg-white rounded-lg shadow p-6 overflow-x-auto">
            <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
            <table className="min-w-full text-left">
                <thead>
                    <tr className="text-gray-500 text-sm border-b">
                        <th className="py-2 px-4">Date</th>
                        <th className="py-2 px-4">Customer</th>
                        <th className="py-2 px-4">Amount</th>
                        <th className="py-2 px-4">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((tx, i) => (
                        <tr key={i} className="border-b last:border-0 hover:bg-gray-50 transition">
                            <td className="py-2 px-4 whitespace-nowrap">{tx.date}</td>
                            <td className="py-2 px-4 whitespace-nowrap">{tx.customer}</td>
                            <td className="py-2 px-4 whitespace-nowrap">${tx.amount.toFixed(2)}</td>
                            <td className="py-2 px-4 whitespace-nowrap">
                                <span className={`inline-block rounded px-2 py-1 text-xs font-semibold ${statusColors[tx.status]}`}>{tx.status}</span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
