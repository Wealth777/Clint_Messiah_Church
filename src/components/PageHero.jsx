import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import { IconChevronRight } from "./icons";

/**
 * Banner used at the top of inner pages: navy background over imagery,
 * eyebrow label, serif title and a Home / Page breadcrumb.
 */
export default function PageHero({ eyebrow, title, description, image, imageAlt = "" }) {
  return (
    <section className="relative overflow-hidden bg-navy-950">
      <div aria-hidden className="absolute inset-0">
        <img src={image} alt={imageAlt} className="h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-950/60 to-navy-950" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-40 text-center sm:px-8 sm:pb-24 sm:pt-44 lg:pb-28">
        <Reveal>
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex items-center justify-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
              <li>
                <Link to="/" className="transition-colors hover:text-gold-300">
                  Home
                </Link>
              </li>
              <li aria-hidden>
                <IconChevronRight className="h-3 w-3" />
              </li>
              <li aria-current="page" className="text-gold-300">
                {eyebrow || title}
              </li>
            </ol>
          </nav>

          <h1 className="mx-auto max-w-3xl font-display text-4xl font-semibold leading-tight text-white text-balance sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          {description && (
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-navy-100/85 sm:text-lg">
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
