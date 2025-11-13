"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

// Design 4: Elegant Dropdown with Live Preview
export const ThemeSelector4 = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const themes = [
    { 
      id: "light", 
      label: "Light Mode", 
      description: "Clean & Professional",
      preview: { bg: "#FAFAFA", accent: "#2563EB", text: "#1F2937" }
    },
    { 
      id: "dark", 
      label: "Dark Mode", 
      description: "Original Athena Sols",
      preview: { bg: "#000000", accent: "#7062FF", text: "#ffffff" }
    },
    { 
      id: "custom", 
      label: "Ocean Blue", 
      description: "Deep Ocean Vibes",
      preview: { bg: "#0F172A", accent: "#0EA5E9", text: "#F1F5F9" }
    },
    { 
      id: "pastel", 
      label: "Pastel Pink", 
      description: "Soft & Creative",
      preview: { bg: "#FDF2F8", accent: "#EC4899", text: "#831843" }
    },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="p-6 bg-bg-card rounded-2xl">
        <div className="h-12 bg-bg-dark rounded-lg animate-pulse" />
      </div>
    );
  }

  const effectiveTheme = resolvedTheme || theme;
  const currentTheme = themes.find(t => t.id === effectiveTheme) || themes[1];

  return (
    <div className="p-6 bg-bg-card rounded-2xl shadow-lg border border-border-secondary">
      <h3 className="text-lg font-semibold text-text-primary mb-4 text-center">Theme Settings</h3>
      
      <div className="relative">
        {/* Dropdown Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-4 bg-bg-dark hover:bg-bg-darker rounded-lg border border-border-secondary transition-all duration-200 cursor-pointer"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-controls="theme-selector-4-list"
          aria-label={`Current theme: ${currentTheme.label}. Toggle theme menu`}
        >
          <div className="flex items-center gap-3">
            {/* Current Theme Preview */}
            <div className="flex gap-1">
              <div 
                className="w-4 h-4 rounded-full border border-border-muted"
                style={{ backgroundColor: currentTheme.preview.bg }}
              />
              <div 
                className="w-4 h-4 rounded-full border border-border-muted"
                style={{ backgroundColor: currentTheme.preview.accent }}
              />
              <div 
                className="w-4 h-4 rounded-full border border-border-muted"
                style={{ backgroundColor: currentTheme.preview.text }}
              />
            </div>
            
            <div className="text-left">
              <p className="font-medium text-text-primary">{currentTheme.label}</p>
              <p className="text-sm text-text-muted">{currentTheme.description}</p>
            </div>
          </div>
          
          <ChevronDown 
            size={20} 
            aria-hidden="true"
            className={`text-text-secondary transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`} 
          />
        </button>
        
        {/* Dropdown Menu */}
        {isOpen && (
          <div
            className="absolute top-full left-0 right-0 mt-2 bg-bg-card border border-border-secondary rounded-lg shadow-xl z-50 overflow-hidden"
            role="listbox"
            id="theme-selector-4-list"
            aria-label="Select theme"
          >
            {themes.map((themeOption) => {
              const isActive = effectiveTheme === themeOption.id;
              
              return (
                <button
                  key={themeOption.id}
                  onClick={() => {
                    setTheme(themeOption.id);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 p-4 hover:bg-bg-dark transition-colors cursor-pointer ${
                    isActive ? "bg-bg-dark border-l-4 border-l-primary" : ""
                  }`}
                  role="option"
                  aria-selected={isActive}
                  aria-label={`${themeOption.label} — ${themeOption.description}`}
                >
                  {/* Theme Preview */}
                  <div className="flex gap-1">
                    <div 
                      className="w-5 h-5 rounded-full border border-border-muted"
                      style={{ backgroundColor: themeOption.preview.bg }}
                    />
                    <div 
                      className="w-5 h-5 rounded-full border border-border-muted"
                      style={{ backgroundColor: themeOption.preview.accent }}
                    />
                    <div 
                      className="w-5 h-5 rounded-full border border-border-muted"
                      style={{ backgroundColor: themeOption.preview.text }}
                    />
                  </div>
                  
                  <div className="text-left flex-1">
                    <p className={`font-medium ${
                      isActive ? "text-primary" : "text-text-primary"
                    }`}>
                      {themeOption.label}
                    </p>
                    <p className="text-sm text-text-muted">
                      {themeOption.description}
                    </p>
                  </div>
                  
                  {isActive && (
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ThemeSelector4;

