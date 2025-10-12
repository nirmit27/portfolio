import Divider from "./ui/Divider";

import { SectionHeaderProps } from "@/types/types";

export default function SectionHeader({
  title,
  dividerWidth = 20,
}: SectionHeaderProps) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-4">
        {title}
      </h2>
      <Divider width={dividerWidth} />
    </div>
  );
}
