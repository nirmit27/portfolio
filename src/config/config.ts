/* Configurations */

import { SkillBadge, NavItem, Project } from "@/types/types";

// URL configurations
export const GSCRIPT_URL: string = process.env.NEXT_PUBLIC_SCRIPT_URL || "";
export const skillBadgeURL: string = process.env.NEXT_PUBLIC_SKILLS_URL || "";

// GitHub - profile stuff
export const profileLink: string = "https://github.com/nirmit27";
export const avatarPath: string = process.env.NEXT_PUBLIC_AVATAR_PATH || "";
export const selfiePath: string =
  "https://avatars.githubusercontent.com/u/93557744?v=4";

// Navigation - navbar items
export const navItems: NavItem[] = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

// Content - skills
export const skillBadges: SkillBadge[] = [
  {
    title: "Languages",
    names: ["C", "Python", "Java", "HTML", "CSS", "JS"],
  },
  {
    title: "Databases",
    names: ["MongoDB", "MySQL", "PostgreSQL"],
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

export const projects: Project[] = [
  {
    title: "Gemini AI",
    description:
      "An advanced AI-powered web application that provides a suite of services, including a chatbot, image captioning and text embedding.",
    imagePath: "/screenshots/proj_1.png",
    techStack: ["Streamlit", "Gemini", "Generative AI"],
    linkUrl: "https://github.com/nirmit27/gemini-ai",
    deploymentUrl: "https://gemini-ai-6pieo6evhzghyj5rgazsje.streamlit.app/",
  },
  {
    title: "Book Recommender System",
    description:
      "A book recommendation system based on item-based Collaborative Filtering memory-based model created using Flask.",
    imagePath:
      "https://raw.githubusercontent.com/nirmit27/Book-Recommender-System/refs/heads/master/static/ss_top50.png",
    techStack: ["Flask", "sklearn", "Tailwind", "Render"],
    linkUrl: "https://github.com/nirmit27/Book-Recommender-System",
    deploymentUrl: "https://book-recommender-system-t2aq.onrender.com",
  },
  {
    title: "NLP Text Analyzer",
    description:
      "A simple GUI application created using the tkinter library that offers NLP features like sentiment analysis.",
    imagePath:
      "https://raw.githubusercontent.com/nirmit27/NLP-Text-Analyzer/refs/heads/mongo/resources/sa.png",
    techStack: ["API", "tkinter", "MongoDB"],
    linkUrl: "https://github.com/nirmit27/NLP-Text-Analyzer",
    deploymentUrl: "",
  },
];
