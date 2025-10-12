import Image from "next/image";

import SectionHeader from "../SectionHeader";
import { skillBadges, skillBadgeURL } from "@/config/config";

export default function Skills() {
  const sectionTitle: string = "My Skills";

  return (
    <section id="skills" className="pt-30 pb-10 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title={sectionTitle} dividerWidth={32} />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillBadges.map((category, index) => (
            <div key={index} className="text-center">
              <h3 className="text-xl font-semibold text-slate-900 mb-8">
                {category.title}
              </h3>

              {/* Icons */}
              <div className="flex flex-col items-center space-y-6">
                <Image
                  width={150}
                  height={150}
                  src={`${skillBadgeURL}?i=${category.names
                    .map((name) => name.toLowerCase())
                    .join(",")}&theme=light&perline=3`}
                  alt={`${category.title} icons`}
                  className="transition-transform duration-300 hover:scale-105"
                />

                {/* Titles */}
                <div className="w-full mx-auto grid grid-cols-3 gap-2">
                  {category.names.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="mx-auto min-w-full p-1 bg-white rounded-md shadow-sm text-xs font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                    >
                      {skill.charAt(0).toUpperCase() + skill.slice(1)}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
