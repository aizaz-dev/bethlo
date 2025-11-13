"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // ✅ Detect scroll to shrink navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          ? "bg-[#97A8C4]/60 backdrop-blur-sm py-1 shadow-md"
          : "bg-[#97A8C4] py-3 shadow-md"
      }`}
    >
      <div
        className={`max-w-[1300px] mx-auto flex justify-between items-start px-4 sm:px-8 transition-all duration-700`}
      >
        {/* ✅ LEFT SIDE - Logo Image */}
        <div
          className={`flex items-start transition-all duration-700 ${
            scrolled ? "scale-90 translate-y-[-2px]" : "scale-100 translate-y-0"
          }`}
        >
          <Link href="/">
            <Image
              src="/logo/logo.png"
              alt="Bethlehem Lutheran Church Logo"
              width={scrolled ? 200 : 300}
              height={scrolled ? 200 : 300}
              priority
              className="transition-all duration-700"
            />
          </Link>
        </div>

        {/* ✅ RIGHT SIDE - Desktop Nav (slightly raised) */}
        <nav className="hidden lg:flex mt-2"> {/* 👈 added top margin offset */}
          <ul className="flex items-start gap-6 xl:gap-8">
            {links.map((link) => (
              <li
                key={link.name}
                className="relative"
                onMouseEnter={() => link.dropdown && setDropdownOpen(link.name)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <Link
                  href={link.href}
                  className={`text-[16px] px-4 py-4 rounded-sm font-medium transition-all duration-300 ${
                    pathname === link.href
                      ? "bg-[#a7d3d5] text-black"
                      : "hover:text-gray-200"
                  }`}
                >
                  {link.name}
                </Link>

                {/* Dropdown for Desktop */}
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

        {/* ✅ MOBILE MENU BUTTON */}
        <button
          className="lg:hidden text-black hover:scale-110 transition mt-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* ✅ MOBILE MENU */}
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

                {/* Dropdown inside Mobile Menu */}
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
