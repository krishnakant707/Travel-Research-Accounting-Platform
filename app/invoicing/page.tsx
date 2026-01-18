'use client'

import MainLayout from '@/components/MainLayout'
import InvoiceList from '@/components/invoicing/InvoiceList'
import { Plus } from 'lucide-react'

export default function InvoicingPage() {
  return (
    <MainLayout>
      <div className="p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Invoicing & Billing</h1>
            <p className="mt-2 text-gray-600">Manage project-based and milestone invoicing for travel research clients</p>
          </div>
          <button className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
            <Plus className="h-5 w-5 mr-2" />
            Create Invoice
          </button>
        </div>

        <InvoiceList />
      </div>
    </MainLayout>
  )
}
