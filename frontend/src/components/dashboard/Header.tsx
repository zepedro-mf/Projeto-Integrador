import { Tabs, TabsList, TabsTrigger } from "../ui/tabs"

interface HeaderProps {
  activeTab: string
  setActiveTab: (value: string) => void
}

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  return (
    <div className="bg-white border-b border-slate-200 px-8 py-4 space-y-4">
      
      {/* Top Row */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold">
            Hospital Resource Management
          </h1>
          <p className="text-sm text-slate-500">
            Medicine, Supplies & Waste Control
          </p>
        </div>

        {/* Aqui podes manter ícones / perfil */}
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="bg-slate-100">
          <TabsTrigger value="medicine">Medicine & Supplies</TabsTrigger>
          <TabsTrigger value="waste">Waste Management</TabsTrigger>
          <TabsTrigger value="smart">Surgical Smart Bin</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  )
}