'use client'

import MainLayout from '@/components/MainLayout'
import BudgetOverview from '@/components/budgets/BudgetOverview'
import ForecastChart from '@/components/budgets/ForecastChart'
import BudgetAlerts from '@/components/budgets/BudgetAlerts'

export default function BudgetsPage() {
  return (
    <MainLayout>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Budgets & Forecasts</h1>
          <p className="mt-2 text-gray-600">Track budgets per project and forecast future expenses</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <BudgetOverview />
          <ForecastChart />
        </div>

        <div className="mt-6">
          <BudgetAlerts />
        </div>
      </div>
    </MainLayout>
  )
}
