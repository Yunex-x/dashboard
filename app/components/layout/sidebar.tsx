import {
  Home,
  ArrowLeftRight,
  User,
  PiggyBank,
  CreditCard,
  Banknote,
  Briefcase,
  Gem,
  Settings,
} from "lucide-react";

const menu = [
  {
    icon: Home,
    label: "Dashboard",
    active: true,
    color: "text-[#2D60FF]",
  },
  {
    icon: ArrowLeftRight,
    label: "Transactions",
  },
  {
    icon: User,
    label: "Accounts",
  },
  {
    icon: PiggyBank,
    label: "Investments",
  },
  {
    icon: CreditCard,
    label: "Credit Cards",
  },
  {
    icon: Banknote,
    label: "Loans",
  },
  {
    icon: Briefcase,
    label: "Services",
  },
  {
    icon: Gem,
    label: "My Privileges",
  },
  {
    icon: Settings,
    label: "Setting",
  },
];

export default function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 h-screen w-[250px] bg-white border-r border-[#E6EFF5] flex flex-col z-20">
      <nav className="mt-[114px] flex flex-col gap-2">
        {menu.map(({ icon: Icon, label, active, color }, idx) => (
          <div
            key={label}
            className={`group flex items-center h-[60px] cursor-pointer pl-11 pr-4 relative ${
              active ? "font-semibold text-[#2D60FF]" : "text-[#B1B1B1]"
            }`}
          >
            {/* Active Blue Bar */}
            {active && (
              <span className="absolute left-0 top-0 h-full w-1.5 bg-[#2D60FF] rounded-r-lg"></span>
            )}
            {/* Icon */}
            <Icon
              size={25}
              className={`mr-6 ${active ? "text-[#2D60FF]" : "group-hover:text-[#2D60FF]"} ${color || ""}`}
            />
            {/* Label */}
            <span className="text-[18px] font-medium leading-[22px]">{label}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
}