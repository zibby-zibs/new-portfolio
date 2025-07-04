"use client";

import React from "react";
import { urlFor } from "@/sanity/utils";
import { Project } from "@/lib/type";

interface ProjectSliderProps {
  projects: Project[];
}

const ProjectSlider = ({ projects }: ProjectSliderProps) => {
  if (!projects?.length) return null;

  // For a smoother infinite scroll, we'll create multiple copies
  const projectsToRender = [...projects, ...projects];

  return (
    <div className="w-full overflow-hidden group">
      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          display: flex;
          width: fit-content;
          animation: scroll 40s linear infinite;
          animation-play-state: running;
        }
        .group:hover .animate-scroll {
          animation-play-state: paused;
        }
      `}</style>
      <div className="animate-scroll gap-6 py-4">
        {projectsToRender.map((project, index) => (
          <ProjectCard
            key={`project-${project._id}-${index}`}
            project={project}
          />
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="flex-shrink-0 w-[280px] md:w-[320px] rounded-lg overflow-hidden shadow-md border border-border">
      <div className="relative h-[200px] w-full overflow-hidden">
        {project.image?.asset ? (
          <img
            src={urlFor(project.image.asset).url()}
            alt={project.title}
            className="object-cover w-full h-full"
          />
        ) : (
          <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground">
            No Image
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectSlider;
