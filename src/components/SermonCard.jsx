import Button from "./Button";
import { IconArrowUpRight, IconPlay } from "./icons";

/**
 * Sermon card for the archive grid.
 * Data comes from src/data/sermons.js — if `videoUrl` is set, the Watch
 * button opens the external video platform in a new tab; otherwise it is
 * hidden (no video hosting is built into this site).
 */
export default function SermonCard({ sermon }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-navy-100 bg-white transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-navy-900/10">
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={sermon.thumbnail}
          alt={sermon.alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
        <span className="absolute bottom-3 left-4 rounded-full bg-navy-950/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-gold-300 backdrop-blur-sm">
          {sermon.scripture}
        </span>
        {sermon.videoUrl && (
          <a
            href={sermon.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Watch “${sermon.title}”`}
            className="absolute inset-0 grid place-items-center"
          >
            <span className="grid h-14 w-14 place-items-center rounded-full border border-white/40 bg-navy-950/50 text-white backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-navy-950">
              <IconPlay className="ml-0.5 h-6 w-6" aria-hidden />
            </span>
          </a>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy-500">
          {new Date(`${sermon.date}T00:00:00`).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
        <h3 className="mt-2 font-display text-xl font-semibold leading-snug text-navy-950">
          {sermon.title}
        </h3>
        <p className="mt-1.5 text-sm font-medium text-gold-700">{sermon.speaker}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-800/75">
          {sermon.description}
        </p>

        {sermon.videoUrl ? (
          <div className="mt-5">
            <Button
              href={sermon.videoUrl}
              external
              variant="outlineNavy"
              size="sm"
              icon={IconArrowUpRight}
            >
              Watch Sermon
            </Button>
          </div>
        ) : (
          <p className="mt-5 text-xs italic text-navy-500">
            Video coming soon — available in the church archive.
          </p>
        )}
      </div>
    </article>
  );
}
