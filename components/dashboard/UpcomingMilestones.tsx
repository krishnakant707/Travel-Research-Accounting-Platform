'use client'

import { Calendar, DollarSign, CheckCircle } from 'lucide-react'
import { format } from 'date-fns'

interface Milestone {
  id: string
  project: string
  description: string
  dueDate: Date
  invoiceAmount: number
  status: 'upcoming' | 'due' | 'overdue'
}

const milestones: Milestone[] = [
  {
    id: '1',
    project: 'Peru Archaeological Research',
    description: 'Phase 2 Deliverable - Site Analysis Report',
    dueDate: new Date('2024-02-15'),
    invoiceAmount: 15000,
    status: 'due',
  },
  {
    id: '2',
    project: 'Tokyo Cultural Study',
    description: 'Final Report Submission',
    dueDate: new Date('2024-02-20'),
    invoiceAmount: 25000,
    status: 'upcoming',
  },
  {
    id: '3',
    project: 'Sahara Desert Expedition',
    description: 'Mid-Project Milestone Invoice',
    dueDate: new Date('2024-02-10'),
    invoiceAmount: 30000,
    status: 'overdue',
  },
]

export default function UpcomingMilestones() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'due':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'overdue':
        return 'bg-red-100 text-red-800 border-red-200'
      default:
        return 'bg-blue-100 text-blue-800 border-blue-200'
    }
  }

  return (
    <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Upcoming Milestones & Invoices</h2>
      <div className="space-y-4">
        {milestones.map((milestone) => (
          <div
            key={milestone.id}
            className={`border rounded-lg p-4 ${getStatusColor(milestone.status)}`}
          >
            <div className="flex justify-between items-start mb-2">
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">{milestone.project}</h3>
                <p className="text-sm text-gray-600 mt-1">{milestone.description}</p>
              </div>
              <span className="ml-4 px-2 py-1 text-xs font-medium rounded bg-white/50">
                {milestone.status}
              </span>
            </div>
            
            <div className="flex items-center mt-3 space-x-4 text-sm">
              <div className="flex items-center text-gray-600">
                <Calendar className="h-4 w-4 mr-1" />
                {format(milestone.dueDate, 'MMM dd, yyyy')}
              </div>
              <div className="flex items-center text-gray-600">
                <DollarSign className="h-4 w-4 mr-1" />
                ₹{milestone.invoiceAmount.toLocaleString()}
              </div>
              {milestone.status === 'upcoming' && (
                <button className="ml-auto px-3 py-1 text-xs font-medium text-white bg-primary-600 rounded hover:bg-primary-700">
                  Create Invoice
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
