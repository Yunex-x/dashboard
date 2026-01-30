import Sidebar from "../components/layout/sidebar";
import Header from "../components/layout/header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen  bg-[#F5F8FF]">
      <Sidebar />
      <div className="flex flex-1 flex-col min-h-screen">
        <Header />
        <main className="  pl-2 md:pl-60  ">{children}</main>
      </div>
    </div>
  );
}
