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
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 flex items-center gap-4 min-w-55">
            <div className={`p-2 rounded-full bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-300 ${color || ""}`}>{icon}</div>
            <div>
                <div className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">{title}</div>
                <div className="text-2xl font-bold text-gray-800 dark:text-gray-100 tracking-tight">{value}</div>
                <div className={`text-xs mt-1 flex items-center gap-1 ${changeColor} dark:${changeColor.replace('text-', 'text-')}`}> {/* fallback for dark mode */}
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-8">
            {kpis.map((kpi) => (
                <KpiCard key={kpi.title} {...kpi} />
            ))}
        </div>
    );
}
