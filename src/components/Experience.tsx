"use client";

import React from "react";
import { experience } from "@/data/experience";
import Image from "next/image";

const Experience: React.FC = () => {
  return (
    <section className="w-full px-6 md:px-20 py-20 bg-white text-neutral-800">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Experience
      </h2>

      <div className="grid gap-10 max-w-4xl mx-auto">
        {experience.map((exp) => (
          <div
            key={`${exp.title}-${exp.company}`}
            className="p-6 border rounded-lg shadow-sm mb-6 backdrop-blur-sm  hover:bg-white transition"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className="text-sm text-neutral-600">
                  {exp.company} · {exp.location}
                </p>
                <p className="text-sm text-neutral-500">{exp.date}</p>
              </div>

              <Image
                src={exp.logo}
                alt={exp.company}
                width={80}
                height={80}
                className="object-contain max-h-14 w-auto"
              />
            </div>

            <ul className="mt-4 list-disc list-inside text-sm text-neutral-700 space-y-1">
              {exp.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-2">
              {exp.tags.map((tag, i) => (
                <span
                  key={i}
                  className="flex items-center gap-1 px-2 py-1 text-xs bg-neutral-100 rounded-full"
                >
                  <tag.icon className="w-4 h-4" /> {tag.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
