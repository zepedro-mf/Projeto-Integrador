import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts"

const data = [
  { month: "Jan", waste: 450 },
  { month: "Feb", waste: 470 },
  { month: "Mar", waste: 455 },
  { month: "Apr", waste: 480 },
  { month: "May", waste: 465 },
  { month: "Jun", waste: 490 },
]

export default function WasteEvolutionChart() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
      <h2 className="text-lg font-semibold mb-6">
        Waste Evolution Over Time
      </h2>

      <LineChart width={500} height={300} data={data}>
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />

        <Line
          type="monotone"
          dataKey="waste"
          stroke="#3b82f6"
          strokeWidth={2}
        />
      </LineChart>
    </div>
  )
}