"use client";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const data = [
    { month: "Jan", revenue: 9000 },
    { month: "Feb", revenue: 11000 },
    { month: "Mar", revenue: 10500 },
    { month: "Apr", revenue: 12000 },
    { month: "May", revenue: 12500 },
    { month: "Jun", revenue: 13000 },
    { month: "Jul", revenue: 12800 },
    { month: "Aug", revenue: 13500 },
    { month: "Sep", revenue: 14000 },
    { month: "Oct", revenue: 14500 },
    { month: "Nov", revenue: 15000 },
    { month: "Dec", revenue: 15500 },
];

export default function RevenueChart() {
    return (
        <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Monthly Revenue</h2>
            <ResponsiveContainer width="100%" height={260}>
                <LineChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                    <XAxis dataKey="month" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} tickFormatter={v => `$${v / 1000}k`} />
                    <Tooltip formatter={v => `$${(v ?? 0).toLocaleString()}`} />
                    <Line type="monotone" dataKey="revenue" stroke="#2563eb" strokeWidth={3} dot={false} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
