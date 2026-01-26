
import { Creditcard } from "@/app/components/creditcard";
import RecentTransaction from "@/app/components/RecentTransaction";
import Sidebar from "@/app/components/sidebar";
import Topbar from "@/app/components/topbar";

export default function DashboardPage() {
  return (
    <main className="w-screen min-h-screen flex bg-[#F5F7FA]">
     <Sidebar />
     <Topbar/>
     <div className=" w-full flex justify-end bg-amber-400  pl-[250px] py-[101px] ">

     <Creditcard/>
    <RecentTransaction />
     </div>
    </main>
  );
}