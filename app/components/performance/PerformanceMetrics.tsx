"use client";
import { ArrowUpRight, ArrowDownRight, Calendar } from "lucide-react";

import { useEffect, useState } from "react";
import {getPerformanceData  } from "@/app/services/PerformanceChart";
import {PerformanceEntry} from "@/app/types/PerformanceMetrics";
const [data, setData] = useState<PerformanceEntry[]>([]);

useEffect(() => {
  getPerformanceData().then(setData);
}, []);

const best = data.reduce((max, d) => (d.revenue > max.revenue ? d : max), data[0]);
const worst = data.reduce((min, d) => (d.revenue < min.revenue ? d : min), data[0]);
const trend = data[data.length - 1].revenue > data[0].revenue ? "up" : "down";

export default function PerformanceMetrics() {
    return (
        <div className="bg-white border border-[#DCE3F1] rounded-[14px] p-6 shadow-[0_2px_6px_rgba(59,130,246,0.08)] flex flex-col gap-6">
            <h2 className="text-[17px] font-semibold text-[#0F172A] mb-2">Performance Metrics</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Best Day */}
                <div className="flex items-center gap-3 p-4 bg-[#F8FAFF] rounded-[14px] border border-[#DCE3F1]">
                    <span className="p-2 rounded-full bg-[#EAF1FF] text-[#3B82F6]">
                        <Calendar size={20} />
                    </span>
                    <span className="text-[#64748B] text-[13px]">Best Day</span>
                    <span className="text-[15px] text-[#334155] font-semibold">{best.day}</span>
                    <span className="text-[17px] font-bold text-[#22C55E]">${best.revenue}</span>
                </div>
                {/* Worst Day */}
                <div className="flex items-center gap-3 p-4 bg-[#F8FAFF] rounded-[14px] border border-[#DCE3F1]">
                    <span className="p-2 rounded-full bg-[#FEE2E2] text-[#EF4444]">
                        <Calendar size={20} />
                    </span>
                    <span className="text-[#64748B] text-[13px]">Worst Day</span>
                    <span className="text-[15px] text-[#334155] font-semibold">{worst.day}</span>
                    <span className="text-[17px] font-bold text-[#EF4444]">${worst.revenue}</span>
                </div>
                {/* Trend */}
                <div className="flex items-center gap-3 p-4 bg-[#F8FAFF] rounded-[14px] border border-[#DCE3F1]">
                    <span className={`p-2 rounded-full ${trend === "up" ? "bg-[#DCFCE7] text-[#22C55E]" : "bg-[#FEE2E2] text-[#EF4444]"}`}>
                        {trend === "up" ? (
                            <ArrowUpRight size={20} />
                        ) : (
                            <ArrowDownRight size={20} />
                        )}
                    </span>
                    <span className="text-[#64748B] text-[13px]">Trend</span>
                    <span className={`text-[17px] font-bold ${trend === "up" ? "text-[#22C55E]" : "text-[#EF4444]"}`}>
                        {trend === "up" ? "Up" : "Down"}
                    </span>
                </div>
            </div>
        </div>
    );
}