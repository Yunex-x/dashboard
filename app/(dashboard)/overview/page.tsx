import KpiCardsRow from "@/app/components/kpi-card";
import RevenueChart from "@/app/components/revenue";
import TransactionsTable from "@/app/components/transactions";

export default function OverviewPage() {
    return (
        <div className="bg-[#F5F8FF] min-h-screen flex flex-col items-center">
            <div className="w-full max-w-5xl px-4 py-10 flex flex-col gap-8">
                <h1 className="text-[28px] font-bold text-[#0F172A] mb-2 tracking-tight">Overview</h1>
                <KpiCardsRow />
                <RevenueChart />
                <TransactionsTable transactions={[]} />
            </div>
        </div>
    );
}