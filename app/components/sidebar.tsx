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
        className="md:hidden fixed top-4 left-4 z-30 p-2 bg-white rounded-[10px] border border-[#DCE3F1] shadow-[0_2px_6px_rgba(59,130,246,0.08)] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] transition"
        onClick={() => setOpen(true)}
        aria-label="Open sidebar"
        type="button"
      >
        <Menu size={28} className="text-[#334155]" />
      </button>

      {/* Sidebar: always fixed on desktop */}
      <aside
        className={`
          fixed top-0 left-0 h-screen w-60 bg-white border-r border-[#DCE3F1]
          flex flex-col z-40 shadow-[0_2px_6px_rgba(59,130,246,0.08)]
          transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <div className="flex items-center h-20 px-7  select-none relative">
          <span className="text-[23px] font-bold tracking-tight text-[#3B82F6]">
            SaaS<span className="text-[#334155] font-bold">Dash</span>
          </span>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 md:hidden p-1 rounded-full hover:bg-[#F8FAFF] transition focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
            onClick={() => setOpen(false)}
            aria-label="Close sidebar"
            type="button"
          >
            <X size={24} className="text-[#64748B]" />
          </button>
        </div>
        <nav className="flex flex-col gap-1 mt-8 px-3">
          {menu.map(({ label, icon: Icon, route }) => {
            const active = pathname.startsWith(route);
            return (
              <Link
                href={route}
                key={label}
                className={`
                  flex items-center gap-3 px-3 py-2 rounded-[10px] transition-colors duration-150 text-[15px] leading-6 font-medium border-l-4
                  ${active
                    ? "bg-[#EAF1FF] text-[#2563EB] border-[#3B82F6] font-semibold shadow-sm"
                    : "text-[#64748B] border-transparent hover:bg-[#F8FAFF] hover:text-[#334155]"}
                  focus:outline-none focus:ring-2 focus:ring-[#3B82F6]
                `}
                style={{ minHeight: 44 }}
                onClick={() => setOpen(false)}
                tabIndex={0}
              >
                <Icon size={20} strokeWidth={1.8} className={active ? "text-[#2563EB]" : "text-[#64748B]"} />
                <span className="flex-1 truncate">{label}</span>
              </Link>
            );
          })}
        </nav>
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