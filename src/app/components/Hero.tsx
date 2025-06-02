"use client";

import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="text-center space-y-6 px-4">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-light text-slate-900">
            Nirmit Mishra
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light">
            Machine Learning Engineer
          </p>
        </div>

        <div className="space-y-8">
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed text-justify [&>*:last-child]:text-center">
            I build intelligent, user-focused web applications — from smart
            dashboards and fraud detection systems to scalable LLM-powered
            tools. I specialize in creating seamless experiences where
            functionality meets minimalist design.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-3 bg-slate-900 text-white rounded-full hover:bg-gray-800 transition-colors duration-200"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-gray-300 text-gray-700 rounded-full hover:border-gray-400 transition-colors duration-200"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-gray-400" size={24} />
      </div>
    </section>
  );
}
