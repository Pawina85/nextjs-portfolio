"use client";
import React from "react";
import { projectsData } from "../../components/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id.toString(),
  }));
}

const ProjectPage = ({ params }) => {
  const project = projectsData.find((p) => p.id.toString() === params.id);

  if (!project) {
    notFound();
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-16 max-w-4xl mt-20"
    >
      <Link
        href="/projects"
        className="inline-block mb-12 text-blue-400 hover:text-blue-300 text-lg"
      >
        ← Back to Projects
      </Link>

      <motion.img
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        src={project.image}
        alt={project.title}
        className="w-full h-[500px] object-cover rounded-xl mb-12"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h1 className="text-5xl font-bold mb-6">{project.title}</h1>
        <p className="text-xl text-gray-400 mb-12 leading-relaxed">
          {project.description}
        </p>

        <div className="space-y-16">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Overview</h2>
            <p className="text-gray-300 leading-relaxed">{project.notes}</p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-4">Details</h2>
            <p className="text-gray-300 leading-relaxed">{project.details}</p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-4">Technologies</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  key={index}
                  className="px-4 py-2 border border-gray-700 rounded-full text-sm"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          <div className="flex gap-6">
            <a
              href={project.previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-gray-700 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Live Preview
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectPage;
