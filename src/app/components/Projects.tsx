import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Gemini AI",
      description:
        "An advanced AI-powered web application that provides a suite of services, including a chatbot, image captioning and text embedding.",
      image: "/file.svg",
      tech: ["Streamlit", "Gemini", "Generative AI"],
      link: "https://github.com/nirmit27/gemini-ai",
      live: "#",
    },
    {
      title: "Book Recommender System",
      description:
        "A book recommendation system based on item-based Collaborative Filtering memory-based model created using Flask.",
      image:
        "https://raw.githubusercontent.com/nirmit27/Book-Recommender-System/refs/heads/master/static/ss_top50.png",
      tech: ["Flask", "sklearn", "Tailwind", "Render"],
      link: "https://github.com/nirmit27/Book-Recommender-System",
      live: "#",
    },
    {
      title: "Link Shortener",
      description:
        "A simple and efficient RESTful API built with Express.js to shorten, manage, and retrieve URLs.",
      image: "/file.svg",
      tech: ["Express.js", "MongoDB", "Vercel"],
      link: "https://github.com/nirmit27/link-shrink",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-px bg-gray-300 mx-auto"></div>
        </div>

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
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex gap-4">
                  <a
                    href={project.link}
                    className="flex items-center gap-2 text-gray-600 hover:text-slate-900 transition-colors duration-200"
                  >
                    <Github size={16} />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-gray-600 hover:text-slate-900 transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm">Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
