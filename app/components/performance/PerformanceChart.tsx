"use client";

import { useEffect, useState } from "react";
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

import { getPerformanceData } from "@/app/services/PerformanceChart";
import {
  PerformancePoint,
  ChartType,
  MetricType,
} from "@/app/types/PerformanceChart";

export default function PerformanceChart({
  type = "line",
  metric = "revenue",
}: {
  type?: ChartType;
  metric?: MetricType;
}) {
  // ✅ HOOKS INSIDE COMPONENT
  const [data, setData] = useState<PerformancePoint[]>([]);

  useEffect(() => {
    getPerformanceData().then((res) => {
      setData(res);
    });
  }, []);

  if (data.length === 0) {
    return <div>Loading chart…</div>;
  }

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