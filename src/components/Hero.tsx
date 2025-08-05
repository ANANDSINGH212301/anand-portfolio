'use client'

import Image from 'next/image'
import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import Link from 'next/link'
import Navbar from './Navbar'
import Experience from './Experience'
import Footer from './Footer'

const Hero: React.FC = () => {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative min-h-screen bg-white overflow-x-hidden px-6 md:px-20 pt-28 flex flex-col items-center justify-center">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 z-0" />

        {/* Main Hero Content */}
        <div className="relative z-10 flex flex-col md:flex-row-reverse items-center justify-between gap-12 w-full max-w-6xl">
          {/* Profile Image */}
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 bg-yellow-400 rounded-full overflow-hidden flex-shrink-0 shadow-lg">
            <Image
              src="/profile.png"
              width={1000}
              height={1000}
              alt="Picture of the author"
              className="object-cover grayscale"
            />
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left flex flex-col gap-4">
            <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 leading-tight">
              Building the Web. <br /> One Line at a Time.
            </h1>
            <p className="mt-2 text-sm text-neutral-600 max-w-md">
              Hi, I&apos;m Singh Anand Kumar Anuj — a Full Stack Developer
              skilled in the MERN stack and Java. I love creating fast,
              accessible, and elegant web experiences.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-6 mt-6">
              {/* Resume Button */}
              <a
                href="https://drive.google.com/file/d/11A3pewXNCi1WEFLDGq9lJoBs5JbDZd7q/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-neutral-800 transition"
              >
                View Resume
              </a>

              {/* Social Links */}
              <div className="flex gap-4 justify-center sm:justify-start">
                {[
                  {
                    href: 'https://github.com/ANANDSINGH212301',
                    icon: <FaGithub size={18} />,
                    label: 'GitHub',
                  },
                  {
                    href: 'https://www.linkedin.com/in/anand-singh-03a3862a3',
                    icon: <FaLinkedin size={18} />,
                    label: 'LinkedIn',
                  },
                  {
                    href: 'mailto:anandsingh264583@gmail.com',
                    icon: <FaEnvelope size={18} />,
                    label: 'Email',
                  },
                ].map(({ href, icon, label }, index) => (
                  <Link
                    key={index}
                    href={href}
                    target="_blank"
                    aria-label={label}
                    className="w-10 h-10 rounded-full border border-neutral-400 flex items-center justify-center hover:bg-neutral-800 hover:text-white transition-all duration-300 group"
                  >
                    {icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEPARATE SECTIONS */}
      <Experience />
      <Footer />
    </>
  )
}

export default Hero
