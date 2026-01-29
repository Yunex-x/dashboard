"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { sidebarMenu } from "@/app/services/sidebar";
import { useSidebar } from "@/app/hooks/useSidebar";

export default function Sidebar() {
  const { open, openSidebar, closeSidebar, isActive } = useSidebar();

  return (
    <>
      {/* Mobile button */}
      <button
        className="md:hidden fixed top-4 left-4 z-30 p-2 bg-white rounded-[10px]"
        onClick={openSidebar}
        aria-label="Open sidebar"
      >
        <Menu size={28} />
      </button>

      <aside
        className={`
          fixed top-0 left-0 h-screen w-60 bg-white border-r
          transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <div className="flex items-center h-20 px-7 relative">
          <span className="text-[23px] font-bold text-[#3B82F6]">
            SaaS<span className="text-[#334155]">Dash</span>
          </span>

          <button
            className="absolute right-4 md:hidden"
            onClick={closeSidebar}
            aria-label="Close sidebar"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex flex-col gap-2 mt-6 px-3">
          {sidebarMenu.map(({ label, icon: Icon, route }) => {
            const active = isActive(route);

            return (
              <Link
                key={label}
                href={route}
                onClick={closeSidebar}
                className={`
                  flex items-center gap-3 px-3 py-2 rounded-[10px]
                  border-l-4 transition
                  ${
                    active
                      ? "bg-[#EAF1FF] text-[#2563EB] border-[#3B82F6]"
                      : "text-[#64748B] border-transparent hover:bg-[#F8FAFF]"
                  }
                `}
              >
                <Icon size={20} />
                <span>{label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="flex-1" />
      </aside>

      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-30 md:hidden"
          onClick={closeSidebar}
        />
      )}
    </>
  );
}
