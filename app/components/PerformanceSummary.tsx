import { TrendingUp, Percent, ShoppingCart } from "lucide-react";

// Mocked performance data
const performance = {
    conversionRate: 4.8, // %
    growthRate: 7.2, // %
    aov: 325.75, // Average Order Value
};

export default function PerformanceSummary() {
    return (
        <div className="bg-white rounded-lg shadow p-6 flex flex-col gap-4">
            <h2 className="text-lg font-semibold mb-2">Performance Summary</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex items-center gap-2">
                    <Percent className="text-blue-600" size={20} />
                    <span className="text-gray-500 text-sm">Conversion Rate</span>
                    <span className="text-lg font-semibold text-blue-700">{performance.conversionRate}%</span>
                </div>
                <div className="flex items-center gap-2">
                    <TrendingUp className="text-green-600" size={20} />
                    <span className="text-gray-500 text-sm">Growth Rate</span>
                    <span className="text-lg font-semibold text-green-700">{performance.growthRate}%</span>
                </div>
                <div className="flex items-center gap-2">
                    <ShoppingCart className="text-purple-600" size={20} />
                    <span className="text-gray-500 text-sm">AOV</span>
                    <span className="text-lg font-semibold text-purple-700">${performance.aov.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
                </div>
            </div>
        </div>
    );
}
