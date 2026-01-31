"use client";

import Link from "next/link";
import {
  Bell,
  ChevronDown,
  ChevronRight,
  LogOut,
  Settings,
  User,
} from "lucide-react";

import { routeTitles, notificationsMock } from "@/app/services/header";
import { useHeader } from "@/app/hooks/useHeader";

function Breadcrumbs({ pathname }: { pathname: string }) {
  const segments = pathname.replace(/^\//, "").split("/").filter(Boolean);
  let path = "";

  return (
    <nav className="hidden sm:flex items-center text-[13px] text-[#64748B] space-x-1">
      <Link href="/overview" className="font-semibold text-[#334155]">
        Dashboard
      </Link>

      {segments.map((seg, idx) => {
        path += "/" + seg;
        return (
          <span key={idx} className="flex items-center space-x-1">
            <ChevronRight className="w-4 h-4 text-[#DCE3F1]" />
            <span>
              {routeTitles[path] || seg.charAt(0).toUpperCase() + seg.slice(1)}
            </span>
          </span>
        );
      })}
    </nav>
  );
}

export default function Header() {
  const {
    pathname,
    dropdownOpen,
    setDropdownOpen,
    notifOpen,
    setNotifOpen,
    refs,
    search,
  } = useHeader();

  return (
    <header className="px-8 py-6 bg-white border-b border-[#DCE3F1] sticky top-0 z-20">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-[28px] font-bold text-[#0F172A]">
            {routeTitles[pathname] || "Dashboard"}
          </h1>
          <Breadcrumbs pathname={pathname} />
        </div>

        <div className="flex items-center gap-6">
          {/* Search */}
          <form
            className="hidden lg:block relative w-[290px]"
            onSubmit={(e) => {
              e.preventDefault();
              search.submit();
            }}
          >
            <input
              className="w-full pl-10 pr-4 py-2 bg-[#F8FAFF] border rounded-[10px]"
              placeholder="Search…"
              value={search.value}
              onChange={(e) => {
                search.setValue(e.target.value);
                search.clearError();
              }}
              disabled={search.loading}
            />
            {search.loading && (
              <span className="absolute right-3 top-2 text-xs">Loading…</span>
            )}
            {search.error && (
              <div className="text-xs text-red-500 mt-1">
                {search.error}
              </div>
            )}
          </form>

          {/* Notifications */}
          <div className="relative">
            <button
              ref={refs.notifRef}
              onClick={() => setNotifOpen((o) => !o)}
            >
              <Bell />
            </button>

            {notifOpen && (
              <div
                ref={refs.notifMenuRef}
                className="absolute right-0 mt-2 w-80 bg-white border rounded-[14px]"
              >
                {notificationsMock.map((n) => (
                  <div key={n.id} className="px-6 py-3">
                    {n.title}
                    <span className="block text-xs text-gray-400">
                      {n.time}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Avatar */}
          <div className="relative">
            <button
              ref={refs.buttonRef}
              onClick={() => setDropdownOpen((o) => !o)}
            >
              <img src="/avatar.png" className="w-10 h-10 rounded-full" />
              <ChevronDown />
            </button>

            {dropdownOpen && (
              <div
                ref={refs.dropdownRef}
                className="absolute right-0 mt-2 w-48 bg-white border rounded-[14px]"
              >
                <button className="flex items-center px-4 py-2">
                  <User size={18} /> Profile
                </button>
                <button className="flex items-center px-4 py-2">
                  <Settings size={18} /> Settings
                </button>
                <button className="flex items-center px-4 py-2 text-red-500">
                  <LogOut size={18} /> Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}