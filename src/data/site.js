// ============================================================================
// SITE-WIDE SETTINGS — ✏️ EDIT THIS FILE FIRST
// ----------------------------------------------------------------------------
// This is the single source of truth for the church's name, address, contact
// details and online presence. Replace every value marked "PLACEHOLDER" below
// and it will update automatically across the entire website.
// ============================================================================

export const site = {
  name: "Messiah International Christian Centre",
  shortName: "Messiah ICC",
  tagline:
    "A place to worship, grow in faith, and build a Christ-centered community.",

  // A scripture shown in decorative bands around the site.
  verse: {
    text: "Come to me, all you who are weary and burdened, and I will give you rest.",
    reference: "Matthew 11:28",
  },

  address: {
    line1: "Oke-Alapata,",
    line2: "Ogbomoso,",
    line3: "Oyo State, Nigeria.",
    full: "Oke-Alapata, Ogbomoso, Oyo State, Nigeria",
  },

  // PLACEHOLDER — replace with the church's real phone number(s).
  phone: "+234 803 499 3350",
  phoneHref: "tel:+2348034993350",

  // PLACEHOLDER — WhatsApp number in international format, digits only.
  whatsapp: "2348034993350",

  // PLACEHOLDER — replace with the church's real email address.
  email: "info@messiahicc.org",

  // PLACEHOLDER — replace "#" style URLs with the church's real social pages.
  socials: [
    { name: "Facebook", icon: "facebook", url: "https://www.facebook.com/" },
    { name: "Instagram", icon: "instagram", url: "https://www.instagram.com/" },
    { name: "YouTube", icon: "youtube", url: "https://www.youtube.com/" },
  ],

  // Google Maps embed (no API key required) + directions deep link.
  mapEmbedUrl:
    "https://www.google.com/maps?q=Oke-Alapata,+Ogbomoso,+Oyo+State,+Nigeria&output=embed",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Oke-Alapata,+Ogbomoso,+Oyo+State,+Nigeria",
};
