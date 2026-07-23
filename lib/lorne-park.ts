// =========================================================================
//  Lorne Park, Mississauga — neighbourhood content
//
//  Copy is written in a travel-magazine register and positions Lorne Park
//  alongside Oakville and the Bridle Path as one of the GTA's most
//  prestigious addresses. Parks, schools, enclaves and amenities listed
//  below are real Lorne Park / Clarkson / Port Credit fixtures; specifics
//  (addresses, current operators, hours, rankings) should be re-verified
//  before publication.
//
//  Neighbourhood photography is not yet shot — cards intentionally omit
//  `imageSrc`, so the page renders a tasteful placeholder frame. Drop
//  images into /public/gallery/jalna/neighborhood/ and add the `imageSrc`
//  field to switch a card from placeholder to photo.
// =========================================================================

export interface NeighborhoodCard {
  title: string;
  body: string;
  /** Optional small label above the title (e.g. "Lakeshore Rd W") */
  kicker?: string;
  /** Lorne Park photography — served from /public/gallery/jalna/neighborhood/ */
  imageSrc?: string;
}

export const LORNE_PARK_OVERVIEW = {
  kicker: "Lorne Park",
  headline: "Mississauga's most prestigious address.",
  italic:
    "South of the QEW along the shore of Lake Ontario — estate lots, a canopy of old oaks, and the quiet confidence of a neighbourhood that ranks with Oakville and the Bridle Path.",
};

/**
 * A brief history of Lorne Park — rendered as a horizontal-scroll rail
 * at the top of the neighbourhood chapter. Dates and attributions are
 * drawn from publicly available local histories and should be
 * re-verified before publication.
 */
export interface HistoryCard {
  kicker?: string;
  title: string;
  body: string;
  /** Photo / placeholder served from /public/gallery/birchwood/neighborhood/ */
  imageSrc?: string;
}

export const HISTORY_CARDS: HistoryCard[] = [
  {
    kicker: "01 · 1879",
    title: "A Governor General's name",
    body:
      "Lorne Park takes its name from the Marquess of Lorne, Canada's Governor General from 1878 to 1883, and his wife Princess Louise, a daughter of Queen Victoria. The name lent a vice-regal cachet to a stretch of Lake Ontario shoreline that was, at the time, still farmland and forest.",
    imageSrc: "/gallery/birchwood/neighborhood/history-marquess-of-lorne.jpeg"
  },
  {
    kicker: "02 · 1880s",
    title: "The lakeside resort",
    body:
      "For a generation Lorne Park was a summer resort. Steamers ran from Toronto to a wharf on the bluffs, delivering day-trippers to picnic grounds, a dance pavilion, and a hotel above the water. The lake, the shade, and the escape from the city were the draw then — as they remain now.",
    imageSrc: "/gallery/birchwood/neighborhood/history-lakeside-resort.jpeg"
  },
  {
    kicker: "03 · The Colony",
    title: "Lorne Park Estates",
    body:
      "The old resort lands became Lorne Park Estates — a private cottage colony where residents collectively owned the roads, the forest, and the beaches. That tradition of private stewardship survives: the Estates remain one of the only communities of their kind in the GTA, governed by their own residents' association.",
    imageSrc: "/gallery/birchwood/neighborhood/history-lorne-park-estates.jpeg"
  },
  {
    kicker: "04 · Postwar",
    title: "The estate streets",
    body:
      "As Mississauga grew around it, Lorne Park kept its trees and its scale. The picnic grounds gave way to estate-sized residential lots beneath a canopy of mature oaks, and the neighbourhood settled into its present form: leafy, low-density, and quietly among the most coveted addresses west of Toronto.",
    imageSrc: "/gallery/birchwood/neighborhood/history-estate-streets.jpeg"
  },
];

