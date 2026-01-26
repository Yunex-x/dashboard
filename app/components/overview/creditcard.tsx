import Link from "next/link";
import { BankCard } from "./bankcard";

export function Creditcard() {
  return (
    <section className="h-[282px] w-[730px]">
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
        <BankCard variant="blue" />
        <BankCard variant="white" />
      </div>
    </section>
  );
}
