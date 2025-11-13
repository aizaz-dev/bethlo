"use client";

import Image from "next/image";
import { FaHome, FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-border-secondary text-text-primary py-10 px-6 md:px-16 lg:px-24 transition-colors">
      {/* Main wrapper */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center gap-10">
        
        {/* Logo */}
        <div className="flex justify-center md:justify-start">
          <Image
            src="/footer/footer-logo.png"
            alt="Church Logo"
            width={250}
            height={250}
            className="object-contain md:w-[250px] w-[200px]"
          />
        </div>

        {/* Location & contact info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left leading-relaxed">
          <h2 className="text-[22px] font-semibold mb-4 text-text-primary">
            Our Location
          </h2>

          {/* Address */}
          <div className="flex items-start justify-center md:justify-start gap-3 mb-4">
            <FaHome className="text-[22px] mt-1 text-accent" />
            <div className="text-text-secondary text-[17px] space-y-[1px]">
              <p>310 Main St</p>
              <p>PO Box 694</p>
              <p>Baudette, MN 56623</p>
            </div>
          </div>

          {/* Phone Numbers */}
          <div className="flex items-start justify-center md:justify-start gap-3">
            <FaPhoneAlt className="text-[22px] mt-1 text-accent" />
            <div className="text-text-secondary text-[17px] space-y-[4px]">
              <p>
                <span className="font-semibold text-text-primary">Parsonage:</span>{" "}
                (218) 634-2808
              </p>
              <p>
                <span className="font-semibold text-text-primary">Pastor Cell:</span>{" "}
                (320) 248-1894
              </p>
              <p>
                <span className="font-semibold text-text-primary">Church:</span>{" "}
                (218) 386-3555
              </p>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="border border-border-secondary rounded overflow-hidden shadow-card-light dark:shadow-card-dark transition-shadow">
          <iframe
            src="https://www.google.com/maps?q=Bethlehem%20Lutheran%20Church%20Baudette%20MN&output=embed"
            width="320"
            height="230"
            loading="lazy"
            className="rounded-md md:w-[320px] md:h-[230px] w-[260px] h-[200px]"
          ></iframe>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="text-center mt-10 text-text-secondary text-[15px] tracking-wide">
        © 2025 Bethlehem Lutheran Church
      </div>

      {/* Scroll to Top */}
      <a
        href="#top"
        aria-label="Back to top"
        className="fixed bottom-5 right-5 bg-accent hover:opacity-85 text-bg-card p-3 rounded-md cursor-pointer transition-all duration-300 shadow-card-light dark:shadow-card-dark"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </a>
    </footer>
  );
}
