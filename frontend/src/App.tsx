import { useState } from "react"
import Header from "./components/dashboard/Header"
import MedicineDashboard from "./components/dashboard/MedicineDashboard"
import WasteDashboard from "./components/dashboard/WasteDashboard"

function App() {
  const [activeTab, setActiveTab] = useState("medicine")

  return (
    <div className="min-h-screen bg-slate-100">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="p-8">
        {activeTab === "medicine" && <MedicineDashboard />}
        {activeTab === "waste" && <WasteDashboard />}
        {activeTab === "smart" && <div>Smart Bin Content</div>}
      </div>
    </div>
  )
}

export default App