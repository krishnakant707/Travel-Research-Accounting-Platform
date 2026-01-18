'use client'

import MainLayout from '@/components/MainLayout'
import ReportGenerator from '@/components/reports/ReportGenerator'
import ReportTemplates from '@/components/reports/ReportTemplates'

export default function ReportsPage() {
  return (
    <MainLayout>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Reports</h1>
          <p className="mt-2 text-gray-600">Generate Travel Research-specific financial reports</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <ReportGenerator />
          </div>
          <ReportTemplates />
        </div>
      </div>
    </MainLayout>
  )
}
