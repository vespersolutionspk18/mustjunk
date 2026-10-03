export const site = {
  name: "Must Junk Removal",
  tagline: "Let it Go",
  phone: "(323) 555-9723",
  phoneHref: "tel:+13235559723",
  email: "info@mustjunkremoval.com",
  address: {
    street: "1840 S. Eastern Avenue",
    city: "Los Angeles",
    state: "CA",
    zip: "90022",
  },
  license: "Lic. #D-1029487",
  hours: "7 days, 7AM to 7PM",
  year: 2026,
} as const;

export const heroSlides = [
  {
    image: "/Assets/hero-1.jpg",
    headline:
      "Need junk taken away? We help with furniture, rubbish, building debris and clutter. Book now and we will come and get it.",
  },
  {
    image: "/Assets/hero-2.jpg",
    headline:
      "We work with homes and businesses all over Los Angeles. Our goal is to clean up LA and recycle as much as we can.",
  },
  {
    image: "/Assets/hero-3.jpg",
    headline:
      "We cover the whole LA area. Book a junk pickup any day of the week, 7 days a week.",
  },
] as const;

export const serviceTiles = [
  {
    image: "/Assets/tile-1-residential.jpg",
    line1: "Homes and Businesses",
    line2: "Junk Removal",
    href: "#residential-business",
  },
  {
    image: "/Assets/tile-2-office.jpg",
    line1: "Office Junk",
    line2: "Clean Outs",
    href: "#office-cleanouts",
  },
  {
    image: "/Assets/tile-3-dumpster.jpg",
    line1: "Dumpster and",
    line2: "Container Rental",
    href: "#dumpster-services",
  },
  {
    image: "/Assets/tile-4-estate.jpg",
    line1: "Total Junk",
    line2: "Hoarder or Estate Clean Outs",
    href: "#hoarder-cleanout",
  },
] as const;

export const areasServed = [
  "Los Angeles, CA",
  "Beverly Hills, CA",
  "Burbank, CA",
  "Culver City, CA",
  "Downtown Los Angeles, CA",
  "El Segundo, CA",
  "Glendale, CA",
  "Hollywood, CA",
  "Inglewood, CA",
  "Long Beach, CA",
  "Manhattan Beach, CA",
  "Pasadena, CA",
  "Santa Monica, CA",
  "South Bay, CA",
  "Studio City, CA",
  "Torrance, CA",
  "Van Nuys, CA",
  "West Hollywood, CA",
] as const;

export const galleryImages = [
  "/Assets/gallery-1.jpg",
  "/Assets/gallery-2.jpg",
  "/Assets/gallery-3.jpg",
  "/Assets/gallery-4.jpg",
  "/Assets/gallery-5.jpg",
  "/Assets/gallery-6.jpg",
] as const;
