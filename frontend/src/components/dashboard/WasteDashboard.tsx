import WasteStatsSection from "./Waste Management/WasteStatsSection"
import WasteChartsSection from "./Waste Management/WasteChartsSection"

export default function WasteDashboard() {
  return (
    <div className="space-y-8">
      <WasteStatsSection />
      <WasteChartsSection />
    </div>
  )
}