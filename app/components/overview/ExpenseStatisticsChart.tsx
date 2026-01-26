"use client";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

const data = [
  { name: "Entertainment", value: 30, color: "#FC7900" },
  { name: "Investment", value: 20, color: "#1814F3" },
  { name: "Bill Expense", value: 15, color: "#343C6A" },
  { name: "Others", value: 35, color: "#FA00FF" },
];

const renderCustomLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}: any) => {
  const RADIAN = Math.PI / 180;
  // Calculate the position for the percentage text
  const radius = outerRadius * 0.75;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="#f"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      fontSize="16"
      fontWeight={700}
      fontFamily="Inter"
    >
      {`${data[index].value}%`}
    </text>
  );
};

export default function ExpenseStatisticsChart() {
  return (
    <section className="w-[800px] h-[450px]  rounded-[18px] p-5 flex flex-col gap-3">
      <h2 className="font-semibold text-[22px] leading-[27px] text-[#343C6A]">
        Expense Statistics
      </h2>
      <div className="bg-stone-200 rounded-[25px] px-4 py-2 w-full h-[400px] items-center justify-center">
        <ResponsiveContainer width="98%" height={210}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={54}
              outerRadius={90}
              labelLine={false}
              label={renderCustomLabel}
              dataKey="value"
              startAngle={90}
              endAngle={-270}
            >
              {data.map((entry, idx) => (
                <Cell key={`cell-${idx}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                background: "#343C6A",
                color: "#fff",
                borderRadius: "14px",
                border: "none",
                fontSize: 14,
                fontFamily: "Inter"
              }}
              formatter={(val: any, name: any, props: any) => [
                `${val}%`,
                data.find(d => d.name === name)?.name ?? name,
              ]}
            />
          </PieChart>
        </ResponsiveContainer>
        <div className="mt-2 w-full flex items-center gap-2">
          {data.map((entry) => (
            <div key={entry.name} className="flex items-center justify-center gap-2">
              <span
                className="inline-block w-3 h-3 rounded-full"
                style={{ backgroundColor: entry.color }}
              />
              <span
                className="font-bold text-[16px] text-white px-2 py-0.5 rounded"
                style={{ backgroundColor: entry.color }}
              >
                {`${entry.value}% ${entry.name}`}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}