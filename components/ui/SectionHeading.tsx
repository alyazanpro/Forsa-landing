import { ReactNode } from "react";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "start";
  tone?: "light" | "dark";
}) {
  return (
    <div
      className={`flex flex-col gap-4 ${
        align === "center" ? "items-center text-center mx-auto" : "items-start text-start"
      } max-w-2xl`}
    >
      {eyebrow && (
        <span
          className={`text-[13px] font-semibold tracking-wide ${
            tone === "dark" ? "text-fursa-blue-light" : "text-fursa-blue"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl font-bold leading-[1.3] ${
          tone === "dark" ? "text-white" : "text-fursa-navy"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`text-base sm:text-lg leading-relaxed ${tone === "dark" ? "text-white/70" : "text-fursa-muted"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
