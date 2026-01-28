"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Users, TrendingUp, Layers } from "lucide-react";
import { usePathname } from "next/navigation";

const menu = [
  { label: "Overview", icon: Layers, route: "/overview" },
  { label: "Transactions", icon: Menu, route: "/transactions" },
  { label: "Customers", icon: Users, route: "/customers" },
  { label: "Performance", icon: TrendingUp, route: "/performance" },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Hamburger */}
      <button
        className="md:hidden fixed top-4 left-4 z-30 p-2 bg-white rounded-xl shadow focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
        onClick={() => setOpen(true)}
        aria-label="Open sidebar"
        type="button"
      >
        <Menu size={28} />
      </button>
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-60 bg-white border-r border-gray-200 flex flex-col z-40 shadow-lg
        transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "-translate-x-full"}
        md:static md:h-auto md:w-60 md:translate-x-0`}
      >
        {/* Mobile close button */}
        <div className="flex items-center h-20 px-6 border-b border-gray-200 relative">
          {/* Logo Area */}
          <span className="text-xl font-bold tracking-tight text-blue-600 select-none">
            SaaS<span className="text-gray-700 font-semibold">Dash</span>
          </span>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 md:hidden p-1 rounded-full hover:bg-gray-100 transition focus:outline-none focus:ring-2 focus:ring-blue-300"
            onClick={() => setOpen(false)}
            aria-label="Close sidebar"
            type="button"
          >
            <X size={24} />
          </button>
        </div>
        {/* Menu */}
        <nav className="flex flex-col gap-1 mt-6 px-3">
          {menu.map(({ label, icon: Icon, route }) => {
            const active = pathname.startsWith(route);
            return (
              <Link
                href={route}
                key={label}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors duration-150 text-[15px] leading-6 font-medium border-l-4
                  ${active
                    ? "bg-blue-50 text-blue-700 border-blue-600"
                    : "text-gray-500 border-transparent hover:bg-gray-100 hover:text-gray-900"
                  }
                  focus:outline-none focus:ring-2 focus:ring-blue-200`}
                style={{ minHeight: 44 }}
                onClick={() => setOpen(false)}
                tabIndex={0}
              >
                <Icon size={20} strokeWidth={1.8} className={active ? "text-blue-600" : "text-gray-400"} />
                <span className="flex-1 truncate">{label}</span>
              </Link>
            );
          })}
        </nav>
        {/* Spacer to push content up */}
        <div className="flex-1" />
      </aside>
      {/* Overlay for mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-30 md:hidden transition-opacity"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}