import { useState } from "react";
import { cn } from "../utils/cn";
import Button from "./Button";
import Reveal from "./Reveal";
import { IconChevronRight, IconClock } from "./icons";

/**
 * Ministry card. Two modes:
 *  • linked  (default) — "Learn More" routes to the Ministries page
 *  • expandable        — "Learn More" reveals extra details inline
 *                        (used on the Ministries page)
 * Data comes from src/data/ministries.js
 */
export default function MinistryCard({ ministry, expandable = false, index = 0 }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Reveal
      as="article"
      delay={(index % 3) * 100}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-navy-100 bg-white transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-navy-900/10"
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={ministry.image}
          alt={ministry.alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-transparent" />
        <p className="absolute bottom-3 left-4 right-4 font-display text-lg font-semibold text-white">
          {ministry.name}
        </p>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm font-semibold text-gold-600">{ministry.short}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-800/80">
          {ministry.description}
        </p>

        {/* Meeting information */}
        <div className="mt-5 flex items-start gap-2.5 rounded-lg bg-cream-100 px-4 py-3">
          <IconClock className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" aria-hidden />
          <p className="text-xs leading-relaxed text-navy-800">
            <span className="font-semibold text-navy-950">{ministry.meeting.day}</span>
            {" · "}
            {ministry.meeting.time}
            <br />
            <span className="text-navy-800/70">{ministry.meeting.venue}</span>
          </p>
        </div>

        {/* Expandable detail (Ministries page) */}
        <div
          className={cn(
            "grid transition-all duration-500 ease-out",
            expanded ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          )}
        >
          <div className="overflow-hidden">
            <p className="rounded-lg border border-gold-200 bg-gold-50 p-4 text-xs leading-relaxed text-navy-800/90">
              {ministry.more}
            </p>
          </div>
        </div>

        {/* Action */}
        <div className="mt-5">
          {expandable ? (
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
              className="group/btn inline-flex cursor-pointer items-center gap-1.5 text-xs font-bold uppercase tracking-[0.18em] text-navy-900 transition-colors hover:text-gold-600"
            >
              {expanded ? "Show Less" : "Learn More"}
              <IconChevronRight
                aria-hidden
                className={cn(
                  "h-3.5 w-3.5 transition-transform duration-300",
                  expanded ? "-rotate-90" : "rotate-0 group-hover/btn:translate-x-1"
                )}
              />
            </button>
          ) : (
            <Button to="/ministries" variant="ghost" size="sm" icon={IconChevronRight} className="px-0 hover:underline">
              Learn More
            </Button>
          )}
        </div>
      </div>
    </Reveal>
  );
}
