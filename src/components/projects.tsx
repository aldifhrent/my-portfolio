"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// Update the Tech type to be a string, allowing for any technology
type Tech = string;

type ProjectType = "Slicing" | "Full Stack" | "Other";

interface ProjectProps {
  title: string;
  date: number;
  description?: string;
  websiteLink?: string;
  repository?: string;
  tech: Tech[]; // Now an array of strings
  typeProject: ProjectType;
}

const projectsData: ProjectProps[] = [
  {
    title: "Portfolio Landing Page Slicing",
    date: 2024,
    typeProject: "Slicing",
    tech: ["NextJS", "Framer Motion", "TailwindCSS"],
    description:
      "Slicing the portfolio landing page with the design obtained from the Figma community and implementing using Next.js, TailwindCSS, and Framer Motion.",
    websiteLink: "https://portfolio-slicing.vercel.app",
    repository: "https://github.com/aldifhrent/portfolio-slicing",
  },
  {
    title: "Landing Page Slicing",
    date: 2024,
    typeProject: "Slicing",
    tech: ["TailwindCSS", "NextJS", "Framer Motion"],
    description:
      "Slicing landing page designs obtained from the Figma community using Next.js, TailwindCSS, and Framer Motion.",
    websiteLink: "https://landingpage-slicing.vercel.app",
    repository: "https://github.com/aldifhrent/landingpage-slicing",
  },
  {
    title: "Interior Landing Page Slicing",
    date: 2024,
    typeProject: "Slicing",
    tech: ["NextJS", "TailwindCSS"],
    description:
      "Slicing interior landing page designs obtained from the Figma community using Next.js and TailwindCSS.",
    websiteLink: "https://interior-slicing.vercel.app",
    repository: "https://github.com/aldifhrent/interior-slicing",
  },
] as const;

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  date,
  description,
  websiteLink,
  repository,
  tech,
  typeProject,
}) => (
  <div className="flex flex-col">
    <div className="flex flex-wrap items-center gap-4">
      <h2 className="text-xl md:text-2xl font-semibold">{title}</h2>
      <span className="px-2 py-1 bg-black dark:bg-white text-white dark:text-black text-sm rounded-lg">
        {date}
      </span>
      <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-sm rounded-lg">
        {typeProject}
      </span>
    </div>
    <p className="text-sm mt-2 md:text-md text-muted-foreground">
      {description}
    </p>
    <div className="flex flex-wrap gap-2 mt-2">
      {tech.map((item, index) => (
        <span
          key={index}
          className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-xs rounded-lg"
        >
          {item}
        </span>
      ))}
    </div>
    <div className="flex items-center gap-x-4 mt-2">
      {websiteLink && (
        <Link
          href={websiteLink}
          target="_blank"
          rel="noopener noreferrer"
          className="dark:text-white  hover:underline"
        >
          Website
        </Link>
      )}
      {repository && (
        <Link
          href={repository}
          target="_blank"
          rel="noopener noreferrer"
          className="dark:text-white hover:underline"
        >
          Repository
        </Link>
      )}
    </div>
  </div>
);

const Projects: React.FC = () => {
  return (
    <section className="py-12" id="projects">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-6">Projects</h1>
        <div className="grid gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
