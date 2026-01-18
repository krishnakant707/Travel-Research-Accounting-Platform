'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  LayoutDashboard, 
  Briefcase, 
  Receipt, 
  FileText, 
  TrendingUp, 
  FileBarChart,
  Settings,
  MessageSquare
} from 'lucide-react'
import { clsx } from 'clsx'

const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Projects / Trips', href: '/projects', icon: Briefcase },
  { name: 'Transactions & Expenses', href: '/transactions', icon: Receipt },
  { name: 'Invoicing & Billing', href: '/invoicing', icon: FileText },
  { name: 'Budgets & Forecasts', href: '/budgets', icon: TrendingUp },
  { name: 'Reports', href: '/reports', icon: FileBarChart },
  { name: 'AI Assistant', href: '/ai-assistant', icon: MessageSquare },
  { name: 'Settings', href: '/settings', icon: Settings },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex flex-col w-64 bg-gray-900 text-white min-h-screen">
      <div className="flex items-center justify-center h-16 bg-gray-800 border-b border-gray-700">
        <h1 className="text-xl font-bold">Hellobooks AI</h1>
        <span className="ml-2 text-xs text-gray-400">Travel Research</span>
      </div>
      
      <nav className="flex-1 px-2 py-4 space-y-1">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={clsx(
                'flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors',
                isActive
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              )}
            >
              <item.icon className="mr-3 h-5 w-5" />
              {item.name}
            </Link>
          )
        })}
      </nav>

      <div className="p-4 border-t border-gray-700">
        <div className="text-xs text-gray-400">
          <p>Powered by AI</p>
          <p className="mt-1">v1.0.0</p>
        </div>
      </div>
    </div>
  )
}
