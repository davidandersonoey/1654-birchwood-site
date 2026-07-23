// =========================================================================
//  Sunnylea, Etobicoke — neighborhood content
//
//  Copy is written in a travel-magazine register. Parks, restaurants,
//  shops and institutions listed below are real Sunnylea / Kingsway
//  fixtures; specifics (hours, addresses, current operators) should be
//  re-verified before publication. Photography lives in
//  /public/gallery/ballacaine/neighborhood/ — each card references its
//  file via the `imageSrc` field. Filenames are URL-encoded so spaces
//  resolve cleanly through Next's static asset pipeline.
// =========================================================================

export interface NeighborhoodCard {
  title: string;
  body: string;
  /** Optional small label above the title (e.g. "Bloor West") */
  kicker?: string;
  /** Sunnylea photography — served from /public/gallery/ballacaine/neighborhood/ */
  imageSrc?: string;
}

export const SUNNYLEA_OVERVIEW = {
  kicker: "Sunnylea",
  headline: "A quiet village inside the city.",
  italic:
    "Twenty minutes or so by subway from the financial district, family nurturing, and a world apart.",
};

/**
 * A brief history of Sunnylea — rendered as a horizontal-scroll rail
 * at the top of the neighbourhood chapter. Summarised from the
 * Etobicoke Historical Society's account of the area.
 */
export interface HistoryCard {
  kicker?: string;
  title: string;
  body: string;
}

export const HISTORY_CARDS: HistoryCard[] = [
  {
    kicker: "01 · 1796",
    title: "The King's Mill Reserve",
    body:
      "Most of present-day Sunnylea was set aside in 1796 by Lieutenant Governor John Graves Simcoe as the King's Mill Reserve — Crown land that supplied timber to the British shipyard on the Humber. The government leased it out for decades, then began selling parcels to settlers around 1830. By the late nineteenth century the area was a patchwork of market gardens, five to twenty-five acres apiece, growing vegetables and tree fruit.",
  },
  {
    kicker: "02 · 1907",
    title: "A child names the village",
    body:
      "Sunnylea took its name from a child. In 1907 a two-room schoolhouse opened on Prince Edward Drive, and the trustees ran a contest to name it. Edna Whitworth, age seven, won five dollars with her suggestion: Sunnylea. Within a few years the surrounding farms had taken the name for themselves.",
  },
  {
    kicker: "03 · 1943",
    title: "Parkin's modernist school",
    body:
      "By 1941 the original school was overcrowded. A new Sunnylea Public School opened in 1943 at 35 Glenroy Avenue — designed by Toronto architect John B. Parkin, modelled on Chicago's Crow Island School. Single storey, north-south orientation, oversized classroom windows, separate exterior doors. It was Parkin's first major commission and became the prototype for more than two hundred modernist schools across Ontario.",
  },
  {
    kicker: "04 · The Thompsons",
    title: "Rose Bank & Spring Bank",
    body:
      "Among the earliest settlers was Alexander Thompson, who received 200 acres in 1803 for his service in the American Revolution. His farm — Rose Bank to the north, Spring Bank to the south — ran from Bloor Street to Leland Avenue. The 1861 brick farmhouse still stands at 7 Meadowcrest Road, with its original oak door, cherry banisters, and ten-foot ceilings. The Thompsons became known for their orchards; Orchard Crescent is named for them.",
  },
];

