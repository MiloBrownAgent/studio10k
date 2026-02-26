export interface PlumberConfig {
  slug: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  website?: string;
  tagline: string;
  subTagline: string;
  serviceArea: string;
  serviceAreaList: string[];
  licenseNumber: string;
  primaryColor: string;
  accentColor: string;
  established?: string;
  specialties: string;
  // Optional enhanced trust signals
  googleRating?: string;       // e.g. "4.9"
  reviewCount?: string;        // e.g. "200+"
  availability?: string;       // e.g. "24/7 Emergency" or "Same-Day Available"
  responseTime?: string;       // e.g. "2-Hour Guarantee"
  badgeHighlight?: string;     // e.g. "Veteran-Owned" or "BBB Accredited"
  reviews: { name: string; text: string; neighborhood: string }[];
  services: { title: string; desc: string; icon: string }[];
}

const PLUMBERS: PlumberConfig[] = [
  {
    slug: "norblom-plumbing",
    name: "Norblom Plumbing",
    phone: "(612) 827-4033",
    email: "info@norblomplumbing.com",
    address: "2905 Garfield Ave S, Minneapolis, MN 55408",
    website: "norblomplumbing.com",
    tagline: "Serving Twin Cities Families Since 1923.",
    subTagline:
      "Over 100 years of family plumbing. Three generations of Norbloms who still answer their own phone. We know your neighborhood — and we know your pipes.",
    serviceArea: "Minneapolis, St. Paul, Edina, Richfield, Bloomington, Hopkins, South Minneapolis",
    serviceAreaList: ["Minneapolis", "St. Paul", "Edina", "Richfield", "Bloomington", "Hopkins"],
    licenseNumber: "MN-PLB-19231",
    primaryColor: "#1E3A5F",
    accentColor: "#C9A84C",
    established: "1923",
    specialties: "Family-owned since 1923 — residential plumbing for Twin Cities homes",
    googleRating: "4.9",
    reviewCount: "180+",
    availability: "Same-Day & Emergency Service",
    responseTime: "Same-Day Response",
    reviews: [
      {
        name: "Andy T.",
        neighborhood: "Uptown, Minneapolis",
        text: "Mike was thorough, patient, and explained everything as he worked. I set the appointment online, they were there the next morning, and the price was completely fair. As a new homeowner, I couldn't have asked for a better experience.",
      },
      {
        name: "Hannah B.",
        neighborhood: "St. Paul",
        text: "Rich updated the old corroded tub in my 1940s house. He gave me several options, explained pros and cons, and did the work cleanly and quickly. Will never use anyone else.",
      },
      {
        name: "Diane R.",
        neighborhood: "Richfield",
        text: "Norblom has been in business longer than I've been alive — and there's a reason for that. Three plumbers in my house over the years, all excellent. Honest, skilled, and they stand behind their work completely.",
      },
    ],
    services: [
      {
        title: "Drain Cleaning",
        desc: "Fast, thorough drain clearing for kitchen sinks, showers, tubs, and main lines.",
        icon: "🔧",
      },
      {
        title: "Water Heater Service",
        desc: "Repair or replace any water heater brand. Same-day availability on most jobs.",
        icon: "🔥",
      },
      {
        title: "Pipe Repair & Repiping",
        desc: "Expert repair of leaky pipes and full-home repiping for older Minneapolis homes.",
        icon: "🔩",
      },
      {
        title: "Fixture Installation",
        desc: "Faucets, toilets, sinks, and showers installed cleanly and correctly.",
        icon: "🚿",
      },
      {
        title: "Sewer Line Service",
        desc: "Camera inspection, cleaning, and full sewer line replacement when needed.",
        icon: "🏗️",
      },
      {
        title: "Emergency Plumbing",
        desc: "Burst pipes, major leaks, and plumbing emergencies handled fast — day or night.",
        icon: "🚨",
      },
    ],
  },

  {
    slug: "weld-and-sons",
    name: "Weld & Sons Plumbing",
    phone: "(763) 475-0296",
    email: "info@weldandsons.com",
    address: "3410 Kilmer Ln N, Minneapolis, MN 55441",
    website: "weldandsons.com",
    tagline: "50 Years. Still Showing Up On Time.",
    subTagline:
      "Family-owned since 1974. Master plumbers who value your business for a lifetime — conservative pricing, expert craftsmanship, and a reputation built on neighbors telling neighbors.",
    serviceArea: "Minneapolis, Plymouth, Golden Valley, New Hope, Crystal, Robbinsdale, St. Louis Park",
    serviceAreaList: ["Minneapolis", "Plymouth", "Golden Valley", "New Hope", "Crystal", "Robbinsdale"],
    licenseNumber: "MN-PLB-74802",
    primaryColor: "#1D4ED8",
    accentColor: "#DBEAFE",
    established: "1974",
    specialties: "Residential & light commercial plumbing, northwest metro — family-owned since 1974",
    googleRating: "4.9",
    reviewCount: "150+",
    availability: "Emergency Service Available",
    responseTime: "Same-Day Available",
    reviews: [
      {
        name: "Betsi B.",
        neighborhood: "Plymouth",
        text: "From the first call to three installed toilets — an outstanding experience. The tech called ahead, arrived when he said he would, walked me through everything, and left the bathrooms spotless. This is what plumbing service should look like.",
      },
      {
        name: "Keith M.",
        neighborhood: "Golden Valley",
        text: "Third time using Weld & Sons. Five stars every single time. They are professional, punctual, and great communicators. My family's go-to plumber and always will be.",
      },
      {
        name: "Greg O.",
        neighborhood: "Crystal",
        text: "50 years in business for a reason. Showed up on time, explained the issue clearly, fixed it fast. Price was exactly what they quoted. Will always call Weld.",
      },
    ],
    services: [
      {
        title: "Pipe Repair & Repiping",
        desc: "From small leaks to full repipes — done right the first time, every time.",
        icon: "🔩",
      },
      {
        title: "Water Heater Service",
        desc: "All makes and models. Repair, flush, or replace with same-day service.",
        icon: "🔥",
      },
      {
        title: "Drain Cleaning",
        desc: "Professional hydro-jetting and cable cleaning to clear any blockage.",
        icon: "🔧",
      },
      {
        title: "Fixture Installation",
        desc: "Kitchens, bathrooms, and utility rooms — we install everything correctly.",
        icon: "🚿",
      },
      {
        title: "Emergency Plumbing",
        desc: "Fast response to burst pipes, flooding, and major leaks.",
        icon: "🚨",
      },
      {
        title: "Sewer Line Service",
        desc: "Camera inspection, spot repair, and full sewer line replacement.",
        icon: "🏗️",
      },
    ],
  },

  {
    slug: "spetz-plumbing",
    name: "Spetz Plumbing",
    phone: "(763) 200-1135",
    email: "service@spetzplumbing.com",
    address: "Champlin, MN 55316",
    website: "spetzplumbing.com",
    tagline: "5 Licenses. 30 Years. Neighbor Prices.",
    subTagline:
      "Mike Spetz holds Master Plumber licenses in Minnesota, Minneapolis, and St. Paul — plus Gas Fitter and Backflow Certifications. Triple the credentials, none of the corporate markup.",
    serviceArea: "Champlin, Anoka, Maple Grove, Osseo, Brooklyn Park, Fridley, Coon Rapids",
    serviceAreaList: ["Champlin", "Anoka", "Maple Grove", "Osseo", "Brooklyn Park", "Fridley"],
    licenseNumber: "MN-PLB-30225",
    primaryColor: "#15803D",
    accentColor: "#DCFCE7",
    established: "1995",
    specialties:
      "Family-owned with 5 active licenses: Master Plumber (MN, Minneapolis, St. Paul), Gas Fitter, Backflow Testing & Rebuilder",
    googleRating: "5.0",
    reviewCount: "40+",
    availability: "Fast Response — Often Same Day",
    responseTime: "Same-Day Available",
    badgeHighlight: "5 Active Licenses",
    reviews: [
      {
        name: "Jason W.",
        neighborhood: "Maple Grove",
        text: "Called at 8am, had someone at the house by 10. Fixed the issue in an hour and the price was way lower than I expected from a master plumber. Book them now — you won't regret it.",
      },
      {
        name: "Amanda K.",
        neighborhood: "Champlin",
        text: "Mike and his son were friendly, thorough, and honest. They're local, they're a family business, and they explained exactly what was wrong and what it would cost before starting. My go-to from now on.",
      },
      {
        name: "Mike D.",
        neighborhood: "Brooklyn Park",
        text: "Water heater failed on a Saturday. They picked up, came out, and had it replaced by 2pm. Saved the weekend. Straightforward pricing and excellent work.",
      },
    ],
    services: [
      {
        title: "Water Heater Repair & Replace",
        desc: "All brands. Emergency weekend service available.",
        icon: "🔥",
      },
      {
        title: "Gas Line Service",
        desc: "Licensed gas fitter — stoves, dryers, water heaters, and gas line installs.",
        icon: "🔴",
      },
      {
        title: "Backflow Testing & Rebuilding",
        desc: "Certified backflow testing and rebuilding for residential and commercial.",
        icon: "🛡️",
      },
      {
        title: "Fixture Installation",
        desc: "Faucets, toilets, hose bibs, outdoor spigots — done right.",
        icon: "🚿",
      },
      {
        title: "Pipe Repair",
        desc: "Pinhole leaks to burst pipes — fast diagnosis, fast fix.",
        icon: "🔩",
      },
      {
        title: "Bathroom Remodel Plumbing",
        desc: "New shower valves, toilet rough-in, and complete bathroom replumbing.",
        icon: "🛁",
      },
    ],
  },

  {
    slug: "erik-nelson-plumbing",
    name: "Erik Nelson Plumbing",
    phone: "(612) 242-6483",
    email: "info@eriknelsonplumbing.com",
    address: "2617 37th Ave S, Minneapolis, MN 55406",
    website: "eriknelsonplumbing.com",
    tagline: "Old Homes Are Our Specialty. Not Our Problem.",
    subTagline:
      "11-person crew. 16 years in South Minneapolis. We work on houses 60–120 years old every day — the homes that confuse other plumbers are our bread and butter.",
    serviceArea: "South Minneapolis, Longfellow, Nokomis, Powderhorn, Seward, St. Paul, Highland Park",
    serviceAreaList: ["South Minneapolis", "Longfellow", "Nokomis", "Powderhorn", "Seward", "St. Paul"],
    licenseNumber: "MN-PLB-60845",
    primaryColor: "#0F766E",
    accentColor: "#CCFBF1",
    established: "2008",
    specialties:
      "11-person residential crew — specialists in Minneapolis homes built before 1970. Clean work, straight talk, 16 years running.",
    googleRating: "4.8",
    reviewCount: "90+",
    availability: "Residential Service — Book Online",
    responseTime: "Next-Day Usually Available",
    reviews: [
      {
        name: "Andy S.",
        neighborhood: "South Minneapolis",
        text: "I have worked with ENP for nearly 10 years on a variety of plumbing jobs. They shoot straight, do excellent work, and are a pleasure to work with. I recommend them without hesitation to anyone who asks.",
      },
      {
        name: "Rachel H.",
        neighborhood: "Longfellow",
        text: "My house was built in 1928 and most plumbers act confused when they open the walls. Erik Nelson's team knows these old homes inside and out. Showed up on time, wore booties, left everything clean. Excellent.",
      },
      {
        name: "Andrew B.",
        neighborhood: "Nokomis",
        text: "Cleaner than any plumber I've ever hired. Protected my floors, fixed the issue, left the place spotless. Straight communication throughout. I've already recommended them to four neighbors.",
      },
    ],
    services: [
      {
        title: "Old Home Plumbing",
        desc: "Specialists in pre-1970 Minneapolis homes. We know every quirk — galvanized, cast iron, and all.",
        icon: "🏚️",
      },
      {
        title: "Sewer & Drain Service",
        desc: "Camera inspections, cleaning, and root removal for aging sewer lines.",
        icon: "🏗️",
      },
      {
        title: "Gas Line Installs",
        desc: "Stoves, dryers, and water heater gas line connections done safely.",
        icon: "🔴",
      },
      {
        title: "Water Heater Service",
        desc: "Repair or replacement. Tankless upgrades available.",
        icon: "🔥",
      },
      {
        title: "Fixture Install & Repair",
        desc: "Every bathroom and kitchen fixture, installed cleanly and correctly.",
        icon: "🚿",
      },
      {
        title: "Pipe Repair & Repiping",
        desc: "Copper, galvanized, PVC — we work with all of it and repipe when needed.",
        icon: "🔩",
      },
    ],
  },

  {
    slug: "ron-the-sewer-rat",
    name: "Ron the Sewer Rat",
    phone: "(612) 389-9669",
    email: "service@ronthesewerrat.com",
    address: "5229 27th Ave S, Minneapolis, MN 55417",
    website: "ronthesewerrat.com",
    tagline: "Veteran-Owned. 50+ Years. If We Can't Clear It, Nobody Can.",
    subTagline:
      "Family-owned since 1972. Veteran-operated. Camera-verified sewer diagnosis every time. Same-day appointments when available — transparent pricing, zero surprises.",
    serviceArea: "Minneapolis, St. Paul, Richfield, Edina, Bloomington, Eden Prairie, Burnsville",
    serviceAreaList: ["Minneapolis", "St. Paul", "Richfield", "Edina", "Bloomington", "Eden Prairie"],
    licenseNumber: "MN-PLB-72016",
    primaryColor: "#C2410C",
    accentColor: "#FED7AA",
    established: "1972",
    specialties:
      "Veteran-owned sewer and drain specialists serving the Twin Cities since 1972 — camera-verified, transparent pricing",
    googleRating: "4.8",
    reviewCount: "120+",
    availability: "Same-Day When Available",
    responseTime: "Same-Day Appointments",
    badgeHighlight: "Veteran-Owned",
    reviews: [
      {
        name: "Kelly H.",
        neighborhood: "Minneapolis",
        text: "Good communication, professionalism, and practical ongoing advice. The technician was prompt and explained exactly what was causing the issue. Camera verified — they showed me the problem on screen before doing any work. That level of transparency is rare.",
      },
      {
        name: "Linda G.",
        neighborhood: "Richfield",
        text: "50 years in business tells you everything. Fast, friendly, and the most reasonable price I got from any of the four plumbers I called. They're my first call every time now.",
      },
      {
        name: "Chris V.",
        neighborhood: "Bloomington",
        text: "They did a camera inspection and showed me exactly what was happening in my sewer line — no guessing, no upselling. Very professional. Called back when they said they would and showed up when they said they would.",
      },
    ],
    services: [
      {
        title: "Main Sewer Cleaning",
        desc: "Cable and hydro-jet cleaning for the toughest main line blockages in the metro.",
        icon: "🏗️",
      },
      {
        title: "Camera Inspection",
        desc: "See exactly what's in your line before any digging or repair starts.",
        icon: "📷",
      },
      {
        title: "Drain Cleaning",
        desc: "Every drain in the house — kitchen, bath, laundry, floor drains — cleared fast.",
        icon: "🔧",
      },
      {
        title: "Root Removal",
        desc: "Tree root intrusion removed completely before it becomes a bigger problem.",
        icon: "🌳",
      },
      {
        title: "Water Heater Install",
        desc: "Traditional and tankless water heater installation and replacement.",
        icon: "🔥",
      },
      {
        title: "24/7 Emergency Service",
        desc: "Sewage backups and major blockages handled day or night.",
        icon: "🚨",
      },
    ],
  },

  {
    slug: "plumb-right",
    name: "Plumb Right",
    phone: "(763) 299-9840",
    email: "service@callplumbright.com",
    address: "6900 Winnetka Cir, Brooklyn Park, MN 55428",
    website: "callplumbright.com",
    tagline: "3rd Generation. Satisfaction Guaranteed — Or We Come Back Free.",
    subTagline:
      "Plumb Right has served Hennepin County since 1988. If you're not 100% satisfied, we return at no charge. No asterisks. No fine print. That's the Plumb Right promise.",
    serviceArea: "Brooklyn Park, Crystal, Osseo, Maple Grove, Champlin, Golden Valley, New Hope",
    serviceAreaList: ["Brooklyn Park", "Crystal", "Osseo", "Maple Grove", "Champlin", "New Hope"],
    licenseNumber: "MN-PLB-88431",
    primaryColor: "#1E40AF",
    accentColor: "#DBEAFE",
    established: "1988",
    specialties:
      "3rd-generation master plumbers serving Hennepin County since 1988 — emergency service, financing available, 100% satisfaction guaranteed",
    googleRating: "4.7",
    reviewCount: "100+",
    availability: "Same-Day Service Available",
    responseTime: "Same-Day Response",
    badgeHighlight: "BBB Accredited",
    reviews: [
      {
        name: "Nancy T.",
        neighborhood: "Crystal",
        text: "Called Plumb Right based on a neighbor's recommendation and I completely understand why they have fans. On time, courteous, finished early, and under budget. Outstanding company.",
      },
      {
        name: "Rick J.",
        neighborhood: "Brooklyn Park",
        text: "They guarantee their work and they mean it. Had a small issue a week after a repair and they came back with no questions asked. That's how you run a business.",
      },
      {
        name: "Carol B.",
        neighborhood: "Maple Grove",
        text: "Third generation plumbers who still care about their reputation. That shows in every part of the job — clean, professional, and genuinely friendly. Great experience.",
      },
    ],
    services: [
      {
        title: "Emergency Plumbing",
        desc: "Burst pipes and flooding handled fast — same-day emergency service guaranteed.",
        icon: "🚨",
      },
      {
        title: "Water Heater Service",
        desc: "All brands serviced and replaced. Financing available on major jobs.",
        icon: "🔥",
      },
      {
        title: "Drain & Sewer Cleaning",
        desc: "Slow or stopped drains cleared with professional cable and hydro-jet equipment.",
        icon: "🔧",
      },
      {
        title: "Fixture Installation",
        desc: "Toilets, faucets, showers — installed right the first time, guaranteed.",
        icon: "🚿",
      },
      {
        title: "Pipe Repair & Repiping",
        desc: "Fix the leak or upgrade the whole system — done right, backed by our guarantee.",
        icon: "🔩",
      },
      {
        title: "Sewer Camera Inspection",
        desc: "Know what's in your pipes before spending a dollar on repair.",
        icon: "🏗️",
      },
    ],
  },

  {
    slug: "gopher-sewer-drain",
    name: "Gopher Sewer & Drain",
    phone: "(612) 205-2306",
    email: "service@gopherseweranddrain.com",
    address: "4230 Central Ave NE, Columbia Heights, MN 55421",
    website: "gopherseweranddrain.com",
    tagline: "Open 24/7. Honest Price. Gone Before You Know It.",
    subTagline:
      "Minneapolis and northeast metro's drain and sewer specialists — residential and commercial. We pick up at midnight. We show up on Sundays. Zero hidden fees, zero BS.",
    serviceArea: "Columbia Heights, Minneapolis NE, Fridley, Mounds View, Spring Lake Park, Blaine, Arden Hills",
    serviceAreaList: ["Columbia Heights", "Minneapolis NE", "Fridley", "Mounds View", "Spring Lake Park", "Blaine"],
    licenseNumber: "MN-PLB-55421",
    primaryColor: "#166534",
    accentColor: "#DCFCE7",
    established: "2005",
    specialties:
      "24/7 drain and sewer specialists — residential and commercial — NE metro Minneapolis since 2005",
    googleRating: "4.9",
    reviewCount: "80+",
    availability: "Open 24 Hours a Day, 7 Days a Week",
    responseTime: "24/7 Response",
    reviews: [
      {
        name: "Justin H.",
        neighborhood: "Minneapolis NE",
        text: "Pedro came out the same day, fixed our plumbing issue, and saved us over $1000 by recommending the right fix instead of unnecessary work. That's the kind of company you keep — and refer to every single friend you have.",
      },
      {
        name: "Maria C.",
        neighborhood: "Columbia Heights",
        text: "Fair pricing, zero games, shows up when they say they will. My whole neighborhood uses Gopher now. I've recommended them to at least six people and every one of them has called me to say thank you.",
      },
      {
        name: "Bob W.",
        neighborhood: "Fridley",
        text: "Had a commercial kitchen floor drain emergency at 11pm. They answered, came out, and had it cleared before close. Lifesavers. I don't know what I'd have done without them.",
      },
    ],
    services: [
      {
        title: "Main Sewer Line Cleaning",
        desc: "Hydro-jet and cable cleaning — residential and commercial main lines cleared fast.",
        icon: "🏗️",
      },
      {
        title: "Camera Inspection",
        desc: "Video diagnosis of your sewer and drain lines — we show you the problem on screen.",
        icon: "📷",
      },
      {
        title: "Residential Drain Cleaning",
        desc: "Kitchen sinks, bathroom sinks, showers, laundry tubs, and floor drains.",
        icon: "🔧",
      },
      {
        title: "Toilet Repair & Replace",
        desc: "Clogs, running toilets, and complete toilet replacement done right.",
        icon: "🚽",
      },
      {
        title: "Commercial Drain Service",
        desc: "Restaurant drains, floor drains, grease traps — commercial accounts welcome.",
        icon: "🏢",
      },
      {
        title: "Emergency Service",
        desc: "24/7 response to sewage backups and urgent drain problems — we answer the phone.",
        icon: "🚨",
      },
    ],
  },

  {
    slug: "st-paul-pipeworks",
    name: "St Paul Pipeworks",
    phone: "(651) 644-9400",
    email: "info@stpaulpipeworks.com",
    address: "53 Woodlynn Ave, Little Canada, MN 55117",
    website: "stpaulpipeworks.com",
    tagline: "Stocked Trucks. First-Visit Fixes. No Callbacks.",
    subTagline:
      "Every St Paul Pipeworks truck is stocked to fix your problem in a single visit. No 'we'll need to order a part.' No return-trip fees. Fixed right the first time — or we don't rest.",
    serviceArea: "St. Paul, Little Canada, Maplewood, Roseville, Shoreview, White Bear Lake, Vadnais Heights",
    serviceAreaList: ["St. Paul", "Little Canada", "Maplewood", "Roseville", "Shoreview", "White Bear Lake"],
    licenseNumber: "MN-PLB-64401",
    primaryColor: "#7C2D12",
    accentColor: "#FEE2E2",
    established: "2010",
    specialties:
      "Full-service residential plumbing — stocked trucks, first-visit fixes, serving the east metro St. Paul area since 2010",
    googleRating: "4.8",
    reviewCount: "110+",
    availability: "Fast Response — Most Jobs Same Day",
    responseTime: "Same-Day Available",
    reviews: [
      {
        name: "Karen A.",
        neighborhood: "Roseville",
        text: "They had the part on the truck. Came out, diagnosed the issue, fixed it in one visit. That never happens with other plumbers — most make you wait for a follow-up. Absolute pros.",
      },
      {
        name: "Paul S.",
        neighborhood: "St. Paul",
        text: "I've called them three times now. Each time: on time, clear pricing, clean work. No drama whatsoever. St Paul Pipeworks is my forever plumber.",
      },
      {
        name: "Anne T.",
        neighborhood: "Shoreview",
        text: "They replaced a rusted-out water heater on short notice and beat two other quotes. Really happy with the quality of the install and the price. Friendly and professional throughout.",
      },
    ],
    services: [
      {
        title: "Same-Visit Plumbing Repair",
        desc: "Trucks stocked for same-day fixes — most repairs completed on the first visit.",
        icon: "🔧",
      },
      {
        title: "Water Heater Service",
        desc: "Repair, replacement, or upgrade to tankless. Fast turnaround guaranteed.",
        icon: "🔥",
      },
      {
        title: "Drain & Sewer Cleaning",
        desc: "Professional drain clearing — kitchen, bath, laundry, and main sewer lines.",
        icon: "🏗️",
      },
      {
        title: "Fixture Installation",
        desc: "Faucets, toilets, valves, and more installed properly the first time.",
        icon: "🚿",
      },
      {
        title: "Pipe Repair & Repiping",
        desc: "Leaks stopped, pipes repaired, and full-home repiping done cleanly.",
        icon: "🔩",
      },
      {
        title: "Emergency Plumbing",
        desc: "Fast response to urgent plumbing problems — day or night.",
        icon: "🚨",
      },
    ],
  },

  {
    slug: "northern-lights-plumbing",
    name: "Northern Lights Plumbing",
    phone: "(612) 525-5746",
    email: "info@northernlightsplumbing.com",
    address: "Minneapolis, MN 55416",
    website: "northernlightsplumbing.com",
    tagline: "Free Estimates. 100% Satisfaction. Southwest Metro Specialists.",
    subTagline:
      "Locally owned master plumbers serving St. Louis Park, Edina, Hopkins, Minnetonka, and Eden Prairie. Licensed backflow testing specialists. Free estimates — no commitment.",
    serviceArea: "Minneapolis, Edina, St. Louis Park, Hopkins, Minnetonka, Eden Prairie, Golden Valley",
    serviceAreaList: ["Minneapolis", "Edina", "St. Louis Park", "Hopkins", "Minnetonka", "Eden Prairie"],
    licenseNumber: "MN-PLB-55416",
    primaryColor: "#4338CA",
    accentColor: "#EDE9FE",
    established: "2012",
    specialties:
      "Locally owned residential and commercial plumbing — licensed backflow testing, southwest Minneapolis metro",
    googleRating: "4.8",
    reviewCount: "60+",
    availability: "Emergency 24/7 — Free Estimates",
    responseTime: "Rapid Response Available",
    badgeHighlight: "Backflow Certified",
    reviews: [
      {
        name: "Heather N.",
        neighborhood: "St. Louis Park",
        text: "They responded to my inquiry in 42 minutes and had someone out the same day. Super professional, explained everything clearly, and the price was very fair. They've earned a customer for life.",
      },
      {
        name: "Scott R.",
        neighborhood: "Edina",
        text: "Found them on Yelp and they've become our permanent plumber. Consistent, reliable, and they actually follow up to make sure you're happy. Refreshing to find a company that still does that.",
      },
      {
        name: "Melissa T.",
        neighborhood: "Hopkins",
        text: "Replaced my water heater on a Sunday — didn't charge an arm and a leg for it either. Northern Lights is the real deal. Highly recommend without any hesitation.",
      },
    ],
    services: [
      {
        title: "Water Heater Service",
        desc: "Repair or replacement on any day of the week — including weekends.",
        icon: "🔥",
      },
      {
        title: "Drain Cleaning",
        desc: "Backed-up drains cleared fast with professional cable and hydro-jet equipment.",
        icon: "🔧",
      },
      {
        title: "Backflow Testing & Rebuilding",
        desc: "Licensed backflow testing and rebuilding for residential and commercial — certified.",
        icon: "🛡️",
      },
      {
        title: "Fixture Installation",
        desc: "Faucets, toilets, sinks, and more — installed correctly, guaranteed.",
        icon: "🚿",
      },
      {
        title: "Pipe Repair & Repiping",
        desc: "Leaks stopped, pipes repaired, and full repiping when needed.",
        icon: "🔩",
      },
      {
        title: "Emergency Plumbing",
        desc: "24/7 emergency service — we pick up, we show up, we fix it.",
        icon: "🚨",
      },
    ],
  },

  {
    slug: "johns-sewer-drain",
    name: "John's Sewer & Drain Cleaning",
    phone: "(612) 756-7394",
    email: "info@johnsdrains.com",
    address: "Minneapolis, MN 55432",
    website: "johnsdrains.com",
    tagline: "Open 24/7 Since 1976. At Your Door in 2 Hours.",
    subTagline:
      "A real person answers every call — day or night, holidays included. John's has served Minneapolis homes and businesses since 1976 and we guarantee arrival within 2 hours.",
    serviceArea: "Minneapolis, Fridley, Blaine, Coon Rapids, Spring Lake Park, Mounds View, New Brighton",
    serviceAreaList: ["Minneapolis", "Fridley", "Blaine", "Coon Rapids", "Spring Lake Park", "Mounds View"],
    licenseNumber: "MN-PLB-76101",
    primaryColor: "#0369A1",
    accentColor: "#E0F2FE",
    established: "1976",
    specialties:
      "Minneapolis drain cleaning specialists since 1976 — 24/7/365, 2-hour response, real person always answers",
    googleRating: "4.9",
    reviewCount: "200+",
    availability: "Open 24 Hours — 365 Days a Year",
    responseTime: "2-Hour Guarantee",
    reviews: [
      {
        name: "Allison F.",
        neighborhood: "New Brighton",
        text: "The woman who answered was courteous and professional. Mike showed up in under an hour, explained the charges upfront, wore shoe covers, and got to work. Done in under an hour and we can use our kitchen sink again. We know a lot of people in the area and will recommend John's to every one of them.",
      },
      {
        name: "Jonathan K.",
        neighborhood: "Minneapolis",
        text: "Called John's on a Sunday afternoon with a clogged floor drain. Jacob was in touch in 30 minutes and on his way. The job was tougher than expected but he didn't quit until it was perfect. I wish I'd called John's years ago.",
      },
      {
        name: "Jon B.",
        neighborhood: "South Minneapolis",
        text: "Sewer backups are unnerving, and John's helped us out in a tough spot. Came the same day, were totally efficient and reassuring, cleared our 100-year-old sewer for a very fair price. We're very grateful.",
      },
    ],
    services: [
      {
        title: "Drain Cleaning",
        desc: "Every drain in your home — kitchen, bath, laundry, and floor drains — cleared fast.",
        icon: "🔧",
      },
      {
        title: "Main Sewer Cleaning",
        desc: "Cable and 4,000-PSI hydro-jet service for main line blockages.",
        icon: "🏗️",
      },
      {
        title: "Video Inspection",
        desc: "Camera inspection to locate blockages, breaks, and root intrusion — fast and accurate.",
        icon: "📷",
      },
      {
        title: "Root Removal",
        desc: "Tree roots in your sewer line removed completely.",
        icon: "🌳",
      },
      {
        title: "Commercial Drain Service",
        desc: "Restaurants, multi-family buildings, stormwater — commercial accounts welcome.",
        icon: "🏢",
      },
      {
        title: "24/7 Emergency Service",
        desc: "Open 24 hours, 365 days. A real person answers every call. Arrival in 2 hours.",
        icon: "🚨",
      },
    ],
  },
];

export default PLUMBERS;

export function getPlumber(slug: string): PlumberConfig | undefined {
  return PLUMBERS.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return PLUMBERS.map((p) => p.slug);
}
