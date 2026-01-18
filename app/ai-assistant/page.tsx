'use client'

import MainLayout from '@/components/MainLayout'
import AIChatbot from '@/components/ai/AIChatbot'
import SmartCategorization from '@/components/ai/SmartCategorization'
import PredictiveInvoicing from '@/components/ai/PredictiveInvoicing'

export default function AIAssistantPage() {
  return (
    <MainLayout>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">AI Assistant</h1>
          <p className="mt-2 text-gray-600">Leverage AI for smart categorization, predictive invoicing, and conversational expense input</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="lg:col-span-2">
            <AIChatbot />
          </div>

          <SmartCategorization />
          <PredictiveInvoicing />
        </div>
      </div>
    </MainLayout>
  )
}
