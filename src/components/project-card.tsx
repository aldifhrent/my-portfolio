import { Link as LucideLink } from "lucide-react"; // Ensure the correct import

// Update the Tech type to be a string, allowing for any technology

interface ProjectProps {
  title: string;
  date?: Date; // Use Date for better type safety
  description?: string;
  websiteLink?: string;
  repository?: string;
  tech: string[]; // Now an array of strings
  typeProject: "Slicing" | "Full Stack" | "Other";
}

export default function ProjectCard({
  title,
  date,
  description,
  websiteLink,
  repository,
  tech,
  typeProject,
}: ProjectProps) {
  return (
    <div className="flex flex-col border p-4 rounded-lg shadow-md">
      <div className="flex flex-wrap items-center gap-4">
        <h2 className="text-xl md:text-2xl font-semibold">{title}</h2>
        <span className="px-2 py-1 bg-black dark:bg-white text-white dark:text-black text-sm rounded-lg">
          Date
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
          <a
            href={websiteLink}
            target="_blank"
            rel="noopener noreferrer"
            className="dark:text-white hover:underline"
          >
            Website
          </a>
        )}
        {repository && (
          <a
            href={repository}
            target="_blank"
            rel="noopener noreferrer"
            className="dark:text-white hover:underline"
          >
            Repository
          </a>
        )}
      </div>
    </div>
  );
}
