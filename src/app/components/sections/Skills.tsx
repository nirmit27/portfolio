import Image from "next/image";

import SectionHeader from "../SectionHeader";
import { skillBadges, skillBadgeURL } from "@/config/config";

export default function Skills() {
  const sectionTitle: string = "My Skills";

  return (
    <section id="skills" className="pt-30 pb-10 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title={sectionTitle} dividerWidth={"40"} />

        <div className="grid md:grid-cols-2 gap-x-6 gap-y-12">
          {skillBadges.map((category, index) => (
            <div key={index} className="text-center">
              <h3 className="text-xl font-semibold text-slate-900 mb-8">
                {category.title}
              </h3>

              {/* Icons */}
              <div className="grid grid-cols-2 sm:grid-cols-3 justify-items-center gap-y-4 gap-x-2 max-w-xs mx-auto">
                {category.names.map((skill, skillIndex) => (
                  <Image
                    key={skillIndex}
                    width={64}
                    height={64}
                    src={`${skillBadgeURL}?i=${skill.toLowerCase()}&theme=light`}
                    alt={`${skill} icon`}
                    title={skill.charAt(0).toUpperCase() + skill.slice(1)}
                    className="w-16 h-16 transition-transform duration-300 hover:scale-110 cursor-pointer"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
  