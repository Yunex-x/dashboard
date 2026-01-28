"use client";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { ChevronDown, User, Settings, LogOut, Bell, ChevronRight } from "lucide-react";

const routeTitles: Record<string, string> = {
  "/overview": "Overview",
  "/transactions": "Transactions",
  "/customers": "Customers",
  "/performance": "Performance",
};

function Breadcrumbs({ pathname }: { pathname: string }) {
  // Remove leading slash and split
  const segments = pathname.replace(/^\//, "").split("/").filter(Boolean);
  return (
    <nav className="hidden sm:flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-1" aria-label="Breadcrumb">
      <span className="hover:underline cursor-pointer text-gray-700 dark:text-gray-200">Dashboard</span>
      {segments.map((seg, idx) => (
        <span key={idx} className="flex items-center space-x-1">
          <ChevronRight className="inline-block w-4 h-4 text-gray-400" />
          <span>{routeTitles["/" + seg] || (seg.charAt(0).toUpperCase() + seg.slice(1))}</span>
        </span>
      ))}
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

  // FAKE notifications
  const notifications = [
    { id: 1, title: "Payment received", time: "2h ago" },
    { id: 2, title: "New customer: Jane Doe", time: "4h ago" },
    { id: 3, title: "Performance report ready", time: "1d ago" },
  ];

  // Dropdowns: close on click-away and Escape
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
    <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm sticky top-0 z-10">
      {/* Left Side: Title + Breadcrumbs */}
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 tracking-tight">{routeTitles[pathname] || "Dashboard"}</h1>
        <Breadcrumbs pathname={pathname} />
      </div>

      {/* Center: Search bar */}
      <div className="flex-1 mx-8 max-w-md hidden lg:block">
        <form
          className="relative"
          role="search"
          onSubmit={e => e.preventDefault()}
        >
          <input
            className="w-full pl-10 pr-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 dark:placeholder-gray-500 text-sm"
            type="text"
            placeholder="Search…"
          />
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
        </form>
      </div>

      {/* Right Side: Notifications + Avatar */}
      <div className="flex items-center gap-4">
        {/* Notifications Button */}
        <div className="relative">
          <button
            ref={notifRef}
            onClick={() => setNotifOpen((o) => !o)}
            className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            aria-label="Notifications"
            aria-haspopup="true"
            aria-expanded={notifOpen}
            aria-controls="notifications-menu"
            type="button"
          >
            <Bell className="w-6 h-6" />
            {notifications.length > 0 && (
              <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white dark:border-gray-900"></span>
            )}
          </button>
          {/* Notification Dropdown */}
          {notifOpen && (
            <div
              ref={notifMenuRef}
              id="notifications-menu"
              className="absolute right-0 mt-2 w-72 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-md shadow-lg py-2 z-20 animate-fadeInUp"
              tabIndex={-1}
              role="menu"
            >
              <div className="px-4 py-2 font-semibold text-gray-700 dark:text-gray-200 border-b dark:border-gray-700">Notifications</div>
              {notifications.length === 0 && (
                <div className="px-4 py-4 text-gray-500 dark:text-gray-400">No new notifications</div>
              )}
              {notifications.map((notif) => (
                <div key={notif.id} className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer text-gray-700 dark:text-gray-100 flex justify-between items-center">
                  <span>{notif.title}</span>
                  <span className="text-xs text-gray-400 ml-4">{notif.time}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Avatar Dropdown */}
        <div className="relative">
          <button
            className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-full"
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
              className="w-10 h-10 rounded-full border dark:border-gray-700"
            />
            <ChevronDown size={20} />
          </button>
          {dropdownOpen && (
            <div
              ref={dropdownRef}
              id="user-menu"
              role="menu"
              tabIndex={-1}
              className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded shadow-lg py-2 z-20 animate-fadeInUp"
              style={{ minWidth: 184 }}
            >
              <button
                className="flex items-center w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-100 transition-colors"
                onClick={() => setDropdownOpen(false)}
                role="menuitem"
                tabIndex={0}
              >
                <User size={18} className="mr-2" /> Profile
              </button>
              <button
                className="flex items-center w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-100 transition-colors"
                onClick={() => setDropdownOpen(false)}
                role="menuitem"
                tabIndex={0}
              >
                <Settings size={18} className="mr-2" /> Settings
              </button>
              <button
                className="flex items-center w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-red-500 dark:text-red-400 transition-colors"
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
      {/* Simple animation for dropdown */}
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