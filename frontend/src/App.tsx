import Header from "./components/dashboard/Header"
import StatsSection from "./components/dashboard/StatsSection"
import ChartsSection from "./components/dashboard/ChartsSection"
import MonitoringSection from "./components/dashboard/MonitoringSection"

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="sticky top-0 z-50 bg-gray-100 p-8 pb-4">
        <Header />
      </div>
      <div className="p-8 pt-4 space-y-8">
        <StatsSection />
        <ChartsSection />
        <MonitoringSection />
      </div>
    </div>
  )
}

export default App