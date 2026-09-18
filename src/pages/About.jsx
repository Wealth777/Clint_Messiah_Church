import { site } from "../data/site";
import { leadership } from "../data/leadership";
import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";
import LeadershipCard from "../components/LeadershipCard";
import Button from "../components/Button";
import Reveal from "../components/Reveal";
import {
  IconArrowRight,
  IconBookOpen,
  IconCheck,
  IconCross,
  IconGlobe,
  IconHeart,
  IconSparkles,
  IconUsers,
} from "../components/icons";

/* --------------------------------------------------------------------------
   EDITABLE PAGE CONTENT — update the text below to match the church.
   -------------------------------------------------------------------------- */

const beliefs = [
  "The Bible is the inspired, trustworthy Word of God and our guide for faith and life.",
  "There is one God, eternally existing in three persons — Father, Son and Holy Spirit.",
  "Jesus Christ is Lord — fully God and fully man — who died for our sins and rose again.",
  "Salvation is a gift of God's grace, received through faith in Jesus Christ.",
  "The Holy Spirit empowers believers to live godly lives and serve one another.",
  "The Church is one family in Christ, called to worship God and share His love with the world.",
  "Jesus Christ will return, and with Him, the fullness of eternal life for all who believe.",
];

const values = [
  { icon: IconCross, name: "Faith", text: "We trust God's Word and walk with Him daily, in every season." },
  { icon: IconHeart, name: "Love", text: "We love God sincerely and love people without condition." },
  { icon: IconGlobe, name: "Service", text: "We serve God by serving one another and our community." },
  { icon: IconCheck, name: "Integrity", text: "We live honestly and transparently before God and people." },
  { icon: IconUsers, name: "Community", text: "We do life together as one family in Christ — no one walks alone." },
];

