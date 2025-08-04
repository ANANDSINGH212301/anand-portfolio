import React from "react";
import Projects from "@/components/Projects";


export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#f6f6f6] via-white to-[#eaeaea] pt-13">
      {/* Optional: Grid background here if not already in Projects.tsx */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 z-0"></div>
      <div className="relative z-10 px-6 md:px-20">
        <Projects />
      </div>
    </main>
  );
}
