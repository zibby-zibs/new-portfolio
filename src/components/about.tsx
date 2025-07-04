import React from "react";
import { SparklesCore } from "./ui/sparkles";

const About = () => {
  return (
    <div className="mt-32 md:mt-64 max-w-xl mx-auto text-center">
      <h1 className="uppercase font-bold text-4xl md:text-7xl text-primary">
        about
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
      <p className="py-6 md:text-lg text-muted-foreground">
        I&apos;m a full-stack developer and product builder passionate about
        solving real-world problems with clean, scalable software. From
        launching SaaS platforms for schools to designing user-focused service
        marketplaces and DeFi integrations, I thrive at the intersection of
        thoughtful design, solid architecture, and business impact. I work fast,
        think deeply, and love building products that actually help people. The
        more complex it is, the more fun it turns out to be.
      </p>
    </div>
  );
};

export default About;
