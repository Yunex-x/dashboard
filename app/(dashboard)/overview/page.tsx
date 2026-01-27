import KpiCardsRow from "@/app/components/kpi-card";
import RevenueChart from "@/app/components/revenue";
import TransactionsTable from "@/app/components/transactions";

export default function OverviewPage() {
    return (
        <div className="p-8 flex flex-col gap-8">
            <h1 className="text-3xl font-bold mb-4">Overview</h1>
            <KpiCardsRow />
            <RevenueChart />
            <TransactionsTable transactions={[]} />
        </div>
    );
}
