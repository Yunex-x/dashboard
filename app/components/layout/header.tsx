"use client";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, User, Settings, LogOut, Bell, ChevronRight } from "lucide-react";

const routeTitles: Record<string, string> = {
  "/overview": "Overview",
  "/transactions": "Transactions",
  "/customers": "Customers",
  "/performance": "Performance",
};

/** Breadcrumbs displays current route path as clickable trail */
function Breadcrumbs({ pathname }: { pathname: string }) {
  const segments = pathname.replace(/^\//, "").split("/").filter(Boolean);
  let path = "";
  return (
    <nav className="hidden sm:flex items-center text-[13px] text-[#64748B] space-x-1" aria-label="Breadcrumb">
      <Link href="/overview" className="hover:underline cursor-pointer text-[#334155] font-semibold">
        Dashboard
      </Link>
      {segments.map((seg, idx) => {
        path += "/" + seg;
        return (
          <span key={idx} className="flex items-center space-x-1">
            <ChevronRight className="inline-block w-[18px] h-[18px] text-[#DCE3F1]" />
            <span>
              {routeTitles[path] || (seg.charAt(0).toUpperCase() + seg.slice(1))}
            </span>
          </span>
        );
      })}
    </nav>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const notifRef = useRef<HTMLButtonElement>(null);
  const notifMenuRef = useRef<HTMLDivElement>(null);

  // Demo notifications
  const notifications = [
    { id: 1, title: "Payment received", time: "2h ago" },
    { id: 2, title: "New customer: Jane Doe", time: "4h ago" },
    { id: 3, title: "Performance report ready", time: "1d ago" },
  ];

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        dropdownOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
      if (
        notifOpen &&
        notifMenuRef.current &&
        !notifMenuRef.current.contains(e.target as Node) &&
        notifRef.current &&
        !notifRef.current.contains(e.target as Node)
      ) {
        setNotifOpen(false);
      }
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setDropdownOpen(false);
        setNotifOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    window.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      window.removeEventListener("keydown", handleKey);
    }
  }, [dropdownOpen, notifOpen]);

  return (
    <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-8 py-6 bg-white border-b border-[#DCE3F1] shadow-[0_2px_6px_rgba(59,130,246,0.08)] sticky top-0 z-20 rounded-b-[14px]">
      <div>
        <h1 className="text-[28px] font-bold text-[#0F172A] mb-2 tracking-tight">
          {routeTitles[pathname] || "Dashboard"}
        </h1>
        <Breadcrumbs pathname={pathname} />
      </div>
      {/* Right Side: Search, Notifications, Avatar */}
      <div className="flex items-center gap-6 mt-4 sm:mt-0">
        {/* Search bar for dashboard */}
        <div className="hidden lg:block w-[290px]">
          <form className="relative" role="search" onSubmit={e => e.preventDefault()}>
            <input
              className="
                w-full pl-10 pr-4 py-2 bg-[#F8FAFF] border border-[#DCE3F1]
                rounded-[10px] text-[15px] placeholder-[#64748B] text-[#334155]
                focus:outline-none focus:ring-2 focus:ring-[#3B82F6] font-medium shadow-none
              "
              type="text"
              placeholder="Search…"
            />
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#DCE3F1]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </form>
        </div>
        {/* Notifications */}
        <div className="relative">
          <button
            ref={notifRef}
            onClick={() => setNotifOpen((o) => !o)}
            className="relative p-2 rounded-full bg-[#F8FAFF] hover:bg-[#EAF1FF] border border-[#DCE3F1] shadow focus:outline-none focus:ring-2 focus:ring-[#3B82F6] transition"
            aria-label="Notifications"
            aria-haspopup="true"
            aria-expanded={notifOpen}
            aria-controls="notifications-menu"
            type="button"
          >
            <Bell className="w-6 h-6 text-[#2563EB]" />
            {notifications.length > 0 && (
              <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-[#EF4444] rounded-full border-2 border-white" />
            )}
          </button>
          {/* Notification Dropdown */}
          {notifOpen && (
            <div
              ref={notifMenuRef}
              id="notifications-menu"
              className="absolute right-0 mt-2 w-80 bg-white border border-[#DCE3F1] rounded-[14px] shadow-[0_6px_14px_rgba(59,130,246,0.12)] py-2 z-30 animate-fadeInUp"
              tabIndex={-1}
              role="menu"
            >
              <div className="px-6 py-3 font-semibold text-[#0F172A] border-b border-[#E2E8F0] text-[16px]">Notifications</div>
              {notifications.length === 0 && (
                <div className="px-6 py-8 text-[#64748B]">No new notifications</div>
              )}
              {notifications.map((notif) => (
                <div key={notif.id} className="px-6 py-3 hover:bg-[#F8FAFF] text-[#334155] flex justify-between items-center cursor-pointer text-[15px]">
                  <span>{notif.title}</span>
                  <span className="text-xs text-[#64748B] ml-4">{notif.time}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        {/* Avatar Dropdown */}
        <div className="relative">
          <button
            className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] rounded-full border border-[#DCE3F1] bg-[#F8FAFF] hover:bg-[#EAF1FF] px-1.5 py-1 shadow transition"
            onClick={() => setDropdownOpen(open => !open)}
            aria-haspopup="true"
            aria-expanded={dropdownOpen}
            aria-controls="user-menu"
            ref={buttonRef}
            type="button"
          >
            <img
              src="/avatar.png"
              alt="Avatar"
              className="w-10 h-10 rounded-full border border-[#DCE3F1]"
            />
            <ChevronDown size={20} className="text-[#64748B]" />
          </button>
          {dropdownOpen && (
            <div
              ref={dropdownRef}
              id="user-menu"
              role="menu"
              tabIndex={-1}
              className="absolute right-0 mt-2 w-48 bg-white border border-[#DCE3F1] rounded-[14px] shadow-[0_6px_14px_rgba(59,130,246,0.12)] py-2 z-30 animate-fadeInUp"
              style={{ minWidth: 184 }}
            >
              <button
                className="flex items-center w-full px-4 py-2 hover:bg-[#F8FAFF] text-[#334155] transition-colors text-[15px]"
                onClick={() => setDropdownOpen(false)}
                role="menuitem"
                tabIndex={0}
              >
                <User size={18} className="mr-2" /> Profile
              </button>
              <button
                className="flex items-center w-full px-4 py-2 hover:bg-[#F8FAFF] text-[#334155] transition-colors text-[15px]"
                onClick={() => setDropdownOpen(false)}
                role="menuitem"
                tabIndex={0}
              >
                <Settings size={18} className="mr-2" /> Settings
              </button>
              <button
                className="flex items-center w-full px-4 py-2 hover:bg-[#FEE2E2] text-[#EF4444] transition-colors text-[15px]"
                onClick={() => setDropdownOpen(false)}
                role="menuitem"
                tabIndex={0}
              >
                <LogOut size={18} className="mr-2" /> Logout
              </button>
            </div>
          )}
        </div>
      </div>
      <style>
        {`
          .animate-fadeInUp {
            animation: fadeInUp .17s cubic-bezier(.30,.95,.47,1.13);
          }
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(8px);}
            100% { opacity: 1; transform: translateY(0);}
          }
        `}
      </style>
    </header>
  );
}