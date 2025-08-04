"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Tag } from "@/data/projects";

type Props = {
  title: string;
  image: string;
  live: string;
  github: string;
  tags: Tag[];
};

const ProjectCard: React.FC<Props> = ({ title, image, live, github, tags }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="group relative w-full max-w-2xl mx-auto overflow-hidden rounded-md shadow-md transition-all"
    >
      {/* Project Image */}
      <Image
        src={image}
        alt={title}
        width={750}
        height={340}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Overlay on Hover */}
      <div className="absolute inset-0 backdrop-blur-md bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-white px-6 py-6 text-center">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>

        <div className="flex gap-3 mb-3">
          {live && (
            <Link
              href={live}
              target="_blank"
              className="px-4 py-1 text-sm border border-white rounded hover:bg-white hover:text-black transition"
            >
              Live
            </Link>
          )}
          {github && (
            <Link
              href={github}
              target="_blank"
              className="px-4 py-1 text-sm border border-white rounded hover:bg-white hover:text-black transition"
            >
              GitHub
            </Link>
          )}
        </div>

        {/* Tech Tags with Icons */}
        <div className="flex flex-wrap justify-center gap-2 text-xs">
          {tags.map((tag, i) => {
            const Icon = tag.icon;
            return (
              <span
                key={i}
                className="flex items-center gap-1 px-3 py-1 bg-white text-black rounded-full shadow-sm"
              >
                {Icon && <Icon className="text-sm" />}
                {tag.text}
              </span>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
