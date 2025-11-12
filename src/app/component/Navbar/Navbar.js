"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // for hamburger icons

export default function Navbar() {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // ✅ Shrink only once when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80 && !scrolled) {
        setScrolled(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const links = [
    { name: "Home", href: "/" },
    {
      name: "About",
      href: "/about/introduction",
      dropdown: [
        { name: "Introduction", href: "/about/introduction" },
        { name: "Our Belief", href: "/about/belief" },
        { name: "Communication", href: "/about/communication" },
      ],
    },
    { name: "Calendar", href: "/calendar" },
    { name: "Contact", href: "/contact" },
    { name: "Gallery", href: "/gallery" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-in-out ${
        scrolled
          ? "bg-[#97A8C4]/60 backdrop-blur-sm py-2 shadow-md"
          : "bg-[#97A8C4] py-6 shadow-md"
      }`}
    >
      <div
        className={`max-w-[1300px] mx-auto flex justify-between items-center px-4 sm:px-8 transition-all duration-700`}
      >
        {/* LEFT SIDE - Logo Section */}
        <div
          className={`flex flex-col text-left leading-tight transition-all duration-700 ${
            scrolled ? "translate-y-1 scale-95" : ""
          }`}
        >
          <h1
            className={`text-[34px] sm:text-[40px] font-[cursive] text-black tracking-wide transition-all duration-700 ${
              scrolled ? "text-[26px]" : ""
            }`}
          >
            Bethlehem
          </h1>

          {/* Hide tagline when scrolled */}
          <div
            className={`overflow-hidden transition-all duration-700 ease-in-out ${
              scrolled ? "max-h-0 opacity-0" : "max-h-40 opacity-100"
            }`}
          >
            <h2 className="text-[16px] sm:text-[18px] font-bold uppercase text-black -mt-2">
              Lutheran Church
            </h2>
            <p className="text-[14px] sm:text-[15px] font-semibold text-[#2f2f2f] mt-1">
              Missouri Synod
            </p>
            <p className="text-[12px] sm:text-[13px] text-[#d8dbe2] mt-1 max-w-[280px] sm:max-w-[300px]">
              Walking Together With The Joy Of Salvation Through Christ
            </p>
          </div>
        </div>

        {/* RIGHT SIDE - Desktop Nav */}
        <nav className="hidden lg:flex">
          <ul className="flex items-center gap-6 xl:gap-8">
            {links.map((link) => (
              <li
                key={link.name}
                className="relative"
                onMouseEnter={() => link.dropdown && setDropdownOpen(link.name)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <Link
                  href={link.href}
                  className={`text-[15px] px-4 py-2 rounded-sm font-medium transition-all duration-300 ${
                    pathname === link.href
                      ? "bg-[#a7d3d5] text-black"
                      : "hover:text-gray-200"
                  }`}
                >
                  {link.name}
                </Link>

                {link.dropdown && dropdownOpen === link.name && (
                  <ul className="absolute top-full left-0 bg-white text-black shadow-lg rounded-md mt-2 min-w-[180px] z-50 overflow-hidden transition-all duration-300">
                    {link.dropdown.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="block px-4 py-2 hover:bg-[#a7d3d5] hover:text-black transition"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          className="lg:hidden text-black hover:scale-110 transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {menuOpen && (
        <div className="lg:hidden bg-[#97A8C4]/95 backdrop-blur-sm shadow-md">
          <ul className="flex flex-col items-center py-4 space-y-3 text-[16px] font-medium">
            {links.map((link) => (
              <li key={link.name} className="relative text-center w-full">
                <Link
                  href={link.href}
                  className={`block w-full px-4 py-2 ${
                    pathname === link.href
                      ? "bg-[#a7d3d5] text-black"
                      : "hover:bg-[#a7d3d5]/50"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>

                {/* Show dropdown items inside mobile menu */}
                {link.dropdown && (
                  <ul className="flex flex-col items-center bg-white text-black w-full">
                    {link.dropdown.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="block w-full px-4 py-2 hover:bg-[#a7d3d5]/50 transition"
                          onClick={() => setMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
