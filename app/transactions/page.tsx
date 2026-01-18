'use client'

import MainLayout from '@/components/MainLayout'
import TransactionForm from '@/components/transactions/TransactionForm'
import TransactionList from '@/components/transactions/TransactionList'
import { useState } from 'react'

export default function TransactionsPage() {
  const [showForm, setShowForm] = useState(false)

  return (
    <MainLayout>
      <div className="p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Transactions & Expenses</h1>
            <p className="mt-2 text-gray-600">Manage and categorize travel research expenses</p>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            {showForm ? 'Cancel' : '+ Add Transaction'}
          </button>
        </div>

        {showForm && (
          <div className="mb-6">
            <TransactionForm onSuccess={() => setShowForm(false)} />
          </div>
        )}

        <TransactionList />
      </div>
    </MainLayout>
  )
}
