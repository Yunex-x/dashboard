"use client";
import {
  BarChart,
  Bar,
  LabelList,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    day: "Sat",
    Diposit: 500,
    Withdraw: 200,
  },
  {
    day: "Sun",
    Diposit: 400,
    Withdraw: 100,
  },
  {
    day: "Mon",
    Diposit: 450,
    Withdraw: 180,
  },
  {
    day: "Tue",
    Diposit: 500,
    Withdraw: 320,
  },
  {
    day: "Wed",
    Diposit: 350,
    Withdraw: 250,
  },
  {
    day: "Thu",
    Diposit: 470,
    Withdraw: 300,
  },
  {
    day: "Fri",
    Diposit: 430,
    Withdraw: 290,
  },
];

export default function WeeklyActivityChart() {
  return (
    <section className="w-[730px] min-h-[367px] rounded-[25px] bg-[#F3F6FB] p-6">
      <div className="flex items-center justify-between px-2 mb-4">
        <h2 className="font-semibold text-[22px] leading-[27px] text-[#343C6A]">Weekly Activity</h2>
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2">
            <span className="inline-block w-[15px] h-[15px] rounded-full bg-[#16DBCC]"></span>
            <span className="text-[15px] text-[#718EBF]">Diposit</span>
          </span>
          <span className="flex items-center gap-2">
            <span className="inline-block w-[15px] h-[15px] rounded-full bg-[#FF82AC]"></span>
            <span className="text-[15px] text-[#718EBF]">Withdraw</span>
          </span>
        </div>
      </div>
      <div className="bg-white rounded-[25px] w-full h-[322px] px-6 pt-6 pb-2">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            barSize={18}
            maxBarSize={22}
            margin={{ top: 15, right: 18, left: 14, bottom: 24 }}
          >
            <CartesianGrid stroke="#F3F3F5" vertical={false} />
            <XAxis
              dataKey="day"
              tick={{ fontSize: 13, fill: "#718EBF", fontFamily: "Inter" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 13, fill: "#718EBF", fontFamily: "Inter" }}
              axisLine={false}
              tickLine={false}
              domain={[0, 500]}
              ticks={[0, 100, 200, 300, 400, 500]}
              width={38}
            />
            <Tooltip
              contentStyle={{
                background: "#fff",
                borderRadius: 12,
                fontSize: 14,
                fontFamily: "Inter",
                color: "#232323",
                border: "1px solid #DFEAF2",
                boxShadow: "0 2px 8px #e6eff5",
              }}
              cursor={{ fill: "#E6EFF5" }}
            />
            <Legend
              wrapperStyle={{ fontSize: 14, color: "#718EBF", fontFamily: "Inter" }}
              iconType="circle"
              align="right"
              verticalAlign="top"
            />
            <Bar
              dataKey="Diposit"
              fill="#1814F3"
              radius={[30, 30, 0, 0]}
              className="rounded-t-2xl"
            >
              <LabelList dataKey="Diposit" style={{ display: "none" }} />
            </Bar>
            <Bar
              dataKey="Withdraw"
              fill="#16DBCC"
              radius={[30, 30, 0, 0]}
              className="rounded-t-2xl"
            >
              <LabelList dataKey="Withdraw" style={{ display: "none" }} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}