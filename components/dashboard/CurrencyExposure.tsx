'use client'

interface CurrencyExposure {
  currency: string
  amount: number
  inrEquivalent: number
  percentage: number
}

const currencyData: CurrencyExposure[] = [
  { currency: 'INR', amount: 85000, inrEquivalent: 85000, percentage: 65 },
  { currency: 'EUR', amount: 25000, inrEquivalent: 2250000, percentage: 21 },
  { currency: 'JPY', amount: 1500000, inrEquivalent: 875000, percentage: 8 },
  { currency: 'GBP', amount: 8000, inrEquivalent: 840000, percentage: 6 },
]

export default function CurrencyExposure() {
  return (
    <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Currency Exposure</h2>
      <div className="space-y-4">
        {currencyData.map((currency) => (
          <div key={currency.currency}>
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <span className="font-medium text-gray-900 mr-2">{currency.currency}</span>
                <span className="text-sm text-gray-500">
                  {currency.currency === 'INR' 
                    ? `₹${currency.amount.toLocaleString()}`
                    : `${currency.amount.toLocaleString()} ${currency.currency}`
                  }
                </span>
              </div>
              <span className="text-sm font-medium text-gray-900">
                ₹{currency.inrEquivalent.toLocaleString()} INR
              </span>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-primary-600 h-2 rounded-full"
                style={{ width: `${currency.percentage}%` }}
              />
            </div>
            
            <div className="mt-1 text-xs text-gray-500">
              {currency.percentage}% of total exposure
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-600">Total Exposure (INR)</span>
          <span className="text-lg font-bold text-gray-900">
            ₹{currencyData.reduce((sum, c) => sum + c.inrEquivalent, 0).toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  )
}
