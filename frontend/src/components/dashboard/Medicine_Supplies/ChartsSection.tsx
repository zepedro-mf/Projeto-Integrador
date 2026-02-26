import InventoryChart from "./InventoryChart"
import UsageWasteChart from "./UsageWasteChart"

export default function ChartsSection() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <InventoryChart />
      <UsageWasteChart />
    </div>
  )
}