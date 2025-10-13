import { ExternalLink } from "lucide-react";
import Image from "next/image";

import SectionHeader from "../SectionHeader";
import { profileLink, selfiePath } from "@/config/config";

export default function About() {
  const sectionTitle: string = "About Me";

  return (
    <section id="about" className="pt-30 pb-10 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title={sectionTitle} dividerWidth={"40"} />

        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-12 items-center text-justify">
          {/* Intro. Section */}
          <div className="space-y-6">
            <p className="md:text-lg text-sm text-gray-600 leading-relaxed">
              I&apos;m a ML engineer with full-stack development skills,
              specializing in AI-powered web applications. I work with{" "}
              <span className="font-semibold">Python</span> for ML and backend
              development projects and{" "}
              <span className="font-semibold">React.js</span> for creating
              interactive frontends with minimal UI to integrate with robust
              microservices.
            </p>
            <p className="md:text-lg text-sm text-gray-600 leading-relaxed">
              I focus on bridging ML models with real-world applications,
              currently exploring modern frameworks and advanced ML techniques
              to build impactful solutions.
            </p>
            <div className="flex flex-wrap gap-4 md:text-sm text-xs">
              <span className="px-4 py-2 bg-white rounded-full text-gray-700 shadow-sm">
                ML Engineer
              </span>
              <span className="px-4 py-2 bg-white rounded-full text-gray-700 shadow-sm">
                Full-Stack Developer
              </span>
              <span className="px-4 py-2 bg-white rounded-full text-gray-700 shadow-sm">
                AI Solutions Builder
              </span>
            </div>
          </div>

          {/* Avatar Section */}
          <div className="flex flex-col gap-4 items-center justify-center md:justify-end">
            {/* Avatar */}
            <div className="relative lg:w-72 lg:h-72 md:w-60 md:h-60 w-40 h-40 rounded-full md:p-2 p-1 bg-gradient-to-br from-slate-300 to-blue-500">
              <div className="w-full h-full mx-auto rounded-full bg-white shadow-lg overflow-hidden">
                <Image
                  src={selfiePath}
                  alt="Nirmit Mishra"
                  width={256}
                  height={256}
                  className="rounded-full object-cover w-full h-full"
                  priority
                />
              </div>
            </div>

            {/* Profile Link */}
            <a
              href={profileLink}
              className="flex items-center text-blue-600 hover:text-blue-900 transition-colors duration-200"
              target="__blank"
            >
              <ExternalLink size={32} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
