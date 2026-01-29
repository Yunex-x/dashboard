import { TransactionStatus } from "../types/transactions-summary";
export const transactionStatusBadge: Record<TransactionStatus, string> = {
  Completed: "bg-[#DCFCE7] text-[#22C55E]",
  Pending: "bg-[#FEF3C7] text-[#F59E0B]",
  Failed: "bg-[#FEE2E2] text-[#EF4444]",
};
