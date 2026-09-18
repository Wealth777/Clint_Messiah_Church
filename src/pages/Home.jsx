import { Link } from "react-router-dom";
import { site } from "../data/site";
import { services } from "../data/services";
import { ministries } from "../data/ministries";
import { sermons } from "../data/sermons";
import { events } from "../data/events";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import ServiceCard from "../components/ServiceCard";
import MinistryCard from "../components/MinistryCard";
import SermonCard from "../components/SermonCard";
import EventCard from "../components/EventCard";
import Button from "../components/Button";
import Reveal from "../components/Reveal";
import {
  IconArrowRight,
  IconMapPin,
  IconPlay,
  IconQuote,
} from "../components/icons";

// Next upcoming event (first in the list) and latest sermon (first in list).
const nextEvent = events[0];
const latestSermon = sermons[0];

export default function Home() {
  return (
    <>
      <Hero />

      {/* ======================== SERVICE TIMES ======================== */}
      <section id="services" className="scroll-mt-24 bg-cream-50 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionTitle
            eyebrow="Worship With Us"
            title="Weekly Services & Gatherings"
            description="Whenever you are in Ogbomoso, there is a service waiting for you. Come as you are — you will be warmly welcomed."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => (
              <Reveal key={service.id} delay={(i % 4) * 90} className="h-full">
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <p className="text-sm text-navy-700">
              Every service also streams live on our social platforms.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ======================== ABOUT PREVIEW ======================== */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
          {/* Image collage */}
          <Reveal className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-navy-900/15">
              <img
                src="https://images.pexels.com/photos/36425622/pexels-photo-36425622.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                alt="Congregation with raised hands during a lively worship service"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-2 hidden w-52 overflow-hidden rounded-xl border-4 border-white shadow-2xl shadow-navy-900/25 sm:block lg:-right-8 lg:w-64">
              <img
                src="https://images.pexels.com/photos/13908967/pexels-photo-13908967.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                alt="Members praying together during a church gathering"
                loading="lazy"
                className="aspect-square w-full object-cover"
              />
            </div>
            {/* Gold frame accent */}
            <div aria-hidden className="absolute -left-4 -top-4 -z-10 h-full w-full rounded-2xl border-2 border-gold-400/50" />
          </Reveal>

          {/* Copy */}
          <div>
            <SectionTitle
              align="left"
              eyebrow="About Messiah ICC"
              title="A Christ-Centred Family in the Heart of Ogbomoso"
              description="Messiah International Christian Centre is a Bible-believing church committed to worship, discipleship and sincere love for one another. From Oke-Alapata, we are raising a generation that knows God and makes Him known."
            />
            <Reveal delay={150}>
              <blockquote className="mt-7 border-l-4 border-gold-500 bg-cream-100 p-5">
                <p className="font-display text-lg italic leading-relaxed text-navy-900">
                  “Our mission is to lead people into a living relationship with
                  Jesus Christ, equip them in the Word, and send them out to
                  serve.”
                </p>
                <cite className="mt-3 block text-xs font-bold uppercase tracking-[0.2em] text-gold-700 not-italic">
                  Our Mission Statement
                </cite>
              </blockquote>
            </Reveal>
            <Reveal delay={250} className="mt-8">
              <Button to="/about" variant="navy" icon={IconArrowRight}>
                More About Us
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ======================== MINISTRIES PREVIEW ======================== */}
      <section className="bg-cream-50 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionTitle
            eyebrow="Get Involved"
            title="Ministries for Every Season of Life"
            description="From children to seniors, there is a place for you to belong, grow and serve in the house of God."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ministries.slice(0, 6).map((ministry, i) => (
              <MinistryCard key={ministry.slug} ministry={ministry} index={i} />
            ))}
          </div>
          <Reveal className="mt-12 text-center">
            <Button to="/ministries" variant="navy" icon={IconArrowRight}>
              See All Ministries
            </Button>
          </Reveal>
        </div>
      </section>

      {/* ==================== UPCOMING EVENT + LATEST SERMON ==================== */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionTitle
            eyebrow="This Week at Messiah"
            title="What's On & Latest Message"
            description="Stay connected — join the next gathering and catch the most recent word shared in the house."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {/* Upcoming event */}
            <div>
              <Reveal className="mb-5 flex items-center justify-between">
                <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-navy-500">
                  Next Upcoming Event
                </h3>
                <Link
                  to="/sermons-events"
                  className="text-xs font-bold uppercase tracking-[0.18em] text-gold-700 underline-offset-4 hover:underline"
                >
                  All Events
                </Link>
              </Reveal>
              <Reveal delay={120}>
                <EventCard event={nextEvent} featured />
              </Reveal>
            </div>

            {/* Latest sermon */}
            <div>
              <Reveal className="mb-5 flex items-center justify-between">
                <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-navy-500">
                  Latest Sermon
                </h3>
                <Link
                  to="/sermons-events"
                  className="text-xs font-bold uppercase tracking-[0.18em] text-gold-700 underline-offset-4 hover:underline"
                >
                  Sermon Archive
                </Link>
              </Reveal>
              <Reveal delay={120}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-xl shadow-navy-900/5 transition-all duration-500 hover:shadow-2xl">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={latestSermon.thumbnail}
                      alt={latestSermon.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full bg-gold-500 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-navy-950">
                      Newest
                    </span>
                    {latestSermon.videoUrl && (
                      <a
                        href={latestSermon.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Watch “${latestSermon.title}”`}
                        className="absolute inset-0 grid place-items-center"
                      >
                        <span className="grid h-16 w-16 place-items-center rounded-full border border-white/40 bg-navy-950/50 text-white backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-navy-950">
                          <IconPlay className="ml-1 h-7 w-7" aria-hidden />
                        </span>
                      </a>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy-500">
                      {new Date(`${latestSermon.date}T00:00:00`).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}{" "}
                      · {latestSermon.scripture}
                    </p>
                    <h4 className="mt-2 font-display text-2xl font-semibold text-navy-950">
                      {latestSermon.title}
                    </h4>
                    <p className="mt-1.5 text-sm font-semibold text-gold-700">
                      {latestSermon.speaker}
                    </p>
                    <p className="mt-3 flex-1 leading-relaxed text-navy-800/75">
                      {latestSermon.description}
                    </p>
                    {latestSermon.videoUrl && (
                      <div className="mt-6">
                        <Button
                          href={latestSermon.videoUrl}
                          external
                          variant="navy"
                          icon={IconPlay}
                        >
                          Watch Sermon
                        </Button>
                      </div>
                    )}
                  </div>
                </article>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ======================== VERSE BAND ======================== */}
      <section className="relative overflow-hidden bg-navy-950 py-20 sm:py-24">
        <div aria-hidden className="absolute inset-0 opacity-[0.06]">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="0.6" className="absolute -right-16 -top-16 h-96 w-96">
            <path d="M12 2v20M5 8h14" />
          </svg>
        </div>
        <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
          <Reveal>
            <IconQuote className="mx-auto h-8 w-8 text-gold-400" aria-hidden />
            <p className="mt-6 font-display text-2xl font-medium italic leading-relaxed text-white text-balance sm:text-3xl">
              “{site.verse.text}”
            </p>
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.35em] text-gold-300">
              {site.verse.reference}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ======================== CLOSING CTA ======================== */}
      <section className="relative overflow-hidden py-24 sm:py-28">
        <div aria-hidden className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/34328512/pexels-photo-34328512.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1600"
            alt=""
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-navy-950/85" />
        </div>
        <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
          <SectionTitle
            light
            eyebrow="We Would Love to Meet You"
            title="Join Us This Sunday"
            description="Whatever your story, you are welcome at Messiah International Christian Centre. Come and experience worship, the Word and a family that cares."
          />
          <Reveal delay={150} className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button to="/contact" size="lg" icon={IconArrowRight}>
              Plan Your Visit
            </Button>
            <Button href={site.directionsUrl} external variant="outline" size="lg">
              <IconMapPin className="h-4 w-4" aria-hidden />
              Get Directions
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
