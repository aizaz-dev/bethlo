"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sparkles, Zap, Droplets, Heart } from "lucide-react";

// Design 5: Interactive Cards with Hover Effects and Icons
export const ThemeSelector5 = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [hoveredTheme, setHoveredTheme] = useState(null);

  const themes = [
    { 
      id: "light", 
      label: "Light", 
      description: "Bright & Clean",
      icon: Sparkles,
      gradient: "from-yellow-400 via-orange-400 to-red-400",
      hoverGradient: "from-yellow-300 via-orange-300 to-red-300"
    },
    { 
      id: "dark", 
      label: "Dark", 
      description: "Original Theme",
      icon: Zap,
      gradient: "from-purple-600 via-indigo-600 to-blue-600",
      hoverGradient: "from-purple-500 via-indigo-500 to-blue-500"
    },
    { 
      id: "custom", 
      label: "Ocean", 
      description: "Deep Blue",
      icon: Droplets,
      gradient: "from-blue-600 via-cyan-600 to-teal-600",
      hoverGradient: "from-blue-500 via-cyan-500 to-teal-500"
    },
    { 
      id: "pastel", 
      label: "Pastel", 
      description: "Soft Pink",
      icon: Heart,
      gradient: "from-pink-500 via-rose-500 to-red-500",
      hoverGradient: "from-pink-400 via-rose-400 to-red-400"
    },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6">
        {themes.map((t) => (
          <div key={t.id} className="h-28 bg-bg-dark rounded-xl animate-pulse" />
        ))}
      </div>
    );
  }

  const effectiveTheme = resolvedTheme || theme;

  return (
    <div className="p-6 bg-bg-card rounded-2xl shadow-lg border border-border-secondary">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-text-primary mb-2">Choose Your Style</h3>
        <p className="text-text-muted">Select a theme that matches your vibe</p>
      </div>
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4" role="radiogroup" aria-label="Theme selector">
        {themes.map((themeOption) => {
          const Icon = themeOption.icon;
          const isActive = effectiveTheme === themeOption.id;
          const isHovered = hoveredTheme === themeOption.id;
          
          return (
            <button
              key={themeOption.id}
              onClick={() => setTheme(themeOption.id)}
              onMouseEnter={() => setHoveredTheme(themeOption.id)}
              onMouseLeave={() => setHoveredTheme(null)}
              className={`relative group p-4 rounded-xl transition-all duration-300 cursor-pointer overflow-hidden ${
                isActive 
                  ? "scale-105 shadow-xl" 
                  : "hover:scale-102 hover:shadow-lg"
              }`}
              role="radio"
              aria-checked={isActive}
              aria-label={`Activate ${themeOption.label} theme — ${themeOption.description}`}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br opacity-90 transition-all duration-300 ${
                isHovered 
                  ? themeOption.hoverGradient 
                  : themeOption.gradient
              }`} />
              
              {/* Content */}
              <div className="relative z-10 text-white text-center">
                <div className={`mb-3 flex justify-center transition-transform duration-300 ${
                  isActive ? "scale-110" : "group-hover:scale-105"
                }`}>
                  <Icon size={32} className="drop-shadow-lg" />
                </div>
                
                <h4 className="font-bold text-lg mb-1 drop-shadow-md">
                  {themeOption.label}
                </h4>
                <p className="text-sm opacity-90 drop-shadow-sm">
                  {themeOption.description}
                </p>
              </div>
              
              {/* Active Ring */}
              {isActive && (
                <div className="absolute inset-0 rounded-xl border-3 border-white shadow-lg animate-pulse" />
              )}
              
              {/* Hover Glow Effect */}
              {isHovered && !isActive && (
                <div className="absolute inset-0 rounded-xl border-2 border-white/50" />
              )}
              
              {/* Sparkle Effect for Active Theme */}
              {isActive && (
                <div className="absolute top-2 right-2">
                  <div className="w-3 h-3 bg-white rounded-full animate-ping" />
                  <div className="absolute top-0 right-0 w-3 h-3 bg-white rounded-full" />
                </div>
              )}
            </button>
          );
        })}
      </div>
      
      {/* Current Theme Display */}
      <div className="mt-6 text-center">
        <p className="text-sm text-text-muted">
          Current theme: <span className="text-primary font-semibold">
            {themes.find(t => t.id === effectiveTheme)?.label || "Dark"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ThemeSelector5;

