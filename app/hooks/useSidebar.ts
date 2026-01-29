import { useState } from "react";
import { usePathname } from "next/navigation";

export function useSidebar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const openSidebar = () => setOpen(true);
  const closeSidebar = () => setOpen(false);

  const isActive = (route: string) => pathname.startsWith(route);

  return {
    open,
    openSidebar,
    closeSidebar,
    isActive,
  };
}
