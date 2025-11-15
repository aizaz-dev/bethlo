"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ComingSoon() {
  return (
    <main className="max-w-7xl mx-auto px-6 sm:px-8 py-12 pt-55 text-gray-700 leading-relaxed">

      <a
        href="https://your-external-link.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.div
          initial={{ y: "-100vh", opacity: 0 }}  
          animate={{ y: 0, opacity: 1 }}       
          transition={{
            type: "spring",
            stiffness: 110,
            damping: 12,
            mass: 0.7,
          }}
        >
          <Image
            src="/Gallery/gallery.jpg"
            width={200}
            height={300}
            alt="Coming Soon"
            className="w-full rounded-2xl shadow-lg object-cover cursor-pointer"
          />
        </motion.div>
      </a>

    </main>
  );
}
