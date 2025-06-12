import React from 'react'
import { projectsData } from '../components/data'
import Link from 'next/link'

const ProjectsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-white mb-8">All Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project) => (
          <Link 
            href={`/projects/${project.id}`} 
            key={project.id}
            className="block"
          >
            <div className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-white mb-2">{project.title}</h2>
                <p className="text-gray-300">{project.description}</p>
                <div className="mt-4 flex gap-2">
                  {project.tag.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-gray-700 rounded-full text-sm text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ProjectsPage