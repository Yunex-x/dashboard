import { Settings, Bell, Search } from "lucide-react";

export default function Header() {
  return (
    <header className="absolute z-10 top-0 left-0 w-screen bg-white  flex flex-col ">
      <div className=" w-screen mx-auto h-[100px] flex items-center justify-between px-10">
        {/* Logo */}
        <div className="flex   min-w-[183px] h-9 ">
          <span className="ml-2.5 font-black text-[25px] leading-8 text-[#343C6A] font-['Mont',_Inter,_sans-serif]">
            Dashboard
          </span>
        </div>
        {/* Overview Title */}
        <h1 className="font-semibold text-[28px] leading-[34px] text-[#343C6A] mx-10 ">
          Overview
        </h1>
        {/* Search */}
        <div className="bg-[#F5F7FA] rounded-full h-[50px] flex items-center px-5 gap-3 mr-14">
          <Search className="text-[#718EBF] w-5 h-5" />
          <input
            className="bg-transparent outline-none border-none font-inter text-[15px] text-[#8BA3CB] placeholder-[#8BA3CB] w-[160px]"
            placeholder="Search for something"
          />
        </div>
        {/* Actions */}
        <div className="flex items-center gap-5">
          <div className="w-[50px] h-[50px] rounded-full bg-[#F5F7FA] flex items-center justify-center">
            <Settings size={25} className="text-[#718EBF]" />
          </div>
          <div className="w-[50px] h-[50px] rounded-full bg-[#F5F7FA] flex items-center justify-center relative">
            <Bell size={25} className="text-[#FE5C73]" />
            <span className="absolute top-3.5 right-3 w-2 h-2 bg-[#FE5C73] rounded-full border-2 border-white"></span>
          </div>
          <div className="w-[60px] h-[60px] rounded-full bg-[#C4C4C4] overflow-hidden flex items-center justify-center">
            <img
              className="w-full h-full object-cover"
              src="/pexels-christina-morillo-1181690.jpg"
              alt="profile"
            />
          </div>
        </div>
      </div>
      {/* Divider below header */}
      <div className="w-[calc(100%-250px)] ml-[250px] h-px bg-[#E6EFF5]" />
    </header>
  );
}