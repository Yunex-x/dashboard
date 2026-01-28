import { useEffect, useState } from "react";

// Demo customer data
const customers = [
  { name: "Alice Smith", email: "alice@example.com", active: true, totalSpent: 1200.5 },
  { name: "Bob Johnson", email: "bob@example.com", active: false, totalSpent: 300.0 },
  { name: "Charlie Lee", email: "charlie@example.com", active: true, totalSpent: 980.2 },
  { name: "Diana King", email: "diana@example.com", active: false, totalSpent: 150.0 },
  { name: "Evan Wright", email: "evan@example.com", active: true, totalSpent: 2100.0 },
  { name: "Fiona Green", email: "fiona@example.com", active: true, totalSpent: 99.99 },
];

export default function CustomersTable({ data = customers }: { data?: typeof customers }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white border border-[#DCE3F1] rounded-[14px] p-6 shadow-[0_2px_6px_rgba(59,130,246,0.08)] w-full overflow-auto">
      <h3 className="text-[17px] font-semibold text-[#0F172A] mb-4">Customers</h3>
      <table className="min-w-full text-left text-[15px]">
        <thead>
          <tr className="bg-[#F8FAFF] text-[#64748B] text-xs border-b border-[#E2E8F0]">
            <th className="py-3 px-6 font-semibold first:rounded-tl-[14px] last:rounded-tr-[14px]">Name</th>
            <th className="py-3 px-6 font-semibold">Email</th>
            <th className="py-3 px-6 font-semibold">Status</th>
            <th className="py-3 px-6 font-semibold text-right">Total Spent</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            Array.from({ length: 5 }).map((_, i) => (
              <tr key={i} className="animate-pulse even:bg-[#F8FAFF] border-b border-[#E2E8F0] last:border-0">
                {Array.from({ length: 4 }).map((_, j) => (
                  <td key={j} className="py-4 px-6">
                    <div className="h-4 rounded bg-[#DCE3F1] w-3/5" />
                  </td>
                ))}
              </tr>
            ))
          ) : data.length === 0 ? (
            <tr>
              <td colSpan={4} className="py-8 text-center text-[#64748B] text-[15px]">No customers found.</td>
            </tr>
          ) : (
            data.map((c, i) => (
              <tr
                key={i}
                className={`
                  even:bg-[#F8FAFF] border-b border-[#E2E8F0] last:border-0
                  hover:bg-[#EAF1FF] transition-colors
                `}
              >
                <td className="py-3 px-6 font-medium text-[#334155] whitespace-nowrap">{c.name}</td>
                <td className="py-3 px-6 text-[#334155] whitespace-nowrap">{c.email}</td>
                <td className="py-3 px-6">
                  <span
                    className={`inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-[999px]
                      ${c.active
                        ? "bg-[#DCFCE7] text-[#22C55E]"
                        : "bg-[#FEE2E2] text-[#EF4444]"
                      }`
                    }
                  >
                    <span
                      className={`w-2 h-2 rounded-full inline-block ${c.active ? "bg-[#22C55E]" : "bg-[#EF4444]"}`}
                    ></span>
                    {c.active ? "Active" : "Inactive"}
                  </span>
                </td>
                <td className="py-3 px-6 text-right text-[#0F172A] font-mono">${c.totalSpent.toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}