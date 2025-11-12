"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Calendar", href: "/calendar" },
    { name: "Contact", href: "/contact" },
    { name: "Gallery", href: "/gallery" },
  ];

  return (
    <header className="w-full bg-[#97A8C4] text-white shadow-md">
      <div className="max-w-[1300px] mx-auto flex justify-between items-start px-10 py-6">
        {/* LEFT SIDE - Church Text Block */}
        <div className="flex flex-col text-left leading-tight">
          <h1 className="text-[40px] font-[cursive] text-black tracking-wide">
            Bethlehem
          </h1>
          <h2 className="text-[18px] font-bold uppercase text-black -mt-2">
            Lutheran Church
          </h2>
          <p className="text-[15px] font-semibold text-[#2f2f2f] mt-1">
            Missouri Synod
          </p>
          <p className="text-[13px] text-[#d8dbe2] mt-1 max-w-[300px]">
            Walking Together With The Joy Of Salvation Through Christ
          </p>
        </div>

        {/* RIGHT SIDE - Nav Links */}
        <nav className="">
          <ul className="flex items-center gap-8">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`text-[16px] px-4 py-2 rounded-sm font-medium ${
                    pathname === link.href
                      ? "bg-[#a7d3d5] text-black"
                      : "hover:text-gray-200 transition"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
