/* Types (Safety first?) */

// Content
export type SkillBadge = {
  title: string;
  names: string[];
};

export type Project = {
  title: string;
  description: string;
  imagePath: string;
  techStack: string[];
  linkUrl: string;
  deploymentUrl: string;
};

// Components
export type NavItem = {
  name: string;
  href: string;
};

export type SectionHeaderProps = {
  title: string;
  dividerWidth?: string;
};

export type DividerProps = {
  width?: string;
};
