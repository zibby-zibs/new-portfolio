"use client";

import React, { useRef, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { SparklesCore } from "./ui/sparkles";
import { Project } from "@/lib/type";
import { urlFor } from "@/sanity/utils";
import { Experience } from "@/lib/type";
import Link from "next/link";

const Showcase = (props: {
  projects: Project[];
  experiences: Experience[];
}) => {
  return (
    <div className="mt-32 md:mt-64 ">
      <div className="pb-8">
        <h1 className="uppercase font-bold text-4xl md:text-7xl text-primary text-center">
          Showcase
        </h1>
        <div className="w-[80%] h-10 relative mx-auto">
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
      <Tabs defaultValue="projects">
        <TabsList className="w-full h-auto bg-transparent backdrop-blur">
          <TabsTrigger
            value="projects"
            className="text-lg md:text-xl font-medium !py-5 flex flex-col items-center gap-2 rounded-2xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
              />
            </svg>
            Projects
          </TabsTrigger>
          <TabsTrigger
            value="experience"
            className="text-lg md:text-xl font-medium !py-5 flex flex-col items-center gap-2 rounded-2xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
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
        <TabsContent value="experience">
          <div className="relative mt-12 pb-12">
            {/* Decorative elements */}
            <div className="absolute left-0 top-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute left-1/4 top-1/3 w-48 h-48 bg-secondary/5 rounded-full blur-3xl -z-10"></div>

            {/* Timeline header */}
            <div className="text-center mb-16 relative">
              <p className="text-muted-foreground mt-2 max-w-md mx-auto">
                A timeline of my professional experiences and growth
              </p>
            </div>

            {/* Vertical timeline line with animated gradient */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 timeline-line"></div>

            {/* Experience items */}
            {props.experiences?.map((exp, index) => (
              <div
                key={exp._id}
                className={`relative z-10 mb-24 ${index % 2 === 0 ? "ml-auto pr-8 md:ml-[50%] md:pr-0 md:pl-12" : "mr-auto pl-8 md:mr-[50%] md:pl-0 md:pr-12"} w-full md:w-[50%] experience-item`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot with ripple effect */}
                <div
                  className={`absolute top-6 md:top-8 w-8 h-8 rounded-full bg-accent/20 timeline-dot left-0 md:left-auto md:right-auto md:-ml-4 md:-mr-4 z-10 flex items-center justify-center
                  ${index % 2 === 0 ? "md:-ml-4 md:left-0" : "md:-mr-4 md:right-0"}`}
                >
                  <div className="w-4 h-4 rounded-full bg-accent animate-pulse"></div>
                  <div className="absolute inset-0 rounded-full ripple-effect"></div>
                </div>

                {/* Year marker */}
                <div
                  className={`hidden md:block absolute top-8 text-sm font-bold text-accent/80 ${index % 2 === 0 ? "right-full mr-8" : "left-full ml-8"}`}
                >
                  {new Date(exp.dateStarted).getFullYear()}
                </div>

                {/* Card */}
                <div className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-glow-md transition-all duration-500 ease-out transform hover:-translate-y-2 hover:scale-[1.02] card-hover">
                  {/* Company image banner */}
                  <div className="relative h-40 w-full bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 overflow-hidden">
                    {exp.companyImage?.asset ? (
                      <img
                        src={urlFor(exp.companyImage.asset).url()}
                        alt={exp.company}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 ease-out group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-accent/50">
                          {exp.company}
                        </span>
                      </div>
                    )}

                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent"></div>

                    {/* Date badge */}
                    <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm text-sm font-medium text-accent px-4 py-1.5 rounded-full border border-accent/30 shadow-glow-sm date-badge">
                      {new Date(exp.dateStarted).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                      })}{" "}
                      -
                      {exp.isCrrentlyWorkingHere
                        ? "Present"
                        : new Date(exp.dateEnded).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                          })}
                    </div>
                  </div>

                  <div className="p-6 relative">
                    {/* Decorative corner accent */}
                    <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                      <div className="absolute rotate-45 bg-accent/10 w-8 h-8 -top-4 -right-4 transform origin-bottom-left"></div>
                    </div>

                    {/* Job title and company */}
                    <div className="mb-5">
                      <h3 className="text-2xl font-bold text-accent mb-1 group-hover:text-secondary transition-colors duration-300">
                        {exp.jobTitle}
                      </h3>
                      <p className="text-xl text-muted-foreground">
                        {exp.company}
                      </p>
                    </div>

                    {/* Responsibilities */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-secondary mb-3 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                          />
                        </svg>
                        Responsibilities
                      </h4>
                      <ul className="space-y-3">
                        {exp.points.map((point, i) => (
                          <li
                            key={i}
                            className="flex items-start responsibility-item"
                            style={{ animationDelay: `${i * 0.1 + 0.3}s` }}
                          >
                            <span className="text-accent mr-2 mt-1 flex-shrink-0">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </span>
                            <span className="text-muted-foreground">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    {exp.technologies?.length > 0 && (
                      <div className="mb-4">
                        <h4 className="text-lg font-semibold text-secondary mb-3 flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                            />
                          </svg>
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <span
                              key={tech._id}
                              className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full border border-accent/20 hover:bg-accent/20 transition-colors duration-300 tech-badge"
                              style={{ animationDelay: `${i * 0.05 + 0.5}s` }}
                            >
                              {tech.title}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Social links */}
                    {exp.socials?.length > 0 && (
                      <div className="mt-6 pt-4 border-t border-border">
                        <div className="flex gap-3">
                          {exp.socials.map((social, i) => (
                            <a
                              key={social._id}
                              href={social.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-accent transition-colors duration-300 social-link"
                              style={{ animationDelay: `${i * 0.1 + 0.7}s` }}
                            >
                              {social.title}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    }
  };

  return (
    <div
      ref={cardRef}
      className="group relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden transform transition-all duration-700 hover:-translate-y-4 hover:scale-[1.02] hover:shadow-2xl hover:shadow-accent/10"
      onMouseMove={handleMouseMove}
    >
      {/* Psychological hover effect - following cursor */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(var(--accent), 0.1) 0%, transparent 50%)`,
        }}
      />

      {/* Morphing corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-20 h-20 bg-accent/20 rounded-full blur-xl group-hover:bg-accent/30 transition-all duration-500 group-hover:scale-150" />
      </div>

      {/* Neural connection overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700">
        <svg className="w-full h-full" viewBox="0 0 300 400">
          <path
            d="M50 50 Q150 100 250 50 Q200 200 100 300 Q150 250 250 350"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            className="animate-pulse"
          />
          <circle
            cx="50"
            cy="50"
            r="2"
            fill="currentColor"
            className="animate-ping"
          />
          <circle
            cx="250"
            cy="50"
            r="2"
            fill="currentColor"
            className="animate-ping"
            style={{ animationDelay: "0.5s" }}
          />
          <circle
            cx="100"
            cy="300"
            r="2"
            fill="currentColor"
            className="animate-ping"
            style={{ animationDelay: "1s" }}
          />
        </svg>
      </div>

      {/* Image container with psychological framing */}
      <div className="relative h-64 w-full overflow-hidden">
        {/* Gradient overlay for depth perception */}
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent z-10" />

        {project.image?.asset ? (
          <img
            src={urlFor(project.image.asset).url()}
            alt={project.title}
            className="object-cover w-full h-full transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-accent/20 via-secondary/10 to-primary/20 flex items-center justify-center relative">
            {/* Abstract geometric pattern for missing images */}
            <div className="relative">
              <div
                className="w-16 h-16 border-2 border-accent/50 rounded-lg rotate-45 animate-spin"
                style={{ animationDuration: "8s" }}
              />
              <div
                className="absolute inset-0 w-16 h-16 border-2 border-secondary/50 rounded-lg -rotate-45 animate-spin"
                style={{
                  animationDuration: "6s",
                  animationDirection: "reverse",
                }}
              />
            </div>
            <span className="absolute bottom-4 text-muted-foreground text-sm font-medium tracking-wider">
              {project.title}
            </span>
          </div>
        )}

        {/* Floating status indicator */}
        <div className="absolute top-4 left-4 z-20">
          <div className="flex items-center gap-2 bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-accent/30">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-xs font-medium text-accent">ACTIVE</span>
          </div>
        </div>
      </div>

      {/* Content with psychological spacing */}
      <div className="p-8 relative z-10">
        {/* Title with cognitive emphasis */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-2 text-accent group-hover:text-secondary transition-colors duration-500 tracking-tight">
            {project.title}
          </h3>

          {/* Subtle accent line */}
          <div className="w-0 h-0.5 bg-gradient-to-r from-accent to-secondary transition-all duration-700 group-hover:w-16" />
        </div>

        {/* Description with progressive disclosure */}
        <div className="mb-8 relative overflow-hidden">
          <p className="text-muted-foreground leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
            {project.summary}
          </p>

          {/* Fade effect for long text */}
          <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-card to-transparent group-hover:opacity-0 transition-opacity duration-500" />
        </div>

        {/* CTA with psychological urgency */}
        {project.linkToBuild && (
          <div className="relative">
            <Link
              href={project.linkToBuild.startsWith('http') ? project.linkToBuild : `https://${project.linkToBuild}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn relative inline-flex items-center justify-center px-8 py-4 font-semibold text-background bg-accent rounded-xl hover:bg-secondary transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-accent/25 overflow-hidden"
            >
              {/* Button background animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent via-secondary to-accent bg-[length:200%_100%] animate-pulse group-hover/btn:animate-none group-hover/btn:bg-[position:100%_0%] transition-all duration-500" />

              <span className="relative z-10 flex items-center gap-3">
                Explore Project
                {/* Animated arrow */}
                <svg
                  className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M7 17L17 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 7H17V17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>

              {/* Ripple effect */}
              <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-white/20 rounded-xl animate-ping" />
              </div>
            </Link>

            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-accent/20 rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10" />
          </div>
        )}
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
    </div>
  );
};

export default Showcase;
