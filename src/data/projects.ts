// data/projects.ts
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiReact,
  SiNodedotjs,
  SiDaisyui,
  SiWordpress,
  SiSteam,
  SiGoogleanalytics,
} from 'react-icons/si'

export type Tag = {
  text: string
  icon?: React.ElementType
}

export type Project = {
  title: string
  image: string
  live: string
  github: string
  tags: Tag[]
}

export const projects: Project[] = [
  {
    title: 'Affiliates Works – Full-Stack Project',
    image: '/projects/affiliates-work.png',
    live: 'https://program.affiliatesworks.com',
    github: '',
    tags: [
      { text: 'Full Stack' },
      { text: 'Next.js', icon: SiNextdotjs },
      { text: 'MySQL', icon: SiMysql },
      { text: 'Tailwind', icon: SiTailwindcss },
      { text: 'WordPress', icon: SiWordpress },
    ],
  },
  {
    title: 'Learnify – Language Learning Platform',
    image: '/projects/learnify.png',
    live: 'https://learnify-950b.onrender.com',
    github: '',
    tags: [
      { text: 'MERN' },
      { text: 'MongoDB', icon: SiMongodb },
      { text: 'Node.js', icon: SiNodedotjs },
      { text: 'React', icon: SiReact },
      { text: 'Tailwind', icon: SiTailwindcss },
      { text: 'DaisyUI', icon: SiDaisyui },
      { text: 'Stream', icon: SiSteam },
    ],
  },
  {
    title: 'URL Shortener – MERN Stack Project',
    image: '/projects/url-shortner.png',
    live: '',
    github: 'https://github.com/ANANDSINGH212301/urlshortner',
    tags: [
      { text: 'MERN' },
      { text: 'React', icon: SiReact },
      { text: 'MongoDB', icon: SiMongodb },
      { text: 'Node.js', icon: SiNodedotjs },
      { text: 'Tailwind', icon: SiTailwindcss },
      { text: 'Analytics', icon: SiGoogleanalytics },
    ],
  },
  {
    title: 'Portfolio Website – MERN Stack Project',
    image: '/projects/portfolio.png',
    live: '',
    github: 'https://github.com/ANANDSINGH212301/urlshortner',
    tags: [
      { text: 'MERN' },
      { text: 'React', icon: SiReact },
      { text: 'MongoDB', icon: SiMongodb },
      { text: 'Node.js', icon: SiNodedotjs },
      { text: 'Tailwind', icon: SiTailwindcss },
      { text: 'Analytics', icon: SiGoogleanalytics },
    ],
  },
]
