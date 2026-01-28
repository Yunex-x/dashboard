"use client";
import { useState } from "react";

const options = [
    { label: "All", value: "all" },
    { label: "Active", value: "active" },
    { label: "Inactive", value: "inactive" },
];

export default function CustomersFilter({ onChange }: { onChange?: (status: string) => void }) {
    const [selected, setSelected] = useState("all");

    const handleSelect = (value: string) => {
        setSelected(value);
        if (onChange) onChange(value);
    };

    return (
        <div className="flex gap-2 mb-4" role="tablist" aria-label="Customer status filter">
            {options.map((opt) => (
                <button
                    key={opt.value}
                    className={`
                        px-4 py-2 rounded-[10px] font-semibold text-[15px] border transition
                        ${
                            selected === opt.value
                                ? "bg-[#EAF1FF] text-[#2563EB] border-transparent shadow-sm"
                                : "bg-white text-[#64748B] border-[#DCE3F1] hover:bg-[#F8FAFF]"
                        }
                    `}
                    onClick={() => handleSelect(opt.value)}
                    role="tab"
                    aria-selected={selected === opt.value}
                    aria-pressed={selected === opt.value}
                >
                    {opt.label}
                </button>
            ))}
        </div>
    );
}