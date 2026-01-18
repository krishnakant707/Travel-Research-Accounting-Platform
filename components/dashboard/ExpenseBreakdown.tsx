'use client'

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'

const expenseData = [
  { name: 'Flights', value: 28500, color: '#3b82f6' },
  { name: 'Lodging', value: 32000, color: '#10b981' },
  { name: 'Food & Meals', value: 18500, color: '#f59e0b' },
  { name: 'Local Transport', value: 12000, color: '#ef4444' },
  { name: 'Research Materials', value: 8500, color: '#8b5cf6' },
  { name: 'Permits & Guides', value: 6500, color: '#ec4899' },
]

const COLORS = expenseData.map(item => item.color)

export default function ExpenseBreakdown() {
  return (
    <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Expenses by Category</h2>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={expenseData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {expenseData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip formatter={(value: number) => `₹${value.toLocaleString()}`} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-4 space-y-2">
        {expenseData.map((item) => (
          <div key={item.name} className="flex justify-between items-center text-sm">
            <div className="flex items-center">
              <div
                className="w-3 h-3 rounded-full mr-2"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-gray-600">{item.name}</span>
            </div>
            <span className="font-medium text-gray-900">
              ₹{item.value.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
