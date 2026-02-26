import {
  LineChart,
  Line,
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
  { month: "Monday", antibiotics: 680, painkillers: 450, vaccines: 300, surgicalSupplies: 200 },
  { month: "Tuesday", antibiotics: 650, painkillers: 420, vaccines: 280, surgicalSupplies: 180 },
  { month: "Wednesday", antibiotics: 620, painkillers: 380, vaccines: 260, surgicalSupplies: 160 },
  { month: "Thursday", antibiotics: 590, painkillers: 350, vaccines: 240, surgicalSupplies: 140 },
  { month: "Friday", antibiotics: 560, painkillers: 310, vaccines: 220, surgicalSupplies: 120 },
  { month: "Saturday", antibiotics: 520, painkillers: 270, vaccines: 200, surgicalSupplies: 100 },
  { month: "Sunday", antibiotics: 480, painkillers: 230, vaccines: 180, surgicalSupplies: 80 }
]

export default function InventoryChart() {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-6">
        Medicine Inventory Levels (Units)
      </h2>

      <ChartContainer
        config={{
            antibiotics: {
            label: "Antibiotics",
            color: "#d41a1a",
            },
            vaccines: {
            label: "Vaccines",
            color: "#19d41f",
            },
            painkillers: {
            label: "Painkillers",
            color: "#2a27e9",
            },
            surgicalSupplies: {
            label: "Surgical Supplies",
            color: "#f4b52f",
            },

        }}
        className="h-[300px] w-full"
        >
        <LineChart data={data}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="month" />
            <YAxis />
            <ChartTooltip content={<ChartTooltipContent />} />

            <Line
            type="monotone"
            dataKey="antibiotics"
            stroke="#d41a1a"
            strokeWidth={2}
            />

            <Line
            type="monotone"
            dataKey="vaccines"
            stroke="#19d41f"
            strokeWidth={2}
            />

            <Line
            type="monotone"
            dataKey="painkillers"
            stroke="#2a27e9"
            strokeWidth={2}
            />

            <Line
            type="monotone"
            dataKey="surgicalSupplies"
            stroke="#f4b52f"
            strokeWidth={2}
            />

        </LineChart>
        </ChartContainer>
    </div>
  )
}