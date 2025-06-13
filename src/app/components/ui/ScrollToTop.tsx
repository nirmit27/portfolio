"use client";

import { useEffect, useState } from "react";
import { ArrowUpIcon } from "@radix-ui/react-icons";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed md:bottom-8 md:right-8 bottom-3 right-3 z-50 p-3 rounded-full shadow-lg transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      } bg-[#b91c1c] hover:bg-red-600 text-white`}
      aria-label="Uppity Doo"
    >
      <ArrowUpIcon className="w-5 h-5" />
    </button>
  );
}
