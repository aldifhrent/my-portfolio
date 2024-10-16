"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

const TopMenu = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedTheme = Cookies.get("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, [setTheme]);

  if (!mounted) return null;

  const handleTheme = () => {
    const newTheme = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    Cookies.set("theme", newTheme);
  };

  return (
    <section className="pt-4">
      <div className="container flex justify-end ml-auto items-center">
        <button
          onClick={handleTheme}
          aria-label="Toggle theme"
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
        >
          {resolvedTheme === "light" ? (
            <Sun className="w-6 h-6 text-yellow-500" />
          ) : (
            <Moon className="w-6 h-6 text-gray-100" />
          )}
        </button>
      </div>
    </section>
  );
};

export default TopMenu;
