import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts"

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../../ui/chart"

const data = [
  { month: "Jan", usage: 1200, waste: 120 },
  { month: "Feb", usage: 900, waste: 80 },
  { month: "Mar", usage: 2200, waste: 200 },
  { month: "Apr", usage: 500, waste: 60 },
  { month: "May", usage: 350, waste: 40 },
  { month: "Jun", usage: 250, waste: 25 },
]

export default function UsageWasteChart() {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-6">
        Medical Supplies Usage vs Waste
      </h2>

      <ChartContainer
        config={{
          usage: {
            label: "Usage",
            color: "#10b981",
          },
          waste: {
            label: "Waste",
            color: "#ef4444",
          },
        }}
        className="h-[300px] w-full"
      >
        <BarChart data={data}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="month" />
          <YAxis />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent />}
          />

          <Bar
            dataKey="usage"
            fill="var(--color-usage)"
            radius={[6, 6, 0, 0]}
          />

          <Bar
            dataKey="waste"
            fill="var(--color-waste)"
            radius={[6, 6, 0, 0]}
          />
        </BarChart>
      </ChartContainer>
    </div>
  )
}