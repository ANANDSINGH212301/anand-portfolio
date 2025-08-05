'use client'

import React from 'react'
import { motion } from 'framer-motion'

import {
  FaGraduationCap,
  FaCode,
  FaToolbox,
  FaServer,
  FaWrench,
  FaCogs,
} from 'react-icons/fa'
import {
  SiMongodb,
  SiMysql,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiGithub,
  SiPostman,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNodedotjs,
} from 'react-icons/si'
import HomeArrow from '@/components/HomeArrow'

const About = () => {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-[#f6f6f6] via-white to-[#eaeaea] overflow-x-hidden pb-24">
      <HomeArrow />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 z-0" />

      <div className="relative z-10 px-6 py-12 md:px-20 max-w-6xl mx-auto space-y-16">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-neutral-900"
        >
          About Me
        </motion.h1>

        {/* Education */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="flex items-center gap-1">
            <FaGraduationCap className="text-xl text-yellow-500" />
            <h2 className="text-2xl font-semibold">Education</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-sm text-neutral-700">
            {[
              {
                degree: 'B.Tech – CSE (2022–2026)',
                school: 'AKGEC, Ghaziabad (AKTU)',
                detail: 'GPA: 7.39/10',
              },
              {
                degree: '12th – HSC (2020–2022)',
                school: 'Janata Vidyalay Khopoli',
                detail: '70% – Maharashtra Board',
              },
              {
                degree: '10th – SSC (2020)',
                school: 'Shishu Mandir Khopoli',
                detail: '84% – Maharashtra Board',
              },
            ].map((edu, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-md text-base h-full"
              >
                <p className="font-semibold">{edu.degree}</p>
                <p>{edu.school}</p>
                <p>{edu.detail}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {[
            {
              icon: <FaCode className="text-xl text-blue-600" />,
              title: 'Languages',
              skills: [
                { icon: <SiJavascript />, text: 'JavaScript' },
                { text: 'Java' },
                { text: 'SQL' },
              ],
            },
            {
              icon: <FaServer className="text-xl text-purple-600" />,
              title: 'Web & Frameworks',
              skills: [
                { icon: <SiHtml5 />, text: 'HTML5' },
                { icon: <SiCss3 />, text: 'CSS3' },
                { icon: <SiTailwindcss />, text: 'Tailwind CSS' },
                { icon: <SiNextdotjs />, text: 'Next.js' },
                { icon: <SiReact />, text: 'React.js' },
                { icon: <SiNodedotjs />, text: 'Node.js' },
              ],
            },
            {
              icon: <FaToolbox className="text-xl text-green-600" />,
              title: 'Databases & APIs',
              skills: [
                { icon: <SiMongodb />, text: 'MongoDB' },
                { icon: <SiMysql />, text: 'MySQL' },
                { text: 'REST APIs' },
              ],
            },
            {
              icon: <FaWrench className="text-xl text-amber-600" />,
              title: 'Tools',
              skills: [
                { icon: <SiGithub />, text: 'GitHub' },
                { icon: <SiPostman />, text: 'Postman' },
                { text: 'VS Code' },
              ],
            },
            {
              icon: <FaCogs className="text-xl text-gray-700" />,
              title: 'Other Skills',
              skills: [
                { text: 'Data Structures & Algorithms' },
                { text: 'Problem Solving' },
                { text: 'Responsive Design' },
              ],
            },
            {
              icon: <FaGraduationCap className="text-xl text-rose-500" />,
              title: 'Certifications',
              skills: [
                { text: 'Backend Certification – Physics Wallah' },
                { text: 'Frontend Certification – Udemy' },
                { text: 'AI Agent Architect – IBM SkillBuild' },
              ],
            },
          ].map((section, i) => (
            <motion.section
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                {section.icon}
                <h2 className="text-2xl font-semibold">{section.title}</h2>
              </div>

              <div className="flex flex-wrap gap-4 text-sm">
                {section.skills.map((skill, j) => (
                  <Tag key={j} icon={skill.icon} text={skill.text} />
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </main>
  )
}

const Tag = ({ icon, text }: { icon?: React.ReactNode; text: string }) => (
  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-300 text-neutral-700 shadow-sm hover:shadow transition-all duration-300">
    {icon}
    {text}
  </span>
)

export default About
