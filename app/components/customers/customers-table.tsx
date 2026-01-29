"use client";

import { useEffect, useState } from "react";
import { getCustomers } from "@/app/services/customers";
import { Customer } from "@/app/types/customer";

// Utility
function isValidEmail(email: string) {
  return /^\S+@\S+\.\S+$/.test(email);
}

export default function CustomersTable() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    active: true,
    totalSpent: "",
  });

  const [formError, setFormError] = useState("");
  const [formLoading, setFormLoading] = useState(false);

  // ✅ LOAD CUSTOMERS FROM SERVICE
  useEffect(() => {
    setLoading(true);
    setError(null);

    getCustomers()
      .then((data) => {
        setCustomers(data);
      })
      .catch(() => {
        setError("Failed to load customers");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // ✅ ADD CUSTOMER (still mocked)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

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
    setFormLoading(true);

    try {
      await new Promise((r) => setTimeout(r, 600)); // simulate API

      setCustomers((prev) => [
        {
          name: form.name,
          email: form.email,
          active: form.active,
          totalSpent: Number(form.totalSpent),
          joined: new Date().toISOString().slice(0, 10),
        },
        ...prev,
      ]);

      setForm({ name: "", email: "", active: true, totalSpent: "" });
    } catch {
      setFormError("Failed to add customer");
    } finally {
      setFormLoading(false);
    }
  };

  return (
    <div className="bg-white border border-[#DCE3F1] rounded-[14px] p-6 shadow-[0_2px_6px_rgba(59,130,246,0.08)] w-full overflow-auto">
      {/* FORM */}
      <form
        className="flex flex-col md:flex-row gap-3 mb-6"
        onSubmit={handleSubmit}
      >
        <input
          className="input"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          disabled={formLoading}
        />
        <input
          className="input"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          disabled={formLoading}
        />
        <input
          className="input w-32"
          type="number"
          placeholder="Total Spent"
          value={form.totalSpent}
          onChange={(e) =>
            setForm((f) => ({ ...f, totalSpent: e.target.value }))
          }
          disabled={formLoading}
        />
        <select
          className="input w-32 bg-white"
          value={form.active ? "active" : "inactive"}
          onChange={(e) =>
            setForm((f) => ({ ...f, active: e.target.value === "active" }))
          }
          disabled={formLoading}
        >
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
        <button
          className="bg-[#3B82F6] text-white px-5 py-2 rounded-[10px]"
          disabled={formLoading}
        >
          {formLoading ? "Adding..." : "Add"}
        </button>
      </form>

      {/* FORM ERROR */}
      {formError && (
        <p className="text-[#EF4444] mb-2 text-sm">{formError}</p>
      )}

      {/* SERVICE ERROR */}
      {error && (
        <p className="text-[#EF4444] mb-2 text-sm">{error}</p>
      )}

      {/* TABLE */}
      {loading ? (
        <p>Loading customers...</p>
      ) : customers.length === 0 ? (
        <p>No customers found.</p>
      ) : (
        <table className="min-w-full text-left text-[15px]">
          <thead>
            <tr className="bg-[#F8FAFF] text-xs">
              <th className="py-3 px-6">Name</th>
              <th className="py-3 px-6">Email</th>
              <th className="py-3 px-6">Status</th>
              <th className="py-3 px-6 text-right">Total Spent</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((c, i) => (
              <tr key={i} className="even:bg-[#F8FAFF] border-b">
                <td className="py-3 px-6">{c.name}</td>
                <td className="py-3 px-6">{c.email}</td>
                <td className="py-3 px-6">
                  {c.active ? "Active" : "Inactive"}
                </td>
                <td className="py-3 px-6 text-right">
                  ${c.totalSpent.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
