import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Gemini AI",
      description:
        "An advanced AI-powered web application that provides a suite of services, including a chatbot, image captioning and text embedding.",
      image: "/screenshots/proj_1.png",
      tech: ["Streamlit", "Gemini", "Generative AI"],
      link: "https://github.com/nirmit27/gemini-ai",
      deployment: "https://gemini-ai-6pieo6evhzghyj5rgazsje.streamlit.app/",
    },
    {
      title: "Book Recommender System",
      description:
        "A book recommendation system based on item-based Collaborative Filtering memory-based model created using Flask.",
      image:
        "https://raw.githubusercontent.com/nirmit27/Book-Recommender-System/refs/heads/master/static/ss_top50.png",
      tech: ["Flask", "sklearn", "Tailwind", "Render"],
      link: "https://github.com/nirmit27/Book-Recommender-System",
      deployment: "https://book-recommender-system-t2aq.onrender.com",
    },
    {
      title: "NLP Text Analyzer",
      description:
        "A simple GUI application created using the tkinter library that offers NLP features like sentiment analysis.",
      image:
        "https://raw.githubusercontent.com/nirmit27/NLP-Text-Analyzer/refs/heads/mongo/resources/sa.png",
      tech: ["API", "tkinter", "MongoDB"],
      link: "https://github.com/nirmit27/NLP-Text-Analyzer",
      deployment: "",
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

                <div className="mt-auto flex gap-6">
                  <a
                    href={project.link}
                    className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors duration-200"
                    target="__blank"
                  >
                    <Github size={16} />
                    <span className="text-sm">Code</span>
                  </a>

                  {project.deployment && (
                    <a
                      href={project.deployment}
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-900 transition-colors duration-200"
                      target="__blank"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm">Deployment</span>
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
