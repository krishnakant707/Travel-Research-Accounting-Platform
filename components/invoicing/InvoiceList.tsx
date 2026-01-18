'use client'

import { FileText, Calendar, DollarSign, CheckCircle, Clock, XCircle } from 'lucide-react'
import { format } from 'date-fns'

interface Invoice {
  id: string
  invoiceNumber: string
  project: string
  client: string
  amount: number
  dueDate: Date
  issueDate: Date
  status: 'draft' | 'sent' | 'paid' | 'overdue'
  milestone?: string
}

const invoices: Invoice[] = [
  {
    id: '1',
    invoiceNumber: 'INV-2024-001',
    project: 'Peru Archaeological Research',
    client: 'Global Heritage Foundation',
    amount: 15000,
    dueDate: new Date('2024-02-15'),
    issueDate: new Date('2024-01-30'),
    status: 'sent',
    milestone: 'Phase 2 Deliverable - Site Analysis Report',
  },
  {
    id: '2',
    invoiceNumber: 'INV-2024-002',
    project: 'Tokyo Cultural Study',
    client: 'Academic Travel Institute',
    amount: 25000,
    dueDate: new Date('2024-02-20'),
    issueDate: new Date('2024-02-05'),
    status: 'draft',
    milestone: 'Final Report Submission',
  },
  {
    id: '3',
    invoiceNumber: 'INV-2024-003',
    project: 'Sahara Desert Expedition',
    client: 'Exploration Partners Ltd',
    amount: 30000,
    dueDate: new Date('2024-02-10'),
    issueDate: new Date('2024-01-25'),
    status: 'overdue',
    milestone: 'Mid-Project Milestone Invoice',
  },
  {
    id: '4',
    invoiceNumber: 'INV-2023-045',
    project: 'Iceland Research Trip',
    client: 'Northern Studies Inc',
    amount: 18000,
    dueDate: new Date('2024-01-20'),
    issueDate: new Date('2023-12-15'),
    status: 'paid',
  },
]

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'paid':
      return <CheckCircle className="h-5 w-5 text-green-600" />
    case 'sent':
      return <Clock className="h-5 w-5 text-yellow-600" />
    case 'overdue':
      return <XCircle className="h-5 w-5 text-red-600" />
    default:
      return <FileText className="h-5 w-5 text-gray-600" />
  }
}

const getStatusColor = (status: string) => {
  switch (status) {
    case 'paid':
      return 'bg-green-100 text-green-800'
    case 'sent':
      return 'bg-yellow-100 text-yellow-800'
    case 'overdue':
      return 'bg-red-100 text-red-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

export default function InvoiceList() {
  return (
    <div className="bg-white rounded-lg shadow border border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">Recent Invoices</h2>
          <div className="flex space-x-2 text-sm">
            <button className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded">All</button>
            <button className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded">Paid</button>
            <button className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded">Pending</button>
            <button className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded">Overdue</button>
          </div>
        </div>
      </div>

      <div className="divide-y divide-gray-200">
        {invoices.map((invoice) => (
          <div key={invoice.id} className="p-4 hover:bg-gray-50 transition-colors">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4 flex-1">
                <div className="mt-1">{getStatusIcon(invoice.status)}</div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3">
                    <h3 className="font-medium text-gray-900">{invoice.invoiceNumber}</h3>
                    <span className={`px-2 py-1 text-xs font-medium rounded ${getStatusColor(invoice.status)}`}>
                      {invoice.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{invoice.project}</p>
                  <p className="text-xs text-gray-500 mt-1">{invoice.client}</p>
                  {invoice.milestone && (
                    <p className="text-xs text-gray-500 mt-1 italic">Milestone: {invoice.milestone}</p>
                  )}
                </div>
              </div>

              <div className="flex flex-col items-end space-y-2">
                <div className="text-right">
                  <p className="text-lg font-semibold text-gray-900">
                    ₹{invoice.amount.toLocaleString()}
                  </p>
                </div>
                <div className="flex items-center space-x-4 text-xs text-gray-500">
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>Due: {format(invoice.dueDate, 'MMM dd, yyyy')}</span>
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="h-3 w-3 mr-1" />
                    <span>Issued: {format(invoice.issueDate, 'MMM dd, yyyy')}</span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 text-sm text-primary-600 hover:bg-primary-50 rounded transition-colors">
                    View
                  </button>
                  {invoice.status === 'draft' && (
                    <button className="px-3 py-1 text-sm bg-primary-600 text-white rounded hover:bg-primary-700 transition-colors">
                      Send
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-gray-200 bg-gray-50">
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-600">Total Outstanding: ₹70,800</span>
          <span className="text-gray-600">Total Paid This Month: ₹18,000</span>
        </div>
      </div>
    </div>
  )
}
