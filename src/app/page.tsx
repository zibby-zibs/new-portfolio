import About from "@/components/about";
import Home from "@/components/home";
import SlidingProjects from "@/components/sliding-projects";
import { fetchProjects } from "@/lib/fetchProjects";
import React from "react";

const page = async () => {
  const projects = await fetchProjects();
  return (
    <div className="px-5">
      <Home />
      <SlidingProjects projects={projects} />
      <About />
    </div>
  );
};

export default page;
