"use client";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import * as Toggle from "@radix-ui/react-toggle";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Skeleton from "./Skeleton";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="inline-block rounded-full p-2">
        <div className="rounded-full flex items-center justify-center">
          <Skeleton className="w-6 h-6" />
        </div>
      </div>
    );
  }

  return (
    <Toggle.Root
      onPressedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full p-2 transition-all duration-300 ease-in-out border border-gray-20 dark:border-none dark:bg-dark-50"
      aria-label="Theme Toggle"
    >
      <div
        className={`rounded-full flex items-center justify-center transition-transform duration-500 ease-in-out ${
          theme === "dark" ? "rotate-180" : "rotate-0"
        }`}
      >
        {theme === "dark" ? (
          <SunIcon className="w-6 h-6 text-yellow-70 transition-opacity duration-300 ease-in-out" />
        ) : (
          <MoonIcon className="w-6 h-6 text-gray-30 transition-opacity duration-300 ease-in-out" />
        )}
      </div>
    </Toggle.Root>
  );
}