// =========================================================================
//  The Enclaves — Lorne Park's distinct micro-communities.
// =========================================================================
export const ENCLAVES: NeighborhoodCard[] = [
  {
    kicker: "The Estate Streets",
    title: "Whiteoaks of Jalna",
    body:
      "The historic heart of Lorne Park — estate-sized lots, many with frontages of a hundred feet and more, set beneath some of the oldest oaks in the neighbourhood. Quiet, established, and unhurried — the address buyers picture when they picture Lorne Park.",
    imageSrc: "/gallery/birchwood/neighborhood/enclaves-whiteoaks-of-jalna.jpeg"
  },
  {
    kicker: "Modern Family",
    title: "Watercolours",
    body:
      "A newer pocket built out in the 2000s — modern family homes on fifty- to sixty-foot lots, drawing younger families into the catchment for Lorne Park's schools without leaving the neighbourhood's leafy character behind.",
    imageSrc: "/gallery/birchwood/neighborhood/enclaves-watercolours.jpeg"
  },
  {
    kicker: "The Private Colony",
    title: "Lorne Park Estates",
    body:
      "An ultra-exclusive private lakefront community where homeowners collectively own and manage the roads, the forests, and the beaches. A gated-feeling enclave without a gate — and one of the most secretive luxury addresses on the Mississauga shoreline.",
    imageSrc: "/gallery/birchwood/neighborhood/enclaves-lorne-park-estates.jpeg"
  },
];

export const PARKS: NeighborhoodCard[] = [
  {
    kicker: "1180 Lakeshore Rd W",
    title: "Jack Darling Memorial Park",
    body:
      "One of Mississauga's premier waterfront parks — a broad beach, vast picnic lawns, a splash pad, and one of the largest fenced off-leash dog parks in the region, all opening onto the wide blue of Lake Ontario. The neighbourhood's front yard on the water.",
    imageSrc: "/gallery/birchwood/neighborhood/parks-jack-darling.jpeg"
  },
  {
    kicker: "660 Bexhill Rd",
    title: "Rattray Marsh Conservation Area",
    body:
      "The last remaining lakefront marsh between Toronto and Burlington — a protected wetland threaded with raised wooden boardwalks that wind through forest and reed. Heron, kingfisher, and a stillness that feels an hour from the city rather than minutes. The neighbourhood's wild edge.",
    imageSrc: "/gallery/birchwood/neighborhood/parks-rattray-marsh.jpeg"
  },
  {
    kicker: "660 Lakeshore Rd W",
    title: "Brueckner Rhododendron Gardens",
    body:
      "A serene, pet-friendly botanical garden of rhododendrons and azaleas, beautifully manicured and quietly tucked against the Lorne Park shoreline. At its May peak it is one of the most photographed spots on the lake; the rest of the year it is simply a place to walk.",
    imageSrc: "/gallery/birchwood/neighborhood/parks-brueckner.jpeg"
  },
  {
    kicker: "804 Lakeshore Rd W",
    title: "Richard's Memorial Park",
    body:
      "A quiet, scenic waterfront park — paved paths, open lawns, a gazebo, and direct access to a rocky stretch of Lake Ontario beach. Smaller and calmer than Jack Darling, and a local favourite for an evening walk to the water.",
    imageSrc: "/gallery/birchwood/neighborhood/parks-richards-memorial.jpeg"
  },
  {
    kicker: "1070 Queen St W",
    title: "Lorne Park Prairie",
    body:
      "A rare and protected tallgrass-prairie ecosystem in the middle of the city — home to native pollinators, including uncommon bees and butterflies. An unexpected, educational pocket of wilderness that few neighbourhoods can claim.",
    imageSrc: "/gallery/birchwood/neighborhood/parks-lorne-park-prairie.jpeg"
  },
  {
    kicker: "Linear Park",
    title: "Lornewood Creek Trail",
    body:
      "A peaceful, winding trail that follows Lornewood Creek through the residential streets — deep shade, the sound of water, and a natural escape tucked directly into the neighbourhood. The everyday walk that residents quietly treasure most.",
    imageSrc: "/gallery/birchwood/neighborhood/parks-lornewood-creek.jpeg"
  },
];