export const PARKS: NeighborhoodCard[] = [
  {
    kicker: "Humber River",
    title: "Humber Marshes Park",
    body:
      "A long, low ribbon of wetland off Stephen Drive where the Humber widens before it reaches the lake. Heron, kingfisher, the occasional fox. Boardwalks and unpaved paths run the length of the marsh, connecting north toward the Old Mill and south toward the Humber Bay. The most overlooked park in the west end.",
    imageSrc: "/gallery/ballacaine/neighborhood/Humber%20Marshes%20Park.jpg",
  },
  {
    kicker: "Old Mill",
    title: "King's Mill Park",
    body:
      "The Old Mill ruins on one side, the river on the other, and a footbridge that delivers you onto the Etienne Brûlé trail. In October the maples along the Humber turn so completely that the water reflects the colour. Walk south from here and you can follow the river to the lake without crossing a road.",
    imageSrc: "/gallery/ballacaine/neighborhood/Kings%20Mill%20Park.jpg",
  },
  {
    kicker: "Village green",
    title: "Sunnylea Park",
    body:
      "The neighborhood's small central park — a playground, a few benches, a stretch of grass that does double duty as a skating rink in winter. Most of Sunnylea's children have learned to ride a bicycle on the path that loops it.",
    imageSrc: "/gallery/ballacaine/neighborhood/Sunnylea%20Park.jpg",
  },
  {
    kicker: "West boundary",
    title: "Mimico Creek",
    body:
      "The linear park that traces the creek along the neighborhood's eastern edge — a corridor of dog-walkers in the morning, cyclists at lunch, and a surprising amount of wildlife given the proximity to the Queensway. The path connects north toward the Kingsway and south toward Humber Bay.",
    imageSrc: "/gallery/ballacaine/neighborhood/Mimico%20Creek.jpg",
  },
  {
    kicker: "South of Berry",
    title: "Park Lawn Cemetery & Grounds",
    body:
      "Not a park, strictly, but it functions as one — a hundred and fifty acres of mature trees, winding lanes, and the kind of stillness that residents walk through on Sunday mornings. The northern gate opens onto Sunnylea.",
    imageSrc: "/gallery/ballacaine/neighborhood/Park%20Lawn%20Cemetery.jpg",
  },
];

export const RESTAURANTS: NeighborhoodCard[] = [
  {
    kicker: "The Kingsway",
    title: "ViBo Ristorante",
    body:
      "A Bloor West fixture for decades. White tablecloths, a wood-fired oven, and the kind of room where the staff know the regulars by their drink order. The veal and the homemade pasta have not changed in twenty years, which is precisely the point.",
    imageSrc: "/gallery/ballacaine/neighborhood/vibo.jpg",
  },
  {
    kicker: "The Kingsway",
    title: "Merlot French Bistro",
    body:
      "Small, intimate, and quietly serious about the cooking. Steak frites, duck confit, a short and considered wine list. One of the few places on the strip where a two-person dinner can stretch comfortably to three hours.",
    imageSrc: "/gallery/ballacaine/neighborhood/Merlot%20French.jpg",
  },
  {
    kicker: "Royal York",
    title: "Harry's Steak House",
    body:
      "A long-standing Royal York steakhouse with white tablecloths, a proper bar, and the kind of room that has been quietly serving Etobicoke's better dinners for decades. Aged steaks, a deep wine list, and a regular crowd that books the same Friday corner table week after week.",
    imageSrc: "/gallery/ballacaine/neighborhood/Harrys%20steak%20house.jpg",
  },
  {
    kicker: "The Kingsway",
    title: "Momiji Sushi",
    body:
      "A long-running Japanese room on the Kingsway — a sushi counter, a quiet dining room, and a regulars' trade that has settled around the chef's omakase. The kind of place where lunch service is unhurried and the fish arrives the same morning.",
    imageSrc: "/gallery/ballacaine/neighborhood/Momiji%20sushi.jpg",
  },
  {
    kicker: "The Kingsway",
    title: "Starbucks",
    body:
      "The Kingsway's morning anchor. The neighborhood's first stop on the school run, the after-school pickup, and the Saturday-morning paper. Treated, like Swiss Chalet, as a neighborhood institution rather than a chain — most of the regulars know the baristas by name.",
    imageSrc: "/gallery/ballacaine/neighborhood/Starbucks.jpg",
  },
  {
    kicker: "Royal York at The Queensway",
    title: "Swiss Chalet",
    body:
      "Generations of children have had birthday quarter-chicken dinners here; generations of parents have ordered the same after a Saturday afternoon at the park. The room is bright, the rotisserie is honest, and there is a sauce that has somehow outlasted three decades of food trends.",
    imageSrc: "/gallery/ballacaine/neighborhood/Swiss%20Chalet.jpg",
  },
];

