'use client'

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'

const forecastData = [
  { month: 'Jan', Budget: 45000, Actual: 32000, Forecast: 42000 },
  { month: 'Feb', Budget: 50000, Actual: 38000, Forecast: 48000 },
  { month: 'Mar', Budget: 55000, Actual: 35000, Forecast: 52000 },
  { month: 'Apr', Budget: 60000, Actual: 42000, Forecast: 58000 },
  { month: 'May', Budget: 65000, Actual: 41000, Forecast: 62000 },
  { month: 'Jun', Budget: 70000, Actual: 45000, Forecast: 68000 },
]

export default function ForecastChart() {
  return (
    <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Expense Forecast vs Budget</h2>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={forecastData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip formatter={(value: number) => `₹${value.toLocaleString()}`} />
            <Legend />
            <Area
              type="monotone"
              dataKey="Budget"
              stackId="1"
              stroke="#3b82f6"
              fill="#3b82f6"
              fillOpacity={0.3}
              name="Budget"
            />
            <Area
              type="monotone"
              dataKey="Actual"
              stackId="2"
              stroke="#10b981"
              fill="#10b981"
              fillOpacity={0.5}
              name="Actual"
            />
            <Area
              type="monotone"
              dataKey="Forecast"
              stackId="3"
              stroke="#f59e0b"
              fill="#f59e0b"
              fillOpacity={0.3}
              name="Forecast"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 p-3 bg-blue-50 rounded-lg">
        <p className="text-sm text-blue-900">
          💡 Forecast suggests expenses will stay within budget range. Monitor closely as actual spending approaches 95% of budget.
        </p>
      </div>
    </div>
  )
}
