import StatsSection from "./Medicine_Supplies/StatsSection"
import ChartsSection from "./Medicine_Supplies/ChartsSection"
import MonitoringSection from "./Medicine_Supplies/MonitoringSection"

export default function MedicineDashboard() {
  return (
    <div className="space-y-8">
      <StatsSection />
      <ChartsSection />
      <MonitoringSection />
    </div>
  )
}