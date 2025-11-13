"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Check } from "lucide-react";

// Design 2: Color Palette Cards with Preview
export const ThemeSelector2 = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const themes = [
    { 
      id: "light", 
      label: "Light Mode", 
      colors: ["#FAFAFA", "#2563EB", "#1F2937"],
      description: "Clean & Professional"
    },
    { 
      id: "dark", 
      label: "Dark Mode", 
      colors: ["#000000", "#7062FF", "#ffffff"],
      description: "Original Athena Sols"
    },
    { 
      id: "custom", 
      label: "Ocean Blue", 
      colors: ["#0F172A", "#0EA5E9", "#F1F5F9"],
      description: "Deep Ocean Vibes"
    },
    { 
      id: "pastel", 
      label: "Pastel Pink", 
      colors: ["#FDF2F8", "#EC4899", "#831843"],
      description: "Soft & Creative"
    },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="grid grid-cols-2 gap-4 p-6">
        {themes.map((t) => (
          <div key={t.id} className="h-32 bg-bg-dark rounded-xl animate-pulse" />
        ))}
      </div>
    );
  }

  const effectiveTheme = resolvedTheme || theme;

  return (
    <div className="p-6 bg-bg-card rounded-2xl shadow-lg border border-border-secondary">
      <h3 className="text-xl font-bold text-text-primary mb-6 text-center">Select Your Theme</h3>
      
      <div className="grid grid-cols-2 gap-4" role="radiogroup" aria-label="Theme selector">
        {themes.map((themeOption) => {
          const isActive = effectiveTheme === themeOption.id;
          
          return (
            <button
              key={themeOption.id}
              onClick={() => setTheme(themeOption.id)}
              className={`relative p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer group ${
                isActive 
                  ? "border-primary shadow-lg scale-105" 
                  : "border-border-secondary hover:border-border-primary hover:scale-102"
              }`}
              role="radio"
              aria-checked={isActive}
              aria-label={`Activate ${themeOption.label} theme — ${themeOption.description}`}
            >
              {/* Color Preview */}
              <div className="flex gap-1 mb-3">
                {themeOption.colors.map((color, index) => (
                  <div
                    key={index}
                    className="w-8 h-8 rounded-full border border-border-muted"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
              
              {/* Theme Info */}
              <div className="text-left">
                <h4 className={`font-semibold mb-1 ${
                  isActive ? "text-primary" : "text-text-primary"
                }`}>
                  {themeOption.label}
                </h4>
                <p className="text-sm text-text-muted">
                  {themeOption.description}
                </p>
              </div>
              
              {/* Active Indicator */}
              {isActive && (
                <div className="absolute top-2 right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <Check size={14} className="text-white" />
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ThemeSelector2;

