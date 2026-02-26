import ExpiryChart from "./ExpiryChart"
import CriticalAlerts from "./CriticalAlerts"

export default function MonitoringSection() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <ExpiryChart />
      </div>

      <div>
        <CriticalAlerts />
      </div>
    </div>
  )
}