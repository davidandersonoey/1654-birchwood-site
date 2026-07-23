// =========================================================================
//  1654 Birchwood Drive — property data
//
//  Particulars, agent, and the 17-room schedule below are transcribed from
//  the active MLS® listing (W12433505) at the time of build. Photography is
//  forthcoming — PHOTOS / FLOOR_PLANS point at the placeholder graphic at
//  /gallery/birchwood/placeholder.svg until the professional set is dropped
//  into /public/gallery/birchwood/ and /public/floorplans/.
// =========================================================================

export interface PropertyPhoto {
  src: string;
  alt: string;
  kind: "drone" | "interior" | "exterior";
}

export interface FloorPlan {
  src: string;
  label: string;
  caption: string;
}

const PLACEHOLDER_IMG = "/gallery/birchwood/placeholder.svg";

export const PROPERTY = {
  // ---- core identity ----
  shortName: "1654 Birchwood Drive",
  address: "1654 Birchwood Drive, Mississauga, Ontario, L5J 1T6, Canada",
  city: "Mississauga (Lorne Park)",
  region: "Mississauga, Ontario",
  postalCode: "L5J 1T6",
  country: "Canada",
  mlsNumber: "W12433505",
  community: "Lorne Park",
  municipality: "Mississauga",

  // GPS — re-pin to surveyed coordinates when available.
  gps: "43.5240° N, 79.6150° W",
  latitude: 43.524,
  longitude: -79.615,

  // ---- core facts ----
  bedrooms: "5 + 1",          // 5 above grade + 1 lower
  bathrooms: "5 + 1 Half",
  livingArea: "6,600+ sq ft", // finished, across three levels
  lotDimensions: "88.3 ft × 118.7 ft",
  yearBuilt: "Recently completed", // crafted over four years per listing
  propertyTaxes: "Available upon request",
  price: "$4,598,000",

  // numeric values for JSON-LD schema
  bedroomsNumeric: 6,
  bathroomsNumeric: 5,        // 5 full + 1 half — schema integer
  livingAreaSqftNumeric: 6600,
  priceNumeric: 4598000,

  // ---- positioning ----
  closingLine:
    "A contemporary zen residence in the heart of Lorne Park — modern brick and aluminum cladding, custom millwork, Control4 throughout, and over 6,600 square feet of finished living crafted across four years.",

  // ---- listing agent ----
  agent: {
    name: "David Anderson Oey",
    title: "Sales Representative",
    brokerage: "Harvey Kalles Real Estate Ltd., Brokerage",
    phone: "+1 (416) 441-2888",
    directPhone: "+1 (416) 908-9800",
    email: "david@davidoey.com",
    website: "https://davidoey.com",
  },

  // ---- media ----
  // The hero film is forthcoming. Until the final cut is delivered, this
  // path 404s harmlessly and the <video> falls back to the poster
  // (PHOTOS[0] → the placeholder graphic). Drop the compressed MP4 in
  // /public and update this path. Compress with HandBrake (RF 26 @ 1080p)
  // to stay under Vercel's 50 MB per-file limit before pushing.
  droneVideo: "/birchwood-tour.mp4",
  droneVideoIntroEndsAt: 0,
  droneVideoOutroStartsAt: undefined as number | undefined,

  // YouTube hero video — full-viewport autoplay background at the top
  // of the site. Source: https://www.youtube.com/watch?v=vkoY_Mk-Zv0
  heroYouTubeId: "vkoY_Mk-Zv0",

  // filmYouTubeId cleared — the Walkthrough chapter drops automatically
  // via its `PROPERTY.filmYouTubeId ? …` conditional. Set a video ID here
  // if you want to bring the chapter back.
  filmYouTubeId: undefined as string | undefined,
} as const;

// -------------------------------------------------------------------------
//  Photography — placeholders until the professional set is delivered.
//  PHOTOS[0] drives the hero poster; later entries feed the section-break
//  callouts. Replace src values with /gallery/birchwood/<file>.jpg as photos
//  come in.
// -------------------------------------------------------------------------
export const PHOTOS: PropertyPhoto[] = [
  { src: "/gallery/birchwood/001-1900x-photo.jpg", alt: "1654 Birchwood Drive — front elevation at twilight.", kind: "exterior" },
  { src: "/gallery/birchwood/002-1900x-photo.jpg", alt: "1654 Birchwood Drive — exterior approach.", kind: "exterior" },
  { src: "/gallery/birchwood/050-1900x-photo.jpg", alt: "1654 Birchwood Drive — interior.", kind: "interior" },
  { src: "/gallery/birchwood/118-1900x-photo.jpg", alt: "1654 Birchwood Drive — aerial view.", kind: "drone" },
];

