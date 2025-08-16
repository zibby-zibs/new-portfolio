"use client";
import React from "react";
import { FloatingDock } from "@/components/ui/floating-deck";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconUser,
  IconHome,
  IconBriefcase,
  IconMail,
  IconCode,
} from "@tabler/icons-react";

export function Header() {
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#home",
      onClick: (e: React.MouseEvent<HTMLAnchorElement>) =>
        handleSmoothScroll(e, "home"),
    },
    {
      title: "Projects",
      icon: (
        <IconCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#projects",
      onClick: (e: React.MouseEvent<HTMLAnchorElement>) =>
        handleSmoothScroll(e, "projects"),
    },
    {
      title: "About",
      icon: (
        <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#about",
      onClick: (e: React.MouseEvent<HTMLAnchorElement>) =>
        handleSmoothScroll(e, "about"),
    },
    {
      title: "Showcase",
      icon: (
        <IconBriefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#showcase",
      onClick: (e: React.MouseEvent<HTMLAnchorElement>) =>
        handleSmoothScroll(e, "showcase"),
    },
    {
      title: "Contact",
      icon: (
        <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#contact",
      onClick: (e: React.MouseEvent<HTMLAnchorElement>) =>
        handleSmoothScroll(e, "contact"),
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.github.com/zibby-zibs", // Replace with your actual GitHub URL
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/hephzibah-oloyede-237b7915b/", // Replace with your actual LinkedIn URL
    },
  ];
  return (
    <div className="flex items-center justify-center h-fit w-full">
      <FloatingDock
        items={links}
        desktopClassName="fixed bottom-5 z-50 !bg-black/40 backdrop-blur"
        mobileClassName="fixed bottom-5 z-50 !bg-white rounded-full backdrop-blur"
      />
    </div>
  );
}
