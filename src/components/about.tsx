import React from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="mt-32 md:mt-64 max-w-xl mx-auto text-center">
      <h1 className="uppercase font-bold text-3xl md:text-5xl text-primary">
        about
      </h1>
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
