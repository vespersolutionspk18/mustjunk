export type Service = {
  slug: string;
  name: string;
  short: string;
  blurb: string;
  image: string;
  imageAlt: string;
  includes: string[];
  related: string[];
};

export const services: Service[] = [
  {
    slug: "junk-removal-los-angeles",
    name: "Junk Removal Los Angeles",
    short: "Junk hauling all over LA County",
    blurb:
      "This is what we do most. Tell us what you want gone and we'll send a licensed crew to load it and take it away. We sort out anything we can recycle. You don't need to rent a truck, pay a deposit, or clean up after us.",
    image: "/Assets/hero-1.jpg",
    imageAlt: "Removal crew loading a sofa into a work van on a Los Angeles street",
    includes: [
      "A walkthrough of the job and a firm price first",
      "Two-person crews with dollies and ramps",
      "Stairs, elevators and tight parking",
      "Sorting metals, plastics, cardboard and e-waste for recycling",
      "Donation pickup for usable furniture and appliances",
    ],
    related: [
      "residential-junk-removal",
      "commercial-junk-removal",
      "furniture-removal",
    ],
  },
  {
    slug: "residential-junk-removal",
    name: "Residential Junk Removal",
    short: "Homes, apartments, condos and yards",
    blurb:
      "One unwanted chair or a house packed with years of stuff. We clear homes across Los Angeles. We work room by room at whatever pace you need. We sweep up everything we touch.",
    image: "/Assets/tile-1-residential.jpg",
    imageAlt: "Two movers sliding a sofa into a van outside a home",
    includes: [
      "From one item to a whole house",
      "Apartments, condos and multi-family buildings",
      "Garage, attic, basement and storage unit clean-outs",
      "We sort donations and recycling on site",
    ],
    related: ["residential-junk-removal", "hoarder-junk-clean-out", "garage-clean-out"],
  },
  {
    slug: "commercial-junk-removal",
    name: "Commercial Junk Removal",
    short: "Retail, warehouse, restaurant and workshop",
    blurb:
      "We clear out old inventory and equipment on your schedule. We also work after hours and on weekends so you can stay open. You get receipts and disposal certificates for your files.",
    image: "/Assets/balance-2.jpg",
    imageAlt: "Crew loading demolition debris onto a dumpster",
    includes: [
      "Retail and restaurant equipment",
      "Warehouse racking and pallets",
      "Workshop and studio clear-outs",
      "After hours and on weekends",
      "Disposal certificates and recycling receipts",
    ],
    related: [
      "office-junk-clean-outs",
      "construction-demolition-debris",
      "warehouse-junk-removal",
    ],
  },
  {
    slug: "office-junk-clean-outs",
    name: "Office Junk Clean Outs",
    short: "Desks, chairs, monitors and filing cabinets",
    blurb:
      "We handle office moves, layoffs and the end of a lease. We take apart workstations and shut down old equipment. E-waste, monitors and storage units go to certified recycling instead of the landfill.",
    image: "/Assets/balance-3.jpg",
    imageAlt: "Two-person crew carrying a box out of a commercial storeroom",
    includes: [
      "We take apart workstations and cubicles",
      "Filing cabinets, desks and chairs",
      "Monitors, printers and e-waste routing",
      "Records and confidential documents",
      "We work off hours so your team isn't disturbed",
    ],
    related: [
      "office-furniture-removal",
      "commercial-junk-removal",
      "total-junk-clean-outs",
    ],
  },
  {
    slug: "total-junk-clean-outs",
    name: "Total Junk Clean Outs",
    short: "Whole property clear-outs",
    blurb:
      "Sometimes everything has to go. We do the whole property in one visit. We empty the rooms, the garage and the yard in order. You won't be left with a half-finished space.",
    image: "/Assets/gallery-4.jpg",
    imageAlt: "Accumulated household junk stacked on a lawn beside a home",
    includes: [
      "Inside and outside, done in one visit",
      "Garages, sheds and carports",
      "We sort donations and recycling as we load",
      "A final sweep and walkthrough with you",
    ],
    related: [
      "estate-clean-outs",
      "hoarder-junk-clean-out",
      "residential-junk-removal",
    ],
  },
  {
    slug: "dumpster-container-services",
    name: "Dumpster & Container Services",
    short: "Roll-off containers for any job",
    blurb:
      "Sometimes one truck isn't enough. We drop off a roll-off container sized to your job. Fill it on your own schedule and we'll haul it away when you're done. We also run live load packer trucks by the ton for big commercial jobs.",
    image: "/Assets/gallery-6.jpg",
    imageAlt: "Loaded roll-off container of debris beside a residential street",
    includes: [
      "Delivery and haul-away on your schedule",
      "Any size, from one room to a full renovation",
      "We tell you the weight limit up front",
      "Dump trucks and live load packers by the ton",
    ],
    related: [
      "construction-demolition-debris",
      "home-remodel-debris-removal",
      "dump-truck-live-load-packer",
    ],
  },
  {
    slug: "construction-demolition-debris",
    name: "Construction & Demolition Debris",
    short: "C&D debris, concrete and drywall",
    blurb:
      "We haul C&D debris from remodels, demolitions and tenant improvements. Heavy material gets broken down and loaded by hand. That way we can pull out anything worth recycling or saving.",
    image: "/Assets/balance-2.jpg",
    imageAlt: "Crew loading broken masonry and timber onto a dumpster",
    includes: [
      "Mixed C&D and dry waste",
      "Concrete, brick, drywall and lumber",
      "Cabinets, flooring and doors pulled intact",
      "We sort out metal for salvage and recycling",
    ],
    related: [
      "dumpster-container-services",
      "home-remodel-debris-removal",
      "commercial-junk-removal",
    ],
  },
  {
    slug: "home-remodel-debris-removal",
    name: "Home Remodel Debris Removal",
    short: "Kitchen, bath and renovation debris",
    blurb:
      "You renovate, we haul the debris. Your contractor can keep working while we're on site. Point us at the pile at the end of each stage. We'll clear it, sort the salvage and leave the site clean.",
    image: "/Assets/hero-3.jpg",
    imageAlt: "Flatbed truck loaded with renovation debris and bagged waste",
    includes: [
      "Kitchen, bath and ADU waste",
      "Cabinets, counters, tile and flooring",
      "Pickups after each stage of work",
      "Appliances and metals recycled separately",
    ],
    related: [
      "construction-demolition-debris",
      "dumpster-container-services",
      "appliance-removal",
    ],
  },
  {
    slug: "office-furniture-removal",
    name: "Office Furniture Removal",
    short: "Desks, chairs and credenzas",
    blurb:
      "We'll take the whole system apart and load it. Desks, chairs and shelving come apart on site. More fits on each trip and less ends up in the landfill.",
    image: "/Assets/tile-2-office.jpg",
    imageAlt: "Commercial office space being cleared out",
    includes: [
      "We take apart modular and sit-stand desks",
      "Conference tables and credenzas",
      "We stack and load to fit more per trip",
      "Usable systems donated to local groups",
    ],
    related: [
      "office-junk-clean-outs",
      "commercial-junk-removal",
      "furniture-removal",
    ],
  },
  {
    slug: "warehouse-junk-removal",
    name: "Warehouse & Facility Junk Removal",
    short: "Racking, pallets and plant clear-outs",
    blurb:
      "Warehouses, workshops and industrial yards pile up fast. We clear out pallet racking, workbenches and stock. We work around your operating schedule. You get weight tickets for anything we haul by the ton.",
    image: "/Assets/hero-3.jpg",
    imageAlt: "Truck loaded with bulk waste and bagged material",
    includes: [
      "Pallet racking, shelving and mezzanine steel",
      "Conveyors, workbenches and machine tools",
      "Pallets, dunnage and inventory",
      "Night and weekend work by schedule",
      "Certified weight tickets for tonnage billing",
    ],
    related: [
      "commercial-junk-removal",
      "dump-truck-live-load-packer",
      "construction-demolition-debris",
    ],
  },
  {
    slug: "downsizing-junk-removal",
    name: "Downsizing Junk Removal",
    short: "Senior, retirement and move-out clear-outs",
    blurb:
      "Downsizing shouldn't mean a month of weekends with a rented van. We clear a home, apartment or storage unit in a few focused visits. We work at your pace and keep sentimental items separate.",
    image: "/Assets/balance-7.jpg",
    imageAlt: "Removal crew carrying packed boxes out of a home",
    includes: [
      "Room by room, at a comfortable pace",
      "Sentimental items kept separate and labelled",
      "Help staging donations and estate sales",
      "Storage unit and garage contents",
    ],
    related: ["estate-clean-outs", "apartment-clean-out", "storage-clean-out"],
  },
  {
    slug: "furniture-removal",
    name: "Furniture Removal",
    short: "Sofas, tables, dressers and cabinets",
    blurb:
      "We carry sofas, dining sets and bed frames out of wherever they're stuck. We protect floors and doorframes. Anything that won't fit through the door whole comes apart first.",
    image: "/Assets/gallery-2.jpg",
    imageAlt: "Worker carrying a sofa down a hallway",
    includes: [
      "Sofas, sectionals and recliners",
      "Dining tables and chairs",
      "Dressers, mirrors and bed frames",
      "We take things apart for tight doorways",
    ],
    related: ["sofa-removal", "couch-removal", "mattress-removal"],
  },
  {
    slug: "bulk-trash-removal",
    name: "Bulk Trash Removal",
    short: "Anything too big for the city bin",
    blurb:
      "The city won't take it. We'll take it. Big household items, bags of leaves and broken-down furniture all come out by hand. Overstuffed bins get emptied too, then hauled away.",
    image: "/Assets/gallery-5.jpg",
    imageAlt: "Stack of tied garbage bags awaiting collection",
    includes: [
      "Items the city won't take",
      "Overfilled bins and bagged waste",
      "Broken-down furniture and oversized items",
      "Same-day scheduling",
    ],
    related: ["curbside-pick-up", "yard-waste-removal", "residential-junk-removal"],
  },
  {
    slug: "hoarder-junk-clean-out",
    name: "Hoarder Junk Clean Out",
    short: "Discreet, respectful clutter clearance",
    blurb:
      "We clear clutter for homeowners, landlords, property managers and local authorities. Our crews work quietly. They are trained to clear a home without judgement or comments about how it got there.",
    image: "/Assets/tile-4-estate.jpg",
    imageAlt: "Carport densely packed with accumulated household clutter",
    includes: [
      "Crews who work without judgement",
      "Sorting donations, recycling and disposal",
      "Bedding, clothing and hygiene-sensitive items",
      "Paperwork for landlords, insurers and authorities",
    ],
    related: [
      "estate-clean-outs",
      "total-junk-clean-outs",
      "basement-flood-clean-out",
    ],
  },
  {
    slug: "estate-clean-outs",
    name: "Estate Clean Outs",
    short: "Respectful clearing after a loss",
    blurb:
      "We work with executors, families and estate managers to clear a home. We handle the physical work and the sorting decisions. The people dealing with the loss don't also have to deal with a truckload of decisions.",
    image: "/Assets/balance-6.jpg",
    imageAlt: "Pile of household belongings left for removal outside a property",
    includes: [
      "Full clearing of the home, garage and yard",
      "Household items and clothing handled discreetly",
      "Donations, recycling and disposal sorted on site",
      "We work directly with the executor or family",
    ],
    related: [
      "estate-home-junk-removal",
      "downsizing-junk-removal",
      "total-junk-clean-outs",
    ],
  },
  {
    slug: "estate-home-junk-removal",
    name: "Estate Home Junk Removal",
    short: "Household contents after a loss",
    blurb:
      "After a loss there's usually a home to empty and a family already carrying enough. We do the physical work of clearing it. Your family can focus on the decisions that need them.",
    image: "/Assets/gallery-5.jpg",
    imageAlt: "Stacked bags of household belongings set out for removal",
    includes: [
      "Full clearing of the home and garage",
      "Donations, recycling and disposal sorted on site",
      "Storage unit and safe contents if needed",
      "Photos at the end and disposal paperwork",
    ],
    related: ["estate-clean-outs", "downsizing-junk-removal", "total-junk-clean-outs"],
  },
  {
    slug: "attic-clean-out",
    name: "Attic Clean Out",
    short: "Boxes, old furniture and forgotten storage",
    blurb:
      "Attics are where things go to be forgotten. We bring the ladder and work the hatch and eaves safely. Then we clear out the boxes, old furniture and holiday storage.",
    image: "/Assets/gallery-4.jpg",
    imageAlt: "Household items stacked in a cluttered storage space",
    includes: [
      "A ladder and safe access to the hatch",
      "Boxes, decor and holiday storage",
      "Light fixtures and old furniture",
      "We sweep the eaves and the floor",
    ],
    related: ["garage-clean-out", "storage-clean-out", "residential-junk-removal"],
  },
  {
    slug: "garage-clean-out",
    name: "Garage Clean Out",
    short: "Workbenches, shelving and stored vehicles",
    blurb:
      "Garages get filled up and stay that way. We clear out shelving, workbenches and old appliances. We'll take stored vehicles too. Then we sweep and sort, so the space works again this weekend.",
    image: "/Assets/gallery-4.jpg",
    imageAlt: "Accumulated household items stacked in a garage",
    includes: [
      "Shelving, workbenches and tools",
      "Old appliances and car parts",
      "Stored vehicles, boats and trailers",
      "Donation and recycling sorting",
    ],
    related: ["attic-clean-out", "storage-clean-out", "appliance-removal"],
  },
  {
    slug: "hot-tub-removal",
    name: "Hot Tub Removal",
    short: "Spas, swim spas and swim pools",
    blurb:
      "Spas are heavy, bulky and full of awkward plumbing. We disconnect the equipment and cut up the cabinet. Then the whole thing comes out. Your patio or yard is ready for whatever you plan next.",
    image: "/Assets/tile-1-residential.jpg",
    imageAlt: "Crew carrying large outdoor equipment away from a home",
    includes: [
      "Power, water and drain lines",
      "Cutting the cabinet for tight side yards",
      "Taking out steps and decking",
      "Spa and pump haul-away",
    ],
    related: ["pool-spa-debris-removal", "yard-waste-removal", "residential-junk-removal"],
  },
  {
    slug: "apartment-clean-out",
    name: "Apartment Clean Out",
    short: "Units, complexes and move-out turnovers",
    blurb:
      "Quick turnovers for landlords, property managers and apartment complexes. We clear out the unit and take photos of the empty condition. You get it back ready for the next tenant or for your listing photos.",
    image: "/Assets/tile-4-estate.jpg",
    imageAlt: "Overfilled storage area awaiting a full clear-out",
    includes: [
      "One unit or a whole complex",
      "Bedrooms, bathrooms and closets emptied",
      "Move-out condition photos on request",
      "Fast turnaround for listing-ready units",
    ],
    related: ["residential-junk-removal", "storage-clean-out", "total-junk-clean-outs"],
  },
  {
    slug: "real-estate-junk-removal",
    name: "Real Estate Junk Removal",
    short: "Listing-ready clear-outs for agents",
    blurb:
      "Realtors and brokers, send us the address. We'll empty the place before your photography and staging appointment. We work in the access windows your seller allows. You get proof of completion afterwards.",
    image: "/Assets/gallery-4.jpg",
    imageAlt: "Residential property with accumulated items awaiting removal",
    includes: [
      "Empty-out before photography, staging or open houses",
      "Garage, attic and yard, not just inside",
      "We coordinate access with agents and sellers",
      "Completion photos and disposal paperwork",
    ],
    related: ["estate-clean-outs", "total-junk-clean-outs", "apartment-clean-out"],
  },
  {
    slug: "mattress-removal",
    name: "Mattress Removal",
    short: "Any size, any condition, hauled out today",
    blurb:
      "Mattresses are one of the things people ask for most. They're also one of the hardest things to move. We pull them out from under the bed, wrap them and haul them away. Box springs too, broken or not.",
    image: "/Assets/tile-1-residential.jpg",
    imageAlt: "Movers lifting a mattress toward a van",
    includes: [
      "All sizes, including king and California king",
      "Box springs, bunk beds and pull-outs",
      "Bed frame taken apart when needed",
      "Mattress recycling and sanitation handling",
    ],
    related: ["sofa-removal", "furniture-removal", "residential-junk-removal"],
  },
  {
    slug: "sofa-removal",
    name: "Sofa Removal",
    short: "Sectionals, loveseats and recliners",
    blurb:
      "We take sofas out of homes, offices and waiting rooms. That includes the awkward ones that won't turn the corner in the hallway. We protect doors, walls and floors, and the couch goes with us.",
    image: "/Assets/gallery-2.jpg",
    imageAlt: "Worker carrying a sofa out of a property",
    includes: [
      "Sectionals taken apart to fit",
      "Stairwells, landings and tight corners",
      "Recliners, futons and convertible beds",
      "Donation pickup for usable pieces",
    ],
    related: ["couch-removal", "furniture-removal", "mattress-removal"],
  },
  {
    slug: "couch-removal",
    name: "Couch Removal",
    short: "Same-day couch and settee removal",
    blurb:
      "This is the same job under another name. It's still the most common request we get. Give us a couple of hours' notice and your couch is gone. We separate the frame and cushions for recycling where we can.",
    image: "/Assets/gallery-2.jpg",
    imageAlt: "Worker carrying a couch out of a property",
    includes: [
      "Same-day and next-day scheduling",
      "Frame, cushion and cover separation",
      "Apartments, homes and businesses",
      "Upholstery and frame recycling",
    ],
    related: ["sofa-removal", "furniture-removal", "residential-junk-removal"],
  },
  {
    slug: "christmas-tree-removal",
    name: "Christmas Tree Removal",
    short: "Live and artificial, with the stand",
    blurb:
      "Fresh-cut or artificial. In the stand, on the curb or already in the back of your car. We'll take the tree, the stand and the lights. We handle the recycling on our end.",
    image: "/Assets/hero-3.jpg",
    imageAlt: "Truck loaded with green waste and bagged seasonal debris",
    includes: [
      "Live and artificial trees with stands",
      "Lights, cords and ornaments too",
      "Paths, steps and rooftops",
      "Seasonal recycling and composting",
    ],
    related: ["yard-waste-removal", "curbside-pick-up", "bulk-trash-removal"],
  },
  {
    slug: "storage-clean-out",
    name: "Storage Clean Out",
    short: "Self-storage units and containers",
    blurb:
      "Storage units cost money every month you're paying for them. We'll empty yours, and we can meet you there to load. That way you're not making two trips. Abandoned units are welcome too, for owners and facility managers.",
    image: "/Assets/gallery-4.jpg",
    imageAlt: "Accumulated stored items awaiting removal",
    includes: [
      "Self-storage units emptied on site",
      "Owner-approved units for facility managers",
      "Loading help at the unit door",
      "Long-term and container storage",
    ],
    related: ["apartment-clean-out", "garage-clean-out", "residential-junk-removal"],
  },
  {
    slug: "appliance-removal",
    name: "Appliance Removal",
    short: "Fridges, washers, dryers and ranges",
    blurb:
      "We disconnect and haul away refrigerators, washers, dryers and dishwashers. That includes units full of water or locked tight. Working appliances go for donation. Dead ones go for recycling.",
    image: "/Assets/gallery-1.jpg",
    imageAlt: "Discarded appliances and equipment stacked for removal",
    includes: [
      "Refrigerators, freezers, washers and dryers",
      "Ranges, ovens, dishwashers and microwaves",
      "Water and refrigerant lines disconnected",
      "Working units donated, dead units recycled",
    ],
    related: ["residential-junk-removal", "construction-demolition-debris", "donation-pickup"],
  },
  {
    slug: "dump-truck-live-load-packer",
    name: "Dump Truck & Live Load Packer",
    short: "Hauling priced by weight",
    blurb:
      "Our live load packer trucks and dump trucks are priced by weight. They suit property managers, facilities teams and landlords with a lot to clear out. Bring us a full yard or a demolished floor. We'll take the whole load in one visit.",
    image: "/Assets/hero-3.jpg",
    imageAlt: "Flatbed truck heavily loaded with bagged and bulk waste",
    includes: [
      "Live load packers and dump trucks",
      "Tonnage pricing with certified weight tickets",
      "Multi-load and volume discounts",
      "On-call scheduling for property managers",
    ],
    related: [
      "dumpster-container-services",
      "warehouse-junk-removal",
      "commercial-junk-removal",
    ],
  },
  {
    slug: "basement-flood-clean-out",
    name: "Basement Flood Clean Out",
    short: "Water-damaged contents and debris",
    blurb:
      "After a flood, a basement full of soaked belongings is heavy and unhealthy to sort. We take out the waterlogged furniture, carpet and debris. Anything we can recycle goes away from the landfill.",
    image: "/Assets/balance-6.jpg",
    imageAlt: "Pile of household debris awaiting removal outside a property",
    includes: [
      "Waterlogged furniture, carpet and underlay",
      "Appliances and electronics out of standing water",
      "Drywall sanding and debris removal where needed",
      "Paperwork for insurance claims on request",
    ],
    related: [
      "hoarder-junk-clean-out",
      "total-junk-clean-outs",
      "construction-demolition-debris",
    ],
  },
  {
    slug: "curbside-pick-up",
    name: "Curbside Pick Up",
    short: "Set it out, we take it away",
    blurb:
      "Set your unwanted items out at the curb and book a pickup window. It's the simplest version of what we do. It works well for landlords, property managers and anyone clearing a garage over a weekend.",
    image: "/Assets/gallery-3.jpg",
    imageAlt: "Discarded items and bags set out at a kerb for collection",
    includes: [
      "Scheduled curb collection windows",
      "Multi-item and repeat pickups",
      "Property manager and landlord accounts",
      "Donation and recycling sorting on collection",
    ],
    related: ["bulk-trash-removal", "yard-waste-removal", "commercial-junk-removal"],
  },
  {
    slug: "yard-waste-removal",
    name: "Yard Waste Removal",
    short: "Branches, stumps, soil and green waste",
    blurb:
      "Tree trimmings, brush, stumps and sod are heavy and awkward. We cut them and haul them away. Green waste goes to composting instead of the landfill where the load allows.",
    image: "/Assets/gallery-6.jpg",
    imageAlt: "Loaded container of green waste and yard debris",
    includes: [
      "Branches, brush and limb removal",
      "Stumps and root ball haul-away",
      "Sod, soil, rock and gravel",
      "Composting and green waste routing",
    ],
    related: [
      "hot-tub-removal",
      "pool-spa-debris-removal",
      "curbside-pick-up",
    ],
  },
  {
    slug: "pool-spa-debris-removal",
    name: "Pool & Spa Debris Removal",
    short: "Pool furniture, decks and equipment",
    blurb:
      "When a pool gets drained or filled in, the furniture and equipment have to go somewhere. That includes pumps, heaters and decking. We clear it all, including cut tile, plaster and metal fittings.",
    image: "/Assets/tile-1-residential.jpg",
    imageAlt: "Crew carrying large outdoor pool equipment away",
    includes: [
      "Pool and spa furniture and accessories",
      "Pumps, heaters, filters and plumbing",
      "Cut tile, plaster and coping debris",
      "Decking, planters and surrounds",
    ],
    related: ["hot-tub-removal", "yard-waste-removal", "construction-demolition-debris"],
  },
  {
    slug: "donation-pickup",
    name: "Donation Pickup",
    short: "Usable items to local charities",
    blurb:
      "Not everything has to go in the dumpster. If your furniture and appliances still work, we'll take them to local charities. That's instead of taking them to the dump.",
    image: "/Assets/balance-7.jpg",
    imageAlt: "Crew carrying usable household items out of a home",
    includes: [
      "Usable furniture, appliances and housewares",
      "We drop it off at a local charity",
      "A record of donated items where required",
      "Sorting alongside disposal on mixed loads",
    ],
    related: ["residential-junk-removal", "appliance-removal", "furniture-removal"],
  },
];

