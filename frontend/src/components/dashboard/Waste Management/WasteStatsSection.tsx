import StatCard from "../StatCard.tsx"
import { Trash2, AlertTriangle, Activity, TrendingUp } from "lucide-react"

export default function WasteStatsSection() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      
      <StatCard
        title="Total Waste"
        value="480 kg"
        change="Current month"
        positive
        icon={<Trash2 className="w-6 h-6 text-slate-700" />}
        bg="bg-slate-100"
      />

      <StatCard
        title="Hazardous Waste"
        value="54%"
        change="257 kg of total waste"
        positive
        icon={<AlertTriangle className="w-6 h-6 text-slate-700" />}
        bg="bg-slate-100"
      />

      <StatCard
        title="Top Department"
        value="Operating Room"
        change="145 kg/day"
        positive
        icon={<Activity className="w-6 h-6 text-slate-700" />}
        bg="bg-slate-100"
      />

      <StatCard
        title="Monthly Variation"
        value="+3.4%"
        change="vs previous month"
        positive
        icon={<TrendingUp className="w-6 h-6 text-slate-700" />}
        bg="bg-slate-100"
      />
    </div>
  )
}