"use client";

import Image from "next/image";
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import Navbar from "./Navbar";
import { FiPhone } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const Hero: React.FC = () => {
  return (
    <>
      <Navbar />
      <section className="relative h-[110vh] overflow-hidden flex items-center justify-center px-6 md:px-20">
        {/* Background pattern layer */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 z-0" />

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
                  href="https://drive.google.com/file/d/1eDoMnwptsqxX75hjLGYqEe1tgQuRcPRa/view?usp=drive_link"
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
        {/* Footer */}
        <div className="absolute z-10 bottom-0 mx-auto w-full max-w-[85rem] bg-white/40 backdrop-blur-xs border border-neutral-300 rounded-2xl px-6 py-6 text-sm text-neutral-700 shadow-md">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            {/* Left: Credit */}
            <p className="text-center md:text-left font-medium tracking-tight">
              © {new Date().getFullYear()}  |  Created by -  Singh Anand Kumar Anuj
            </p>

            {/* Right: Socials */}
            <div className="flex gap-6 items-center text-neutral-600">
              {/* LeetCode */}
              <Link
                href="https://leetcode.com/u/anandsingh264583"
                target="_blank"
                className="flex items-center gap-1 hover:text-black transition"
              >
                <span className="text-xs font-medium tracking-wide">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="20"
                    viewBox="0 0 16 16"
                  >
                    <path d="M 10.447266 0.265625 A 0.50005 0.50005 0 0 0 10.103516 0.41796875 L 5.65625 4.8671875 L 3.0957031 7.4257812 A 0.50005 0.50005 0 0 0 2.9785156 7.6035156 C 1.769869 8.9739016 1.7865696 11.063913 3.0957031 12.373047 L 5.65625 14.933594 C 7.0176322 16.294976 9.242133 16.294976 10.603516 14.933594 L 12.853516 12.683594 A 0.50063809 0.50063809 0 1 0 12.144531 11.976562 L 9.8945312 14.226562 C 8.9159134 15.20518 7.3418991 15.20518 6.3632812 14.226562 L 3.8027344 11.666016 C 2.8241166 10.687398 2.8241166 9.1114303 3.8027344 8.1328125 L 6.3632812 5.5742188 C 7.3418991 4.5956009 8.9159135 4.5956009 9.8945312 5.5742188 L 12.144531 7.8242188 A 0.50063784 0.50063784 0 1 0 12.853516 7.1171875 L 10.603516 4.8671875 C 9.9106907 4.174363 8.9943718 3.8431189 8.0820312 3.8554688 L 10.8125 1.125 A 0.50005 0.50005 0 0 0 10.447266 0.265625 z M 7.328125 9.4003906 A 0.50005 0.50005 0 1 0 7.328125 10.400391 L 14.228516 10.400391 A 0.50005 0.50005 0 1 0 14.228516 9.4003906 L 7.328125 9.4003906 z"></path>
                  </svg>
                </span>
              </Link>

              {/* Instagram */}
              <Link
                href="https://www.instagram.com/_anand.k_21"
                target="_blank"
                className="hover:text-black transition"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </Link>

              {/* Phone */}
              <Link
                href="tel:+919060648757"
                className="hover:text-black transition"
                aria-label="Phone"
              >
                <FiPhone className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
