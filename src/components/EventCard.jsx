import Button from "./Button";
import { formatDay, formatMonth } from "../utils/format";
import { IconArrowUpRight, IconClock, IconMapPin } from "./icons";

/**
 * Event card for upcoming events.
 * Data comes from src/data/events.js — if `registrationUrl` is set, a
 * Register button opens the external link; otherwise the card explains
 * how to get details from the church office.
 */
export default function EventCard({ event, featured = false, index = 0 }) {
  const image = (
    <div className={featured ? "relative h-64 overflow-hidden sm:h-full sm:min-h-[320px]" : "relative aspect-[16/9] overflow-hidden"}>
      <img
        src={event.image}
        alt={event.alt}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-navy-950/45 to-transparent" />
      {/* Date badge */}
      <div className="absolute left-4 top-4 flex h-16 w-16 flex-col items-center justify-center rounded-lg bg-white text-center shadow-lg">
        <span className="font-display text-2xl font-bold leading-none text-navy-950">
          {formatDay(event.dateISO)}
        </span>
        <span className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-gold-600">
          {formatMonth(event.dateISO)}
        </span>
      </div>
    </div>
  );

  const body = (
    <div className={featured ? "flex flex-col justify-center p-7 sm:p-10" : "flex flex-1 flex-col p-6"}>
      <h3
        className={
          featured
            ? "font-display text-2xl font-semibold text-navy-950 sm:text-3xl"
            : "font-display text-xl font-semibold leading-snug text-navy-950"
        }
      >
        {event.name}
      </h3>

      <ul className="mt-4 space-y-2 text-sm text-navy-800/80">
        <li className="flex items-center gap-2.5">
          <IconClock className="h-4 w-4 shrink-0 text-gold-600" aria-hidden />
          <span>
            <span className="font-semibold text-navy-950">{event.dateLabel}</span> · {event.time}
          </span>
        </li>
        <li className="flex items-center gap-2.5">
          <IconMapPin className="h-4 w-4 shrink-0 text-gold-600" aria-hidden />
          <span>{event.location}</span>
        </li>
      </ul>

      <p className={featured ? "mt-4 max-w-lg flex-1 leading-relaxed text-navy-800/80" : "mt-3 flex-1 text-sm leading-relaxed text-navy-800/75"}>
        {event.description}
      </p>

      <div className={featured ? "mt-6" : "mt-5"}>
        {event.registrationUrl ? (
          <Button href={event.registrationUrl} external size="sm" icon={IconArrowUpRight}>
            Register
          </Button>
        ) : (
          <p className="text-xs italic text-navy-500">
            No registration needed — details at the church office.
          </p>
        )}
      </div>
    </div>
  );

  if (featured) {
    return (
      <article className="group grid overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-xl shadow-navy-900/5 transition-all duration-500 hover:shadow-2xl hover:shadow-navy-900/10 lg:grid-cols-2">
        {image}
        {body}
      </article>
    );
  }

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-navy-100 bg-white transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-navy-900/10">
      {image}
      {body}
    </article>
  );
}
