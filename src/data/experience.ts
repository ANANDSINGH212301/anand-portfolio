import {
  FaReact,
  FaWordpress,
  FaFigma,
  FaGitAlt,
} from 'react-icons/fa'
import { ComponentType, SVGProps } from 'react'
import {
  SiMysql,
  SiTailwindcss,
  SiJavascript,
  SiNextdotjs,
  SiShadcnui,
} from 'react-icons/si'

export type ExperienceItem = {
  title: string
  company: string
  location: string
  link: string
  date: string
  bullets: string[]
  tags: { name: string; icon: ComponentType<SVGProps<SVGSVGElement>> }[]
}

export const experience: ExperienceItem[] = [
  {
    title: 'Intern – Web Developer',
    company: 'CodeSoft',
    location: 'Remote',
    link: 'https://internship.codesoft.in/',
    date: '2024',
    bullets: [
      'Built a full-stack affiliate program directory using Next.js and WordPress.',
      'Collaborated with a peer to deliver a fast, SEO-friendly platform.',
    ],
    tags: [
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'WordPress', icon: FaWordpress },
      { name: 'MySQL', icon: SiMysql },
      { name: 'React Hooks', icon: FaReact },
      { name: 'Tailwind', icon: SiTailwindcss },
      { name: 'Shadcn UI', icon: SiShadcnui },
    ],
  },
  {
    title: 'Intern – Web Developer',
    company: 'Elevete Labs',
    location: 'Remote',
    link: 'https://elevatelabs.tech/',
    date: '2024',
    bullets: [
      'Built responsive dashboards with React.js and Tailwind CSS.',
      'Participated in Agile sprints, team collaboration, and UI enhancements.',
    ],
    tags: [
      { name: 'React.js', icon: FaReact },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'Figma', icon: FaFigma },
      { name: 'Git', icon: FaGitAlt },
      { name: 'JavaScript', icon: SiJavascript },
    ],
  },
]
