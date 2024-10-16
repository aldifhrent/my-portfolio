import React from "react";
import prisma from "@/lib/db";
import { motion } from "framer-motion";
import ProjectCard from "./project-card";

type ProjectType = "Slicing" | "Full Stack" | "Other";

const mapTypeProject = (type: string): ProjectType => {
  switch (type.toUpperCase()) {
    case "SLICING":
      return "Slicing";
    case "FULL_STACK":
      return "Full Stack";
    default:
      return "Other";
  }
};

const Projects: React.FC = async () => {
  const data = await prisma.project.findMany({});
  return (
    <section className="py-12" id="projects">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-6">Projects</h1>
        <div className="grid gap-8">
          {data.map((project) => (
            <ProjectCard
              key={project.projectId}
              title={project.name}
              tech={project.tech}
              description={project.description}
              websiteLink={project.website}
              repository={project.repository}
              typeProject={mapTypeProject(project.typeProject)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
