'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { experience } from '@/data/experience'
import Link from 'next/link'

const Experience: React.FC = () => {
  return (
    <section className="w-full px-6 md:px-20 py-20 bg-white text-neutral-800">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Experience</h2>

      <div className="grid gap-10 max-w-4xl mx-auto">
        {experience.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="border border-neutral-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold">{exp.title}</h3>
            <p className="text-sm text-neutral-600 mb-1">
              <span className="font-medium">{exp.company}</span>, {exp.location} ·{' '}
              <Link
                href={exp.link}
                target="_blank"
                className="underline text-blue-600 hover:text-blue-800"
              >
                Link
              </Link>
            </p>

            {/* Bullet points */}
            <ul className="list-disc list-inside text-sm text-neutral-700 mt-2 space-y-1 mb-3">
              {exp.bullets.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>

            {/* Tool tags */}
            <div className="flex flex-wrap gap-2 mt-2">
              {exp.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-neutral-100 text-neutral-700 border border-neutral-200"
                >
                  <tag.icon className="w-3 h-3" />
                  {tag.name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Experience
