
import { Creditcard } from "@/app/components/creditcard";
import ExpenseStatisticsChart from "@/app/components/ExpenseStatisticsChart";
import RecentTransaction from "@/app/components/RecentTransaction";
import Sidebar from "@/app/components/sidebar";
import Topbar from "@/app/components/topbar";
import WeeklyActivityChart from "@/app/components/WeeklyActivityChart";

export default function DashboardPage() {
    return (
        <main className="w-full min-h-screen flex bg-[#F5F7FA]">
            <Sidebar />
            <Topbar />
            <div className=" w-full flex flex-cols py-31.25  px-75 ">

                <Creditcard />
                <RecentTransaction />
                <WeeklyActivityChart />
                <ExpenseStatisticsChart />
            </div>


        </main>
    )
};
