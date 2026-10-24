// The one place for facts that appear on more than one page.
// Contacts here are role addresses only, never a volunteer's personal email or phone.

export const pool = {
  name: 'Wendwood Pool',
  association: 'Wendwood Association',
  address: '320 Dominion Dr., Newport News, VA 23602',
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=320+Dominion+Dr+Newport+News+VA+23602',
  email: 'wwoodpool@gmail.com',
  poolPhone: '(757) 249-9000',
  facebook: 'https://www.facebook.com/wendwood.pool/',
  swimTeam: 'https://www.wendwoodwahoos.com/',
  membershipSignup: 'https://applications.accessgrantedsystems.com/patron?group=wendwood_association',
  calendarEmbed: 'https://calendar.google.com/calendar/embed?src=wwoodpool%40gmail.com&ctz=America%2FNew_York',

  // Site-wide notice shown under the header. Set to '' to hide it.
  notice: 'Our new website is under construction. Some features are not available yet.',

  season: 2026,
  prices: {
    household: { volunteer: 375, noVolunteer: 475 },
    single: { volunteer: 190, noVolunteer: 240 },
    supportWendwood: 100,
    guestAddOn: 50,
    localGuestDay: 5,
    guestPass: 5,
    guestPass12: 50,
    newNeighborDiscount: 50,
  },
  volunteerHours: 8,

  hours: [
    { days: 'Mondays', time: '11am – 4pm' },
    { days: 'Tuesdays & Fridays', time: '11am – 10pm' },
    { days: 'Wednesdays & Thursdays', time: '11am – 7pm' },
    { days: 'Saturdays & Sundays', time: '12pm – 6pm' },
  ],

  parties: {
    pricePerHour: 75,
    deposit: 25,
    maxGuests: 50,
    lifeguards: 2,
    slots: [
      { days: 'Saturday & Sunday mornings', time: '9am – noon' },
      { days: 'Friday & Saturday evenings', time: '7pm – 10pm' },
    ],
    // Off-season: online booking is not open. Set true once the booking system exists.
    bookingOpen: false,
  },
} as const;

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/membership/', label: 'Membership' },
  { href: pool.swimTeam, label: 'Swim Team' },
  { href: '/parties/', label: 'Parties' },
  { href: '/calendar/', label: 'Calendar' },
  { href: '/contact/', label: 'Contact' },
];
