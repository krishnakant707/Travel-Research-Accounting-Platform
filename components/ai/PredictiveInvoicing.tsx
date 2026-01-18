'use client'

import { Calendar, DollarSign, AlertCircle, Lightbulb } from 'lucide-react'
import { format } from 'date-fns'

interface InvoicePrediction {
  project: string
  milestone: string
  suggestedDate: Date
  amount: number
  reason: string
  priority: 'high' | 'medium' | 'low'
}

const predictions: InvoicePrediction[] = [
  {
    project: 'Peru Archaeological Research',
    milestone: 'Phase 2 Deliverable - Site Analysis Report',
    suggestedDate: new Date('2024-02-15'),
    amount: 15000,
    reason: 'Milestone completion scheduled in 2 days',
    priority: 'high',
  },
  {
    project: 'Tokyo Cultural Study',
    milestone: 'Mid-Project Status Update',
    suggestedDate: new Date('2024-02-25'),
    amount: 12500,
    reason: 'Based on project timeline and 50% completion',
    priority: 'medium',
  },
  {
    project: 'Sahara Desert Expedition',
    milestone: 'Initial Research Phase',
    suggestedDate: new Date('2024-03-01'),
    amount: 20000,
    reason: 'Project start milestone, typically invoiced upfront',
    priority: 'medium',
  },
]

export default function PredictiveInvoicing() {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800 border-red-200'
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      default:
        return 'bg-blue-100 text-blue-800 border-blue-200'
    }
  }

  return (
    <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
      <div className="flex items-center mb-4">
        <Lightbulb className="h-6 w-6 text-primary-600 mr-2" />
        <h2 className="text-xl font-semibold text-gray-900">Predictive Invoicing</h2>
      </div>

      <p className="text-sm text-gray-600 mb-4">
        AI suggests optimal invoice timing based on project milestones, client payment history, and cash flow needs.
      </p>

      <div className="space-y-3">
        {predictions.map((prediction, idx) => (
          <div
            key={idx}
            className={`border rounded-lg p-3 ${getPriorityColor(prediction.priority)}`}
          >
            <div className="flex justify-between items-start mb-2">
              <div className="flex-1">
                <h3 className="font-medium text-sm">{prediction.project}</h3>
                <p className="text-xs mt-1 opacity-90">{prediction.milestone}</p>
              </div>
              <span className="ml-2 px-2 py-1 text-xs font-medium rounded bg-white/50">
                {prediction.priority}
              </span>
            </div>

            <div className="flex items-center justify-between mt-2 text-xs">
              <div className="flex items-center">
                <Calendar className="h-3 w-3 mr-1" />
                {format(prediction.suggestedDate, 'MMM dd, yyyy')}
              </div>
              <div className="flex items-center font-medium">
                <DollarSign className="h-3 w-3 mr-1" />
                ₹{prediction.amount.toLocaleString()}
              </div>
            </div>

            <div className="mt-2 text-xs opacity-80">
              <AlertCircle className="h-3 w-3 inline mr-1" />
              {prediction.reason}
            </div>

            <button className="mt-2 w-full px-3 py-1 text-xs font-medium bg-white/80 hover:bg-white rounded transition-colors">
              Create Invoice
            </button>
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 bg-gray-50 rounded-lg">
        <p className="text-xs text-gray-600">
          💡 Tip: Predictive invoicing reduces payment delays by an average of 12 days based on historical data.
        </p>
      </div>
    </div>
  )
}
