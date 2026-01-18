'use client'

interface Project {
  id: string
  name: string
  client: string
  budget: number
  spent: number
  forecast: number
  burnRate: number
  status: 'on-track' | 'at-risk' | 'over-budget'
}

const projects: Project[] = [
  {
    id: '1',
    name: 'Peru Archaeological Research',
    client: 'Global Heritage Foundation',
    budget: 50000,
    spent: 32500,
    forecast: 48500,
    burnRate: 65,
    status: 'on-track',
  },
  {
    id: '2',
    name: 'Tokyo Cultural Study',
    client: 'Academic Travel Institute',
    budget: 35000,
    spent: 28000,
    forecast: 38500,
    burnRate: 80,
    status: 'at-risk',
  },
  {
    id: '3',
    name: 'Sahara Desert Expedition',
    client: 'Exploration Partners Ltd',
    budget: 75000,
    spent: 52000,
    forecast: 72000,
    burnRate: 69,
    status: 'on-track',
  },
]

export default function ProjectOverview() {
  return (
    <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Active Projects Overview</h2>
      <div className="space-y-4">
        {projects.map((project) => (
          <div key={project.id} className="border-b border-gray-200 last:border-0 pb-4 last:pb-0">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-medium text-gray-900">{project.name}</h3>
                <p className="text-sm text-gray-500">{project.client}</p>
              </div>
              <span
                className={`px-2 py-1 text-xs font-medium rounded ${
                  project.status === 'on-track'
                    ? 'bg-green-100 text-green-800'
                    : project.status === 'at-risk'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {project.status.replace('-', ' ')}
              </span>
            </div>
            
            <div className="mt-3 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Budget vs Spent</span>
                <span className="font-medium">
                  ₹{project.spent.toLocaleString()} / ₹{project.budget.toLocaleString()}
                </span>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${
                    project.burnRate < 70
                      ? 'bg-green-500'
                      : project.burnRate < 90
                      ? 'bg-yellow-500'
                      : 'bg-red-500'
                  }`}
                  style={{ width: `${project.burnRate}%` }}
                />
              </div>
              
              <div className="flex justify-between text-xs text-gray-500">
                <span>Forecast: ₹{project.forecast.toLocaleString()}</span>
                <span>Burn Rate: {project.burnRate}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