export const serviceCategories: { heading: string; slugs: string[] }[] = [
  {
    heading: "Residential",
    slugs: [
      "junk-removal-los-angeles",
      "residential-junk-removal",
      "total-junk-clean-outs",
      "furniture-removal",
      "mattress-removal",
      "sofa-removal",
      "couch-removal",
      "appliance-removal",
      "garage-clean-out",
      "attic-clean-out",
      "storage-clean-out",
      "hot-tub-removal",
      "yard-waste-removal",
      "christmas-tree-removal",
      "curbside-pick-up",
      "bulk-trash-removal",
      "downsizing-junk-removal",
    ],
  },
  {
    heading: "Commercial & Office",
    slugs: [
      "commercial-junk-removal",
      "office-junk-clean-outs",
      "office-furniture-removal",
      "warehouse-junk-removal",
      "dump-truck-live-load-packer",
      "donation-pickup",
    ],
  },
  {
    heading: "Clean-Outs",
    slugs: [
      "hoarder-junk-clean-out",
      "estate-clean-outs",
      "estate-home-junk-removal",
      "apartment-clean-out",
      "real-estate-junk-removal",
      "basement-flood-clean-out",
    ],
  },
  {
    heading: "Containers & Debris",
    slugs: [
      "dumpster-container-services",
      "construction-demolition-debris",
      "home-remodel-debris-removal",
      "pool-spa-debris-removal",
    ],
  },
];

export const primaryCities =
  "Los Angeles, Long Beach, Glendale, Pasadena and Santa Monica";

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function citySlug(city: string): string {
  return city
    .toLowerCase()
    .replace(/,\s*ca$/, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function cityName(city: string): string {
  return city.replace(/,\s*CA$/, "");
}
