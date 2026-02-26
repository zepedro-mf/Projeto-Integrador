import { PieChart, Pie, Cell, Tooltip } from "recharts"

const data = [
  { name: "Urban Waste", value: 125 },
  { name: "Hazardous", value: 98 },
  { name: "Infectious", value: 150 },
  { name: "Recyclable", value: 60 },
]

const COLORS = ["#10b981", "#ef4444", "#f59e0b", "#3b82f6"]

export default function WasteDistributionChart() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
      <h2 className="text-lg font-semibold mb-6">
        Waste Distribution by Category
      </h2>

      <PieChart width={350} height={300}>
        <Pie
          data={data}
          innerRadius={70}
          outerRadius={110}
          paddingAngle={3}
          dataKey="value"
        >
          {data.map((_, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>

        <Tooltip />
      </PieChart>
    </div>
  )
}