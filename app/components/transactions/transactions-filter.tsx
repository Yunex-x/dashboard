"use client";

import { transactionStatuses } from "@/app/services/transaction";
import { useState } from "react";

export default function TransactionsFilter({
  onChange,
}: {
  onChange?: (status: string) => void;
}) {
  const [selected, setSelected] = useState("all");

  const handleSelect = (value: string) => {
    setSelected(value);
    onChange?.(value);
  };

  return (
    <div className="flex gap-2 mb-4" role="tablist" aria-label="Transaction status filter">
      {transactionStatuses.map((s) => (
        <button
          key={s.value}
          className={`
            px-4 py-2 rounded-[10px] text-[15px] border transition font-semibold
            ${
              selected === s.value
                ? "bg-[#EAF1FF] text-[#2563EB] border-transparent shadow-sm"
                : "bg-white text-[#64748B] border-[#DCE3F1] hover:bg-[#F8FAFF]"
            }
          `}
          onClick={() => handleSelect(s.value)}
          role="tab"
          aria-selected={selected === s.value}
          aria-pressed={selected === s.value}
        >
          {s.label}
        </button>
      ))}
    </div>
  );
}
