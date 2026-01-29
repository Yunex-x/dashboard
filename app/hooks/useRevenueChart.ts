import { useEffect, useState } from "react";
import { getRevenues } from "@/app/services/RevenueChart";
import { Revenue } from "@/app/types/RevenueChart";

export function useRevenueChart() {
  const [data, setData] = useState<Revenue[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRevenues()
      .then((res) => {
        setData(res);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {
    data,
    loading,
  };
}
