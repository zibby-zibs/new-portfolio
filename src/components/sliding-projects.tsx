import React from "react";
import ProjectSlider from "./project-slider";
import { Project } from "@/lib/type";

const SlidingProjects = async (props: { projects: Project[] }) => {
  return (
    <section className="py-20 md:py-28">
      {/* <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        My Projects
      </h2> */}
      <div className="relative w-full">
        {/* Left fade gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-[100px] z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />

        <ProjectSlider projects={props?.projects} />

        {/* Right fade gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-[100px] z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

export default SlidingProjects;
