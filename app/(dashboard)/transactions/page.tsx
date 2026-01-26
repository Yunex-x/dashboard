
import { Creditcard } from "@/app/components/overview/creditcard";
import Sidebar from "@/app/components/layout/sidebar";
import Topbar from "@/app/components/layout/topbar";
import RecentBalanceBar from "@/app/components/transactions/RecentBalanceBar";
import RecentTransactionsTable from "@/app/components/transactions/RecentTransactionsTable";

export default function DashboardPage() {
    return (
        <main className="w-full min-h-screen flex bg-[#F5F7FA]">
            <Sidebar />
            <Topbar />
            <div className=" w-full flex justify-between py-31.25  px-75 ">
                <div className="flex flex-col gap-3">

                    <Creditcard />
                    <RecentBalanceBar />
            <div className=" w-full  flex justify-end ">

                    <RecentTransactionsTable/>
            </div>
                </div>
               

            </div>


        </main>
    )
};
