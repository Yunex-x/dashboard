"use client";

import React, { useEffect, useState } from "react";
import { TrendingUp } from "lucide-react";

import { getKpis } from "@/app/services/kpi";
import { Kpi } from "@/app/types/kpi";

// ✅ Reuse Kpi type for props
type KpiCardProps = Kpi;

function KpiCard({ title, value, icon, change }: KpiCardProps) {
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
        {icon}
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
  const [kpis, setKpis] = useState<Kpi[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getKpis()
      .then(setKpis)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div>Loading KPIs...</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {kpis.map((kpi) => (
        <KpiCard key={kpi.title} {...kpi} />
      ))}
    </div>
  );
}