export const PUBS: NeighborhoodCard[] = [
  {
    kicker: "Royal York at Bloor",
    title: "The Crooked Cue",
    body:
      "The neighborhood's pub. Pool tables in the back, a long bar at the front, the game on every screen that matters. The kind of place where a Tuesday evening is as busy as a Friday, because half the room walked here from their own street.",
    imageSrc: "/gallery/ballacaine/neighborhood/the-crooked-cue.jpg",
  },
  {
    kicker: "The Kingsway",
    title: "The Old Sod",
    body:
      "An honest Irish pub with a fireplace in the back room. Guinness poured correctly, a short menu of pies and sandwiches, and a quiet trade in Sunday afternoons that turn into Sunday evenings without anyone noticing.",
    imageSrc: "/gallery/ballacaine/neighborhood/The%20Old%20Sod.jpg",
  },
  {
    kicker: "Bloor West",
    title: "The Local on Bloor",
    body:
      "A working neighborhood bar, the way they used to be. A few taps, a few tables, and a regular crowd that has been drinking together long enough that the staff put down the right glass when you walk in.",
    imageSrc: "/gallery/ballacaine/neighborhood/The%20Local.jpg",
  },
];

export const SHOPPING: NeighborhoodCard[] = [
  {
    kicker: "Bloor West",
    title: "The Shops of the Kingsway",
    body:
      "The stretch of Bloor between Royal York and Prince Edward — boutique retail, independent cafes, a butcher, a fishmonger, two florists, a small bookseller, and a Saturday morning rhythm that the rest of the city quietly envies. The closest thing west Toronto has to a village high street.",
    imageSrc: "/gallery/ballacaine/neighborhood/Shops%20of%20the%20kingsway.jpg",
  },
  {
    kicker: "Royal York at The Kingsway",
    title: "Humbertown Plaza",
    body:
      "The neighborhood's everyday plaza — a grocer, a pharmacy, a bank, a wine shop, a coffee bar. Recently renovated and lightened, but the trade is the same as it was thirty years ago: residents walking in with cloth bags, leaving with the week's dinner.",
    imageSrc: "/gallery/ballacaine/neighborhood/Humbertown%20Plaza.jpg",
  },
  {
    kicker: "East of Jane",
    title: "Bloor West Village",
    body:
      "The longer commercial run east of Jane — bakeries, a Polish deli or two, a Saturday produce trade, and the kind of independent retail that has resisted the city's chain-store creep. A twenty-minute walk from Sunnylea, or three subway stops.",
    imageSrc: "/gallery/ballacaine/neighborhood/Bloor%20West.jpg",
  },
];

export const RECREATION: NeighborhoodCard[] = [
  {
    kicker: "Park Lawn",
    title: "Park Lawn Park",
    body:
      "The neighborhood's working sports park — baseball diamonds in summer, soccer pitches in fall, a community programming calendar that has been running for as long as anyone can remember. The diamonds are floodlit; the games run late.",
    imageSrc: "/gallery/ballacaine/neighborhood/Park%20Lawn%20Park.jpg",
  },
  {
    kicker: "Community",
    title: "Fairfield Seniors Centre",
    body:
      "A quietly central institution. Lectures, bridge nights, a fitness room, an art class or two, and a coffee hour on Wednesdays that has been on the calendar for thirty years. The kind of community building that anchors a neighborhood without ever needing to advertise.",
    imageSrc: "/gallery/ballacaine/neighborhood/Fairfield%20Seniors.jpg",
  },
  {
    kicker: "Year-round",
    title: "Memorial Pool and Health Club",
    body:
      "A City of Toronto recreation complex — indoor pool, fitness room, gym, and a slate of community programming open year-round. A Sunnylea staple in every season: generations of the neighborhood have learned to swim here, and the lap-swim hours are quietly busy with the same serious local swimmers.",
    imageSrc: "/gallery/ballacaine/neighborhood/Memorial%20Pool%20and%20Health%20Club.jpg",
  },
];

