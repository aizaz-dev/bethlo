"use client";

import Image from "next/image";

export default function ComingSoon() {
  return (
    <main className="max-w-7xl mx-auto px-6 sm:px-8 py-12 pt-55 text-gray-700 leading-relaxed">
      <Image
        src="/Gallery/gallery.jpg"
        width={200}
        height={300}
        alt="Coming Soon"
        className="w-full rounded-2xl shadow-lg object-cover"
      />
    </main>
  );
}
