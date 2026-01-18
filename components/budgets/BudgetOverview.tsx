'use client'

import { AlertTriangle, TrendingUp, TrendingDown } from 'lucide-react'

interface BudgetItem {
  project: string
  category: string
  budget: number
  spent: number
  forecast: number
  utilization: number
  status: 'ok' | 'warning' | 'critical'
}

const budgetItems: BudgetItem[] = [
  {
    project: 'Peru Archaeological Research',
    category: 'Lodging',
    budget: 15000,
    spent: 12500,
    forecast: 14800,
    utilization: 83,
    status: 'warning',
  },
  {
    project: 'Tokyo Cultural Study',
    category: 'Flights',
    budget: 12000,
    spent: 11500,
    forecast: 13000,
    utilization: 96,
    status: 'critical',
  },
  {
    project: 'Sahara Desert Expedition',
    category: 'Food & Meals',
    budget: 10000,
    spent: 6500,
    forecast: 9800,
    utilization: 65,
    status: 'ok',
  },
]

export default function BudgetOverview() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'critical':
        return 'bg-red-100 text-red-800 border-red-200'
      case 'warning':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      default:
        return 'bg-green-100 text-green-800 border-green-200'
    }
  }

  return (
    <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Budget Overview by Category</h2>
      <div className="space-y-4">
        {budgetItems.map((item, idx) => (
          <div key={idx} className="border rounded-lg p-4">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-medium text-gray-900">{item.category}</h3>
                <p className="text-sm text-gray-600">{item.project}</p>
              </div>
              {item.status === 'critical' && (
                <AlertTriangle className="h-5 w-5 text-red-600" />
              )}
              {item.status === 'warning' && (
                <AlertTriangle className="h-5 w-5 text-yellow-600" />
              )}
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Budget vs Spent</span>
                <span className="font-medium">
                  ₹{item.spent.toLocaleString()} / ₹{item.budget.toLocaleString()}
                </span>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${
                    item.utilization < 80
                      ? 'bg-green-500'
                      : item.utilization < 95
                      ? 'bg-yellow-500'
                      : 'bg-red-500'
                  }`}
                  style={{ width: `${Math.min(item.utilization, 100)}%` }}
                />
              </div>

              <div className="flex justify-between items-center text-xs">
                <div className="flex items-center text-gray-500">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  Forecast: ₹{item.forecast.toLocaleString()}
                </div>
                <span className={`px-2 py-1 rounded ${getStatusColor(item.status)}`}>
                  {item.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
