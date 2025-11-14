"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

export default function Navbar() {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
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
          ? "bg-[#8CA0C4]/60 backdrop-blur-sm py-1 shadow-md"
          : "bg-[#8CA0C4] shadow-md"
      }`}
    >
      <div className="max-w-[1300px] mx-auto flex justify-between items-start px-4 sm:px-8 transition-all duration-700">
        {/* Logo */}
        <div
          className={`flex items-start transition-all duration-700 ${
            scrolled ? "scale-90 translate-y-[-2px]" : "scale-100 translate-y-0"
          }`}
        >
          <Link href="/">
            <Image
              src="/logo/logo.png"
              alt="Bethlehem Lutheran Church Logo"
              width={scrolled ? 150 : 370}
              height={scrolled ? 150 : 370}
              priority
              className="transition-all duration-700"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex">
          <ul className="flex items-start gap-6 xl:gap-8">
            {links.map((link) => (
              <li
                key={link.name}
                className="relative"
                onMouseEnter={() => link.dropdown && setDropdownOpen(link.name)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <div
                  className={`flex items-center gap-1 px-5 py-6 text-white cursor-pointer transition-all duration-300 ${
                    pathname === link.href
                      ? "bg-[#76C7CF] text-white"
                      : "hover:bg-[#76C7CF]"
                  }`}
                >
                  <Link
                    href={link.href}
                    className={`text-[17px] ${
                      pathname === link.href ? "font-semibold" : ""
                    }`}
                  >
                    {link.name}
                  </Link>

                  {link.dropdown && (
                    <ChevronDown
                      size={16}
                      className={`transition-transform mt-1 ${
                        dropdownOpen === link.name ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </div>

                {link.dropdown && dropdownOpen === link.name && (
                  <ul className="absolute top-full left-0 bg-white text-black shadow-lg rounded-md mt-1 min-w-[180px] z-50 overflow-hidden">
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

        <div className="flex items-center pt-5 gap-4">
          <ThemeToggle />
          
          <button
            className="lg:hidden text-white hover:scale-110 transition mt-2 flex items-center gap-1"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X size={30} />
            ) : (
              <div className="flex items-center gap-2 text-white">
                <Menu size={30} /> <span className="text-[18px]">Menu</span>
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#97A8C4]/95 backdrop-blur-sm shadow-md">
          <ul className="flex flex-col items-center py-4 space-y-3 text-[16px] font-medium">
            {links.map((link) => (
              <li key={link.name} className="relative text-center w-full">
                <div 
                  className={`flex items-center justify-center w-full px-4 py-2 cursor-pointer transition-all duration-300 gap-2 ${
                    pathname === link.href
                      ? "bg-[#76C7CF] text-white"
                      : "hover:bg-[#76C7CF] text-white"
                  }`}
                  onClick={() => {
                    if (!link.dropdown) {
                      setMenuOpen(false);
                    }
                  }}
                >
                  <Link
                    href={link.href}
                    className={`${pathname === link.href ? "font-semibold" : ""}`}
                    onClick={(e) => {
                      if (link.dropdown) {
                        e.preventDefault();
                      } else {
                        setMenuOpen(false);
                      }
                    }}
                  >
                    {link.name}
                  </Link>

                  {link.dropdown && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setMobileDropdown(
                          mobileDropdown === link.name ? null : link.name
                        );
                      }}
                    >
                      <ChevronDown
                        size={20}
                        className={`text-white transition-transform ${
                          mobileDropdown === link.name ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </button>
                  )}
                </div>

                {link.dropdown && mobileDropdown === link.name && (
                  <ul className="flex flex-col items-center bg-white text-black w-full animate-fadeIn">
                    {link.dropdown.map((item) => (
                      <li key={item.name} className="w-full">
                        <Link
                          href={item.href}
                          className="block w-full px-4 py-2 hover:bg-[#a7d3d5]/50 transition text-center"
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