import Image from "next/image";
// import { FaHome, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#3a3a3a] text-white py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
        {/* Left Logo Section */}
        <div className="flex justify-center md:justify-start">
          <Image
            src="" // replace with your image path (e.g., /public/cross-logo.png)
            alt="Church Logo"
            className="w-48 md:w-56"
          />
        </div>

        {/* Middle Location Section */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold mb-3">Our Location</h2>

          <div className="flex items-start gap-3 mb-2">
            <div className="text-2xl text-white mt-1" />
            <div className="text-gray-200 leading-6">
              <p>310 Main St</p>
              <p>PO Box 694</p>
              <p>Baudette, MN 56623</p>
            </div>
          </div>

          <div className="flex items-start gap-3 mb-1">
            <div className="text-2xl text-white mt-1" />
            <div className="text-gray-200 space-y-1">
              <p>
                <span className="font-semibold text-white">Parsonage:</span>{" "}
                (218) 634-2808
              </p>
              <p>
                <span className="font-semibold text-white">Pastor Cell:</span>{" "}
                (320) 248-1894
              </p>
              <p>
                <span className="font-semibold text-white">Church:</span>{" "}
                (218) 386-3555
              </p>
            </div>
          </div>
        </div>

        {/* Right Map Section */}
        <div className="rounded overflow-hidden border-2 border-gray-500">
          <iframe
            src="https://www.google.com/maps?q=Baudette%20MN&output=embed"
            width="280"
            height="220"
            loading="lazy"
            className="rounded-md"
          ></iframe>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center mt-10 text-gray-300 text-sm">
        Copyright © 2025 Bethlehem Lutheran Church
      </div>

      {/* Scroll to top button */}
      <div className="fixed bottom-5 right-5 bg-black hover:bg-gray-700 text-white p-3 rounded-md cursor-pointer transition">
        <a href="#top" aria-label="Back to top">
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
      </div>
    </footer>
  );
}
