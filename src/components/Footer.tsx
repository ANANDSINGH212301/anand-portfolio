import React from "react";
import Link from "next/link";
import { FiPhone } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      {/* Footer */}
      <div className="absolute z-10 bottom-0 mx-auto w-full max-w-[85rem] bg-white/40 backdrop-blur-xs border border-neutral-300 rounded-2xl px-6 py-6 text-sm text-neutral-700 shadow-md">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          {/* Left: Credit */}
          <p className="text-center md:text-left font-medium tracking-tight">
            © {new Date().getFullYear()} | Created by - Singh Anand Kumar Anuj
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
    </>
  );
};

export default Footer;
