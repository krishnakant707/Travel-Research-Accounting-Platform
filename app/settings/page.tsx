'use client'

import MainLayout from '@/components/MainLayout'

export default function SettingsPage() {
  return (
    <MainLayout>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="mt-2 text-gray-600">Configure your Travel Research accounting preferences</p>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">General Settings</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Default Currency</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                  <option>INR</option>
                  <option>USD</option>
                  <option>EUR</option>
                  <option>GBP</option>
                  <option>JPY</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date Format</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                  <option>MM/DD/YYYY</option>
                  <option>DD/MM/YYYY</option>
                  <option>YYYY-MM-DD</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Budget Alerts</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-medium text-gray-700">Budget Warning Threshold</label>
                  <p className="text-sm text-gray-500">Alert when budget utilization exceeds this percentage</p>
                </div>
                <input type="number" defaultValue={80} className="w-24 px-3 py-2 border border-gray-300 rounded-lg" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-medium text-gray-700">Critical Threshold</label>
                  <p className="text-sm text-gray-500">Critical alert when budget exceeds this percentage</p>
                </div>
                <input type="number" defaultValue={95} className="w-24 px-3 py-2 border border-gray-300 rounded-lg" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">AI & Automation</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-medium text-gray-700">Smart Categorization</label>
                  <p className="text-sm text-gray-500">Automatically categorize transactions using AI</p>
                </div>
                <input type="checkbox" defaultChecked className="w-5 h-5 text-primary-600" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-medium text-gray-700">Predictive Invoicing</label>
                  <p className="text-sm text-gray-500">Suggest optimal invoice timing based on milestones</p>
                </div>
                <input type="checkbox" defaultChecked className="w-5 h-5 text-primary-600" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-medium text-gray-700">AI Report Generation</label>
                  <p className="text-sm text-gray-500">Generate narrative summaries and insights in reports</p>
                </div>
                <input type="checkbox" defaultChecked className="w-5 h-5 text-primary-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
