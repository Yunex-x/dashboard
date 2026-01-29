import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export function useHeader() {
  const pathname = usePathname();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);

  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const notifRef = useRef<HTMLButtonElement>(null);
  const notifMenuRef = useRef<HTMLDivElement>(null);

  const [searchValue, setSearchValue] = useState("");
  const [searchError, setSearchError] = useState<string | null>(null);
  const [searchLoading, setSearchLoading] = useState(false);

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
    };
  }, [dropdownOpen, notifOpen]);

  const submitSearch = () => {
    setSearchError(null);
    setSearchLoading(true);

    setTimeout(() => {
      if (!searchValue.trim()) {
        setSearchError("Please enter a search term.");
      }
      setSearchLoading(false);
    }, 700);
  };

  return {
    pathname,

    dropdownOpen,
    setDropdownOpen,

    notifOpen,
    setNotifOpen,

    refs: {
      buttonRef,
      dropdownRef,
      notifRef,
      notifMenuRef,
    },

    search: {
      value: searchValue,
      setValue: setSearchValue,
      error: searchError,
      loading: searchLoading,
      submit: submitSearch,
      clearError: () => setSearchError(null),
    },
  };
}
