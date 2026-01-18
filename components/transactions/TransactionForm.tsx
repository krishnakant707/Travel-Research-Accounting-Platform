'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Upload, X } from 'lucide-react'

const transactionSchema = z.object({
  date: z.string(),
  amount: z.number().positive(),
  currency: z.string(),
  vendor: z.string().min(1),
  category: z.string(),
  project: z.string(),
  description: z.string().optional(),
  receipt: z.instanceof(File).optional(),
})

type TransactionFormData = z.infer<typeof transactionSchema>

const categories = [
  'Flights',
  'Lodging',
  'Food & Meals',
  'Local Transport',
  'Research Materials',
  'Permits & Guides',
  'Equipment',
  'Communication',
  'Other',
]

const currencies = ['INR', 'USD', 'EUR', 'GBP', 'JPY', 'CAD', 'AUD']

const projects = [
  'Peru Archaeological Research',
  'Tokyo Cultural Study',
  'Sahara Desert Expedition',
  'Other',
]

export default function TransactionForm({ onSuccess }: { onSuccess: () => void }) {
  const [receiptFile, setReceiptFile] = useState<File | null>(null)
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<TransactionFormData>({
    resolver: zodResolver(transactionSchema),
    defaultValues: {
      currency: 'INR',
      category: categories[0],
    },
  })

  const onSubmit = async (data: TransactionFormData) => {
    console.log('Transaction data:', data)
    // Here you would typically send to API
    alert('Transaction created successfully!')
    onSuccess()
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setReceiptFile(file)
      setValue('receipt', file)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Add New Transaction</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date *
            </label>
            <input
              type="date"
              {...register('date')}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            {errors.date && (
              <p className="mt-1 text-sm text-red-600">{errors.date.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Amount *
            </label>
            <div className="flex">
              <select
                {...register('currency')}
                className="px-3 py-2 border border-gray-300 rounded-l-lg bg-gray-50 focus:ring-2 focus:ring-primary-500"
              >
                {currencies.map((curr) => (
                  <option key={curr} value={curr}>
                    {curr}
                  </option>
                ))}
              </select>
              <input
                type="number"
                step="0.01"
                {...register('amount', { valueAsNumber: true })}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="0.00"
              />
            </div>
            {errors.amount && (
              <p className="mt-1 text-sm text-red-600">{errors.amount.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Vendor *
            </label>
            <input
              type="text"
              {...register('vendor')}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="e.g., United Airlines, Marriott Hotel"
            />
            {errors.vendor && (
              <p className="mt-1 text-sm text-red-600">{errors.vendor.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category *
            </label>
            <select
              {...register('category')}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            {errors.category && (
              <p className="mt-1 text-sm text-red-600">{errors.category.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Project / Trip *
            </label>
            <select
              {...register('project')}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {projects.map((proj) => (
                <option key={proj} value={proj}>
                  {proj}
                </option>
              ))}
            </select>
            {errors.project && (
              <p className="mt-1 text-sm text-red-600">{errors.project.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Receipt Upload
            </label>
            <div className="relative">
              <input
                type="file"
                accept="image/*,.pdf"
                onChange={handleFileChange}
                className="hidden"
                id="receipt-upload"
              />
              <label
                htmlFor="receipt-upload"
                className="flex items-center justify-center w-full px-3 py-2 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-primary-500 transition-colors"
              >
                <Upload className="h-5 w-5 mr-2 text-gray-400" />
                <span className="text-sm text-gray-600">
                  {receiptFile ? receiptFile.name : 'Click to upload receipt'}
                </span>
              </label>
              {receiptFile && (
                <button
                  type="button"
                  onClick={() => {
                    setReceiptFile(null)
                    setValue('receipt', undefined)
                  }}
                  className="absolute top-2 right-2 p-1 text-red-600 hover:bg-red-50 rounded"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            {...register('description')}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="Additional notes or details..."
          />
        </div>

        <div className="flex justify-end space-x-3 pt-4">
          <button
            type="button"
            onClick={onSuccess}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            Save Transaction
          </button>
        </div>
      </form>
    </div>
  )
}
