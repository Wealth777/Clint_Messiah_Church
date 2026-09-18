import { ministries } from "../data/ministries";
import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";
import MinistryCard from "../components/MinistryCard";
import Button from "../components/Button";
import Reveal from "../components/Reveal";
import { IconArrowRight, IconHeart, IconUsers } from "../components/icons";

const steps = [
  {
    icon: IconUsers,
    title: "1 · Attend",
    text: "Join a Sunday service and meet the ministry teams — every team welcomes newcomers warmly.",
  },
  {
    icon: IconHeart,
    title: "2 · Connect",
    text: "Speak to a team leader after the service or send us a message, and we will help you find your fit.",
  },
  {
    icon: IconArrowRight,
    title: "3 · Serve",
    text: "Grow with a community, use your gifts, and become part of what God is doing in Ogbomoso.",
  },
];

export default function Ministries() {
  return (
    <>
      <PageHero
        eyebrow="Ministries"
        title="Find Your Place to Belong & Serve"
        description="God has given every believer gifts to build up the body of Christ. Explore our ministries and discover where you fit."
        image="https://images.pexels.com/photos/20679915/pexels-photo-20679915.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1600"
      />

      {/* ======================== MINISTRY GRID ======================== */}
      <section className="bg-cream-50 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionTitle
            eyebrow="Get Involved"
            title="Our Ministries"
            description="Tap “Learn More” on any ministry to see how it serves the church and how you can join."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ministries.map((ministry, i) => (
              <MinistryCard key={ministry.slug} ministry={ministry} expandable index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ======================== HOW TO JOIN ======================== */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionTitle
            eyebrow="Your Next Step"
            title="How to Join a Ministry"
            description="Becoming part of a ministry is simple — three small steps."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((step, i) => (
              <Reveal
                key={step.title}
                delay={i * 110}
                className="relative overflow-hidden rounded-xl border border-navy-100 bg-cream-50 p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-300 hover:bg-white hover:shadow-xl hover:shadow-navy-900/10"
              >
                <span aria-hidden className="absolute -right-4 -top-6 font-display text-8xl font-bold text-navy-950/5">
                  {i + 1}
                </span>
                <step.icon className="h-8 w-8 text-gold-600" aria-hidden />
                <h3 className="mt-5 font-display text-xl font-semibold text-navy-950">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-800/75">{step.text}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200} className="mt-14 rounded-2xl bg-navy-950 px-8 py-12 text-center sm:px-12">
            <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">
              Not sure where you fit?
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-navy-100/80 sm:text-base">
              Reach out to us and a ministry leader will personally help you
              find the right community for your season of life.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button to="/contact" icon={IconArrowRight}>
                Contact a Leader
              </Button>
              <Button to="/sermons-events" variant="outline">
                See What's On
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
