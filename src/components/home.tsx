"use client";
import {
  IconBrandGithubFilled,
  IconBrandLinkedinFilled,
  IconSparkles,
} from "@tabler/icons-react";
import { motion, useAnimationControls } from "motion/react";
import { useEffect } from "react";
import PictureCard from "@/components/ui/picture-card";
import Link from "next/link";

export default function Home() {
  const fullStackControls = useAnimationControls();
  const developerControls = useAnimationControls();
  const badgeControls = useAnimationControls();
  const taglineControls = useAnimationControls();

  useEffect(() => {
    const sequence = async () => {
      // First animate the badge
      await badgeControls.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.3,
        },
      });

      // Animate both text elements with a slight delay between them
      // Animate the "Full Stack" text - drop down with bounce and rotation reset
      fullStackControls.start({
        y: 0,
        opacity: 1,
        rotate: 0,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 5,
          mass: 1.5,
          velocity: 200,
        },
      });

      // Slight delay before animating "Developer" text
      await new Promise((resolve) => setTimeout(resolve, 80));

      // Animate the "Developer" text - drop down with bounce and rotation reset
      developerControls.start({
        y: 0,
        opacity: 1,
        rotate: 0,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 5,
          mass: 1.9,
          velocity: 200,
        },
      });

      // Slight delay before animating the tagline
      await new Promise((resolve) => setTimeout(resolve, 300));

      // Animate the tagline with a fade-in effect
      taglineControls.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          ease: "easeOut",
        },
      });
    };

    sequence();
  }, [badgeControls, fullStackControls, developerControls, taglineControls]);

  return (
    <main className="pt-20 md:pt-32 relative">
      <section className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <article className="text-center md:text-left">
          <motion.div
            className="rounded-full p-1 px-4 flex items-center gap-2 border border-accent w-fit font-medium hover:bg-accent group duration-200 mx-auto md:mx-0"
            initial={{ y: -50, opacity: 0 }}
            animate={badgeControls}
          >
            <IconSparkles className="text-accent group-hover:text-white duration-75" />
            <p>Let&apos;s build</p>
          </motion.div>
          <h1 className="max-w-[360px] mx-auto text-4xl md:text-7xl font-bold mt-2 overflow-hidden md:mx-0">
            <motion.span
              initial={{ y: -200, opacity: 0, rotate: -5 }}
              animate={fullStackControls}
              className="inline-block origin-bottom"
            >
              Full Stack
            </motion.span>{" "}
            <motion.span
              className="text-primary inline-block origin-bottom"
              initial={{ y: -200, opacity: 0, rotate: 5 }}
              animate={developerControls}
            >
              Developer
            </motion.span>
          </h1>
          <motion.p
            className="text-sm md:text-base mt-2 max-w-[500px] text-muted-foreground italic mx-auto md:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={taglineControls}
          >
            In blackest day, in darkest night,
            <br />
            I architect systems that scale just right.
            <br />
            From backend logic to frontend delight,
            <br />I build with precision, performance, and insight.
          </motion.p>
          <div className="flex items-center gap-4 py-3">
            <Link
              href={"https://www.linkedin.com/in/hephzibah-oloyede-237b7915b/"}
            >
              <IconBrandLinkedinFilled className="text-primary" />
            </Link>
            <Link href={"https://www.github.com/zibby-zibs"}>
              <IconBrandGithubFilled className="text-primary" />
            </Link>
          </div>
        </article>
        <div className="relative md:mr-20">
          <div className="rotate-12 relative z-[2] pt-5 hidden md:block">
            <PictureCard img={"/profile-1.jpg"} />
          </div>
          <div className="md:absolute top-0 left-0 md:-ml-[230px] z-[4] md:-rotate-[12deg] w-fit mx-auto md:mx-0">
            <PictureCard img={"/profile.jpg"} />
          </div>
        </div>
      </section>
    </main>
  );
}
