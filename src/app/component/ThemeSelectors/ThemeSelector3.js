"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

// Design 3: Sliding Toggle with Theme Names
export const ThemeSelector3 = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const themes = [
    { id: "light", label: "Light", gradient: "from-yellow-400 to-orange-400" },
    { id: "dark", label: "Dark", gradient: "from-purple-600 to-indigo-600" },
    { id: "custom", label: "Ocean", gradient: "from-blue-500 to-cyan-500" },
    { id: "pastel", label: "Pastel", gradient: "from-pink-400 to-rose-400" },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="p-6 bg-bg-card rounded-2xl">
        <div className="h-12 bg-bg-dark rounded-full animate-pulse" />
      </div>
    );
  }

  const effectiveTheme = resolvedTheme || theme;
  const activeIndex = themes.findIndex(t => t.id === effectiveTheme);

  return (
    <div className="p-6 bg-bg-card rounded-2xl shadow-lg border border-border-secondary">
      <h3 className="text-lg font-semibold text-text-primary mb-6 text-center">Theme Selector</h3>
      
      <div className="relative">
        {/* Background Track */}
        <div className="relative bg-bg-dark rounded-full p-1 flex" role="radiogroup" aria-label="Theme selector">
          {/* Sliding Indicator */}
          <div 
            className={`absolute top-1 h-10 rounded-full bg-gradient-to-r transition-all duration-500 ease-out ${
              themes[activeIndex]?.gradient || "from-purple-600 to-indigo-600"
            }`}
            style={{
              width: `${100 / themes.length}%`,
              left: `${(activeIndex * 100) / themes.length}%`,
            }}
          />
          
          {/* Theme Options */}
          {themes.map((themeOption, index) => {
            const isActive = effectiveTheme === themeOption.id;
            
            return (
              <button
                key={themeOption.id}
                onClick={() => setTheme(themeOption.id)}
                className={`relative z-10 flex-1 py-2 px-4 text-center font-medium rounded-full transition-all duration-300 cursor-pointer ${
                  isActive 
                    ? "text-white shadow-lg" 
                    : "text-text-secondary hover:text-text-primary"
                }`}
                role="radio"
                aria-checked={isActive}
                aria-label={`Activate ${themeOption.label} theme`}
              >
                {themeOption.label}
              </button>
            );
          })}
        </div>
        
        {/* Theme Description */}
        <div className="mt-4 text-center">
          <p className="text-sm text-text-muted">
            {effectiveTheme === "light" && "Bright and clean interface"}
            {effectiveTheme === "dark" && "Original Athena Sols theme"}
            {effectiveTheme === "custom" && "Deep ocean blue aesthetic"}
            {effectiveTheme === "pastel" && "Soft pink creative theme"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThemeSelector3;

