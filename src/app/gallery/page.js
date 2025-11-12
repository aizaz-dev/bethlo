"use client";

export default function ComingSoon() {
  return (
    <main
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient Overlay (artistic effect) */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 via-yellow-400/70 to-red-500/60 mix-blend-overlay"></div>

      {/* Subtle black fade for text clarity */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Centered Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 py-12 pt-24 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-red-700 tracking-wide drop-shadow-md">
          COMING SOON
        </h1>
        <p className="text-2xl md:text-3xl text-red-600 mt-4 font-semibold drop-shadow-sm">
          UNDER CONSTRUCTION
        </p>
      </div>
    </main>
  );
}
