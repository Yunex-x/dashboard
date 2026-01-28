import { UserPlus, UserCheck, UserX } from "lucide-react";

// Mocked customers data
const customers = [
    { name: "Alice Smith", joined: "2026-01-10", active: true },
    { name: "Bob Johnson", joined: "2026-01-15", active: false },
    { name: "Charlie Lee", joined: "2026-01-20", active: true },
    { name: "Diana King", joined: "2026-01-22", active: false },
    { name: "Evan Wright", joined: "2026-01-25", active: true },
    { name: "Fiona Green", joined: "2026-01-26", active: true },
];

const totalCustomers = customers.length;
const newCustomers = customers.filter(c => c.joined >= "2026-01-20").length;
const active = customers.filter(c => c.active).length;
const inactive = customers.filter(c => !c.active).length;

export default function CustomersSummary() {
    return (
        <div className="bg-white border border-[#DCE3F1] rounded-[14px] shadow-[0_2px_6px_rgba(59,130,246,0.08)] p-6 flex flex-col gap-6">
            <h2 className="text-[17px] font-semibold text-[#0F172A] mb-2">Customers Summary</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="flex flex-col items-center gap-2 p-4 bg-[#F8FAFF] border border-[#DCE3F1] rounded-[14px]">
                    <UserPlus className="text-[#3B82F6]" size={24} />
                    <span className="text-[#64748B] text-[13px]">Total Customers</span>
                    <span className="text-[24px] font-bold text-[#2563EB]">{totalCustomers}</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-4 bg-[#F8FAFF] border border-[#DCE3F1] rounded-[14px]">
                    <UserPlus className="text-[#22C55E]" size={24} />
                    <span className="text-[#64748B] text-[13px]">New Customers</span>
                    <span className="text-[24px] font-bold text-[#22C55E]">{newCustomers}</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-4 bg-[#F8FAFF] border border-[#DCE3F1] rounded-[14px]">
                    <UserCheck className="text-[#22C55E]" size={24} />
                    <span className="text-[#64748B] text-[13px]">Active</span>
                    <span className="text-[24px] font-bold text-[#22C55E]">{active}</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-4 bg-[#F8FAFF] border border-[#DCE3F1] rounded-[14px]">
                    <UserX className="text-[#EF4444]" size={24} />
                    <span className="text-[#64748B] text-[13px]">Inactive</span>
                    <span className="text-[24px] font-bold text-[#EF4444]">{inactive}</span>
                </div>
            </div>
        </div>
    );
}