'use client'

import { Calendar, DollarSign, TrendingUp } from 'lucide-react'
import { format } from 'date-fns'

interface ProjectCardProps {
  id: string
  name: string
  client: string
  startDate: string
  endDate: string
  budget: number
  spent: number
  status: 'active' | 'completed' | 'on-hold'
}

export default function ProjectCard({
  name,
  client,
  startDate,
  endDate,
  budget,
  spent,
  status,
}: ProjectCardProps) {
  const burnRate = (spent / budget) * 100
  const remaining = budget - spent

  return (
    <div className="bg-white rounded-lg shadow p-6 border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer">
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
          <p className="text-sm text-gray-600 mt-1">{client}</p>
        </div>
        <span
          className={`px-2 py-1 text-xs font-medium rounded ${
            status === 'active'
              ? 'bg-green-100 text-green-800'
              : status === 'completed'
              ? 'bg-blue-100 text-blue-800'
              : 'bg-gray-100 text-gray-800'
          }`}
        >
          {status}
        </span>
      </div>

      <div className="space-y-3">
        <div className="flex items-center text-sm text-gray-600">
          <Calendar className="h-4 w-4 mr-2" />
          <span>
            {format(new Date(startDate), 'MMM dd')} - {format(new Date(endDate), 'MMM dd, yyyy')}
          </span>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Budget vs Spent</span>
            <span className="font-medium">
              ₹{spent.toLocaleString()} / ₹{budget.toLocaleString()}
            </span>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className={`h-2 rounded-full ${
                burnRate < 70
                  ? 'bg-green-500'
                  : burnRate < 90
                  ? 'bg-yellow-500'
                  : 'bg-red-500'
              }`}
              style={{ width: `${Math.min(burnRate, 100)}%` }}
            />
          </div>

          <div className="flex justify-between text-xs text-gray-500">
            <span>{burnRate.toFixed(1)}% utilized</span>
            <span>₹{remaining.toLocaleString()} remaining</span>
          </div>
        </div>

        <div className="pt-3 border-t border-gray-200 flex items-center justify-between">
          <div className="flex items-center text-sm text-gray-600">
            <DollarSign className="h-4 w-4 mr-1" />
            <span className="font-medium">₹{remaining.toLocaleString()}</span>
          </div>
          <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
            View Details →
          </button>
        </div>
      </div>
    </div>
  )
}
