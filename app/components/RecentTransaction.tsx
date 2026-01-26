import { CreditCard, ArrowDownCircle, RussianRuble } from "lucide-react";

export default function RecentTransaction() {
  return (
    <section className="w-[350px] min-h-[282px]  rounded-[18px] p-5 flex flex-col gap-4">
      <h2 className="font-semibold text-[22px] leading-[27px] text-[#343C6A] mb-2">
        Recent Transaction
      </h2>
      <div className="bg-white rounded-[25px] w-full min-h-[235px] flex flex-col py-4">
        {/* Transaction 1 */}
        <div className="flex items-center px-4 py-3 gap-3">
          <div className="w-[55px] h-[55px] rounded-full bg-[#FFF5D9] flex items-center justify-center">
            <CreditCard size={28} className="text-[#FFBB38]" />
          </div>
          <div className="flex-1">
            <div className="font-medium text-[#232323] text-[16px]">
              Deposit from my Card
            </div>
            <div className="text-[#718EBF] text-[15px]">28 January 2021</div>
          </div>
          <div className="text-right text-[#FF4B4A] font-medium text-[16px]">
            -$850
          </div>
        </div>
        {/* Transaction 2 */}
        <div className="flex items-center px-4 py-3 gap-3">
          <div className="w-[55px] h-[55px] rounded-full bg-[#E7EDFF] flex items-center justify-center">
            <RussianRuble size={28} className="text-[#396AFF]" />
          </div>
          <div className="flex-1">
            <div className="font-medium text-[#232323] text-[16px]">
              Deposit Paypal
            </div>
            <div className="text-[#718EBF] text-[15px]">25 January 2021</div>
          </div>
          <div className="text-right text-[#41D4A8] font-medium text-[16px]">
            +$2,500
          </div>
        </div>
        {/* Transaction 3 */}
        <div className="flex items-center px-4 py-3 gap-3">
          <div className="w-[55px] h-[55px] rounded-full bg-[#DCFAF8] flex items-center justify-center">
            <ArrowDownCircle size={28} className="text-[#16DBCC]" />
          </div>
          <div className="flex-1">
            <div className="font-medium text-[#232323] text-[16px]">Jemi Wilson</div>
            <div className="text-[#718EBF] text-[15px]">21 January 2021</div>
          </div>
          <div className="text-right text-[#41D4A8] font-medium text-[16px]">
            +$5,400
          </div>
        </div>
      </div>
    </section>
  );
}