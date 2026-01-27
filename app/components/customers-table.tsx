const customers = [
    { name: "Alice Smith", email: "alice@example.com", active: true, totalSpent: 1200.5 },
    { name: "Bob Johnson", email: "bob@example.com", active: false, totalSpent: 300.0 },
    { name: "Charlie Lee", email: "charlie@example.com", active: true, totalSpent: 980.2 },
    { name: "Diana King", email: "diana@example.com", active: false, totalSpent: 150.0 },
    { name: "Evan Wright", email: "evan@example.com", active: true, totalSpent: 2100.0 },
    { name: "Fiona Green", email: "fiona@example.com", active: true, totalSpent: 99.99 },
];

export default function CustomersTable({ data = customers }: { data?: typeof customers }) {
    return (
        <div className="bg-white rounded-lg shadow p-6 overflow-x-auto">
            <h2 className="text-lg font-semibold mb-4">Customers</h2>
            <table className="min-w-full text-left">
                <thead>
                    <tr className="text-gray-500 text-sm border-b">
                        <th className="py-2 px-4">Name</th>
                        <th className="py-2 px-4">Email</th>
                        <th className="py-2 px-4">Status</th>
                        <th className="py-2 px-4">Total Spent</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((c, i) => (
                        <tr key={i} className="border-b last:border-0 hover:bg-gray-50 transition">
                            <td className="py-2 px-4 whitespace-nowrap">{c.name}</td>
                            <td className="py-2 px-4 whitespace-nowrap">{c.email}</td>
                            <td className="py-2 px-4 whitespace-nowrap">
                                <span className={`inline-block rounded px-2 py-1 text-xs font-semibold ${c.active ? "text-green-600 bg-green-50" : "text-red-600 bg-red-50"}`}>
                                    {c.active ? "Active" : "Inactive"}
                                </span>
                            </td>
                            <td className="py-2 px-4 whitespace-nowrap">${c.totalSpent.toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
