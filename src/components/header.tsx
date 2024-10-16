"use client";

import { useAnimation, motion } from "framer-motion";
import { AtSign, BriefcaseBusiness, FolderClosed, Rss } from "lucide-react";

export default function Header() {
  const controls = useAnimation();
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      controls.start({
        y: element.offsetTop,
        transition: { duration: 0.8, ease: "easeInOut" },
      });
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <motion.header
      className="sticky h-16 flex justify-evenly mt-12"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="container flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleScroll("projects")}
            className="group flex items-center gap-1 text-md hover:font-semibold hover:underline cursor-pointer"
          >
            <FolderClosed className="w-5 h-5" />
            projects
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleScroll("work")}
            className="group flex items-center gap-1 text-md hover:font-semibold hover:underline cursor-pointer"
          >
            <BriefcaseBusiness className="w-5 h-5" />
            work experience
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            // onClick={() => handleScroll("work")}
            className="group flex items-center gap-1 text-md hover:font-semibold hover:underline cursor-pointer"
          >
            <Rss className="w-5 h-5" />
            blog
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleScroll("contact")}
            className="flex items-center gap-1 text-md hover:font-semibold hover:underline cursor-pointer"
          >
            <AtSign className="size-5" />
            contact
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
}
