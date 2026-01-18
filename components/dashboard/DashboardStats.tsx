'use client'

import { DollarSign, TrendingUp, TrendingDown, AlertCircle } from 'lucide-react'

const stats = [
  {
    name: 'Total Cash Flow',
    value: '₹127,450',
    change: '+12.5%',
    changeType: 'positive',
    icon: DollarSign,
  },
  {
    name: 'Active Projects',
    value: '8',
    change: '+2',
    changeType: 'positive',
    icon: TrendingUp,
  },
  {
    name: 'Outstanding Invoices',
    value: '₹23,800',
    change: '-5.2%',
    changeType: 'negative',
    icon: AlertCircle,
  },
  {
    name: 'Budget Utilization',
    value: '68%',
    change: '+3%',
    changeType: 'neutral',
    icon: TrendingDown,
  },
]

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <div
          key={stat.name}
          className="bg-white rounded-lg shadow p-6 border border-gray-200"
        >
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-600">{stat.name}</p>
              <p className="mt-2 text-3xl font-bold text-gray-900">{stat.value}</p>
              <div className="mt-2 flex items-center">
                <span
                  className={`text-sm font-medium ${
                    stat.changeType === 'positive'
                      ? 'text-green-600'
                      : stat.changeType === 'negative'
                      ? 'text-red-600'
                      : 'text-gray-600'
                  }`}
                >
                  {stat.change}
                </span>
                <span className="ml-2 text-sm text-gray-500">vs last month</span>
              </div>
            </div>
            <div className="ml-4">
              <stat.icon
                className={`h-8 w-8 ${
                  stat.changeType === 'positive'
                    ? 'text-green-500'
                    : stat.changeType === 'negative'
                    ? 'text-red-500'
                    : 'text-gray-500'
                }`}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
