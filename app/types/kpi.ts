import React from "react";

export interface Kpi {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  change?: string;
}
