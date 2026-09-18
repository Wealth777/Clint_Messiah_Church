import { cn } from "../utils/cn";
import LogoImg from '/Logo.png'

export default function Logo({ light = false, className = "" }) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <span
        aria-hidden
        className={cn(
          "grid h-11 w-11 shrink-0 place-items-center rounded-lg border-2",
          light ? "border-gold-400/70 bg-navy-900/60" : "border-gold-500/60 bg-navy-950"
        )}
      >
        {/* <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="#c9a227"
          strokeWidth="2.4"
          strokeLinecap="round"
          className="h-6 w-6"
        >
          <path d="M12 3v18M5.5 9h13" />
        </svg> */}

        <img src={LogoImg} className="bg-white rounded-lg" alt="" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-lg font-bold tracking-wide sm:text-xl",
            light ? "text-white" : "text-navy-950"
          )}
        >
          MESSIAH
        </span>
        <span
          className={cn(
            "mt-1 text-[9px] font-semibold uppercase tracking-[0.28em] sm:text-[10px]",
            light ? "text-gold-300" : "text-gold-600"
          )}
        >
          Int'l Christian Centre
        </span>
      </span>
    </span>
  );
}
