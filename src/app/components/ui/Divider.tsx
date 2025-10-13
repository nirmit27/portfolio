// Divider component (... right below the SectionHeader)

import { DividerProps } from "@/types/types";

export default function Divider({ width = "32" }: DividerProps) {
  return <div className={`w-${width} h-px bg-gray-300 mx-auto`} />;
}
