import PerformanceChart from "@/app/components/PerformanceChart";
import PerformanceMetrics from "@/app/components/PerformanceMetrics";
import PerformanceSummary from "@/app/components/PerformanceSummary";

export default function PerformancePage() {
    return (
        <div className="p-8 flex flex-col gap-8">
            <h1 className="text-3xl font-bold mb-4">Performance</h1>
            <PerformanceSummary />
            <PerformanceMetrics />
            <PerformanceChart />
        </div>
    );
}
