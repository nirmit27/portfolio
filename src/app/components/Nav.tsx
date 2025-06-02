"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const avatarPath = process.env.NEXT_PUBLIC_AVATAR_PATH || "";

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },  
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Avatar */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Image
                src={avatarPath}
                alt="NM Logo"
                width={40}
                height={40}
                className="rounded-lg"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <span
                className={`text-lg font-semibold transition-colors duration-300 ${
                  scrolled ? "text-slate-900" : "text-white"
                }`}
              >
                Nirmit Mishra
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`relative text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  scrolled
                    ? "text-gray-700 hover:text-slate-900"
                    : "text-white/90 hover:text-white"
                } after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Navigation button */}
          <button
            className="md:hidden p-2 rounded-lg transition-colors duration-200 hover:bg-gray-100/10"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? (
              <X
                size={24}
                className={scrolled ? "text-slate-900" : "text-white"}
              />
            ) : (
              <Menu
                size={24}
                className={scrolled ? "text-slate-900" : "text-white"}
              />
            )}
          </button>
        </div>

        {/* Mobile Navigation menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md shadow-lg rounded-lg mt-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-3 text-gray-700 hover:text-slate-900 hover:bg-gray-50 rounded-lg transition-all duration-200 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
