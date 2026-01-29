import { useState } from "react";

export function useTransactionsFilter(
  onChange?: (status: string) => void
) {
  const [selected, setSelected] = useState("all");

  const selectStatus = (value: string) => {
    setSelected(value);
    onChange?.(value);
  };

  return {
    selected,
    selectStatus,
  };
}