export const SCHOOLS: NeighborhoodCard[] = [
  {
    kicker: "TDSB · Elementary",
    title: "Sunnylea Junior Public School",
    body:
      "The neighborhood's anchor school, opened in 1943 in a mid-century-modern building by John B. Parkin — one of the earliest and most photographed examples of modernist school architecture in Canada. The building has been carefully preserved; the school remains the centre of gravity of Sunnylea's family life.",
    imageSrc: "/gallery/ballacaine/neighborhood/Sunnylea%20Junior%20School.jpg",
  },
  {
    kicker: "TDSB · JK–8",
    title: "Norseman Junior Middle School",
    body:
      "The neighborhood's second anchor — a JK to grade eight community school that takes Sunnylea's children from Sunnylea Junior through to high school. Strong music and arts programming; a tight feeder relationship with Etobicoke Collegiate.",
    imageSrc: "/gallery/ballacaine/neighborhood/Norseman%20School.jpg",
  },
  {
    kicker: "TDSB · Arts JK–8",
    title: "Karen Kain School of the Arts",
    body:
      "The TDSB elementary specialty school named for the principal ballerina — a JK to grade eight programme with concentrations in dance, drama, music, and visual art. The natural elementary feeder for families considering Etobicoke School of the Arts at the secondary level.",
    imageSrc: "/gallery/ballacaine/neighborhood/Karen%20Kain%20school.jpg",
  },
  {
    kicker: "TDSB · Arts secondary",
    title: "Etobicoke School of the Arts",
    body:
      "One of the country's most distinguished public arts secondary schools, drawing students from across the GTA into dance, drama, music, visual art, and the literary stream. Auditions are competitive; the alumni list runs through the country's stages and screens. A short drive from Sunnylea.",
    imageSrc: "/gallery/ballacaine/neighborhood/Etobicoke%20School%20of%20the%20Arts.jpeg",
  },
  {
    kicker: "TDSB · Secondary",
    title: "Etobicoke Collegiate Institute",
    body:
      "The public high school for most of Sunnylea. A long academic record, a strong music programme, and the kind of alumni list that runs through the city's professions. A ten-minute walk from the neighborhood's eastern edge.",
    imageSrc: "/gallery/ballacaine/neighborhood/Etobicoke%20Collegiate%20Insitute.jpg",
  },
  {
    kicker: "TCDSB · Secondary",
    title: "Bishop Allen Academy",
    body:
      "A well-regarded Catholic secondary high school, just north of the Kingsway. High rankings academically; a sought-after, popular choice for families on the parish side of the neighborhood — and across Toronto more broadly — with a large, sprawling campus.",
    imageSrc: "/gallery/ballacaine/neighborhood/Bishop%20Allen%20School.jpg",
  },
];

export const WORSHIP: NeighborhoodCard[] = [
  {
    kicker: "Catholic",
    title: "Our Lady of Sorrows Parish",
    body:
      "The Catholic parish for most of Sunnylea — a substantial stone church at Bloor and Royal York, an active school, and a calendar that organises a meaningful share of the neighborhood's family life. Mass in English and Italian.",
    imageSrc: "/gallery/ballacaine/neighborhood/Our%20lady%20of%20sorrows.jpg",
  },
  {
    kicker: "Protestant",
    title: "Kingsway Baptist Church",
    body:
      "A long-standing congregation on the Kingsway, with a music programme and a midweek calendar that draws beyond its own membership. The building anchors the eastern end of the shops.",
    imageSrc: "/gallery/ballacaine/neighborhood/Kingsway%20Baptist%20Church.jpg",
  },
];

/**
 * TTC_ACCESS — deprecated section, kept as an empty export so existing
 * imports don't break. The page no longer renders this rail.
 */
export const TTC_ACCESS: NeighborhoodCard[] = [];

// =========================================================================
//  HISTORY — superseded by HISTORY_CARDS (rendered as a horizontal rail
//  at the top of the neighbourhood chapter). Kept as a deprecated stub
//  so any external import doesn't break the build.
// =========================================================================
export const HISTORY = {
  kicker: "A Brief History",
  headlineLines: ["How Sunnylea", "came to be …"] as const,
  headline: "How Sunnylea came to be.",
  body: [] as string[],
};

