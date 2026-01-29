import { useEffect, useState } from "react";
import { getKpis } from "@/app/services/kpi";
import { Kpi } from "@/app/types/kpi";

export type KpiUI = Omit<Kpi, "icon"> & {
  icon: string;
};

export function useKpis() {
  const [kpis, setKpis] = useState<KpiUI[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getKpis()
      .then((data: Kpi[]) => {
        const mapped: KpiUI[] = data.map(({ icon, ...rest }) => ({
          ...rest,
          icon: typeof icon === "string" ? icon : "",
        }));
        setKpis(mapped);
      })
      .finally(() => setLoading(false));
  }, []);

  return {
    kpis,
    loading,
  };
}
