"use client";
import React from "react";
import { projectsData } from "../../components/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id.toString(),
  }));
}

const ProjectPage = ({ params }) => {
  // Ensure params.id exists
  if (!params?.id) {
    notFound();
  }

  const project = projectsData.find((p) => p.id.toString() === params.id);

  if (!project) {
    notFound();
  }

  // Ensure required fields exist with defaults
  const safeProject = {
    ...project,
    title: project.title || 'Untitled Project',
    description: project.description || 'No description available.',
    notes: project.notes || 'No additional notes available.',
    details: project.details || 'No detailed information available.',
    technologies: project.technologies || [],
    image: project.image || '/images/projects/default.png'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-16 max-w-4xl mt-20 min-h-screen"
    >
      <Link
        href="/projects"
        className="inline-block mb-12 text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 text-lg"
      >
        ← Back to Projects
      </Link>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative w-full h-[500px] rounded-xl overflow-hidden mb-12 bg-gray-200 dark:bg-gray-900"
      >
        <Image
          src={safeProject.image}
          alt={safeProject.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
          className="object-cover"
          priority={true}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyejFxqJvzNhsnt0XYomgKZRQ0p0kEFDMlzdeofCH1MGRB6j0nq/"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h1 className="text-5xl font-bold mb-6 text-gray-900 dark:text-white">{safeProject.title}</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 leading-relaxed">
          {safeProject.description}
        </p>

        <div className="space-y-16">
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white">Overview</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{safeProject.notes}</p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white">Details</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{safeProject.details}</p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white">Technologies</h2>
            <div className="flex flex-wrap gap-3">
              {safeProject.technologies.map((tech, index) => (
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  key={index}
                  className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {safeProject.id === 1 && safeProject.previewUrl && (
            <div className="flex gap-6">
              <a
                href={safeProject.previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-900 dark:text-white"
              >
                Live Preview
              </a>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectPage;
