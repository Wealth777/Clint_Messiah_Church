import Reveal from "./Reveal";

/**
 * Leadership profile card — portrait, name, position and short biography.
 * Data comes from src/data/leadership.js (placeholder content — edit there).
 */
export default function LeadershipCard({ leader, index = 0 }) {
  return (
    <Reveal
      as="article"
      delay={(index % 4) * 90}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-navy-100 bg-white text-center transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-navy-900/10"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={leader.image}
          alt={leader.alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold text-navy-950">{leader.name}</h3>
        <p className="mt-1 text-xs font-bold uppercase tracking-[0.2em] text-gold-600">
          {leader.position}
        </p>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-navy-800/75">{leader.bio}</p>
      </div>
    </Reveal>
  );
}
