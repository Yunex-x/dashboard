import { TrendingUp, Users, DollarSign, BarChart2 } from "lucide-react";

interface KpiCardProps {
    title: string;
    value: string | number;
    icon: React.ReactNode;
    change?: string;
    color?: string;
}

function KpiCard({ title, value, icon, change, color }: KpiCardProps) {
    // Determine color and icon for change
    let changeColor = "text-gray-500";
    let changeIcon = null;
    if (change) {
        if (change.startsWith("+")) {
            changeColor = "text-green-600";
            changeIcon = <TrendingUp size={14} />;
        } else if (change.startsWith("-")) {
            changeColor = "text-red-600";
            changeIcon = <TrendingUp size={14} className="rotate-180" />;
        }
    }
    return (
        <div className="bg-white rounded-lg shadow p-6 flex items-center gap-4 min-w-[220px]">
            <div className={`p-2 rounded-full bg-blue-50 text-blue-600 ${color || ""}`}>{icon}</div>
            <div>
                <div className="text-gray-500 text-sm font-medium mb-1">{title}</div>
                <div className="text-2xl font-bold text-gray-800">{value}</div>
                <div className={`text-xs mt-1 flex items-center gap-1 ${changeColor}`}>
                    {changeIcon} {change || "-"}
                </div>
            </div>
        </div>
    );
}

export default function KpiCardsRow() {
    // Example static data, replace with real data as needed
    const kpis = [
        {
            title: "Total Revenue",
            value: "$120,000",
            icon: <DollarSign size={18} />,
            change: "+5.2% MoM",
        },
        {
            title: "Monthly Revenue",
            value: "$12,500",
            icon: <BarChart2 size={18} />,
            change: "+2.1% MoM",
        },
        {
            title: "Customers",
            value: 3200,
            icon: <Users size={18} />,
            change: "-0.5% MoM",
        },
        {
            title: "Growth %",
            value: "8.2%",
            icon: <TrendingUp size={18} />,
            change: "+1.1% MoM",
        },
    ];

    return (
        <div className="flex justify-evenly px-8 flex-wrap gap-6">
            {kpis.map((kpi) => (
                <KpiCard key={kpi.title} {...kpi} />
            ))}
        </div>
    );
}