export const RESTAURANTS: NeighborhoodCard[] = [
  {
    kicker: "Lakeshore at Clarkson",
    title: "Clarkson Village",
    body:
      "Lorne Park's everyday dining village — cafés, bistros, and neighbourhood restaurants gathered around the Lakeshore-and-Clarkson core, a short drive or a long walk from the estate streets. The morning coffee, the weeknight dinner, the Saturday brunch.",
    imageSrc: "/gallery/birchwood/neighborhood/tables-clarkson-village.jpeg"
  },
  {
    kicker: "A short drive east",
    title: "Port Credit",
    body:
      "Mississauga's waterfront dining destination — patios along the Credit River, seafood by the marina, and a restaurant strip that has become one of the lakeshore's genuine destinations. Ten minutes from Lorne Park, and the neighbourhood's default for a night out.",
    imageSrc: "/gallery/birchwood/neighborhood/tables-port-credit.jpeg"
  },
  {
    kicker: "The Lakeshore",
    title: "Lakeshore Road West",
    body:
      "The ribbon of restaurants, cafés, and independent tables that traces the lake from Clarkson toward Port Credit — the corridor that gives Lorne Park its everyday food culture, from quick espresso to a considered dinner.",
    imageSrc: "/gallery/birchwood/neighborhood/tables-lakeshore-west.jpeg"
  },
];

export const SHOPPING: NeighborhoodCard[] = [
  {
    kicker: "Lakeshore at Southdown",
    title: "Clarkson Crossing",
    body:
      "The neighbourhood's everyday plaza — grocer, pharmacy, bank, and the small-format retail that keeps the estate streets supplied without a trip to the highway. Recently refreshed, and the closest thing Lorne Park has to a high street.",
    imageSrc: "/gallery/birchwood/neighborhood/shops-clarkson-crossing.jpeg"
  },
  {
    kicker: "Lakeshore East",
    title: "Port Credit Village",
    body:
      "Boutique shopping and independent retail along Lakeshore Road East, wrapped around the Credit River waterfront. The place to browse on a Saturday before lunch on a patio.",
    imageSrc: "/gallery/birchwood/neighborhood/shops-port-credit-village.jpeg"
  },
  {
    kicker: "A short drive",
    title: "Sherway & Square One",
    body:
      "Two of the GTA's major shopping destinations sit within a short drive — Sherway Gardens to the east and Square One to the north — putting the full range of luxury and everyday retail within easy reach of the neighbourhood.",
    imageSrc: "/gallery/birchwood/neighborhood/shops-sherway-square-one.jpeg"
  },
];

export const SCHOOLS: NeighborhoodCard[] = [
  {
    kicker: "Public · Secondary",
    title: "Lorne Park Secondary School",
    body:
      "Widely considered one of the top public high schools in the region — known for academic strength, athletic excellence, and an Extended French programme. The catchment is one of the primary drivers of real-estate value across the neighbourhood, and a chief reason families move in and stay.",
    imageSrc: "/gallery/birchwood/neighborhood/schools-lorne-park-secondary.jpeg"
  },
  {
    kicker: "Public · Elementary",
    title: "Whiteoaks Public School",
    body:
      "The highly regarded elementary school serving the Whiteoaks-of-Jalna estate streets — a short walk for many of the enclave's families, and a feeder into the Lorne Park secondary catchment.",
    imageSrc: "/gallery/birchwood/neighborhood/schools-whiteoaks.jpeg"
  },
  {
    kicker: "Public · Elementary",
    title: "Lorne Park Public School",
    body:
      "A long-established, highly rated neighbourhood elementary school — one of the trio of public elementaries that anchor family life across Lorne Park.",
    imageSrc: "/gallery/birchwood/neighborhood/schools-lorne-park-public.jpeg"
  },
  {
    kicker: "Public · Elementary",
    title: "Tecumseh Public School",
    body:
      "Another of the area's sought-after public elementaries, rounding out a school district that consistently ranks among the strongest in Mississauga.",
    imageSrc: "/gallery/birchwood/neighborhood/schools-tecumseh.jpeg"
  },
  {
    kicker: "Independent",
    title: "Private-School Reach",
    body:
      "Beyond the public catchment, Lorne Park sits within easy reach of independent and private schools across Mississauga and neighbouring Oakville — giving families the full spectrum of choice without a long commute.",
    imageSrc: "/gallery/birchwood/neighborhood/schools-private-reach.jpeg"
  },
];

