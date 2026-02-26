import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const data = [
  { name: "Anesthetics", days: 12 },
  { name: "Vaccines", days: 8 },
  { name: "IV Solutions", days: 15 },
  { name: "Sterile Gauze", days: 6 },
  { name: "Antibiotics-A", days: 4 },
  { name: "Insulin Vials", days: 5 },
]



export default function ExpiryChart() {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 h-full">
      <h2 className="text-lg font-semibold mb-6">
        Items Nearing Expiry (Days Remaining)
      </h2>

      <div className="h-[260px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical">
            <XAxis type="number" />
            <YAxis type="category" dataKey="name" width={80} tick={{ fontSize: 13 }}/>
            <Tooltip />
            <Bar dataKey="days" fill="#2563eb" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}