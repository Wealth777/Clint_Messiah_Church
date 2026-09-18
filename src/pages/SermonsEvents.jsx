import { useMemo, useState } from "react";
import { cn } from "../utils/cn";
import { sermons } from "../data/sermons";
import { events } from "../data/events";
import { services } from "../data/services";
import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";
import SermonCard from "../components/SermonCard";
import EventCard from "../components/EventCard";
import Button from "../components/Button";
import Reveal from "../components/Reveal";
import { formatDate } from "../utils/format";
import {
  IconArrowRight,
  IconClock,
  IconPlay,
  IconArrowUpRight,
} from "../components/icons";

export default function SermonsEvents() {
  const [speaker, setSpeaker] = useState("All");

  // Newest sermon = featured; the rest form the archive.
  const featured = sermons[0];
  const archive = sermons.slice(1);

  // Unique speaker list for the filter pills.
  const speakers = useMemo(
    () => ["All", ...Array.from(new Set(sermons.map((s) => s.speaker)))],
    []
  );

  const filtered =
    speaker === "All" ? archive : archive.filter((s) => s.speaker === speaker);

  return (
    <>
      <PageHero
        eyebrow="Sermons & Events"
        title="Messages & Gatherings"
        description="Catch up on recent sermons and see what is coming up in the life of the church."
        image="https://images.pexels.com/photos/23015811/pexels-photo-23015811.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1600"
      />

      {/* ======================== FEATURED SERMON ======================== */}
      <section className="bg-cream-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionTitle
            align="left"
            eyebrow="Featured Message"
            title="Latest Sermon"
          />

          <Reveal className="mt-10 overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-2xl shadow-navy-900/8">
            <div className="grid lg:grid-cols-2">
              <div className="group relative min-h-64 overflow-hidden lg:min-h-full">
                <img
                  src={featured.thumbnail}
                  alt={featured.alt}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-navy-950/50 to-transparent" />
                {featured.videoUrl && (
                  <a
                    href={featured.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Watch “${featured.title}”`}
                    className="absolute inset-0 grid place-items-center"
                  >
                    <span className="grid h-20 w-20 place-items-center rounded-full border border-white/40 bg-navy-950/50 text-white backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-navy-950">
                      <IconPlay className="ml-1 h-9 w-9" aria-hidden />
                    </span>
                  </a>
                )}
              </div>

              <div className="flex flex-col justify-center p-8 sm:p-12">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold-600">
                  {formatDate(featured.date)} · {featured.scripture}
                </p>
                <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-navy-950 sm:text-4xl">
                  {featured.title}
                </h2>
                <p className="mt-3 text-base font-semibold text-gold-700">
                  {featured.speaker}
                </p>
                <p className="mt-5 leading-relaxed text-navy-800/80">
                  {featured.description}
                </p>
                {featured.videoUrl && (
                  <div className="mt-8">
                    <Button href={featured.videoUrl} external size="lg" icon={IconArrowUpRight}>
                      Watch Sermon
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ======================== SERMON ARCHIVE ======================== */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionTitle
            eyebrow="Grow in the Word"
            title="Sermon Archive"
            description="Previous messages from our services. Watch online or ask the church office for a copy."
          />

          {/* Speaker filter (frontend-only) */}
          <Reveal className="mt-10">
            <div
              role="group"
              aria-label="Filter sermons by speaker"
              className="no-scrollbar flex justify-start gap-2 overflow-x-auto pb-2 sm:justify-center"
            >
              {speakers.map((name) => (
                <button
                  key={name}
                  type="button"
                  onClick={() => setSpeaker(name)}
                  aria-pressed={speaker === name}
                  className={cn(
                    "shrink-0 cursor-pointer rounded-full border px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] transition-all duration-300",
                    speaker === name
                      ? "border-navy-950 bg-navy-950 text-white"
                      : "border-navy-200 bg-white text-navy-700 hover:border-gold-400 hover:text-navy-950"
                  )}
                >
                  {name}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((sermon, i) => (
              <SermonCard key={sermon.id} sermon={sermon} index={i} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="mt-10 text-center text-sm italic text-navy-500">
              No sermons found for this speaker yet.
            </p>
          )}

          <Reveal className="mt-10 text-center text-xs leading-relaxed text-navy-500">
            To add a new sermon, edit <span className="font-semibold text-navy-700">src/data/sermons.js</span> —
            no coding beyond pasting one entry is required.
          </Reveal>
        </div>
      </section>

      {/* ======================== UPCOMING EVENTS ======================== */}
      <section className="bg-cream-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionTitle
            eyebrow="Mark Your Calendar"
            title="Upcoming Events"
            description="Gatherings, conferences and outreaches — everyone is welcome. Bring a friend!"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((event, i) => (
              <EventCard key={event.id} event={event} index={i} />
            ))}
          </div>
          <Reveal className="mt-10 text-center text-xs leading-relaxed text-navy-500">
            To publish a new event, edit <span className="font-semibold text-navy-700">src/data/events.js</span>.
          </Reveal>
        </div>
      </section>

      {/* ======================== WEEKLY SCHEDULE ======================== */}
      <section className="bg-navy-950 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <SectionTitle
            light
            eyebrow="Every Week"
            title="Weekly Schedule"
            description="The rhythm of our week — join us at any of these gatherings."
          />
          <Reveal className="mt-12 overflow-hidden rounded-2xl border border-white/10">
            <ul className="divide-y divide-white/10">
              {services.map((service) => (
                <li
                  key={service.id}
                  className="group flex flex-col gap-2 bg-white/5 px-6 py-5 transition-colors duration-300 hover:bg-white/10 sm:flex-row sm:items-center sm:gap-6 sm:px-8"
                >
                  <span className="w-24 shrink-0 font-display text-lg font-semibold text-gold-300">
                    {service.day}
                  </span>
                  <span className="flex-1 text-sm font-semibold text-white">
                    {service.name}
                  </span>
                  <span className="flex items-center gap-2 text-sm text-navy-100/80">
                    <IconClock className="h-4 w-4 text-gold-400" aria-hidden />
                    {service.time}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120} className="mt-8 text-center">
            <Button to="/contact" variant="gold" icon={IconArrowRight}>
              Plan Your Visit
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
