import { site } from "../data/site";
import { heroServiceTimes } from "../data/services";
import Button from "./Button";
import { IconArrowRight, IconChevronRight, IconMapPin } from "./icons";

/**
 * Full-screen homepage hero with worship imagery, church identity,
 * primary/secondary calls-to-action and a service-times strip.
 * IMAGE: replace `HERO_IMAGE` below with a photo of your own congregation.
 */
const HERO_IMAGE =
  "https://images.pexels.com/photos/36425621/pexels-photo-36425621.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1920";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-navy-950">
      {/* Background image with slow Ken Burns drift */}
      <div aria-hidden className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt=""
          className="h-full w-full animate-kenburns object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/85 via-navy-950/55 to-navy-950/95" />
        <div className="absolute inset-0 bg-navy-950/25" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 pb-40 pt-36 text-center sm:px-8 sm:pb-44 lg:pb-52">
        <p className="mx-auto flex animate-fade-up items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold-300 sm:text-sm">
          <IconMapPin className="h-4 w-4" aria-hidden />
          {site.address.full}
        </p>

        <h1 className="mx-auto mt-6 max-w-4xl animate-fade-up font-display text-4xl font-semibold leading-[1.12] text-white text-balance [animation-delay:120ms] sm:text-5xl lg:text-6xl lg:leading-[1.08]">
          Welcome to{" "}
          <span className="italic text-gold-300">Messiah</span> International
          Christian Centre
        </h1>

        <p className="mx-auto mt-6 max-w-2xl animate-fade-up text-base leading-relaxed text-navy-100/90 [animation-delay:240ms] sm:text-lg">
          {site.tagline}
        </p>

        <div className="mt-10 flex animate-fade-up flex-col items-center justify-center gap-4 [animation-delay:360ms] sm:flex-row">
          <Button to="/contact" size="lg" icon={IconArrowRight} className="w-full sm:w-auto">
            Plan Your Visit
          </Button>
          <Button to="/about" variant="outline" size="lg" className="w-full sm:w-auto">
            Learn About Us
          </Button>
        </div>
      </div>

      {/* Service-times strip */}
      <div className="absolute inset-x-0 bottom-0 z-10 px-5 pb-8 sm:px-8">
        <div className="mx-auto max-w-5xl animate-fade-up rounded-2xl border border-white/15 bg-white/10 [animation-delay:480ms] backdrop-blur-md">
          <div className="grid divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {heroServiceTimes.map((service) => (
              <div key={service.id} className="flex items-center justify-center gap-3 px-5 py-4 text-center sm:text-left">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-gold-300">
                    {service.day}
                  </p>
                  <p className="mt-1 text-sm font-medium text-white">
                    {service.name} · {service.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={() =>
              document
                .getElementById("services")
                ?.scrollIntoView({ behavior: "smooth", block: "start" })
            }
            className="group flex w-full cursor-pointer items-center justify-center gap-2 border-t border-white/10 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/70 transition-colors hover:bg-white/5 hover:text-white"
          >
            See full weekly schedule
            <IconChevronRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
          </button>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        aria-hidden
        className="absolute bottom-48 left-1/2 hidden -translate-x-1/2 lg:block"
      >
        <div className="h-12 w-px animate-scroll-cue bg-gradient-to-b from-transparent via-gold-400 to-transparent" />
      </div>
    </section>
  );
}
