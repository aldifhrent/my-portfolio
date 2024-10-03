"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const projectsData = [
  {
    title: "Portfolio Landing Page Slicing",
    date: 2024,
    description:
      "slicing the portfolio landing page with the design obtained from the figma community and slicing using nextjs, tailwindcss and also framer motion.",
    websiteLink: "https://portfolio-slicing.vercel.app",
    repository: "https://github.com/aldifhrent/portfolio-slicing",
  },
  {
    title: "Landing Page Slicing",
    date: 2024,
    description:
      "slicing landing page designs and designs obtained from the figma community using nextjs, tailwindcss and framer motion.",
    websiteLink: "https://landingpage-slicing.vercel.app",
    repository: "https://github.com/aldifhrent/landingpage-slicing",
  },
  {
    title: "Interior Landing Page Slicing",
    date: 2024,
    description:
      "slicing interior landing page designs and designs obtained from the figma community using nextjs, tailwindcss",
    websiteLink: "https://interior-slicing.vercel.app",
    repository: "https://github.com/aldifhrent/interior-slicing",
  },
];
export default function Projects() {
  return (
    <section className="mt-12 " id="projects">
      <div className="container mx-auto justify-center flex flex-col">
        <h1 className="text-md font-semibold ">Projects</h1>
        <div className="flex flex-col gap-y-8 mt-4">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 24,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.5,
                ease: "easeInOut",
              }}
            >
              <ProjectCard
                title={project.title}
                date={project.date}
                description={project.description}
                websiteLink={project.websiteLink}
                repository={project.repository}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProjectProps {
  title: string;
  date: number;
  description?: string;
  websiteLink?: string;
  repository?: string;
}
function ProjectCard({
  title,
  date,
  description,
  websiteLink,
  repository,
}: ProjectProps) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-4">
        <h1 className="text-md">{title}</h1>
        <p className="px-2 py-[3px] bg-black dark:bg-white text-white dark:text-black  rounded-lg">
          {date}
        </p>
      </div>
      <p className="text-sm mt-2 md:text-md text-muted-foreground text-justify">
        {description}
      </p>
      <div className="flex items-center gap-x-4">
        <Link
          target="_blank"
          href={websiteLink || ""}
          className="mt-2 text-sm hover:underline hover:cursor-pointer"
        >
          Link Website
        </Link>
        <Link
          target="_blank"
          href={repository || ""}
          className="mt-2 text-md hover:underline hover:cursor-pointer"
        >
          Repository
        </Link>
      </div>
    </div>
  );
}
