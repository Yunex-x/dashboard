type BankCardProps = {
  variant?: "blue" | "white";
};

export function BankCard({ variant = "blue" }: BankCardProps) {
  const isBlue = variant === "blue";

  return (
    <div className="relative w-[350px] h-[235px]">
      {/* Background */}
      <div
        className={[
          "absolute inset-0 rounded-[25px]",
          isBlue
            ? "bg-gradient-to-br from-[#4C49ED] to-[#0A06F4]"
            : "bg-white border border-[#DFEAF2]",
        ].join(" ")}
      />

      {/* Top */}
      <div className="absolute left-[26px] top-[24px] right-[24px] flex items-start justify-between">
        <div>
          <p
            className={[
              "font-[Lato] text-[12px] leading-[14px]",
              isBlue ? "text-white" : "text-[#718EBF]",
            ].join(" ")}
          >
            Balance
          </p>

          <p
            className={[
              "mt-[4px] font-[Lato] text-[20px] font-semibold leading-[24px]",
              isBlue ? "text-white" : "text-[#343C6A]",
            ].join(" ")}
          >
            $5,756
          </p>
        </div>

        {/* Chip placeholder */}
        <div
          className={[
            "w-[34.77px] h-[34.77px] rounded-[8px]",
            isBlue ? "bg-white/20" : "bg-[#DFEAF2]",
          ].join(" ")}
        />
      </div>

      {/* Holder + Valid */}
      <div className="absolute left-[26px] top-[95px] right-[24px] flex justify-between">
        <div>
          <p
            className={[
              "font-[Lato] text-[12px] leading-[14px]",
              isBlue ? "text-white/70" : "text-[#718EBF]",
            ].join(" ")}
          >
            CARD HOLDER
          </p>

          <p
            className={[
              "mt-[3px] font-[Lato] text-[15px] font-semibold leading-[18px]",
              isBlue ? "text-white" : "text-[#343C6A]",
            ].join(" ")}
          >
            Eddy Cusuma
          </p>
        </div>

        <div>
          <p
            className={[
              "font-[Lato] text-[12px] leading-[14px]",
              isBlue ? "text-white/70" : "text-[#718EBF]",
            ].join(" ")}
          >
            VALID THRU
          </p>

          <p
            className={[
              "mt-[3px] font-[Lato] text-[15px] font-semibold leading-[18px]",
              isBlue ? "text-white" : "text-[#343C6A]",
            ].join(" ")}
          >
            12/22
          </p>
        </div>
      </div>

      {/* Bottom strip */}
      <div
        className={[
          "absolute left-0 bottom-0 w-full h-[70px] rounded-b-[25px]",
          isBlue
            ? "bg-gradient-to-b from-white/15 to-white/0"
            : "border-t border-[#DFEAF2]",
        ].join(" ")}
      >
        <div className="absolute left-[26px] top-[22px] right-[24px] flex items-center justify-between">
          <p
            className={[
              "font-[Lato] text-[22px] font-semibold leading-[26px]",
              isBlue ? "text-white" : "text-[#343C6A]",
            ].join(" ")}
          >
            3778 **** **** 1234
          </p>

          <div className="relative w-[44px] h-[30px]">
            <div
              className={[
                "absolute left-0 top-0 w-[30px] h-[30px] rounded-full",
                isBlue ? "bg-white/50" : "bg-[#9199AF]/50",
              ].join(" ")}
            />
            <div
              className={[
                "absolute left-[14px] top-0 w-[30px] h-[30px] rounded-full",
                isBlue ? "bg-white/50" : "bg-[#9199AF]/50",
              ].join(" ")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
