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
        <div className="bg-white border border-[#DCE3F1] rounded-[14px] p-6 shadow-[0_2px_6px_rgba(59,130,246,0.08)]">
            <h2 className="text-[17px] font-semibold text-[#0F172A] mb-4">Monthly Revenue</h2>
            <ResponsiveContainer width="100%" height={260}>
                <LineChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                    <XAxis
                        dataKey="month"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: "#64748B", fontSize: 14, fontWeight: 500 }}
                    />
                    <YAxis
                        axisLine={false}
                        tickLine={false}
                        tickFormatter={v => `$${v / 1000}k`}
                        tick={{ fill: "#64748B", fontSize: 14, fontWeight: 500 }}
                    />
                    <Tooltip
                        contentStyle={{
                            background: "#FFF",
                            border: "1px solid #DCE3F1",
                            borderRadius: 10,
                            fontSize: 14,
                            color: "#0F172A",
                            boxShadow: "0 2px 6px rgba(59,130,246,0.07)",
                        }}
                        itemStyle={{ color: "#2563EB", fontWeight: 700 }}
                        labelStyle={{ color: "#334155" }}
                        formatter={v => `$${Number(v ?? 0).toLocaleString()}`}
                    />
                    <Line
                        type="monotone"
                        dataKey="revenue"
                        stroke="#2563EB"
                        strokeWidth={3}
                        dot={false}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}