import React from 'react'
import { projectsData } from '../../components/data'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id.toString(),
  }))
}

const ProjectPage = ({ params }) => {
  const project = projectsData.find((p) => p.id.toString() === params.id)

  if (!project) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link 
        href="/projects"
        className="inline-block mb-8 text-blue-400 hover:text-blue-300"
      >
        ← Back to Projects
      </Link>
      
      <div className="bg-gray-800 rounded-lg overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-96 object-cover"
        />
        <div className="p-8">
          <h1 className="text-4xl font-bold text-white mb-4">{project.title}</h1>
          <p className="text-gray-300 text-lg mb-6">{project.description}</p>
          
          <div className="flex gap-2 mb-8">
            {project.tag.map((tag, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <a 
              href={project.gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              View Code
            </a>
            <a 
              href={project.previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              Live Preview
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectPage 