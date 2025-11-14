"use client";
import { useState } from "react";

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState("contact");

  return (
    <main className="flex pt-55 items-center justify-center text-text-primary px-4 py-10 transition-colors">
      <div className="bg-bg-card rounded-lg shadow-card-light dark:shadow-card-dark w-full max-w-7xl">
        
        {/* Tabs */}
        <div className="flex border-b border-border-secondary">
          <button
            onClick={() => setActiveTab("contact")}
            className={`flex-1 text-lg font-semibold py-3 transition-colors duration-300 rounded-tl-lg
              ${
                activeTab === "contact"
                  ? "text-accent bg-bg-card"
                  : "text-text-primary bg-bg-secondary"
              }`}
          >
            Contact Us
          </button>

          <button
            onClick={() => setActiveTab("prayer")}
            className={`flex-1 text-lg font-semibold py-3 transition-colors duration-300 rounded-tr-lg
              ${
                activeTab === "prayer"
                  ? "text-accent bg-bg-card"
                  : "text-text-primary bg-bg-secondary"
              }`}
          >
            Prayer Request
          </button>
        </div>

        {/* Content Box */}
        <div className="bg-bg-secondary rounded-b-lg p-6 transition-colors">
          <div className="bg-bg-card rounded-lg shadow-card-dark h-14 transition-colors" />
        </div>
      </div>
    </main>
  );
}