export const RECREATION: NeighborhoodCard[] = [
  {
    kicker: "Lake Ontario",
    title: "The Waterfront Trail",
    body:
      "The multi-use trail that runs the Lorne Park shoreline — connecting the beaches, marshes, and parks in a continuous ribbon along the lake. Running before work, cycling on the weekend, a long walk at dusk.",
    imageSrc: "/gallery/birchwood/neighborhood/recreation-waterfront-trail.jpeg"
  },
  {
    kicker: "Private clubs",
    title: "Golf & Country Clubs",
    body:
      "Some of the region's most established private golf and country clubs sit within a short drive of the neighbourhood — part of the quiet infrastructure of an address at this level, and a draw for the families who settle here.",
    imageSrc: "/gallery/birchwood/neighborhood/recreation-golf-country.jpeg"
  },
  {
    kicker: "On the water",
    title: "Marinas & Lake Access",
    body:
      "The Port Credit and Lakefront harbours put boating, sailing, and the open lake within minutes of home — a working waterfront culture that comes with living this close to Lake Ontario.",
    imageSrc: "/gallery/birchwood/neighborhood/recreation-marinas.jpeg"
  },
  {
    kicker: "Community",
    title: "Clarkson & Lorne Park Recreation",
    body:
      "Community centres, arenas, and library branches at Clarkson and across south Mississauga carry the neighbourhood's year-round programming — the unglamorous civic backbone that makes a family neighbourhood work.",
    imageSrc: "/gallery/birchwood/neighborhood/recreation-clarkson.jpeg"
  },
];

export const CONNECTIVITY: NeighborhoodCard[] = [
  {
    kicker: "Lakeshore West line",
    title: "Clarkson GO Station",
    body:
      "A straightforward GO commute to Union Station and downtown Toronto on the Lakeshore West line — one of the busiest and most frequent services on the network, minutes from the estate streets.",
    imageSrc: "/gallery/birchwood/neighborhood/connectivity-clarkson-go.jpeg"
  },
  {
    kicker: "Lakeshore West line",
    title: "Port Credit GO Station",
    body:
      "A second Lakeshore West option to the east, pairing the rail commute with Port Credit's waterfront village — a flexible second door to downtown Toronto.",
    imageSrc: "/gallery/birchwood/neighborhood/connectivity-port-credit-go.jpeg"
  },
  {
    kicker: "By car",
    title: "QEW & Lakeshore Road",
    body:
      "Immediate access to the QEW and Lakeshore Road makes the drive to downtown Toronto, Oakville, or Port Credit quick and predictable — the cottage-in-the-city balance of seclusion and connection.",
    imageSrc: "/gallery/birchwood/neighborhood/connectivity-qew-lakeshore.jpeg"
  },
  {
    kicker: "The airport",
    title: "Toronto Pearson",
    body:
      "Canada's largest international airport sits roughly twenty to twenty-five minutes north — a quiet advantage for the families and executives this neighbourhood tends to attract.",
    imageSrc: "/gallery/birchwood/neighborhood/connectivity-pearson.jpeg"
  },
];

/**
 * WORSHIP — kept as an empty export so the page import stays stable.
 * Populate with verified local parishes/congregations before publication
 * if a places-of-worship rail is wanted.
 */
export const WORSHIP: NeighborhoodCard[] = [];

// =========================================================================
//  The Profile — neighbourhood snapshot.
//  Figures are drawn from publicly available neighbourhood profiles and
//  approximate recent data, and are intended as a snapshot rather than a
//  current census reading. Re-verify before publication.
// =========================================================================
export interface ProfileStat {
  label: string;
  value: string;
}

