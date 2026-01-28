import { TrendingUp, Percent, ShoppingCart } from "lucide-react";

// Mocked performance data
const performance = {
    conversionRate: 4.8, // %
    growthRate: 7.2, // %
    aov: 325.75, // Average Order Value
};

export default function PerformanceSummary() {
    return (
        <div className="bg-white border border-[#DCE3F1] rounded-[14px] p-6 shadow-[0_2px_6px_rgba(59,130,246,0.08)] flex flex-col gap-6">
            <h2 className="text-[17px] font-semibold text-[#0F172A] mb-2">Performance Summary</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Conversion Rate */}
                <div className="flex items-center gap-3 p-4 bg-[#F8FAFF] rounded-[14px] border border-[#DCE3F1]">
                    <span className="p-2 rounded-full bg-[#EAF1FF] text-[#3B82F6]">
                        <Percent size={20} />
                    </span>
                    <span className="text-[#64748B] text-[13px]">Conversion Rate</span>
                    <span className="text-[17px] font-bold text-[#2563EB]">{performance.conversionRate}%</span>
                </div>
                {/* Growth Rate */}
                <div className="flex items-center gap-3 p-4 bg-[#F8FAFF] rounded-[14px] border border-[#DCE3F1]">
                    <span className="p-2 rounded-full bg-[#DCFCE7] text-[#22C55E]">
                        <TrendingUp size={20} />
                    </span>
                    <span className="text-[#64748B] text-[13px]">Growth Rate</span>
                    <span className="text-[17px] font-bold text-[#22C55E]">{performance.growthRate}%</span>
                </div>
                {/* Average Order Value */}
                <div className="flex items-center gap-3 p-4 bg-[#F8FAFF] rounded-[14px] border border-[#DCE3F1]">
                    <span className="p-2 rounded-full bg-[#ede9fe] text-[#7c3aed]">
                        <ShoppingCart size={20} />
                    </span>
                    <span className="text-[#64748B] text-[13px]">AOV</span>
                    <span className="text-[17px] font-bold text-[#7c3aed]">${performance.aov.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
                </div>
            </div>
        </div>
    );
}