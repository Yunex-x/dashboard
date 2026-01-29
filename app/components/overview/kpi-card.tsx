"use client";

import React from "react";
import { BarChart2, DollarSign, TrendingUp, Users } from "lucide-react";
import { useKpis, KpiUI } from "@/app/hooks/useKpis";

const ICON_MAP: Record<string, React.ReactNode> = {
  DollarSign: <DollarSign size={18} />,
  BarChart2: <BarChart2 size={18} />,
  Users: <Users size={18} />,
  TrendingUp: <TrendingUp size={18} />,
};

function KpiCard({ title, value, icon, change }: KpiUI) {
  let changeColor = "text-[#64748B]";
  let changeIcon = null;

  if (change) {
    if (change.startsWith("+")) {
      changeColor = "text-[#22C55E]";
      changeIcon = <TrendingUp size={15} className="inline-block" />;
    } else if (change.startsWith("-")) {
      changeColor = "text-[#EF4444]";
      changeIcon = (
        <TrendingUp size={15} className="inline-block rotate-180" />
      );
    }
  }

  return (
    <div className="bg-white border border-[#DCE3F1] rounded-[14px] shadow-[0_2px_6px_rgba(59,130,246,0.08)] p-6 flex items-center gap-4 min-w-0">
      <div className="p-3 rounded-full bg-[#EAF1FF] text-[#3B82F6] flex items-center justify-center">
        {ICON_MAP[icon]}
      </div>

      <div className="min-w-0">
        <div className="text-[#64748B] text-[13px] font-medium mb-1 truncate">
          {title}
        </div>
        <div className="text-[24px] font-bold text-[#0F172A] leading-[1.1] truncate">
          {value}
        </div>
        <div className={`text-xs mt-1 flex items-center gap-1 ${changeColor}`}>
          {changeIcon} {change || "-"}
        </div>
      </div>
    </div>
  );
}

export default function KpiCardsRow() {
  const { kpis, loading } = useKpis();

  if (loading) {
    return <div>Loading KPIs…</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {kpis.map((kpi) => (
        <KpiCard key={kpi.title} {...kpi} />
      ))}
    </div>
  );
}
