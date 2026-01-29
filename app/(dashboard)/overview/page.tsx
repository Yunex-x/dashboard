import KpiCardsRow from "@/app/components/overview/kpi-card";
import RevenueChart from "@/app/components/overview/RevenueChart";
import TransactionsTable from "@/app/components/transactions/transactions";

export default function OverviewPage() {
    return (
        <div className=" min-h-screen flex flex-col items-center">
            <div className="w-full max-w-5xl px-4 py-10 flex flex-col gap-8">
                <h1 className="text-[28px] font-bold text-[#0F172A] mb-2 tracking-tight">Overview</h1>
                <KpiCardsRow />
                <RevenueChart />
                <TransactionsTable transactions={[]} />
            </div>
        </div>
    );
}