import { TransactionStatus } from "@/app/types/transaction";

export const transactionStatuses: TransactionStatus[] = [
  { label: "All", value: "all" },
  { label: "Paid", value: "Completed" },
  { label: "Pending", value: "Pending" },
  { label: "Failed", value: "Failed" },
];