// -------------------------------------------------------------------------
//  Floor plans — drop architectural plates into /public/floorplans/ and
//  list them here. Empty for now; the page shows a "forthcoming" note.
// -------------------------------------------------------------------------
export const FLOOR_PLANS: FloorPlan[] = [];

// -------------------------------------------------------------------------
//  Property "chapters" — the 17 rooms catalogued in the MLS® room schedule
//  for W12433505, with dimensions in metric + imperial and short editorial
//  copy drawn from the listing description.
// -------------------------------------------------------------------------
export interface RoomCard {
  number?: string;
  title: string;
  body: string;
  photoIndex?: number;
  imageSrc?: string;
  meta?: string;
}

export const ROOMS: RoomCard[] = [
  {
    title: "The Foyer",
    body:
      "A dramatic twenty-foot arrival framed by an illuminated glass pivot door — the first room sets the grammar for the residence: floating staircase, architectural feature panel walls, light-filled volumes, and the custom millwork that runs the length of the home.",
    imageSrc: "/gallery/birchwood/012-1900x-photo.jpg",
  },
  {
    title: "The Living Room",
    body:
      "A generous principal room on the main level — refined custom cabinetry, automated blinds, double-height door entryway, and the considered restraint that defines the rest of the house. Sized for entertaining and a quiet evening in equal measure.",
    imageSrc: "/gallery/birchwood/image1.jpeg",
  },
  {
    title: "The Dining Room",
    body:
      "Matched in scale to the living room and detailed with the same architectural language — custom millwork, overlooking the living room, with built-in cabinetry for convenience. Set for a long table of ten with room to spare.",
    imageSrc: "/gallery/birchwood/017-1900x-photo.jpg",
  },
  {
    title: "The Family Room",
    body:
      "A modern, comfort-first room anchored by a striking two-sided linear fireplace that opens between the family room and the principal floor. Twenty-one feet across, open to the kitchen, and built to live in.",
    imageSrc: "/gallery/birchwood/025-1900x-photo.jpg",
  },
  {
    title: "The Chef’s Kitchen",
    body:
      "Twenty-two feet across, fitted with the full Miele appliance suite and a PITT gas counter range — the cooktop set directly into the stone. A separate catering kitchen handles the heavier work; the main kitchen stays the room the family lives in.",
    imageSrc: "/gallery/birchwood/031-1900x-photo.jpg",
  },
  {
    title: "Secondary Kitchen Prep Room",
    body:
      "Designed for gracious entertaining, the secondary kitchen — separate sink, range hood, stove, and cabinetry — is perfect for preparation and additional cooking options, overlooking the landscaped pool-sized rear yard. The catering kitchen handles the heavier work; the main kitchen stays the room the family lives in.",
    imageSrc: "/gallery/birchwood/036-1900x-photo.jpg",
  },
  {
    title: "The Executive Office",
    body:
      "A bespoke main-floor office with custom millwork, automated blinds, and windows framed onto the gorgeous treetops. The proper home office — quiet, private, and built for the long workday — sits next to a two-piece powder room.",
    imageSrc: "/gallery/birchwood/041-1900x-photo.jpg",
  },
  {
    title: "The Mud Room",
    body:
      "The unromantic working room that makes the rest of the house easier to live in — dog / pet wash, custom millwork and refined cabinetry, soft-close pocket sliding doors, and direct flow to the garage and the principal floor.",
    imageSrc: "/gallery/birchwood/044-1900x-photo.jpg",
  },
  {
    title: "The Primary Suite",
    body:
      "A private retreat at the quiet end of the second floor — a spa-inspired ensuite, custom walnut-and-glass walk-in closets, and a cozy lounge anchored by a three-sided fireplace that throws ambient light across the room.",
    imageSrc: "/gallery/birchwood/065-1900x-photo.jpg",
  },
  {
    title: "Primary Ensuite",
    body:
      "A spa-inspired ensuite off the primary bedroom — walnut millwork, a freestanding soaker bathtub set into the light, a walk-in glass shower, and the same considered detailing that runs the length of the residence.",
    imageSrc: "/gallery/birchwood/073-1900x-photo.jpg",
  },
  {
    title: "Primary Bedroom Balcony",
    body:
      "A private balcony directly off the primary bedroom — finished with artificial turf and glass banisters. Treetop views over the landscaped grounds, and a quiet space to open the day with a coffee before the household stirs.",
    imageSrc: "/gallery/birchwood/067-1900x-photo.jpg",
  },
  {
    title: "Bedroom Two",
    body:
      "A generous secondary bedroom with its own ensuite bath and built-in cabinetry — the kind of room that doesn’t read as secondary at all.",
    imageSrc: "/gallery/birchwood/076-1900x-photo.jpg",
  },
  {
    title: "Bedroom Three",
    body:
      "A semi-ensuite three-piece bathroom finishes the large third bedroom, overlooking the rear fenced yard.",
    imageSrc: "/gallery/birchwood/082-1900x-photo.jpg",
  },
  {
    title: "Bedroom Four · Flex Suite",
    body:
      "A flexible fourth bedroom suite designed to read as a nursery, a study, a guest room, or a creative space — built-in cabinetry, ensuite access, and the room to be whatever the household needs it to be.",
    imageSrc: "/gallery/birchwood/091-1900x-photo.jpg",
  },
  {
    title: "The Theatre",
    body:
      "A fifteen-seat soundproof home theatre on the lower level — the showpiece of the entertainment wing. Built for film nights, sports finals, and the household weekends that don’t have to leave home.",
    imageSrc: "/gallery/birchwood/108-1900x-photo.jpg",
  },
  {
    title: "The Recreation Room",
    body:
      "An open-concept games room anchored by a sleek wet bar and looking out onto the landscaped grounds — the casual room of the lower level.",
    imageSrc: "/gallery/birchwood/100-1900x-photo.jpg",
  },
  {
    title: "Finished Lower Level Walkout",
    body:
      "A finished lower level that opens directly onto the landscaped grounds — the entertainment and wellness floor blurs the line between inside and out, with a working catering kitchen at hand for hosting.",
    imageSrc: "/gallery/birchwood/102-1900x-photo.jpg",
  },
  {
    title: "The Exercise Room",
    body:
      "A dedicated, open-concept gym — twenty feet across, designed to hold a full home-fitness set-up with room to move. The wellness anchor of the lower level.",
    imageSrc: "/gallery/birchwood/113-1900x-photo.jpg",
  },
  {
    title: "Bedroom Six",
    body:
      "A generously proportioned lower-level bedroom with its own spa-like ensuite and direct walkout to the landscaped grounds — designed as a nanny suite or extended-stay guest room, with real privacy from the main household.",
    imageSrc: "/gallery/birchwood/115-1900x-photo.jpg",
  },
  {
    title: "The Wine Cantina",
    body:
      "A glass-walled, temperature-controlled wine cantina set into the lower level — both functional storage and a visual centrepiece of the entertaining floor.",
    imageSrc: "/gallery/birchwood/110-1900x-photo.jpg",
  },
];

// -------------------------------------------------------------------------
//  Highlight features pulled from the listing description — surfaced in
//  the Particulars block as a short, scannable list of what makes this
//  residence specific.
// -------------------------------------------------------------------------
export const FEATURES = {
  exterior: [
    "Modern brick and aluminum cladding",
    "Beautifully landscaped grounds with irrigation",
    "Architectural exterior lighting",
    "Wooded, flat site",
  ],
  interior: [
    "20-foot foyer with illuminated glass pivot door",
    "Floating staircase",
    "Architectural feature-panel walls",
    "Custom millwork throughout",
    "Heated floors and skylights",
    "Two-sided linear fireplace · main floor",
    "Three-sided fireplace · primary lounge",
    "Miele appliance suite",
    "PITT gas counter range",
    "Separate catering kitchen",
    "Custom walnut-and-glass walk-in closets",
    "Carpet free",
  ],
  security: [
    "Control4 smart-home automation",
  ],
};
