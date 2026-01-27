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
        <div className="flex gap-2 mb-4">
            {options.map((opt) => (
                <button
                    key={opt.value}
                    className={`px-4 py-2 rounded font-medium border transition text-sm ${selected === opt.value
                            ? "bg-blue-600 text-white border-blue-600"
                            : "bg-white text-gray-700 border-gray-300 hover:bg-blue-50"
                        }`}
                    onClick={() => handleSelect(opt.value)}
                >
                    {opt.label}
                </button>
            ))}
        </div>
    );
}
