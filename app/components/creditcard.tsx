import Link from "next/link";

export function Creditcard() {
  return (
    <section className=" h-[282px] w-[730px]">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-[22px] font-semibold leading-[27px] text-[#343C6A]">
          My Cards
        </h2>

        <Link
          href="/credit-cards"
          className="text-[17px] font-semibold leading-[21px] text-[#343C6A]"
        >
          See All
        </Link>
      </div>

      {/* Cards */}
      <div className="mt-[20px] flex gap-[30px]">
        {/* Card 1 (Blue) */}
        <div className="relative w-[350px] h-[235px]">
          <div className="absolute inset-0 rounded-[25px] bg-gradient-to-br from-[#4C49ED] to-[#0A06F4]" />

          <div className="absolute left-[26px] top-[24px] right-[24px] flex items-start justify-between">
            <div>
              <p className="font-[Lato] text-[12px] leading-[14px] text-white">
                Balance
              </p>
              <p className="mt-[4px] font-[Lato] text-[20px] font-semibold leading-[24px] text-white">
                $5,756
              </p>
            </div>

            <div className="w-[34.77px] h-[34.77px] rounded-[8px] bg-white/20" />
          </div>

          <div className="absolute left-[26px] top-[95px] right-[24px] flex justify-between">
            <div>
              <p className="font-[Lato] text-[12px] leading-[14px] text-white/70">
                CARD HOLDER
              </p>
              <p className="mt-[3px] font-[Lato] text-[15px] font-semibold leading-[18px] text-white">
                Eddy Cusuma
              </p>
            </div>

            <div>
              <p className="font-[Lato] text-[12px] leading-[14px] text-white/70">
                VALID THRU
              </p>
              <p className="mt-[3px] font-[Lato] text-[15px] font-semibold leading-[18px] text-white">
                12/22
              </p>
            </div>
          </div>

          <div className="absolute left-0 bottom-0 w-full h-[70px] rounded-b-[25px] bg-gradient-to-b from-white/15 to-white/0">
            <div className="absolute left-[26px] top-[22px] right-[24px] flex items-center justify-between">
              <p className="font-[Lato] text-[22px] font-semibold leading-[26px] text-white">
                3778 **** **** 1234
              </p>

              <div className="relative w-[44px] h-[30px]">
                <div className="absolute left-0 top-0 w-[30px] h-[30px] rounded-full bg-white/50" />
                <div className="absolute left-[14px] top-0 w-[30px] h-[30px] rounded-full bg-white/50" />
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 (White) */}
        <div className="relative w-[350px] h-[235px]">
          <div className="absolute inset-0 rounded-[25px] bg-white border border-[#DFEAF2]" />

          <div className="absolute left-[26px] top-[24px] right-[24px] flex items-start justify-between">
            <div>
              <p className="font-[Lato] text-[12px] leading-[14px] text-[#718EBF]">
                Balance
              </p>
              <p className="mt-[4px] font-[Lato] text-[20px] font-semibold leading-[24px] text-[#343C6A]">
                $5,756
              </p>
            </div>

            <div className="w-[34.77px] h-[34.77px] rounded-[8px] bg-[#DFEAF2]" />
          </div>

          <div className="absolute left-[26px] top-[95px] right-[24px] flex justify-between">
            <div>
              <p className="font-[Lato] text-[12px] leading-[14px] text-[#718EBF]">
                CARD HOLDER
              </p>
              <p className="mt-[3px] font-[Lato] text-[15px] font-semibold leading-[18px] text-[#343C6A]">
                Eddy Cusuma
              </p>
            </div>

            <div>
              <p className="font-[Lato] text-[12px] leading-[14px] text-[#718EBF]">
                VALID THRU
              </p>
              <p className="mt-[3px] font-[Lato] text-[15px] font-semibold leading-[18px] text-[#343C6A]">
                12/22
              </p>
            </div>
          </div>

          <div className="absolute left-0 bottom-0 w-full h-[70px] rounded-b-[25px] border-t border-[#DFEAF2]">
            <div className="absolute left-[26px] top-[22px] right-[24px] flex items-center justify-between">
              <p className="font-[Lato] text-[22px] font-semibold leading-[26px] text-[#343C6A]">
                3778 **** **** 1234
              </p>

              <div className="relative w-[44px] h-[30px]">
                <div className="absolute left-0 top-0 w-[30px] h-[30px] rounded-full bg-[#9199AF]/50" />
                <div className="absolute left-[14px] top-0 w-[30px] h-[30px] rounded-full bg-[#9199AF]/50" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
