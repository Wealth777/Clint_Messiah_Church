import { site } from "../data/site";
import { services } from "../data/services";
import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";
import ContactForm from "../components/ContactForm";
import Button from "../components/Button";
import Reveal from "../components/Reveal";
import {
  IconArrowRight,
  IconCalendar,
  IconClock,
  IconMail,
  IconMapPin,
  IconPhone,
  IconUsers,
  IconWhatsApp,
  socialIcons,
} from "../components/icons";

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact & Visit"
        title="We Can't Wait to Meet You"
        description="Find us, reach out to us, or plan your first visit — we will make it easy for you."
        image="https://images.pexels.com/photos/13963623/pexels-photo-13963623.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1600"
      />

      {/* ======================== CONTACT INFO CARDS ======================== */}
      <section className="bg-cream-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {/* Address */}
            <Reveal className="rounded-xl border border-navy-100 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold-300 hover:shadow-xl hover:shadow-navy-900/10">
              <IconMapPin className="h-8 w-8 text-gold-600" aria-hidden />
              <h2 className="mt-5 font-display text-xl font-semibold text-navy-950">
                Visit Us
              </h2>
              <address className="mt-3 text-sm not-italic leading-relaxed text-navy-800/80">
                {site.name}
                <br />
                {site.address.line1}
                <br />
                {site.address.line2}
                <br />
                {site.address.line3}
              </address>
              <a
                href={site.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.18em] text-gold-700 underline-offset-4 hover:underline"
              >
                Get Directions
                <IconArrowRight className="h-3.5 w-3.5" aria-hidden />
              </a>
            </Reveal>

            {/* Call / email / WhatsApp */}
            <Reveal delay={100} className="rounded-xl border border-navy-100 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold-300 hover:shadow-xl hover:shadow-navy-900/10">
              <IconPhone className="h-8 w-8 text-gold-600" aria-hidden />
              <h2 className="mt-5 font-display text-xl font-semibold text-navy-950">
                Call, Email or Chat
              </h2>
              <ul className="mt-3 space-y-3 text-sm text-navy-800/80">
                <li>
                  {/* PLACEHOLDER phone — edit in src/data/site.js */}
                  <a href={site.phoneHref} className="flex items-center gap-2.5 transition-colors hover:text-gold-700">
                    <IconPhone className="h-4 w-4 shrink-0 text-gold-600" aria-hidden />
                    {site.phone} <span className="text-xs text-navy-500">(placeholder)</span>
                  </a>
                </li>
                <li>
                  {/* PLACEHOLDER email — edit in src/data/site.js */}
                  <a href={`mailto:${site.email}`} className="flex items-center gap-2.5 transition-colors hover:text-gold-700">
                    <IconMail className="h-4 w-4 shrink-0 text-gold-600" aria-hidden />
                    {site.email} <span className="text-xs text-navy-500">(placeholder)</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`https://wa.me/${site.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 transition-colors hover:text-gold-700"
                  >
                    <IconWhatsApp className="h-4 w-4 shrink-0 text-gold-600" aria-hidden />
                    WhatsApp us <span className="text-xs text-navy-500">(placeholder)</span>
                  </a>
                </li>
              </ul>
              {/* <div className="mt-5 flex gap-3">
                {site.socials.map((social) => {
                  const Icon = socialIcons[social.icon];
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Messiah ICC on ${social.name}`}
                      className="grid h-9 w-9 place-items-center rounded-full border border-navy-200 text-navy-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-400 hover:text-gold-600"
                    >
                      {Icon && <Icon className="h-4 w-4" />}
                    </a>
                  );
                })}
              </div> */}
            </Reveal>

            {/* Service times mini */}
            <Reveal delay={200} className="rounded-xl border border-navy-100 bg-navy-950 p-8 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy-900/20">
              <IconCalendar className="h-8 w-8 text-gold-400" aria-hidden />
              <h2 className="mt-5 font-display text-xl font-semibold">
                Service Times
              </h2>
              <ul className="mt-3 space-y-2.5 text-sm text-navy-100/85">
                {services.map((service) => (
                  <li key={service.id} className="flex items-center gap-2.5">
                    <IconClock className="h-4 w-4 shrink-0 text-gold-400" aria-hidden />
                    <span>
                      <span className="font-semibold text-white">{service.day}</span> ·{" "}
                      {service.name}, {service.time}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs italic text-navy-100/60">
                Times are placeholders — confirm at the church office.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ======================== MAP ======================== */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionTitle
            eyebrow="Find Us"
            title="Where We Meet"
            description="Oke-Alapata, Ogbomoso, Oyo State, Nigeria — we are easy to reach from anywhere in the city."
          />
          <Reveal className="mt-12 overflow-hidden rounded-2xl border border-navy-100 shadow-xl shadow-navy-900/8">
            <div className="relative">
              <iframe
                title="Map showing the location of Messiah International Christian Centre, Oke-Alapata, Ogbomoso"
                src={site.mapEmbedUrl}
                className="h-[380px] w-full sm:h-[440px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href={site.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full bg-navy-950 px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-2xl transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-gold-500 hover:text-navy-950"
              >
                <IconMapPin className="h-4 w-4" aria-hidden />
                Get Directions
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ======================== FORM + PLAN YOUR VISIT ======================== */}
      <section className="bg-cream-50 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
          <ContactForm />

          {/* Plan Your Visit */}
          <div>
            <SectionTitle
              align="left"
              eyebrow="Plan Your Visit"
              title="Coming for the First Time?"
              description="Here is everything you need to know for a smooth, warm welcome."
            />

            <div className="mt-8 space-y-5">
              {[
                {
                  icon: IconMapPin,
                  title: "Where we are",
                  text: `${site.address.full}. Ask any okada or taxi for Oke-Alapata — the church is well known in the community.`,
                },
                {
                  icon: IconClock,
                  title: "When to arrive",
                  text: `Sunday School begins at ${services[0].time} and the Worship Service at ${services[1].time}. Arrive a few minutes early so a greeter can welcome you and help you settle in.`,
                },
                {
                  icon: IconUsers,
                  title: "What to expect",
                  text: "A warm greeting at the door, heartfelt worship, Bible-based preaching, and a friendly family — dress modestly and come as you are. Children's classes run during the main service.",
                },
                {
                  icon: IconPhone,
                  title: "Who to contact",
                  text: `Call or WhatsApp the church office on ${site.phone} or email ${site.email}, and a member of the welcome team will personally look out for you.`,
                },
              ].map((item, i) => (
                <Reveal
                  key={item.title}
                  delay={i * 100}
                  className="flex gap-5 rounded-xl border border-navy-100 bg-white p-6 transition-all duration-300 hover:border-gold-300 hover:shadow-lg hover:shadow-navy-900/5"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-navy-950 text-gold-400">
                    <item.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-navy-950">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-navy-800/80">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================== CLOSING CTA ======================== */}
      <section className="relative overflow-hidden bg-navy-950 py-20 text-center sm:py-24">
        <div aria-hidden className="absolute inset-0 opacity-[0.05]">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="0.5" className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2">
            <path d="M12 2v20M5 8h14" />
          </svg>
        </div>
        <div className="relative mx-auto max-w-2xl px-5 sm:px-8">
          <SectionTitle
            light
            eyebrow="See You Sunday"
            title="There's a Seat Waiting for You"
            description="No matter where you are on your journey of faith, you are welcome at Messiah International Christian Centre."
          />
          <Reveal delay={150} className="mt-9">
            <Button href={site.directionsUrl} external size="lg" icon={IconArrowRight}>
              Get Directions to Church
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
