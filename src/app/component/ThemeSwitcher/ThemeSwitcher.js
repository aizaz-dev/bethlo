"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeButton = ({ themeName, currentTheme, onClick, label }) => {
  const isActive = currentTheme === themeName;

  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center cursor-pointer px-4 py-2 rounded-md font-medium transition-all duration-200 shadow-sm
        ${
          isActive
            ? "bg-primary text-text-white shadow-md"
            : "bg-bg-card text-text-secondary hover:bg-bg-secondary hover:shadow-sm"
        }
      `}
    >
      {label}
    </button>
  );
};

const StaticThemeButton = ({ label }) => (
  <button className="flex items-center justify-center cursor-pointer px-4 py-2 rounded-md bg-bg-card text-text-secondary">
    {label}
  </button>
);

export default function ThemeSwitcher() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const themes = [
    { id: "light", label: "Light Mode" },
    { id: "dark", label: "Dark Mode" },
  ];

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (mounted && !theme) {
      const systemTheme =
        resolvedTheme ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light");
      setTheme(systemTheme);
    }
  }, [mounted, theme, resolvedTheme, setTheme]);

  if (!mounted) {
    return (
      <div className="flex flex-col gap-3">
        {themes.map((themeOption) => (
          <StaticThemeButton key={themeOption.id} label={themeOption.label} />
        ))}
      </div>
    );
  }

  const effectiveTheme = resolvedTheme || theme;

  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-lg font-semibold text-text-primary mb-1">
        Choose Theme
      </h3>

      {themes.map((themeOption) => (
        <ThemeButton
          key={themeOption.id}
          themeName={themeOption.id}
          currentTheme={effectiveTheme}
          onClick={() => setTheme(themeOption.id)}
          label={themeOption.label}
        />
      ))}
    </div>
  );
}
