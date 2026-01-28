"use client";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar,
} from "recharts";

// Mocked data: revenue over months
const data = [
    { month: "Jan", revenue: 9000, users: 120 },
    { month: "Feb", revenue: 11000, users: 140 },
    { month: "Mar", revenue: 10500, users: 135 },
    { month: "Apr", revenue: 12000, users: 150 },
    { month: "May", revenue: 12500, users: 160 },
    { month: "Jun", revenue: 13000, users: 170 },
    { month: "Jul", revenue: 12800, users: 175 },
    { month: "Aug", revenue: 13500, users: 180 },
    { month: "Sep", revenue: 14000, users: 185 },
    { month: "Oct", revenue: 14500, users: 190 },
    { month: "Nov", revenue: 15000, users: 200 },
    { month: "Dec", revenue: 15500, users: 210 },
];

type ChartType = "line" | "bar";
type MetricType = "revenue" | "users";

export default function PerformanceChart({
    type = "line",
    metric = "revenue",
}: {
    type?: ChartType;
    metric?: MetricType;
}) {
    return (
        <div className="bg-white border border-[#DCE3F1] rounded-[14px] p-6 shadow-[0_2px_6px_rgba(59,130,246,0.08)]">
            <h2 className="text-[17px] font-semibold text-[#0F172A] mb-4">
                {metric === "revenue" ? "Revenue" : "Users"} Over Time
            </h2>
            <ResponsiveContainer width="100%" height={260}>
                {type === "line" ? (
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
                            tickFormatter={v => metric === "revenue" ? `$${v / 1000}k` : v}
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
                            formatter={v => (metric === "revenue" ? `$${Number(v).toLocaleString()}` : v)}
                        />
                        <Line
                            type="monotone"
                            dataKey={metric}
                            stroke="#2563EB"
                            strokeWidth={3}
                            dot={false}
                        />
                    </LineChart>
                ) : (
                    <BarChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                        <XAxis
                            dataKey="month"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "#64748B", fontSize: 14, fontWeight: 500 }}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tickFormatter={v => metric === "revenue" ? `$${v / 1000}k` : v}
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
                            formatter={v => (metric === "revenue" ? `$${Number(v).toLocaleString()}` : v)}
                        />
                        <Bar dataKey={metric} fill="#2563EB" radius={[6, 6, 0, 0]} />
                    </BarChart>
                )}
            </ResponsiveContainer>
        </div>
    );
}