import { Card, CardContent } from "../ui/card"

interface StatCardProps {
  title: string
  value: string
  change: string
  positive?: boolean
  icon: React.ReactNode
  bg: string
}

export default function StatCard({
  title,
  value,
  change,
  positive,
  icon,
  bg,
}: StatCardProps) {
  return (
    <Card className="bg-white rounded-2xl shadow-sm">
      <CardContent className="flex items-center justify-between p-6">
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>
          <h2 className="text-3xl font-bold mt-2">{value}</h2>
          <p
            className={`text-sm mt-2 ${
              positive ? "text-green-600" : "text-red-600"
            }`}
          >
            {change}
          </p>
        </div>

        <div className={`${bg} p-4 rounded-xl`}>
          {icon}
        </div>
      </CardContent>
    </Card>
  )
}