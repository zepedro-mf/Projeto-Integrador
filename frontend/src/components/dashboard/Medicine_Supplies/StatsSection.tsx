import { Pill, Package, AlertTriangle, Box } from "lucide-react"
import StatCard from "../StatCard.tsx"

export default function StatsSection() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Medicine Stock Level"
        value="85%"
        change="+3.2% vs last week"
        positive
        icon={<Pill className="text-blue-600 w-6 h-6" />}
        bg="bg-blue-100"
      />

      <StatCard
        title="Supplies Inventory"
        value="1,845"
        change="-5.4% vs last week"
        positive={false}
        icon={<Package className="text-purple-600 w-6 h-6" />}
        bg="bg-purple-100"
      />

      <StatCard
        title="Expiry Alerts"
        value="23"
        change="+12.5% vs last week"
        positive
        icon={<AlertTriangle className="text-red-600 w-6 h-6" />}
        bg="bg-red-100"
      />

      <StatCard
        title="Reorder Required"
        value="8"
        change="-15.2% vs last week"
        positive={false}
        icon={<Box className="text-orange-600 w-6 h-6" />}
        bg="bg-orange-100"
      />
    </div>
  )
}