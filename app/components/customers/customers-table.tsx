"use client";
import { useEffect, useState } from "react";

// Demo customer data
const initialCustomers = [
  { name: "Alice Smith", email: "alice@example.com", active: true, totalSpent: 1200.5 },
  { name: "Bob Johnson", email: "bob@example.com", active: false, totalSpent: 300.0 },
  { name: "Charlie Lee", email: "charlie@example.com", active: true, totalSpent: 980.2 },
  { name: "Diana King", email: "diana@example.com", active: false, totalSpent: 150.0 },
  { name: "Evan Wright", email: "evan@example.com", active: true, totalSpent: 2100.0 },
  { name: "Fiona Green", email: "fiona@example.com", active: true, totalSpent: 99.99 },
];

// Utility: email regex for simple validation
function isValidEmail(email: string) {
  return /^\S+@\S+\.\S+$/.test(email);
}

export default function CustomersTable({ data }: { data?: typeof initialCustomers }) {
  // Control (state)
  const [customers, setCustomers] = useState(data || initialCustomers);
  const [loading, setLoading] = useState(false);

  // --- Form state (Control) ---
  const [form, setForm] = useState({
    name: "",
    email: "",
    active: true,
    totalSpent: "",
  });
  const [formError, setFormError] = useState("");
  const [formLoading, setFormLoading] = useState(false);

  // Async (loading/error) for main table demo
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  // Submit logic: Validate (UX), Payload (contract), Service (API/Async)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate (UX)
    if (!form.name.trim()) {
      setFormError("Name is required");
      return;
    }
    if (!isValidEmail(form.email)) {
      setFormError("Valid email required");
      return;
    }
    if (isNaN(Number(form.totalSpent)) || Number(form.totalSpent) < 0) {
      setFormError("Total spent must be a non-negative number");
      return;
    }
    setFormError("");

    // Payload (contract)
    const payload = {
      name: form.name.trim(),
      email: form.email.trim(),
      active: form.active,
      totalSpent: Number(form.totalSpent),
    };

    // Service (API, simulated async)
    setFormLoading(true);
    try {
      await new Promise(r => setTimeout(r, 800)); // simulate async API
      setCustomers(prev => [{ ...payload }, ...prev]);
      setForm({ name: "", email: "", active: true, totalSpent: "" });
    } catch (err) {
      setFormError("Failed to add customer");
    } finally {
      setFormLoading(false);
    }
  };

  return (
    <div className="bg-white border border-[#DCE3F1] rounded-[14px] p-6 shadow-[0_2px_6px_rgba(59,130,246,0.08)] w-full overflow-auto">
      {/* Form to add customer */}
      <form className="flex flex-col md:flex-row gap-3 mb-6" onSubmit={handleSubmit} autoComplete="off">
        <input
          className="px-3 py-2 border border-[#DCE3F1] rounded-[10px] text-[15px] flex-1 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
          placeholder="Name"
          value={form.name}
          onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
          disabled={formLoading}
        />
        <input
          className="px-3 py-2 border border-[#DCE3F1] rounded-[10px] text-[15px] flex-1 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
          placeholder="Email"
          value={form.email}
          onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
          disabled={formLoading}
        />
        <input
          className="px-3 py-2 border border-[#DCE3F1] rounded-[10px] text-[15px] w-32 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
          placeholder="Total Spent"
          type="number"
          min={0}
          value={form.totalSpent}
          onChange={e => setForm(f => ({ ...f, totalSpent: e.target.value }))}
          disabled={formLoading}
        />
        <select
          className="px-3 py-2 border border-[#DCE3F1] rounded-[10px] text-[15px] w-32 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] bg-white"
          value={form.active ? "active" : "inactive"}
          onChange={e => setForm(f => ({ ...f, active: e.target.value === "active" }))}
          disabled={formLoading}
        >
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
        <button
          type="submit"
          className="bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold px-5 py-2 rounded-[10px] transition disabled:bg-[#93C5FD] disabled:cursor-not-allowed"
          disabled={formLoading}
        >
          {formLoading ? "Adding..." : "Add"}
        </button>
      </form>
      {/* Error validation for UX */}
      {formError && (
        <div className="text-[#EF4444] mb-2 text-sm font-medium">{formError}</div>
      )}

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
          ) : customers.length === 0 ? (
            <tr>
              <td colSpan={4} className="py-8 text-center text-[#64748B] text-[15px]">No customers found.</td>
            </tr>
          ) : (
            customers.map((c, i) => (
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