import PerformanceChart from "@/app/components/performance/PerformanceChart";
import PerformanceMetrics from "@/app/components/performance/PerformanceMetrics";
import PerformanceSummary from "@/app/components/performance/PerformanceSummary";

export default function PerformancePage() {
    return (
        <div className=" min-h-screen flex flex-col items-center">
            <div className="w-full max-w-5xl px-4 py-10 flex flex-col gap-8">
                <h1 className="text-[28px] font-bold text-[#0F172A] mb-2 tracking-tight">Performance</h1>
                <PerformanceSummary />
                <PerformanceMetrics />
                <PerformanceChart />
            </div>
        </div>
    );
}