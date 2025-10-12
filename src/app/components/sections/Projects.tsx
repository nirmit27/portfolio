import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";

import SectionHeader from "../SectionHeader";
import { projects } from "@/config/config";

export default function Projects() {
  const sectionTitle = "My Projects";

  return (
    <section id="projects" className="pt-30 pb-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title={sectionTitle} dividerWidth={32} />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <div className="aspect-video bg-gray-100 rounded-t-xl overflow-hidden">
                <Image
                  width={480}
                  height={270}
                  src={project.imagePath || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="md:text-xl text-lg font-semibold text-slate-900 mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed flex-grow md:text-lg text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4 md:text-sm text-xs">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto ml-1 flex gap-6 md:text-sm text-xs">
                  <a
                    href={project.linkUrl}
                    className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors duration-200"
                    target="__blank"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>

                  {project.deploymentUrl && (
                    <a
                      href={project.deploymentUrl}
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-900 transition-colors duration-200"
                      target="__blank"
                    >
                      <ExternalLink size={16} />
                      <span>Deployment</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
