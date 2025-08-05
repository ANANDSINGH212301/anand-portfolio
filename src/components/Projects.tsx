'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import { projects } from '@/data/projects'
import HomeArrow from './HomeArrow'

const Projects = () => {
  const [filter, setFilter] = useState('All')

  const allTags = new Set<string>()
  projects.forEach((project) =>
    project.tags.forEach((tag) => allTags.add(tag.text))
  )

  const tags = ['All', ...Array.from(allTags)]

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((project) =>
          project.tags.some((tag) => tag.text === filter)
        )

  return (
    <section className="relative px-6 md:px-20 overflow-hidden mb-10">
      <HomeArrow />
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-neutral-900"
        >
          My Projects
        </motion.h2>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-3 justify-center mb-10"
        >
          {tags.map((tag, index) => (
            <button
              key={index}
              onClick={() => setFilter(tag)}
              className={`px-4 py-1 border rounded-full text-sm transition ${
                filter === tag
                  ? 'bg-black text-white'
                  : 'border-neutral-300 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        {/* Project Cards Grid – 2 per row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {filteredProjects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
