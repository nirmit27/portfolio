import { ExternalLink } from "lucide-react";
import Image from "next/image";

export default function About() {
  const profileLink = "https://github.com/nirmit27";
  const selfiePath = "https://avatars.githubusercontent.com/u/93557744?v=4";

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-px bg-gray-300 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center leading-tight text-justify">
          {/* Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-600">
              I&apos;m a ML engineer with full-stack development skills,
              specializing in AI-powered web applications. I work with{" "}
              <span className="font-semibold">Python</span> for machine learning
              and <span className="font-semibold">React</span> for creating
              interactive frontends that make the models accessible through
              clean and minimal UI.
            </p>
            <p className="text-lg text-gray-600">
              I focus on bridging machine learning models with real-world
              applications, currently exploring modern frameworks and advanced
              ML techniques to build impactful solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-white rounded-full text-sm text-gray-700 shadow-sm">
                ML Engineer
              </span>
              <span className="px-4 py-2 bg-white rounded-full text-sm text-gray-700 shadow-sm">
                Full-Stack Developer
              </span>
              <span className="px-4 py-2 bg-white rounded-full text-sm text-gray-700 shadow-sm">
                AI Solutions Builder
              </span>
            </div>
          </div>

          {/* Avatar and Link */}
          <div className="flex flex-col gap-4 items-center justify-center md:justify-end">
            {/* Avatar */}
            <div className="relative w-72 h-72 rounded-full p-3 bg-gradient-to-br from-slate-300 to-blue-500">
              <div className="w-full h-full rounded-full bg-white shadow-lg overflow-hidden">
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
