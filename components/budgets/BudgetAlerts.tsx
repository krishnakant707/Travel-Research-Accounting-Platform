'use client'

import { AlertTriangle, Bell, X } from 'lucide-react'

interface Alert {
  id: string
  type: 'threshold' | 'forecast' | 'overspend'
  project: string
  category: string
  message: string
  severity: 'high' | 'medium' | 'low'
}

const alerts: Alert[] = [
  {
    id: '1',
    type: 'threshold',
    project: 'Tokyo Cultural Study',
    category: 'Flights',
    message: 'Budget utilization at 96% - approaching limit',
    severity: 'high',
  },
  {
    id: '2',
    type: 'forecast',
    project: 'Peru Archaeological Research',
    category: 'Lodging',
    message: 'Forecast suggests 3% overspend based on current trends',
    severity: 'medium',
  },
  {
    id: '3',
    type: 'threshold',
    project: 'Sahara Desert Expedition',
    category: 'Permits & Guides',
    message: '80% of budget used - monitor for next 2 weeks',
    severity: 'low',
  },
]

export default function BudgetAlerts() {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'bg-red-50 border-red-200'
      case 'medium':
        return 'bg-yellow-50 border-yellow-200'
      default:
        return 'bg-blue-50 border-blue-200'
    }
  }

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'high':
        return <AlertTriangle className="h-5 w-5 text-red-600" />
      case 'medium':
        return <AlertTriangle className="h-5 w-5 text-yellow-600" />
      default:
        return <Bell className="h-5 w-5 text-blue-600" />
    }
  }

  return (
    <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <Bell className="h-6 w-6 text-primary-600 mr-2" />
          <h2 className="text-xl font-semibold text-gray-900">Budget Alerts & Notifications</h2>
        </div>
        <span className="px-3 py-1 text-sm font-medium bg-red-100 text-red-800 rounded-full">
          {alerts.length} active
        </span>
      </div>

      <div className="space-y-3">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className={`border rounded-lg p-4 ${getSeverityColor(alert.severity)}`}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-3 flex-1">
                <div className="mt-0.5">{getSeverityIcon(alert.severity)}</div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="font-medium text-gray-900">{alert.project}</span>
                    <span className="text-xs px-2 py-0.5 bg-white/50 rounded">{alert.category}</span>
                    <span
                      className={`text-xs px-2 py-0.5 rounded ${
                        alert.severity === 'high'
                          ? 'bg-red-200 text-red-900'
                          : alert.severity === 'medium'
                          ? 'bg-yellow-200 text-yellow-900'
                          : 'bg-blue-200 text-blue-900'
                      }`}
                    >
                      {alert.severity}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700">{alert.message}</p>
                </div>
              </div>
              <button className="ml-4 p-1 text-gray-400 hover:text-gray-600 transition-colors">
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
