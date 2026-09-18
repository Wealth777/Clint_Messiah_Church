import { cn } from "../utils/cn";
import Reveal from "./Reveal";

/**
 * Consistent section heading: gold eyebrow + serif title + optional description.
 * `align` = "left" | "center".  `light` = for dark navy sections.
 */
export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  className = "",
}) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em]",
            align === "center" && "justify-center",
            light ? "text-gold-300" : "text-gold-600"
          )}
        >
          <span aria-hidden className={cn("h-px w-8", light ? "bg-gold-300/70" : "bg-gold-500/70")} />
          {eyebrow}
          <span aria-hidden className={cn("h-px w-8", light ? "bg-gold-300/70" : "bg-gold-500/70")} />
        </p>
      )}
      <h2
        className={cn(
          "mt-4 font-display text-3xl font-semibold leading-tight text-balance sm:text-4xl lg:text-[2.75rem]",
          light ? "text-white" : "text-navy-950"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed sm:text-lg",
            light ? "text-navy-100/90" : "text-navy-800/80"
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
