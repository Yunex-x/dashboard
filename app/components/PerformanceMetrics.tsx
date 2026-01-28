import { ArrowUpRight, ArrowDownRight, Calendar } from "lucide-react";

// Mocked daily revenue data
const data = [
    { day: "2026-01-20", revenue: 1200 },
    { day: "2026-01-21", revenue: 900 },
    { day: "2026-01-22", revenue: 1500 },
    { day: "2026-01-23", revenue: 800 },
    { day: "2026-01-24", revenue: 1700 },
    { day: "2026-01-25", revenue: 1100 },
    { day: "2026-01-26", revenue: 1400 },
];

const best = data.reduce((max, d) => (d.revenue > max.revenue ? d : max), data[0]);
const worst = data.reduce((min, d) => (d.revenue < min.revenue ? d : min), data[0]);
const trend = data[data.length - 1].revenue > data[0].revenue ? "up" : "down";

export default function PerformanceMetrics() {
    return (
        <div className="bg-white rounded-lg shadow p-6 flex flex-col gap-4">
            <h2 className="text-lg font-semibold mb-2">Performance Metrics</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex items-center gap-2">
                    <Calendar className="text-blue-600" size={20} />
                    <span className="text-gray-500 text-sm">Best Day</span>
                    <span className="text-lg font-semibold text-blue-700">{best.day}</span>
                    <span className="text-green-700 font-bold">${best.revenue}</span>
                </div>
                <div className="flex items-center gap-2">
                    <Calendar className="text-red-600" size={20} />
                    <span className="text-gray-500 text-sm">Worst Day</span>
                    <span className="text-lg font-semibold text-red-700">{worst.day}</span>
                    <span className="text-red-700 font-bold">${worst.revenue}</span>
                </div>
                <div className="flex items-center gap-2">
                    {trend === "up" ? (
                        <ArrowUpRight className="text-green-600" size={20} />
                    ) : (
                        <ArrowDownRight className="text-red-600" size={20} />
                    )}
                    <span className="text-gray-500 text-sm">Trend</span>
                    <span className={`text-lg font-semibold ${trend === "up" ? "text-green-700" : "text-red-700"}`}>{trend === "up" ? "Up" : "Down"}</span>
                </div>
            </div>
        </div>
    );
}
