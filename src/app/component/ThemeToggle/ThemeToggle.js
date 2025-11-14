"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="w-16 h-8 rounded-full animate-pulse" style={{ backgroundColor: "rgba(255,255,255,0.5)" }} />;
  }

  const isDark = (resolvedTheme || theme) === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      role="switch"
      aria-checked={isDark}
      aria-label="Toggle theme"
      className={`relative inline-flex items-center w-16 h-8 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 cursor-pointer ${
        isDark ? "bg-gray-700 focus:ring-white/50" : "bg-white/60 focus:ring-[#76C7CF]/50"
      }`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setTheme(isDark ? "light" : "dark");
        }
      }}
    >
      <span
        className={`absolute top-1 left-1 w-6 h-6 rounded-full shadow-sm transition-transform duration-300 ${
          isDark ? "bg-gray-800" : "bg-white"
        }`}
        style={{ transform: `translateX(${isDark ? 32 : 0}px)` }}
      >
        <span className="flex items-center justify-center w-full h-full">
          {isDark ? (
            <Moon size={14} className="text-white" />
          ) : (
            <Sun size={14} className="text-[#1E2A44]" />
          )}
        </span>
      </span>
    </button>
  );
}
