"use client";
import { useState } from "react";

const statuses = [
    { label: "All", value: "all" },
    { label: "Paid", value: "Completed" },
    { label: "Pending", value: "Pending" },
    { label: "Failed", value: "Failed" },
];

export default function TransactionsFilter({ onChange }: { onChange?: (status: string) => void }) {
    const [selected, setSelected] = useState("all");

    const handleSelect = (value: string) => {
        setSelected(value);
        if (onChange) onChange(value);
    };

    return (
        <div className="flex gap-2 mb-4" role="tablist" aria-label="Transaction status filter">
            {statuses.map((s) => (
                <button
                    key={s.value}
                    className={`px-4 py-2 rounded font-medium border transition text-sm ${selected === s.value
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-blue-50"
                        }`}
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
