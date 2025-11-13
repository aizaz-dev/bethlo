"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // 🎨 Colors taken from your screenshot palette
  const themes = [
    { id: "light", label: "Light", color: "#7BA4D9" }, // soft blue header
    { id: "dark", label: "Dark", color: "#1E2A44" },   // navy-gray for dark mode
  ];

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="w-20 sm:w-24 lg:w-28 h-6 sm:h-7 lg:h-8 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />
    );
  }

  const effectiveTheme = resolvedTheme || theme;
  const activeIndex = themes.findIndex((t) => t.id === effectiveTheme);

  return (
    <div className="relative">
      <div
        className="relative bg-gray-200 dark:bg-gray-700 rounded-full p-1 flex w-20 sm:w-24 lg:w-28 h-6 sm:h-7 lg:h-8 transition-colors duration-300"
        role="radiogroup"
        aria-label="Theme selector"
      >
        {/* Sliding Background */}
        <div
          className="absolute top-1 left-1 h-4 sm:h-5 lg:h-6 rounded-full bg-white dark:bg-gray-800 shadow-sm transition-all duration-300 ease-out"
          style={{
            width: `calc(50% - 4px)`,
            transform: `translateX(${activeIndex * 100}%)`,
          }}
        />

        {/* Theme Options */}
        {themes.map((themeOption) => {
          const isActive = effectiveTheme === themeOption.id;

          return (
            <button
              key={themeOption.id}
              onClick={() => setTheme(themeOption.id)}
              className="relative z-10 flex-1 rounded-full transition-all duration-200 cursor-pointer flex items-center justify-center"
              title={`Switch to ${themeOption.label} theme`}
              role="radio"
              aria-checked={isActive}
              aria-label={`Activate ${themeOption.label} theme`}
            >
              <div
                className={`w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 rounded-full transition-all duration-200 ${
                  isActive ? "scale-110 shadow-md" : "scale-100 hover:scale-105"
                }`}
                style={{ backgroundColor: themeOption.color }}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
