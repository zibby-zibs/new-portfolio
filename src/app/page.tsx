import About from "@/components/about";
import ContactForm from "@/components/contact-form";
import Home from "@/components/home";
import Showcase from "@/components/showcase";
import SlidingProjects from "@/components/sliding-projects";
import { fetchExperience } from "@/lib/fetchExperience";
import { fetchProjects } from "@/lib/fetchProjects";
import React from "react";

const page = async () => {
  const projects = await fetchProjects();
  const experience = await fetchExperience();
  return (
    <div className="px-5">
      <section id="home">
        <Home />
      </section>
      <section id="projects">
        <SlidingProjects projects={projects} />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="showcase">
        <Showcase projects={projects} experiences={experience} />
      </section>
      <section id="contact">
        <ContactForm />
      </section>
    </div>
  );
};

export default page;
