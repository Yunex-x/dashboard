"use client";

import { useEffect, useState } from "react";
import { UserPlus, UserCheck, UserX } from "lucide-react";
import { getCustomers } from "@/app/services/customers";
import { Customer } from "@/app/types/customer";


export default function CustomersSummary() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCustomers().then((data) => {
      setCustomers(data);
      setLoading(false);
    });
  }, []);

  const totalCustomers = customers.length;
  const newCustomers = customers.filter(c => c.joined >= "2026-01-20").length;
  const active = customers.filter(c => c.active).length;
  const inactive = customers.filter(c => !c.active).length;

  if (loading) {
    return <div className="p-6">Loading summary...</div>;
  }

  return (
    <div className="bg-white border border-[#DCE3F1] rounded-[14px] shadow-[0_2px_6px_rgba(59,130,246,0.08)] p-6 flex flex-col gap-6">
      <h2 className="text-[17px] font-semibold text-[#0F172A] mb-2">
        Customers Summary
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <SummaryCard label="Total Customers" value={totalCustomers} icon={<UserPlus className="text-[#3B82F6]" />} />
        <SummaryCard label="New Customers" value={newCustomers} icon={<UserPlus className="text-[#22C55E]" />} />
        <SummaryCard label="Active" value={active} icon={<UserCheck className="text-[#22C55E]" />} />
        <SummaryCard label="Inactive" value={inactive} icon={<UserX className="text-[#EF4444]" />} />
      </div>
    </div>
  );
}

function SummaryCard({
  label,
  value,
  icon,
}: {
  label: string;
  value: number;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center gap-2 p-4 bg-[#F8FAFF] border border-[#DCE3F1] rounded-[14px]">
      {icon}
      <span className="text-[#64748B] text-[13px]">{label}</span>
      <span className="text-[24px] font-bold text-[#2563EB]">{value}</span>
    </div>
  );
}
