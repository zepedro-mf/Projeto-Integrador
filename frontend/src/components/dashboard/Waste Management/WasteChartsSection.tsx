import WasteDistributionChart from "./WasteDistributionChart"
import WasteEvolutionChart from "./WasteEvolutionChart"

export default function WasteChartsSection() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <WasteDistributionChart />
      <WasteEvolutionChart />
    </div>
  )
}