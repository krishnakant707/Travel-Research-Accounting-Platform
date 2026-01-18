'use client'

import { Brain, TrendingUp, CheckCircle } from 'lucide-react'

export default function SmartCategorization() {
  const aiInsights = [
    {
      category: 'Flights',
      confidence: 94,
      pattern: 'Vendor names matching airline patterns',
      examples: ['United Airlines', 'Delta', 'Air France'],
    },
    {
      category: 'Lodging',
      confidence: 89,
      pattern: 'Hotel chains and booking platforms',
      examples: ['Marriott', 'Booking.com', 'Airbnb'],
    },
    {
      category: 'Food & Meals',
      confidence: 87,
      pattern: 'Restaurants and food vendors',
      examples: ['Starbucks', 'Local restaurants'],
    },
  ]

  return (
    <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
      <div className="flex items-center mb-4">
        <Brain className="h-6 w-6 text-primary-600 mr-2" />
        <h2 className="text-xl font-semibold text-gray-900">Smart Categorization</h2>
      </div>

      <p className="text-sm text-gray-600 mb-4">
        AI learns from your corrections and automatically categorizes transactions based on vendor patterns and context.
      </p>

      <div className="space-y-4">
        {aiInsights.map((insight, idx) => (
          <div key={idx} className="border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-medium text-gray-900">{insight.category}</h3>
              <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded">
                {insight.confidence}% confidence
              </span>
            </div>
            <p className="text-xs text-gray-600 mb-2">{insight.pattern}</p>
            <div className="flex flex-wrap gap-1">
              {insight.examples.map((example, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded"
                >
                  {example}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 bg-primary-50 rounded-lg">
        <div className="flex items-center text-sm text-primary-900">
          <CheckCircle className="h-4 w-4 mr-2" />
          <span>Auto-categorized 127 transactions this month with 92% accuracy</span>
        </div>
      </div>
    </div>
  )
}
