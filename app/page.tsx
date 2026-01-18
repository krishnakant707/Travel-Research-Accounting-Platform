'use client'

import MainLayout from '@/components/MainLayout'
import DashboardStats from '@/components/dashboard/DashboardStats'
import ProjectOverview from '@/components/dashboard/ProjectOverview'
import ExpenseBreakdown from '@/components/dashboard/ExpenseBreakdown'
import CashFlowChart from '@/components/dashboard/CashFlowChart'
import CurrencyExposure from '@/components/dashboard/CurrencyExposure'
import UpcomingMilestones from '@/components/dashboard/UpcomingMilestones'

export default function Dashboard() {
  return (
    <MainLayout>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="mt-2 text-gray-600">Travel Research accounting overview</p>
        </div>

        {/* Global Metrics */}
        <DashboardStats />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {/* Project Overview */}
          <ProjectOverview />

          {/* Expense Breakdown */}
          <ExpenseBreakdown />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {/* Cash Flow Chart */}
          <CashFlowChart />

          {/* Currency Exposure */}
          <CurrencyExposure />
        </div>

        {/* Upcoming Milestones */}
        <div className="mt-6">
          <UpcomingMilestones />
        </div>
      </div>
    </MainLayout>
  )
}