export const PROFILE = {
  kicker: "The Profile",
  headline: "Who lives here.",
  intro:
    "Lorne Park is, by most measures, one of Mississauga's most settled and affluent neighbourhoods — long owner tenures, estate-scaled lots, high household incomes, and a demographic that skews family and established. The figures below are drawn from publicly available neighbourhood profiles and are intended as a recent snapshot rather than a current census reading.",
  stats: [
    { label: "Owner-Occupied Homes", value: "~90%+" },
    { label: "Housing Stock", value: "Detached estates" },
    { label: "Typical Frontages", value: "50 – 100+ ft" },
    { label: "School Catchment", value: "Top public ranking" },
    { label: "Shoreline", value: "Lake Ontario" },
    { label: "Commute", value: "GO + QEW to Toronto" },
  ] as ProfileStat[],
  body: [
    "Lorne Park's profile is unusually stable for a GTA neighbourhood — owner-occupancy is high, turnover is low, and demand sits consistently above the supply of estate homes. It is the kind of address families move up into and rarely leave.",
  ],
};

// =========================================================================
//  Curated YouTube videos about Lorne Park.
//  Use the embed URL pattern in the component.
// =========================================================================
export interface NeighborhoodVideo {
  id: string;
  title: string;
  caption?: string;
}

export const NEIGHBORHOOD_VIDEOS: NeighborhoodVideo[] = [
  {
    id: "bynrSecO2PQ",
    title: "Lorne Park · A Neighbourhood Tour",
    caption: "The estate streets, the schools, and the shoreline.",
  },
  {
    id: "bwgSVlUHM10",
    title: "Lorne Park · By the Lake",
    caption: "A short film along the Lorne Park waterfront.",
  },
  {
    id: "qT-6f86_5bU",
    title: "Lorne Park · Along the Lakeshore",
    caption: "The village strip, from Clarkson to Port Credit.",
  },
];

// =========================================================================
//  Notable mentions / recognition. Empty for now — the page hides this
//  section when the array is empty. Populate with verified press features
//  (with links) before publication.
// =========================================================================
export interface PressMention {
  outlet: string;
  title: string;
  body: string;
  byline?: string;
  linkUrl?: string;
  linkLabel?: string;
  imageSrc?: string;
}

export const PRESS_MENTIONS: PressMention[] = [];

// =========================================================================
//  Reference resources — the authoritative local links, rendered as a
//  small row beneath "Plan Your Visit".
// =========================================================================
export interface ResourceLink {
  label: string;
  url: string;
  note?: string;
}

export const RESOURCES: ResourceLink[] = [
  {
    label: "Lorne Park Estates Association",
    url: "https://www.lpea.ca/",
    note: "The private lakefront colony's residents' association.",
  },
  {
    label: "City of Mississauga · Park Finder",
    url: "https://www.mississauga.ca/events-and-attractions/parks/find-a-park/",
    note: "Locations, amenities, and parking for every city green space.",
  },
  {
    label: "Four Best Restaurants in Lorne Park",
    url: "https://ppreteam.com/blog/4-best-restaurants-in-lorne-park",
    note: "A local guide to the area's tables.",
  },
  {
    label: "Lorne Park · Overview",
    url: "https://en.wikipedia.org/wiki/Lorne_Park",
    note: "Background and history of the neighbourhood.",
  },
];

// =========================================================================
//  Plan Your Visit CTA — links out to the City of Mississauga Park Finder.
// =========================================================================
export const PLAN_YOUR_VISIT = {
  kicker: "Plan Your Visit",
  headline: "A neighbourhood by the lake.",
  body:
    "Lorne Park sits on the Lake Ontario shore in southwest Mississauga, south of the QEW — twenty-five minutes from downtown Toronto, minutes from the beaches and conservation lands that define it. Walk the marsh boardwalks, the rhododendron gardens, and the waterfront trail; the neighbourhood rewards the visit.",
  ctaLabel: "Explore Mississauga's Parks →",
  ctaUrl: "https://www.mississauga.ca/events-and-attractions/parks/find-a-park/",
};
