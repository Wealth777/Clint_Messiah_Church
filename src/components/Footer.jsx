import { Link } from "react-router-dom";
import { site } from "../data/site";
import { services } from "../data/services";
import Logo from "./Logo";
import { IconClock, IconMail, IconMapPin, IconPhone, socialIcons } from "./icons";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/ministries", label: "Ministries" },
  { to: "/sermons-events", label: "Sermons & Events" },
  { to: "/contact", label: "Contact & Visit" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-navy-100">
      {/* Gold accent line */}
      <div aria-hidden className="h-1 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600" />

      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-10">
        {/* Brand */}
        <div>
          <Logo light />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-navy-100/70">
            {site.tagline} Join us this week at Oke-Alapata, Ogbomoso — there is
            a place for you in God's family.
          </p>
          <div className="mt-6 flex gap-3">
            {site.socials.map((social) => {
              const Icon = socialIcons[social.icon];
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Messiah ICC on ${social.name}`}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/70 transition-all duration-300 hover:-translate-y-1 hover:border-gold-400 hover:text-gold-300"
                >
                  {Icon && <Icon className="h-4 w-4" />}
                </a>
              );
            })}
          </div>
        </div>

        {/* Navigation */}
        <nav aria-label="Footer">
          <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-gold-300">
            Explore
          </h3>
          <ul className="mt-5 space-y-3">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm text-navy-100/75 transition-colors duration-200 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Service times */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-gold-300">
            Service Times
          </h3>
          <ul className="mt-5 space-y-4">
            {services.map((service) => (
              <li key={service.id} className="flex items-start gap-3">
                <IconClock className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" aria-hidden />
                <div>
                  <p className="text-sm font-semibold text-white">{service.day}</p>
                  <p className="text-sm text-navy-100/70">
                    {service.name} · {service.time}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-gold-300">
            Contact Us
          </h3>
          <ul className="mt-5 space-y-4 text-sm text-navy-100/75">
            <li className="flex items-start gap-3">
              <IconMapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" aria-hidden />
              <span>
                {site.address.line1}
                <br />
                {site.address.line2}
                <br />
                {site.address.line3}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <IconPhone className="h-4 w-4 shrink-0 text-gold-400" aria-hidden />
              {/* PLACEHOLDER phone number — edit in src/data/site.js */}
              <a href={site.phoneHref} className="transition-colors hover:text-white">
                {site.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <IconMail className="h-4 w-4 shrink-0 text-gold-400" aria-hidden />
              {/* PLACEHOLDER email — edit in src/data/site.js */}
              <a href={`mailto:${site.email}`} className="transition-colors hover:text-white">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-center text-xs text-navy-100/50 sm:flex-row sm:px-8 sm:text-left">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="tracking-wide">
            {site.address.full}
          </p>
        </div>
      </div>
    </footer>
  );
}
