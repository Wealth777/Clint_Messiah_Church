// ============================================================================
// SERMONS — ✏️ EDIT HERE (STATIC DATA — NO BACKEND, NO DATABASE)
// ----------------------------------------------------------------------------
// HOW TO ADD A SERMON:
//   1. Copy one of the objects below.
//   2. Fill in: title, speaker, date (ISO format "YYYY-MM-DD"), scripture,
//      description, thumbnail image URL and videoUrl.
//   3. Paste it at the TOP of the list — the first sermon in this array is
//      automatically shown as the "featured / latest" sermon.
//
// videoUrl:
//   • Paste a full link to the sermon on YouTube, Facebook or any platform.
//   • If there is no video yet, set videoUrl to null — the Watch button will
//     be hidden for that sermon.
//
// ⚠️ DATES & SPEAKERS ARE PLACEHOLDERS — replace with real information.
// ============================================================================

export const sermons = [
  {
    id: "sermon-006",
    title: "The God of New Beginnings",
    speaker: "Senior Pastor", // PLACEHOLDER — add the speaker's name
    date: "2026-02-08",
    scripture: "Isaiah 43:18-19",
    description:
      "God is not finished with you. A message on forgetting the former things, perceiving the new thing God is doing, and stepping boldly into the season ahead.",
    videoUrl: "https://www.youtube.com/", // PLACEHOLDER — link to the sermon video
    thumbnail:
      "https://images.pexels.com/photos/25457340/pexels-photo-25457340.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Pastor delivering a sermon with an open Bible in hand",
  },
  {
    id: "sermon-005",
    title: "Rooted and Built Up",
    speaker: "Associate Pastor", // PLACEHOLDER — add the speaker's name
    date: "2026-02-01",
    scripture: "Colossians 2:6-7",
    description:
      "What does it mean to be deeply rooted in Christ? A practical look at the daily habits that anchor our faith in every season.",
    videoUrl: "https://www.youtube.com/",
    thumbnail:
      "https://images.pexels.com/photos/2258251/pexels-photo-2258251.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Hands resting on an open Bible in prayer",
  },
  {
    id: "sermon-004",
    title: "Worship That Moves Heaven",
    speaker: "Guest Minister", // PLACEHOLDER — add the speaker's name
    date: "2026-01-25",
    scripture: "Psalm 100:1-5",
    description:
      "Worship is more than a song — it is a life poured out. Exploring true, wholehearted worship that delights the heart of God.",
    videoUrl: null, // No video yet — the Watch button is hidden automatically
    thumbnail:
      "https://images.pexels.com/photos/35266419/pexels-photo-35266419.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Worshipper with a hand raised during a church gathering",
  },
  {
    id: "sermon-003",
    title: "The Family of God",
    speaker: "Senior Pastor", // PLACEHOLDER — add the speaker's name
    date: "2026-01-18",
    scripture: "Ephesians 2:19-22",
    description:
      "You belong here. A message on the church as a spiritual house — built together, growing together and carrying one another in love.",
    videoUrl: "https://www.youtube.com/",
    thumbnail:
      "https://images.pexels.com/photos/8468740/pexels-photo-8468740.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Pastor sharing the word with a congregation member",
  },
  {
    id: "sermon-002",
    title: "Songs in the Night",
    speaker: "Associate Pastor", // PLACEHOLDER — add the speaker's name
    date: "2026-01-11",
    scripture: "Acts 16:25-26",
    description:
      "Like Paul and Silas, we can sing in prison — discovering how praise in difficult seasons opens doors no man can shut.",
    videoUrl: "https://www.youtube.com/",
    thumbnail:
      "https://images.pexels.com/photos/7520351/pexels-photo-7520351.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Choir singing joyfully in a sunlit church interior",
  },
  {
    id: "sermon-001",
    title: "Go and Make Disciples",
    speaker: "Senior Pastor", // PLACEHOLDER — add the speaker's name
    date: "2026-01-04",
    scripture: "Matthew 28:18-20",
    description:
      "The great commission is for every believer — a vision-casting message on evangelism, discipleship and our mission to Ogbomoso and the nations.",
    videoUrl: "https://www.youtube.com/",
    thumbnail:
      "https://images.pexels.com/photos/12243455/pexels-photo-12243455.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Pastor reading the Scriptures outdoors",
  },
];
