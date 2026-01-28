import { useEffect, useState } from "react";

const customers = [
    { name: "Alice Smith", email: "alice@example.com", active: true, totalSpent: 1200.5 },
    { name: "Bob Johnson", email: "bob@example.com", active: false, totalSpent: 300.0 },
    { name: "Charlie Lee", email: "charlie@example.com", active: true, totalSpent: 980.2 },
    { name: "Diana King", email: "diana@example.com", active: false, totalSpent: 150.0 },
    { name: "Evan Wright", email: "evan@example.com", active: true, totalSpent: 2100.0 },
    { name: "Fiona Green", email: "fiona@example.com", active: true, totalSpent: 99.99 },
];

export default function CustomersTable({ data = customers }: { data?: typeof customers }) {
    // Loading state example
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => setLoading(false), 1200); // simulate loading
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 overflow-x-auto">
            <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100 tracking-tight">Customers</h2>
            <table className="min-w-full text-left">
                <thead>
                    <tr className="text-gray-500 dark:text-gray-400 text-sm border-b">
                        <th className="py-2 px-4">Name</th>
                        <th className="py-2 px-4">Email</th>
                        <th className="py-2 px-4">Status</th>
                        <th className="py-2 px-4">Total Spent</th>
                    </tr>
                </thead>
                <tbody>
                    {loading ? (
                        Array.from({ length: 4 }).map((_, i) => (
                            <tr key={i} className="animate-pulse border-b last:border-0">
                                <td className="py-2 px-4 whitespace-nowrap">
                                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
                                </td>
                                <td className="py-2 px-4 whitespace-nowrap">
                                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-32"></div>
                                </td>
                                <td className="py-2 px-4 whitespace-nowrap">
                                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-16"></div>
                                </td>
                                <td className="py-2 px-4 whitespace-nowrap">
                                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-20"></div>
                                </td>
                            </tr>
                        ))
                    ) : data.length === 0 ? (
                        <tr>
                            <td colSpan={4} className="py-6 text-center text-gray-400 dark:text-gray-500">No customers found.</td>
                        </tr>
                    ) : (
                        data.map((c, i) => (
                            <tr key={i} className="border-b last:border-0 hover:bg-gray-50 dark:hover:bg-gray-800 transition">
                                <td className="py-2 px-4 whitespace-nowrap">{c.name}</td>
                                <td className="py-2 px-4 whitespace-nowrap">{c.email}</td>
                                <td className="py-2 px-4 whitespace-nowrap">
                                    <span className={`inline-block rounded px-2 py-1 text-xs font-semibold ${c.active ? "text-green-800 bg-green-100 dark:text-green-200 dark:bg-green-900" : "text-red-800 bg-red-100 dark:text-red-200 dark:bg-red-900"}`}>
                                        {c.active ? "Active" : "Inactive"}
                                    </span>
                                </td>
                                <td className="py-2 px-4 whitespace-nowrap">${c.totalSpent.toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}
