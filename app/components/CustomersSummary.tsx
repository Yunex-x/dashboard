import { UserPlus, UserCheck, UserX } from "lucide-react";

// Mocked customers data
const customers = [
    { name: "Alice Smith", joined: "2026-01-10", active: true },
    { name: "Bob Johnson", joined: "2026-01-15", active: false },
    { name: "Charlie Lee", joined: "2026-01-20", active: true },
    { name: "Diana King", joined: "2026-01-22", active: false },
    { name: "Evan Wright", joined: "2026-01-25", active: true },
    { name: "Fiona Green", joined: "2026-01-26", active: true },
];

const totalCustomers = customers.length;
const newCustomers = customers.filter(c => c.joined >= "2026-01-20").length;
const active = customers.filter(c => c.active).length;
const inactive = customers.filter(c => !c.active).length;

export default function CustomersSummary() {
    return (
        <div className="bg-white rounded-lg shadow p-6 flex flex-col gap-4">
            <h2 className="text-lg font-semibold mb-2">Customers Summary</h2>
            <div className="flex flex-wrap gap-8">
                <div className="flex items-center gap-2">
                    <UserPlus className="text-blue-600" size={20} />
                    <span className="text-gray-500 text-sm">Total Customers</span>
                    <span className="text-lg font-semibold text-blue-700">{totalCustomers}</span>
                </div>
                <div className="flex items-center gap-2">
                    <UserPlus className="text-green-600" size={20} />
                    <span className="text-gray-500 text-sm">New Customers</span>
                    <span className="text-lg font-semibold text-green-700">{newCustomers}</span>
                </div>
                <div className="flex items-center gap-2">
                    <UserCheck className="text-green-600" size={20} />
                    <span className="text-gray-500 text-sm">Active</span>
                    <span className="text-lg font-semibold text-green-700">{active}</span>
                </div>
                <div className="flex items-center gap-2">
                    <UserX className="text-red-600" size={20} />
                    <span className="text-gray-500 text-sm">Inactive</span>
                    <span className="text-lg font-semibold text-red-700">{inactive}</span>
                </div>
            </div>
        </div>
    );
}
