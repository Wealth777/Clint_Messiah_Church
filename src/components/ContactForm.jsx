import { useState } from "react";
import { site } from "../data/site";
import Button from "./Button";
import Reveal from "./Reveal";
import { IconSend } from "./icons";

const inputClasses =
  "w-full rounded-lg border border-navy-200 bg-white px-4 py-3 text-sm text-navy-950 placeholder:text-navy-300 transition-colors focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/30";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const update = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `[Website Enquiry] ${form.subject || `Message from ${form.name}`}`
    );
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        `Phone: ${form.phone}`,
        "",
        "Message:",
        form.message,
      ].join("\n")
    );
    // Opens the visitor's email app — nothing is stored or transmitted by the website.
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <Reveal className="rounded-2xl border border-navy-100 bg-white p-6 shadow-xl shadow-navy-900/5 sm:p-9">
      <h2 className="font-display text-2xl font-semibold text-navy-950 sm:text-3xl">
        Send Us a Message
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-navy-800/75">
        Have a question, a prayer request, or planning a first visit? Fill in the
        form and we will get back to you.{" "}
        <span className="font-semibold text-navy-950">
          This opens your own email app
        </span>{" "}
        — the website does not store or send messages on a server.
      </p>

      <form onSubmit={handleSubmit} className="mt-7 grid gap-5 sm:grid-cols-2" noValidate={false}>
        <div>
          <label htmlFor="contact-name" className="mb-1.5 block text-xs font-bold uppercase tracking-[0.15em] text-navy-800">
            Name <span className="text-gold-600">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your full name"
            value={form.name}
            onChange={update("name")}
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="contact-email" className="mb-1.5 block text-xs font-bold uppercase tracking-[0.15em] text-navy-800">
            Email <span className="text-gold-600">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={update("email")}
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="contact-phone" className="mb-1.5 block text-xs font-bold uppercase tracking-[0.15em] text-navy-800">
            Phone
          </label>
          <input
            id="contact-phone"
            type="tel"
            autoComplete="tel"
            placeholder="Your phone number"
            value={form.phone}
            onChange={update("phone")}
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="contact-subject" className="mb-1.5 block text-xs font-bold uppercase tracking-[0.15em] text-navy-800">
            Subject <span className="text-gold-600">*</span>
          </label>
          <input
            id="contact-subject"
            type="text"
            required
            placeholder="e.g. Planning a visit"
            value={form.subject}
            onChange={update("subject")}
            className={inputClasses}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="contact-message" className="mb-1.5 block text-xs font-bold uppercase tracking-[0.15em] text-navy-800">
            Message <span className="text-gold-600">*</span>
          </label>
          <textarea
            id="contact-message"
            required
            rows={5}
            placeholder="How can we serve you?"
            value={form.message}
            onChange={update("message")}
            className={`${inputClasses} resize-y`}
          />
        </div>

        <div className="sm:col-span-2">
          <Button type="submit" size="lg" icon={IconSend} className="w-full sm:w-auto">
            Send Message
          </Button>

          <p aria-live="polite" className="mt-4 text-xs leading-relaxed text-navy-600">
            {sent
              ? "Your email application should now open with your message ready to send. If it did not, please email us directly."
              : ""}{" "}
            Prefer to reach out directly? Email{" "}
            <a href={`mailto:${site.email}`} className="font-semibold text-gold-700 underline underline-offset-2">
              {site.email}
            </a>{" "}
            or call{" "}
            <a href={site.phoneHref} className="font-semibold text-gold-700 underline underline-offset-2">
              {site.phone}
            </a>
            .
          </p>
        </div>
      </form>
    </Reveal>
  );
}
