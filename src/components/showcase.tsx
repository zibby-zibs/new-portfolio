"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { SparklesCore } from "./ui/sparkles";
import { Project } from "@/lib/type";
import { urlFor } from "@/sanity/utils";

const Showcase = (props: { projects: Project[] }) => {
  return (
    <div className="mt-32 md:mt-64 ">
      <div className="pb-8">
        <h1 className="uppercase font-bold text-4xl md:text-7xl text-primary text-center">
          Showcase
        </h1>
        <div className="w-full h-10 relative mx-auto">
          {/* Gradients */}
          <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-secondary to-transparent h-[2px] w-full blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-secondary to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-accent to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-secondary/80 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-secondary/90 to-transparent h-px w-1/4" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-[50%] mx-auto h-full"
            particleColor="#FFFFFF"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>
      <Tabs>
        <TabsList className="w-full h-auto bg-accent/20 backdrop-blur">
          <TabsTrigger
            value="projects"
            className="text-lg md:text-xl font-medium !py-9"
          >
            Projects
          </TabsTrigger>
          <TabsTrigger
            value="experience"
            className="text-lg md:text-xl font-medium !py-9"
          >
            Experience
          </TabsTrigger>
        </TabsList>
        <TabsContent value="projects">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {props.projects?.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative h-56 w-full">
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
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-accent">{project.title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {project.summary}
        </p>
        <a
          href={project.linkToBuild}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 font-medium text-background bg-accent rounded-lg hover:bg-secondary/90 transition-colors duration-300"
        >
          View Project
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Showcase;
