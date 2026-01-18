'use client'

import { FileText, Clock } from 'lucide-react'

interface ReportTemplate {
  id: string
  name: string
  description: string
  lastGenerated: Date
}

const templates: ReportTemplate[] = [
  {
    id: '1',
    name: 'Monthly Expense Summary',
    description: 'Overview of all expenses by category for the current month',
    lastGenerated: new Date('2024-01-31'),
  },
  {
    id: '2',
    name: 'Project Profitability Analysis',
    description: 'Detailed profitability breakdown for all active projects',
    lastGenerated: new Date('2024-01-25'),
  },
  {
    id: '3',
    name: 'Travel Expense Report',
    description: 'Comprehensive travel-related expenses with receipts',
    lastGenerated: new Date('2024-01-20'),
  },
  {
    id: '4',
    name: 'Quarterly Tax Summary',
    description: 'Tax-ready report for multi-jurisdiction compliance',
    lastGenerated: new Date('2024-01-15'),
  },
]

export default function ReportTemplates() {
  return (
    <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Report Templates</h2>
      <p className="text-sm text-gray-600 mb-4">Quick access to frequently used reports</p>
      
      <div className="space-y-3">
        {templates.map((template) => (
          <div
            key={template.id}
            className="border border-gray-200 rounded-lg p-4 hover:border-primary-300 hover:shadow-sm transition-all cursor-pointer"
          >
            <div className="flex items-start justify-between mb-2">
              <FileText className="h-5 w-5 text-primary-600 mr-2 mt-0.5" />
              <div className="flex-1">
                <h3 className="font-medium text-gray-900 text-sm">{template.name}</h3>
                <p className="text-xs text-gray-600 mt-1">{template.description}</p>
              </div>
            </div>
            <div className="flex items-center text-xs text-gray-500 mt-2">
              <Clock className="h-3 w-3 mr-1" />
              Last generated: {template.lastGenerated.toLocaleDateString()}
            </div>
          </div>
        ))}
      </div>

      <button className="mt-4 w-full px-4 py-2 border-2 border-dashed border-gray-300 text-gray-600 rounded-lg hover:border-primary-500 hover:text-primary-600 transition-colors text-sm">
        + Create New Template
      </button>
    </div>
  )
}
