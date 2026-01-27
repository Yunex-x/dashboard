"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, Users, TrendingUp, Layers } from "lucide-react";

const menu = [
    { label: "Overview", icon: Layers, route: "/overview" },
    { label: "Transactions", icon: Menu, route: "/transactions" },
    { label: "Customers", icon: Users, route: "/customers" },
    { label: "Performance", icon: TrendingUp, route: "/performance" },
];

export default function Sidebar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Mobile Hamburger */}
            <button
                className="md:hidden fixed top-4 left-4 z-30 p-2 bg-white rounded shadow"
                onClick={() => setOpen(!open)}
                aria-label="Toggle sidebar"
            >
                <Menu size={28} />
            </button>
            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 h-screen w-64 bg-white border-r border-gray-200 flex flex-col z-20 transition-transform duration-300 md:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"
                    } md:static md:h-auto md:w-64 md:flex md:translate-x-0`}
            >
                <nav className="mt-20 flex flex-col gap-2 px-4">
                    {menu.map(({ label, icon: Icon, route }) => (
                        <Link
                            href={route}
                            key={label}
                            className="flex items-center gap-4 py-3 px-4 rounded hover:bg-blue-50 text-gray-700 font-medium text-lg transition"
                            onClick={() => setOpen(false)}
                        >
                            <Icon size={22} />
                            <span>{label}</span>
                        </Link>
                    ))}
                </nav>
            </aside>
            {/* Overlay for mobile */}
            {open && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-30 z-10 md:hidden"
                    onClick={() => setOpen(false)}
                />
            )}
        </>
    );
}
