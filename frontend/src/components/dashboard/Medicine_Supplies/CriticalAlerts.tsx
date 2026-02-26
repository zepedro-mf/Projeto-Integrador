export default function CriticalAlerts() {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 h-full">
      <h2 className="text-lg font-semibold mb-6">
        Critical Alerts
      </h2>

      <div className="space-y-4">
        <div className="p-4 rounded-xl bg-red-50">
          <p className="font-medium">
            45 units of Insulin expiring in 5 days
          </p>
          <p className="text-sm text-gray-500">
            10 mins ago
          </p>
        </div>

        <div className="p-4 rounded-xl bg-yellow-50">
          <p className="font-medium">
            Low stock: Antibiotics-A below reorder level
          </p>
          <p className="text-sm text-gray-500">
            1 hour ago
          </p>
        </div>

        <div className="p-4 rounded-xl bg-blue-50">
          <p className="font-medium">
            Monthly inventory audit scheduled
          </p>
          <p className="text-sm text-gray-500">
            3 hours ago
          </p>
        </div>
      </div>
    </div>
  )
}