// ============================================================================
// EVENTS — ✏️ EDIT HERE (STATIC DATA — NO BACKEND, NO DATABASE)
// ----------------------------------------------------------------------------
// HOW TO ADD AN EVENT:
//   1. Copy one of the objects below.
//   2. Fill in: name, dateISO (used for sorting, "YYYY-MM-DD"), dateLabel,
//      time, location, description, image and registrationUrl.
//   3. Paste it at the TOP of the list — events are shown newest-first and
//      the first event is automatically featured as the "next upcoming".
//
// registrationUrl:
//   • Optional. Paste a link (Google Forms, Eventbrite, WhatsApp, etc.).
//   • If there is no registration link, set it to null — the card will show
//     "Details at the church office" instead of a Register button.
//
// ⚠️ ALL DATES, TIMES AND LOCATIONS ARE PLACEHOLDERS — replace them with
//    the church's real event information.
// ============================================================================

export const events = [
  {
    id: "event-001",
    name: "Night of Worship & The Word",
    dateISO: "2026-03-06", // PLACEHOLDER — real start date
    dateLabel: "Friday, 6th March 2026", // PLACEHOLDER
    time: "6:00 PM – 8:30 PM",
    location: "Main Auditorium, Messiah ICC",
    description:
      "An evening of praise, worship and the ministry of the Word. Come with family and friends — admission is free for all.",
    registrationUrl: null, // PLACEHOLDER — add a registration link if any
    image:
      "https://images.pexels.com/photos/38996330/pexels-photo-38996330.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Worship team singing on stage during a church event",
  },
  {
    id: "event-002",
    name: "Annual Thanksgiving Conference",
    dateISO: "2026-04-10",
    dateLabel: "10th – 12th April 2026",
    time: "Daily — 9:00 AM & 5:30 PM",
    location: "Church Premises, Oke-Alapata",
    description:
      "Three days of teaching, prayer and thanksgiving as a church family, with guest ministers from across the region.",
    registrationUrl: "https://forms.google.com/", // PLACEHOLDER
    image:
      "https://images.pexels.com/photos/29422233/pexels-photo-29422233.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Large congregation seated in the church auditorium during a service",
  },
  {
    id: "event-003",
    name: "Community Outreach — Oke-Alapata",
    dateISO: "2026-05-09",
    dateLabel: "Saturday, 9th May 2026",
    time: "9:00 AM – 2:00 PM",
    location: "Oke-Alapata Community",
    description:
      "Join the outreach team as we share food items, clothing and the love of Christ with families in our host community. Volunteers are welcome.",
    registrationUrl: null,
    image:
      "https://images.pexels.com/photos/6646855/pexels-photo-6646855.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Volunteers preparing food supplies for community distribution",
  },
  {
    id: "event-004",
    name: "Youth Praise Concert",
    dateISO: "2026-06-20",
    dateLabel: "Saturday, 20th June 2026",
    time: "4:00 PM – 7:00 PM",
    location: "Youth Hall, Messiah ICC",
    description:
      "An afternoon of live music, dance and testimony led by our youth ministry. A perfect invite for friends and classmates.",
    registrationUrl: "https://forms.google.com/", // PLACEHOLDER
    image:
      "https://images.pexels.com/photos/12044265/pexels-photo-12044265.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Church band performing on stage with guitars and singers",
  },
];
