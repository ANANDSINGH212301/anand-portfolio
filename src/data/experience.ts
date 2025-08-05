import { ComponentType, SVGProps } from 'react'
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiWordpress,
  SiMongodb,
  SiNodedotjs,
} from 'react-icons/si'

export type ExperienceItem = {
  title: string
  company: string
  location: string
  link: string
  date: string
  logo: string
  bullets: string[]
  tags: {
    name: string
    icon: ComponentType<SVGProps<SVGSVGElement>>
  }[]
}

export const experience: ExperienceItem[] = [
  {
    title: 'Intern – Web Developer',
    company: 'CodeSoft',
    location: 'Remote',
    link: 'https://www.linkedin.com/company/codesoft-ai/',
    date: '2025: june-july',
    logo: '/experience/code-soft.png',
    bullets: [
      'Built a full-stack affiliate program directory using Next.js and WordPress.',
      'Collaborated with a peer to deliver a fast, SEO-friendly platform.',
      'Utilized Tailwind CSS and responsive design to enhance UX.',
    ],
    tags: [
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'React', icon: SiReact },
      { name: 'WordPress', icon: SiWordpress },
      { name: 'Tailwind', icon: SiTailwindcss },
      { name: 'JavaScript', icon: SiJavascript },
    ],
  },
  {
    title: 'Intern – Web Developer',
    company: 'Elevate Labs',
    location: 'Remote',
    link: 'https://www.linkedin.com/company/elevete-labs/',
    date: '2025: july-august',
    logo: '/experience/elevate-labs.png',
    bullets: [
      'Worked on a job board platform with Next.js and MongoDB.',
      'Implemented admin panel features and dynamic job listings.',
      'Handled backend APIs using Node.js and improved performance.',
    ],
    tags: [
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Tailwind', icon: SiTailwindcss },
    ],
  },
]
