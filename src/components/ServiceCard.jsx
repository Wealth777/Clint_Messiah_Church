import { IconBookOpen, IconCross, IconHeart } from "./icons";

const icons = {
  book: IconBookOpen,
  cross: IconCross,
  heart: IconHeart,
};

/**
 * Weekly service card — day, name, time and short description.
 * Data comes from src/data/services.js
 */
export default function ServiceCard({ service }) {
  const Icon = icons[service.icon] || IconCross;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-navy-100 bg-white p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-300 hover:shadow-2xl hover:shadow-navy-900/10">
      {/* Gold top accent */}
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-gold-500 to-gold-300 transition-transform duration-500 group-hover:scale-x-100"
      />

      <span className="grid h-12 w-12 place-items-center rounded-lg bg-navy-950 text-gold-400 transition-colors duration-500 group-hover:bg-gold-500 group-hover:text-navy-950">
        <Icon className="h-6 w-6" aria-hidden />
      </span>

      <p className="mt-5 text-xs font-bold uppercase tracking-[0.25em] text-gold-600">
        {service.day}
      </p>
      <h3 className="mt-2 font-display text-xl font-semibold text-navy-950">
        {service.name}
      </h3>
      <p className="mt-2 text-lg font-semibold text-navy-900">{service.time}</p>
      <p className="mt-3 text-sm leading-relaxed text-navy-800/75">
        {service.description}
      </p>
    </article>
  );
}
