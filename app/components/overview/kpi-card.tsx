import { TrendingUp, Users, DollarSign, BarChart2 } from "lucide-react";
import React from "react";

interface KpiCardProps {
    title: string;
    value: string | number;
    icon: React.ReactNode;
    change?: string;
}

function KpiCard({ title, value, icon, change }: KpiCardProps) {
    let changeColor = "text-[#64748B]";
    let changeIcon = null;
    if (change) {
        if (change.startsWith("+")) {
            changeColor = "text-[#22C55E]";
            changeIcon = <TrendingUp size={15} className="inline-block" />;
        } else if (change.startsWith("-")) {
            changeColor = "text-[#EF4444]";
            changeIcon = <TrendingUp size={15} className="inline-block rotate-180" />;
        }
    }
    return (
        <div className="bg-white border border-[#DCE3F1] rounded-[14px] shadow-[0_2px_6px_rgba(59,130,246,0.08)] p-6 flex items-center gap-4 min-w-0">
            <div className="p-3 rounded-full bg-[#EAF1FF] text-[#3B82F6] flex items-center justify-center">
                {icon}
            </div>
            <div className="min-w-0">
                <div className="text-[#64748B] text-[13px] font-medium mb-1 truncate">{title}</div>
                <div className="text-[24px] font-bold text-[#0F172A] leading-[1.1] truncate">{value}</div>
                <div className={`text-xs mt-1 flex items-center gap-1 ${changeColor}`}>
                    {changeIcon} {change || "-"}
                </div>
            </div>
        </div>
    );
}

export default function KpiCardsRow() {
    // Example static data, replace with real data as needed
    const kpis = [
        {
            title: "Total Revenue",
            value: "$120,000",
            icon: <DollarSign size={18} />,
            change: "+5.2% MoM",
        },
        {
            title: "Monthly Revenue",
            value: "$12,500",
            icon: <BarChart2 size={18} />,
            change: "+2.1% MoM",
        },
        {
            title: "Customers",
            value: 3200,
            icon: <Users size={18} />,
            change: "-0.5% MoM",
        },
        {
            title: "Growth %",
            value: "8.2%",
            icon: <TrendingUp size={18} />,
            change: "+1.1% MoM",
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {kpis.map((kpi) => (
                <KpiCard key={kpi.title} {...kpi} />
            ))}
        </div>
    );
}