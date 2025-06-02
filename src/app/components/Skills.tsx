import Image from "next/image";

export default function Skills() {
  const skillBadges = [
    {
      title: "Languages",
      names: ["C", "Python", "Java", "HTML", "CSS", "JS"],
    },
    {
      title: "Databases",
      names: ["MongoDB", "MySQL", "Sqlite"],
    },
    {
      title: "Frameworks",
      names: [
        "Express",
        "React",
        "Next",
        "Nodejs",
        "Tailwind",
        "Flask",
        "FastAPI",
        "sklearn",
        "Pytorch",
      ],
    },
    {
      title: "Tools",
      names: ["Postman", "Vercel", "Docker", "Anaconda", "VSCode", "Git"],
    },
  ];

  const skillBadgeURL = process.env.NEXT_PUBLIC_SKILLS_URL || "";

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-px bg-gray-300 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillBadges.map((category, index) => (
            <div key={index} className="text-center">
              <h3 className="text-xl font-semibold text-slate-900 mb-8">
                {category.title}
              </h3>

              {/* Skill Icons */}
              <div className="flex flex-col items-center space-y-6">
                <Image
                  width={150}
                  height={150}
                  src={`${skillBadgeURL}?i=${category.names
                    .map((name) => name.toLowerCase())
                    .join(",")}&theme=dark&perline=3`}
                  alt={`${category.title} icons`}
                  className="transition-transform duration-300 hover:scale-105"
                />

                {/* Skill Names */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 w-full">
                  {category.names.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="px-2 py-1 bg-white rounded-md shadow-sm text-xs font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200"
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
