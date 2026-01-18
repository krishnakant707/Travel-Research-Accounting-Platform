'use client'

import MainLayout from '@/components/MainLayout'
import ProjectCard from '@/components/projects/ProjectCard'
import { Plus } from 'lucide-react'

export default function ProjectsPage() {
  return (
    <MainLayout>
      <div className="p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Projects / Trips</h1>
            <p className="mt-2 text-gray-600">Manage your travel research projects and trips</p>
          </div>
          <button className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
            <Plus className="h-5 w-5 mr-2" />
            New Project
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            id="1"
            name="Peru Archaeological Research"
            client="Global Heritage Foundation"
            startDate="2024-01-10"
            endDate="2024-03-15"
            budget={50000}
            spent={32500}
            status="active"
          />
          <ProjectCard
            id="2"
            name="Tokyo Cultural Study"
            client="Academic Travel Institute"
            startDate="2024-02-01"
            endDate="2024-04-30"
            budget={35000}
            spent={28000}
            status="active"
          />
          <ProjectCard
            id="3"
            name="Sahara Desert Expedition"
            client="Exploration Partners Ltd"
            startDate="2024-01-20"
            endDate="2024-06-30"
            budget={75000}
            spent={52000}
            status="active"
          />
        </div>
      </div>
    </MainLayout>
  )
}
