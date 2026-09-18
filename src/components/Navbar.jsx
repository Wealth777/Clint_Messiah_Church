import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { cn } from "../utils/cn";
import { site } from "../data/site";
import Logo from "./Logo";
import Button from "./Button";
import { IconClose, IconMapPin, IconMenu } from "./icons";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/ministries", label: "Ministries" },
  // { to: "/sermons-events", label: "Sermons & Events" },
  { to: "/contact", label: "Contact & Visit" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Solid background once the page is scrolled (keeps the bar readable).
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile drawer whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Lock body scroll while the mobile drawer is open + close on Escape.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open
          ? "bg-navy-950/95 shadow-xl shadow-navy-950/30 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link to="/" aria-label="Messiah International Christian Centre — Home" className="shrink-0">
          <Logo light />
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex xl:gap-9">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                cn(
                  "relative py-2 text-[13px] font-semibold uppercase tracking-[0.14em] transition-colors duration-300",
                  isActive ? "text-gold-300" : "text-white/80 hover:text-white"
                )
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  <span
                    aria-hidden
                    className={cn(
                      "absolute -bottom-0.5 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-gold-400 transition-all duration-300",
                      isActive ? "opacity-100" : "opacity-0"
                    )}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button to="/contact" size="sm">
            Plan Your Visit
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          className="grid h-11 w-11 place-items-center rounded-lg border border-white/20 text-white transition-colors hover:bg-white/10 lg:hidden"
        >
          {open ? <IconClose className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-x-0 top-20 bottom-0 z-40 overflow-y-auto bg-navy-950 transition-all duration-500 lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0"
        )}
      >
        <nav aria-label="Mobile" className="flex min-h-full flex-col px-6 py-8 sm:px-10">
          <ul className="space-y-1">
            {links.map((link, i) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  style={{ transitionDelay: open ? `${80 + i * 60}ms` : "0ms" }}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center justify-between border-b border-white/10 py-4 font-display text-2xl font-medium transition-all duration-500",
                      open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                      isActive ? "text-gold-300" : "text-white"
                    )
                  }
                >
                  {link.label}
                  <span aria-hidden className="text-gold-500">+</span>
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Button to="/contact" size="lg" className="w-full">
              Plan Your Visit
            </Button>
          </div>

          <p className="mt-8 flex items-start gap-3 text-sm leading-relaxed text-navy-100/70">
            <IconMapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" aria-hidden />
            {site.address.full}
          </p>
        </nav>
      </div>
    </header>
  );
}
