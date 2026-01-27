"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown, User, Settings, LogOut } from "lucide-react";

const routeTitles: Record<string, string> = {
    "/overview": "Overview",
    "/transactions": "Transactions",
    "/customers": "Customers",
    "/performance": "Performance",
};

export default function Header() {
    const pathname = usePathname();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const title = routeTitles[pathname] || "Dashboard";

    return (
        <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200 shadow-sm sticky top-0 z-10">
            {/* Page Title */}
            <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
            {/* Avatar + Dropdown */}
            <div className="relative">
                <button
                    className="flex items-center gap-2 focus:outline-none"
                    onClick={() => setDropdownOpen((open) => !open)}
                >
                    <img
                        src="/avatar.png"
                        alt="Avatar"
                        className="w-10 h-10 rounded-full border"
                    />
                    <ChevronDown size={20} />
                </button>
                {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg py-2 z-20">
                        <button className="flex items-center w-full px-4 py-2 hover:bg-gray-100 text-gray-700" onClick={() => setDropdownOpen(false)}>
                            <User size={18} className="mr-2" /> Profile
                        </button>
                        <button className="flex items-center w-full px-4 py-2 hover:bg-gray-100 text-gray-700" onClick={() => setDropdownOpen(false)}>
                            <Settings size={18} className="mr-2" /> Settings
                        </button>
                        <button className="flex items-center w-full px-4 py-2 hover:bg-gray-100 text-red-500" onClick={() => setDropdownOpen(false)}>
                            <LogOut size={18} className="mr-2" /> Logout
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
}
