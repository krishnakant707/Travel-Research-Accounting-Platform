'use client'

import { useState } from 'react'
import { FileText, Download, Calendar, Filter, Sparkles } from 'lucide-react'

export default function ReportGenerator() {
  const [reportType, setReportType] = useState('expense-by-category')
  const [dateRange, setDateRange] = useState('month')
  const [project, setProject] = useState('all')

  const reportTypes = [
    { value: 'expense-by-category', label: 'Expenses by Category' },
    { value: 'expense-by-project', label: 'Expenses by Project' },
    { value: 'expense-by-vendor', label: 'Expenses by Vendor' },
    { value: 'expense-by-region', label: 'Expenses by Region' },
    { value: 'profitability-project', label: 'Profitability per Project' },
    { value: 'profitability-client', label: 'Profitability per Client' },
    { value: 'reconciliation', label: 'Reconciliation Report' },
    { value: 'tax-jurisdiction', label: 'Tax Jurisdiction Report' },
    { value: 'cash-flow', label: 'Cash Flow Statement' },
    { value: 'travel-expense', label: 'Travel Expense Summary' },
  ]

  return (
    <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
      <div className="flex items-center mb-4">
        <FileText className="h-6 w-6 text-primary-600 mr-2" />
        <h2 className="text-xl font-semibold text-gray-900">Generate Report</h2>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Report Type
          </label>
          <select
            value={reportType}
            onChange={(e) => setReportType(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            {reportTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Date Range
            </label>
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="week">Last 7 days</option>
              <option value="month">This month</option>
              <option value="quarter">This quarter</option>
              <option value="year">This year</option>
              <option value="custom">Custom range</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Project / Trip
            </label>
            <select
              value={project}
              onChange={(e) => setProject(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="all">All Projects</option>
              <option value="peru">Peru Archaeological Research</option>
              <option value="tokyo">Tokyo Cultural Study</option>
              <option value="sahara">Sahara Desert Expedition</option>
            </select>
          </div>
        </div>

        <div className="p-4 bg-primary-50 rounded-lg border border-primary-200">
          <div className="flex items-start">
            <Sparkles className="h-5 w-5 text-primary-600 mr-2 mt-0.5" />
            <div className="flex-1">
              <p className="text-sm font-medium text-primary-900 mb-1">AI-Powered Report Generation</p>
              <p className="text-xs text-primary-700">
                Enable AI insights to generate narrative summaries, identify trends, and suggest cost-saving opportunities.
              </p>
            </div>
          </div>
        </div>

        <div className="flex space-x-3 pt-4">
          <button className="flex-1 flex items-center justify-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
            <FileText className="h-5 w-5 mr-2" />
            Generate Report
          </button>
          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
            <Download className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
