"use client";

import Image from "next/image";
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import Navbar from "./Navbar";
import Experience from "./Experience";
import Footer from "./Footer";

const Hero: React.FC = () => {
  return (
    <>
      <Navbar />
      <section className="relative h-[220vh] overflow-hidden flex items-center justify-center flex-col px-6 md:px-20 gap-28">
        {/* Background pattern layer */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 z-0" />

        <div className="mt-[6rem] ">
          <div className="relative z-10 flex flex-col md:flex-row-reverse items-center justify-between gap-12 w-full max-w-6xl">
            {/* Right: Profile Image */}
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-yellow-400 rounded-full overflow-hidden flex-shrink-0 shadow-lg">
              <Image
                src="/profile.png"
                width={1000}
                height={1000}
                alt="Picture of the author"
                className="object-cover grayscale"
              />
            </div>

            {/* Left: Text */}
            <div className="text-center md:text-left flex flex-col gap-4">
              <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 leading-tight">
                Building the Web. <br /> One Line at a Time.
              </h1>
              <p className="mt-4 text-sm text-neutral-600 max-w-md">
                Hi, I&apos;m Singh Anand Kumar Anuj — a Full Stack Developer
                skilled in the MERN stack and Java. I love creating fast,
                accessible, and elegant web experiences.
              </p>

              <div className="flex items-center gap-10">
                {/* Download Resume Button */}
                <div className="mt-6">
                  <a
                    href="https://drive.google.com/file/d/11A3pewXNCi1WEFLDGq9lJoBs5JbDZd7q/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-neutral-800 transition"
                  >
                    View Resume
                  </a>
                </div>

                {/* Social Links */}
                <div className="relative z-40 flex gap-4 pt-7 justify-center md:justify-start">
                  {[
                    {
                      href: "https://github.com/ANANDSINGH212301",
                      icon: <FaGithub size={18} />,
                      label: "GitHub",
                    },
                    {
                      href: "https://www.linkedin.com/in/anand-singh-03a3862a3",
                      icon: <FaLinkedin size={18} />,
                      label: "LinkedIn",
                    },
                    {
                      href: "mailto:anandsingh264583@gmail.com",
                      icon: <FaEnvelope size={18} />,
                      label: "Email",
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
        </div>
        {/* Experience */}
        <Experience />
        <Footer />
      </section>
    </>
  );
};

export default Hero;