// =========================================================================
//  The Profile — neighborhood demographic snapshot.
//  Figures drawn from publicly available neighborhood profiles
//  (Realosophy, City of Toronto neighborhood data) and approximate
//  recent census data. To be re-verified before publication.
// =========================================================================
export interface ProfileStat {
  label: string;
  value: string;
}

export const PROFILE = {
  kicker: "The Profile",
  headline: "Who lives here.",
  intro:
    "Sunnylea is, by most measures, one of West Toronto's most settled neighborhoods — long owner tenures, high household incomes, strong school enrolment, and a demographic that skews family and forty-plus. The figures below are drawn from publicly available neighborhood profiles and a Realosophy summary, and are intended as a recent snapshot rather than a current census reading.",
  stats: [
    { label: "Owner-Occupied Homes", value: "~90%" },
    { label: "Median Household Income", value: "~$180,000" },
    { label: "Median Resident Age", value: "44" },
    { label: "Households with Children", value: "~45%" },
    { label: "Post-Secondary Educated", value: "~75%" },
    { label: "Transit Score", value: "Strong (Line 2 subway)" },
  ] as ProfileStat[],
  body: [
    "The figures above are drawn from publicly available neighborhood profiles and a Realosophy summary, and are accurate as of recent census and realtor data. Sunnylea's demographic profile is unusually stable for a Toronto neighborhood — owner-occupancy is high, turnover is low, and the demographic mix has shifted only gradually across the postwar decades.",
  ],
};

// =========================================================================
//  Curated YouTube videos about Sunnylea & the Kingsway.
//  Use the embed URL pattern in the component.
// =========================================================================
export interface NeighborhoodVideo {
  id: string;
  title: string;
  caption?: string;
}

export const NEIGHBORHOOD_VIDEOS: NeighborhoodVideo[] = [
  {
    id: "rFXNbGXWono",
    title: "Taste of Kingsway · 2025",
    caption: "The Kingsway's annual street festival.",
  },
  {
    id: "XZDxIG4csHQ",
    title: "Sunnylea · Walking the Neighborhood",
    caption: "An afternoon on Sunnylea's quieter streets.",
  },
  {
    id: "ykhfyLRcrXs",
    title: "Bloor West Village · A Year on the Strip",
    caption: "The Bloor West shops across the seasons.",
  },
];

// =========================================================================
//  Notable mentions / press recognition for Sunnylea
// =========================================================================
export interface PressMention {
  outlet: string;
  title: string;
  body: string;
  byline?: string;
  linkUrl?: string;
  linkLabel?: string;
  /** Optional hero screenshot of the article. */
  imageSrc?: string;
}

export const PRESS_MENTIONS: PressMention[] = [
  {
    outlet: "Toronto Life · Real Estate News",
    title:
      "The Chase: This couple toured Etobicoke's Sunnylea district before finding their ideal starter home",
    body:
      "Sunnylea is a tight-knit community with good schools and access to transit, nature and the highway. Would Harsha and Natasha's $2-million budget be enough to buy into the neighbourhood? Anthony Milton's reporting confirmed what the residents already know — that Sunnylea trades on discretion, and that the demand sits well above the supply.",
    byline: "By Anthony Milton · November 9, 2022",
    linkUrl: "https://torontolife.com/real-estate/the-chase-sunnylea-etobicoke-starter-home/",
    linkLabel: "Read on Toronto Life",
    imageSrc: "/toronto-life-chase.png",
  },
];

// =========================================================================
//  Plan Your Visit CTA — links out to the City of Toronto visitor guide
// =========================================================================
export const PLAN_YOUR_VISIT = {
  kicker: "Plan Your Visit",
  headline: "A village inside the city.",
  body:
    "Sunnylea sits at the western edge of Toronto, ten minutes from the airport, fifteen from the financial district by car, twenty by subway. Walk to the Kingsway shops, the ravine, the schools. The neighborhood does not advertise itself — that is the point.",
  ctaLabel: "Explore West Toronto →",
  ctaUrl: "https://www.toronto.ca/explore-enjoy/visitor-guide/",
};
