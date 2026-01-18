'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const cashFlowData = [
  { month: 'Jan', Income: 45000, Expenses: 32000, Net: 13000 },
  { month: 'Feb', Income: 52000, Expenses: 38000, Net: 14000 },
  { month: 'Mar', Income: 48000, Expenses: 35000, Net: 13000 },
  { month: 'Apr', Income: 61000, Expenses: 42000, Net: 19000 },
  { month: 'May', Income: 55000, Expenses: 41000, Net: 14000 },
  { month: 'Jun', Income: 67000, Expenses: 45000, Net: 22000 },
]

export default function CashFlowChart() {
  return (
    <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Cash Flow Trend</h2>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={cashFlowData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip formatter={(value: number) => `₹${value.toLocaleString()}`} />
            <Legend />
            <Line
              type="monotone"
              dataKey="Income"
              stroke="#10b981"
              strokeWidth={2}
              name="Income"
            />
            <Line
              type="monotone"
              dataKey="Expenses"
              stroke="#ef4444"
              strokeWidth={2}
              name="Expenses"
            />
            <Line
              type="monotone"
              dataKey="Net"
              stroke="#3b82f6"
              strokeWidth={2}
              name="Net Cash Flow"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
