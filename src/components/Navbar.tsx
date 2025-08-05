"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xs bg-white/30 border-b border-neutral-200 px-8 py-6 flex justify-between items-center text-neutral-900">
        {/* Logo */}
        <Link href="/" className="group relative inline-block">
          <span className="text-xl font-bold tracking-tight">Anand.</span>
        </Link>
        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-base tracking-wide font-medium ml-[-12px]">
          {[
            { href: "/about", label: "About" },
            { href: "/projects", label: "Projects" },
            { href: "/contact", label: "Contact" },
          ].map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              className="relative group px-2 py-1 transition"
            >
              <span className="text-neutral-800 group-hover:opacity-80">
                {label}
              </span>
              <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-neutral-800 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>
        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl focus:outline-none">
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </header>

      {/* Mobile Menu + Backdrop */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop Blur */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 bg-black backdrop-blur-sm z-40"
            />

            {/* Slide-in Menu */}
            <motion.div
              key="menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 w-3/4 h-full bg-[#f6f6f6] z-50 shadow-xl flex flex-col items-center justify-center space-y-8 text-sm uppercase tracking-widest"
            >
              <Link
                href="/about"
                onClick={closeMenu}
                className="hover:opacity-60 transition"
              >
                About
              </Link>
              <Link
                href="/projects"
                onClick={closeMenu}
                className="hover:opacity-60 transition"
              >
                Projects
              </Link>
              <Link
                href="/contact"
                onClick={closeMenu}
                className="hover:opacity-60 transition"
              >
                Contact
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