// ⚠️ PLACEHOLDER TIMELINE — replace the dates and milestones with the
// church's true history. Nothing below has been invented as fact.
const history = [
  {
    era: "The Beginning",
    year: "Year — Placeholder",
    title: "Humble Beginnings",
    text: "The church began as a small gathering of believers committed to prayer and the study of God's Word.",
  },
  {
    era: "Growth",
    year: "Year — Placeholder",
    title: "A Permanent Home",
    text: "As the fellowship grew, the church acquired its present site at Oke-Alapata and built its first auditorium.",
  },
  {
    era: "Expansion",
    year: "Year — Placeholder",
    title: "Ministries & Impact",
    text: "Children, youth, women's and men's ministries were established, alongside outreach to families across Ogbomoso.",
  },
  {
    era: "Today",
    year: "Today",
    title: "One Family, One Mission",
    text: "Messiah International Christian Centre continues to worship, disciple and serve — welcoming everyone to the family of God.",
  },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Who We Are"
        description="A family of believers in Ogbomoso, devoted to worship, the Word of God and sincere love for one another."
        image="https://images.pexels.com/photos/7219096/pexels-photo-7219096.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1600"
      />

      {/* ======================== WHO WE ARE ======================== */}
      <section className="bg-cream-50 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionTitle
              align="left"
              eyebrow="Our Identity"
              title="One Family, Gathered Around Jesus"
              description="Messiah International Christian Centre is a Bible-believing church at Oke-Alapata, Ogbomoso. We exist to help people know God, grow in Christ-like character and discover their place in His family."
            />
            <Reveal delay={150} className="mt-6 space-y-4 leading-relaxed text-navy-800/80">
              <p>
                Whether you have followed Jesus for years or are simply curious
                about faith, you belong here. Our services are warm and
                heartfelt — filled with worship, practical teaching from the
                Scriptures and genuine fellowship.
              </p>
              <p>
                Beyond Sundays, we walk together through every season of life —
                celebrating baptisms and weddings, supporting families, and
                serving our neighbours across Oyo State with the love of Christ.
              </p>
            </Reveal>
          </div>
          <Reveal delay={100} className="relative">
            <div className="overflow-hidden rounded-2xl shadow-2xl shadow-navy-900/15">
              <img
                src="https://images.pexels.com/photos/13908967/pexels-photo-13908967.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                alt="Members of the congregation praying together with raised hands"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div aria-hidden className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl border-2 border-gold-400/50" />
          </Reveal>
        </div>
      </section>

      {/* ======================== MISSION & VISION ======================== */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionTitle
            eyebrow="Our Foundation"
            title="Mission & Vision"
            description="Two sentences that shape everything we do."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Reveal className="group relative overflow-hidden rounded-2xl bg-navy-950 p-9 text-white sm:p-11">
              <IconCross className="h-9 w-9 text-gold-400" aria-hidden />
              <h3 className="mt-6 font-display text-2xl font-semibold sm:text-3xl">Our Mission</h3>
              <p className="mt-4 leading-relaxed text-navy-100/85">
                To lead people into a living relationship with Jesus Christ,
                equip them with the Word of God, and send them out to serve
                their families, community and world.
              </p>
              <span aria-hidden className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-gold-500/10 transition-transform duration-700 group-hover:scale-150" />
            </Reveal>

            <Reveal delay={120} className="group relative overflow-hidden rounded-2xl border-2 border-gold-500/60 bg-cream-100 p-9 sm:p-11">
              <IconSparkles className="h-9 w-9 text-gold-600" aria-hidden />
              <h3 className="mt-6 font-display text-2xl font-semibold text-navy-950 sm:text-3xl">Our Vision</h3>
              <p className="mt-4 leading-relaxed text-navy-800/85">
                To be a house of refuge and revival in Ogbomoso — where every
                generation worships in spirit and truth, grows to maturity in
                Christ, and carries the gospel to the ends of the earth.
              </p>
              <span aria-hidden className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-gold-500/15 transition-transform duration-700 group-hover:scale-150" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ======================== WHAT WE BELIEVE ======================== */}
      <section className="bg-cream-50 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionTitle
            eyebrow="Our Faith"
            title="What We Believe"
            description="A simple confession of the core beliefs we hold as a broadly Christian, Bible-centred church."
          />
          <div className="mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-2">
            {beliefs.map((belief, i) => (
              <Reveal
                key={belief}
                delay={(i % 2) * 100}
                className="flex items-start gap-4 rounded-xl border border-navy-100 bg-white p-6 transition-all duration-300 hover:border-gold-300 hover:shadow-lg hover:shadow-navy-900/5"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-navy-950 text-gold-400">
                  <IconCheck className="h-4.5 w-4.5" aria-hidden />
                </span>
                <p className="pt-1.5 text-sm leading-relaxed text-navy-800">{belief}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ======================== CORE VALUES ======================== */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionTitle
            eyebrow="How We Live"
            title="Our Core Values"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((value, i) => (
              <Reveal
                key={value.name}
                delay={i * 90}
                className="group rounded-xl border border-navy-100 bg-cream-50 p-7 text-center transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-300 hover:bg-white hover:shadow-xl hover:shadow-navy-900/10"
              >
                <span className="mx-auto grid h-13 w-13 place-items-center rounded-full bg-navy-950 text-gold-400 transition-colors duration-500 group-hover:bg-gold-500 group-hover:text-navy-950">
                  <value.icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-navy-950">{value.name}</h3>
                <p className="mt-2 text-xs leading-relaxed text-navy-800/70">{value.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ======================== LEADERSHIP ======================== */}
      <section className="bg-cream-50 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionTitle
            eyebrow="Servant Leaders"
            title="Church Leadership"
            description="A team called to shepherd, equip and care for the family of God at Messiah ICC."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {leadership.map((leader, i) => (
              <LeadershipCard key={leader.id} leader={leader} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ======================== CHURCH HISTORY TIMELINE ======================== */}
      <section className="bg-navy-950 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <SectionTitle
            light
            eyebrow="Our Journey"
            title="The Story of Our Church"
            description="Milestones on the journey God has led us through. (Timeline content is a placeholder — replace it with the church's real history in src/pages/About.jsx.)"
          />

          <ol className="relative mt-14 space-y-12 before:absolute before:bottom-2 before:left-[19px] before:top-2 before:w-px before:bg-gradient-to-b before:from-gold-400/70 before:via-gold-500/40 before:to-transparent sm:before:left-1/2">
            {history.map((item, i) => (
              <Reveal
                key={item.title}
                as="li"
                delay={i * 100}
                className={`relative flex gap-6 sm:w-1/2 ${
                  i % 2 === 0
                    ? "sm:pr-14"
                    : "sm:ml-auto sm:flex-row-reverse sm:pl-14 sm:text-right"
                }`}
              >
                {/* Timeline node */}
                <span
                  aria-hidden
                  className={`absolute left-0 top-1 grid h-10 w-10 shrink-0 place-items-center rounded-full border-2 border-gold-400 bg-navy-900 sm:static ${
                    i % 2 === 0 ? "sm:absolute sm:-right-5" : "sm:absolute sm:-left-5"
                  }`}
                >
                  <IconBookOpen className="h-4 w-4 text-gold-400" />
                </span>

                <div className="ml-14 rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:ml-0">
                  <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-gold-300">
                    {item.year}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-100/75">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ======================== CTA ======================== */}
      <section className="bg-cream-50 py-20 text-center sm:py-24">
        <div className="mx-auto max-w-2xl px-5 sm:px-8">
          <SectionTitle
            eyebrow="You Are Welcome"
            title="Come and See for Yourself"
            description="The best way to know us is to join us. We would be honoured to meet you this Sunday."
          />
          <Reveal delay={150} className="mt-8">
            <Button to="/contact" icon={IconArrowRight}>
              Plan Your Visit
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
