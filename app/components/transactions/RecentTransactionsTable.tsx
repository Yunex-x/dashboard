import { ArrowDownCircle, ArrowUpCircle } from "lucide-react";

const rows = [
  {
    direction: "up",
    description: "Spotify Subscription",
    id: "#12548796",
    type: "Shopping",
    card: "1234 ****",
    date: "28 Jan, 12.30 AM",
    amount: -2500,
  },
  {
    direction: "down",
    description: "Freepik Sales",
    id: "#12548796",
    type: "Transfer",
    card: "1234 ****",
    date: "25 Jan, 10.40 PM",
    amount: 750,
  },
  {
    direction: "up",
    description: "Mobile Service",
    id: "#12548796",
    type: "Service",
    card: "1234 ****",
    date: "20 Jan, 10.40 PM",
    amount: -150,
  },
  {
    direction: "up",
    description: "Wilson",
    id: "#12548796",
    type: "Transfer",
    card: "1234 ****",
    date: "15 Jan, 03.29 PM",
    amount: -1050,
  },
  {
    direction: "down",
    description: "Emilly",
    id: "#12548796",
    type: "Transfer",
    card: "1234 ****",
    date: "14 Jan, 10.40 PM",
    amount: 840,
  },
];

const TABS = [
  { name: "All Transactions", active: true },
  { name: "Income", active: false },
  { name: "Expense", active: false },
];

const PAGINATION = [1, 2, 3, 4];

export default function RecentTransactionsTable() {
  return (
    <section className="w-full flex flex-col  mx-auto mt-4">
      <h2 className="text-[22px] font-semibold text-[#343C6A] mb-1">
        Recent Transactions
      </h2>
      {/* Tabs */}
      <div className="flex gap-6 border-b border-[#E6EFF5] mb-3">
        {TABS.map(tab => (
          <button
            key={tab.name}
            className={`py-2 px-1 text-[16px] font-medium focus:outline-none relative
            ${tab.active ? "text-[#2D60FF]" : "text-[#A0AEC0]"}
            `}
          >
            {tab.name}
            {tab.active && (
              <span className="absolute left-0 -bottom-[1.5px] w-full h-[2.5px] rounded bg-[#2D60FF]" />
            )}
          </button>
        ))}
      </div>
      {/* Table */}
      <div className="rounded-2xl bg-white shadow-none p-0 mt-4 mb-3">
        <table className="w-full text-[15px] font-inter overflow-hidden">
          <thead>
            <tr className="text-[#A0AEC0]">
              <th className="font-medium py-3 pl-6 pr-3 text-left">Description</th>
              <th className="font-medium py-3 px-2 text-left">Transaction ID</th>
              <th className="font-medium py-3 px-2 text-left">Type</th>
              <th className="font-medium py-3 px-2 text-left">Card</th>
              <th className="font-medium py-3 px-2 text-left">Date</th>
              <th className="font-medium py-3 px-2 text-left">Amount</th>
              <th className="font-medium py-3 px-2 text-left">Receipt</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="border-t last:border-b border-[#F2F5FA]">
                <td className="flex items-center py-3 pl-6 text-[#343C6A] font-medium gap-2">
                  {row.direction === "up" ? (
                    <ArrowUpCircle size={20} className="text-[#B1B1B1]" />
                  ) : (
                    <ArrowDownCircle size={20} className="text-[#B1B1B1]" />
                  )}
                  {row.description}
                </td>
                <td className="text-[#718EBF] px-2 py-3">{row.id}</td>
                <td className="text-[#282828] px-2 py-3">{row.type}</td>
                <td className="text-[#343C6A] px-2 py-3">{row.card}</td>
                <td className="text-[#343C6A] px-2 py-3">{row.date}</td>
                <td className="text-[16px] px-2 py-3 font-semibold"
                  style={{ color: row.amount >= 0 ? "#41D4A8" : "#FF4B4A" }}>
                  {row.amount >= 0 ? `+$${row.amount}` : `-$${Math.abs(row.amount)}`}
                </td>
                <td className="px-2 py-3">
                  <button className="border border-[#2D60FF] text-[#2D60FF] rounded-[8px] px-4 py-1 transition hover:bg-[#2D60FF] hover:text-white text-[15px] font-medium">
                    Download
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <div className="flex items-center justify-end gap-1 mt-1 pr-4 text-[15px] select-none">
        <button className="text-[#2D60FF] px-2 py-1 hover:underline">{"< Previous"}</button>
        {PAGINATION.map(n => (
          <button
            key={n}
            className={`w-[32px] h-[32px] mx-1 rounded-full font-semibold transition
            ${n === 1
              ? "bg-[#2D60FF] text-white"
              : "bg-transparent text-[#2D60FF] hover:bg-[#EDF4FF]"
            }`}
          >
            {n}
          </button>
        ))}
        <button className="text-[#2D60FF] px-2 py-1 hover:underline">{"Next >"}</button>
      </div>
    </section>
  );
}