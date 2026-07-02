import { ReactNode } from "react";

export default function Badge({
  children,
  icon,
  tone = "blue",
}: {
  children: ReactNode;
  icon?: ReactNode;
  tone?: "blue" | "teal" | "green" | "navy";
}) {
  const tones: Record<string, string> = {
    blue: "bg-fursa-blue/8 text-fursa-blue",
    teal: "bg-fursa-teal/10 text-fursa-teal",
    green: "bg-fursa-green/10 text-fursa-green",
    navy: "bg-white/10 text-white",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[13px] font-medium ${tones[tone]}`}
    >
      {icon}
      {children}
    </span>
  );
}
