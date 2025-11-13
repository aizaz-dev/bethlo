"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, Waves, Palette } from "lucide-react";

// Design 1: Circular Icon Selector with Smooth Animations
export const ThemeSelector1 = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const themes = [
    { 
      id: "light", 
      label: "Light", 
      icon: Sun, 
      color: "bg-yellow-400",
      description: "Bright & Clean"
    },
    { 
      id: "dark", 
      label: "Dark", 
      icon: Moon, 
      color: "bg-purple-500",
      description: "Original Theme"
    },
    { 
      id: "custom", 
      label: "Ocean", 
      icon: Waves, 
      color: "bg-blue-500",
      description: "Deep Blue"
    },
    { 
      id: "pastel", 
      label: "Pastel", 
      icon: Palette, 
      color: "bg-pink-400",
      description: "Soft Pink"
    },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center gap-3 p-4 bg-bg-card rounded-2xl">
        {themes.map((t) => (
          <div key={t.id} className="w-12 h-12 rounded-full bg-bg-dark animate-pulse" />
        ))}
      </div>
    );
  }

  const effectiveTheme = resolvedTheme || theme;

  return (
    <div className="flex flex-col gap-4 p-6 bg-bg-card rounded-2xl shadow-lg border border-border-secondary">
      <h3 className="text-lg font-semibold text-text-primary text-center">Choose Theme</h3>
      
      <div className="flex items-center justify-center gap-4" role="radiogroup" aria-label="Theme selector">
        {themes.map((themeOption) => {
          const Icon = themeOption.icon;
          const isActive = effectiveTheme === themeOption.id;
          
          return (
            <div key={themeOption.id} className="flex flex-col items-center gap-2">
              <button
                onClick={() => setTheme(themeOption.id)}
                className={`relative w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer group ${
                  isActive 
                    ? `${themeOption.color} scale-110 shadow-lg` 
                    : "bg-bg-dark hover:bg-bg-darker hover:scale-105"
                }`}
                role="radio"
                aria-checked={isActive}
                aria-label={`Activate ${themeOption.label} theme`}
              >
                <Icon 
                  size={24} 
                  className={`transition-colors duration-300 ${
                    isActive ? "text-white" : "text-text-secondary group-hover:text-text-primary"
                  }`} 
                />
                
                {isActive && (
                  <div className="absolute -inset-1 rounded-full border-2 border-primary animate-pulse" />
                )}
              </button>
              
              <div className="text-center">
                <p className={`text-sm font-medium transition-colors ${
                  isActive ? "text-primary" : "text-text-secondary"
                }`}>
                  {themeOption.label}
                </p>
                <p className="text-xs text-text-muted">
                  {themeOption.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ThemeSelector1;

