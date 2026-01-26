"use client";
import { BarChart, Bar, XAxis, ResponsiveContainer, LabelList, Tooltip,  Cell } from "recharts";

const data = [
  { name: "Aug", value: 93, fill: "#EDF0F7" },
  { name: "Sep", value: 142, fill: "#EDF0F7" },
  { name: "Oct", value: 96, fill: "#EDF0F7" },
  { name: "Nov", value: 49, fill: "#EDF0F7" },
  { name: "Dec", value: 129, fill: "#16DBCC", shadow: true },
  { name: "Jan", value: 88, fill: "#EDF0F7" },
];
const barSize = 37;

export default function RecentBalanceBar() {
  return (
    <section className="w-[350px] min-h-[225px] bg-[#F3F6FB] rounded-[18px] p-3 flex flex-col gap-3">
      <div className="bg-white rounded-[25px] w-full h-[225px] flex flex-col relative pb-3">
        {/* Highlighted balance label */}
        <div className="absolute right-3 top-4 z-10 font-medium text-[#343C6A] text-[14px] text-center">
          $12,500
        </div>
        <ResponsiveContainer width="99%" height={170}>
          <BarChart
            data={data}
            margin={{ top: 20, right: 0, left: 0, bottom: 0 }}
            barCategoryGap="20%"
          >
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 13, fill: "#718EBF", fontFamily: "Inter" }}
            />
            <Tooltip
              cursor={{ fill: "#EDF0F7" }}
              contentStyle={{
                background: "#fff",
                border: "1px solid #E5E9F2",
                borderRadius: "10px",
                fontFamily: "Inter",
                fontSize: 14,
                color: "#343C6A",
              }}
            />
            <Bar
              dataKey="value"
              radius={[10, 10, 10, 10]}
              isAnimationActive={false}
            >
              {data.map((entry, i) => (
                <Cell
                  key={entry.name}
                  fill={entry.fill}
                  stroke={entry.shadow ? "#16DBCC" : undefined}
                  filter={
                    entry.shadow
                      ? "drop-shadow(0px 0px 35px rgba(18, 136, 126, 0.2))"
                      : undefined
                  }
                />
              ))}
              <LabelList dataKey="value" content={() => null} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}