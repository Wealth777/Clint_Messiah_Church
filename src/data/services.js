// ============================================================================
// WEEKLY SERVICE SCHEDULE — ✏️ EDIT HERE
// ----------------------------------------------------------------------------
// ⚠️ PLACEHOLDER TIMES: no service times were supplied, so the values below
// are placeholders. Replace them with the church's actual schedule.
//
// These times automatically appear on:
//   • the Home page (service cards + hero strip)
//   • the Sermons & Events page (weekly schedule)
//   • the Contact & Visit page (plan your visit)
//   • the Footer
// ============================================================================

export const services = [
  {
    id: "sunday-school",
    day: "Sunday",
    name: "Sunday School",
    time: "9:00 AM",
    duration: "1 Hour",
    description:
      "A time of guided Bible study for all ages before the main service.",
    icon: "book",
  },
  {
    id: "sunday-worship",
    day: "Sunday",
    name: "Worship Service",
    time: "10:00 AM",
    duration: "2 Hours",
    description:
      "Our main weekly gathering — praise, the Word, prayer and fellowship.",
    icon: "cross",
  },
  {
    id: "midweek-study",
    day: "Wednesday",
    name: "Bible Study And Prayer Meeting",
    time: "5:00 PM",
    duration: "1 Hour",
    description:
      "A midweek deep dive into Scripture — come with your questions.",
    icon: "book",
  },
  // {
  //   id: "prayer-meeting",
  //   day: "Friday",
  //   name: "Prayer Meeting",
  //   time: "6:30 PM",
  //   duration: "PLACEHOLDER — edit time",
  //   description:
  //     "We gather to pray for the church, our city, our nation and one another.",
  //   icon: "heart",
  // },
];

// Short strip shown inside the Home hero — derived from the list above.
export const heroServiceTimes = services.slice(0, 3);
