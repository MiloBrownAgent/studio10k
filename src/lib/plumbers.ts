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

  // ─── BATCH 2: 10 MORE MINNEAPOLIS/ST. PAUL PLUMBERS ───

  {
    slug: "kelly-plumbing-heating",
    name: "Kelly Plumbing & Heating",
    phone: "(651) 699-1232",
    email: "info@kellyplumbinginc.com",
    address: "1932 St. Clair Ave, St. Paul, MN 55105",
    website: "kellyplumbinginc.com",
    tagline: "50+ Years. Vintage Homes. Modern Results.",
    subTagline:
      "Family-owned since 1973, Kelly Plumbing & Heating specializes in historic Saint Paul and Minneapolis homes. From century-old fixtures to modern upgrades — we know these houses inside and out.",
    serviceArea: "St. Paul, Minneapolis, Mac-Groveland, Highland Park, Summit Hill, West 7th, Merriam Park",
    serviceAreaList: ["St. Paul", "Minneapolis", "Mac-Groveland", "Highland Park", "Summit Hill", "Merriam Park"],
    licenseNumber: "MN-PLB-73019",
    primaryColor: "#7B2D32",
    accentColor: "#FDE8D8",
    established: "1973",
    specialties: "Family-owned since 1973 — specialists in historic Saint Paul homes, vintage fixtures, plumbing and heating",
    googleRating: "4.8",
    reviewCount: "70+",
    availability: "Same-Day & Emergency Service",
    responseTime: "Same-Day Response",
    badgeHighlight: "Vintage Fixture Specialists",
    reviews: [
      {
        name: "Patricia L.",
        neighborhood: "Mac-Groveland, St. Paul",
        text: "Our 1912 home has original fixtures that most plumbers refuse to touch. Kelly's team handled them expertly, matched parts I thought were impossible to find, and left everything immaculate. They are the real deal for old Saint Paul homes.",
      },
      {
        name: "Tom H.",
        neighborhood: "Highland Park",
        text: "Been using Kelly for 15 years. They know my 1920s house better than I do at this point. Honest, on time, and they never try to upsell you on work you don't need. Rare in this business.",
      },
      {
        name: "Susan M.",
        neighborhood: "Summit Hill",
        text: "My boiler went out in January. Kelly had someone at the door within two hours. Fixed it same day. Courteous, knowledgeable, and fair pricing. This is who you call for an old Saint Paul home.",
      },
    ],
    services: [
      {
        title: "Vintage Fixture Repair",
        desc: "Specialists in antique and original fixtures found in historic Saint Paul homes. We source the parts, we do the work right.",
        icon: "🏚️",
      },
      {
        title: "Boiler & Radiator Service",
        desc: "Boiler repair, replacement, and radiator work for old-home heating systems. Fast response — especially in winter.",
        icon: "🔥",
      },
      {
        title: "Drain & Sewer Cleaning",
        desc: "Older sewer lines cleared fast — cable and hydro-jet for aged cast iron and clay tile.",
        icon: "🔧",
      },
      {
        title: "Gas Line Service",
        desc: "Licensed gas fitter — stoves, dryers, fireplaces, and complete gas line installs.",
        icon: "🔴",
      },
      {
        title: "Pipe Repair & Repiping",
        desc: "From pinhole leaks in copper to full galvanized repipes — done right the first time.",
        icon: "🔩",
      },
      {
        title: "Water Heater Service",
        desc: "All makes repaired or replaced. Tankless upgrades available for older homes.",
        icon: "💧",
      },
    ],
  },

  {
    slug: "fish-plumbing",
    name: "Fish Plumbing & Utilities",
    phone: "(651) 341-5899",
    email: "info@fishplumbingutilities.com",
    address: "Minneapolis, MN 55415",
    website: "fishplumbingutilities.com",
    tagline: "Licensed. Bonded. Built for the Twin Cities.",
    subTagline:
      "Fish Plumbing & Utilities brings professional, licensed plumbing to Minneapolis and St. Paul homeowners and businesses. Expert diagnostics, upfront estimates, and clean work — every time.",
    serviceArea: "Minneapolis, St. Paul, Richfield, Edina, Bloomington, Burnsville, Eagan, Roseville",
    serviceAreaList: ["Minneapolis", "St. Paul", "Richfield", "Edina", "Bloomington", "Burnsville"],
    licenseNumber: "MN-PLB-55415",
    primaryColor: "#0C4A6E",
    accentColor: "#E0F2FE",
    established: "2008",
    specialties: "Full-service residential and commercial plumbing — trenchless sewer, water line repair, and drain cleaning across the Twin Cities",
    googleRating: "4.7",
    reviewCount: "50+",
    availability: "Emergency Service Available",
    responseTime: "Same-Day Available",
    reviews: [
      {
        name: "Derek W.",
        neighborhood: "Minneapolis",
        text: "Called in the morning with a broken water line. They gave me an upfront estimate before starting, and the job was done by noon. Zero surprises on the bill. Will use them again.",
      },
      {
        name: "Karen J.",
        neighborhood: "Edina",
        text: "Professional from first call to final handshake. They explained every step, cleaned up thoroughly, and the price was exactly what they quoted. Highly recommend.",
      },
      {
        name: "Mike R.",
        neighborhood: "Richfield",
        text: "Fast, thorough, and honest. Had a sewer backup on a Friday afternoon — they came out same day and had it cleared in an hour. Top-notch crew.",
      },
    ],
    services: [
      {
        title: "Sewer Line Repair & Replacement",
        desc: "Trenchless pipe lining, spot repairs, and full sewer replacements without tearing up your yard.",
        icon: "🏗️",
      },
      {
        title: "Drain Cleaning",
        desc: "Every drain cleared — kitchen, bath, laundry, floor drains — fast and thorough.",
        icon: "🔧",
      },
      {
        title: "Water Line Repair",
        desc: "Main water line leaks and breaks repaired with minimal disruption.",
        icon: "💧",
      },
      {
        title: "Water Heater Service",
        desc: "Repair or replace any brand. Tankless upgrades available.",
        icon: "🔥",
      },
      {
        title: "Pipe Repair & Repiping",
        desc: "All pipe materials — copper, galvanized, PVC. Done right, done clean.",
        icon: "🔩",
      },
      {
        title: "Emergency Plumbing",
        desc: "Fast response to urgent plumbing failures — we answer when you call.",
        icon: "🚨",
      },
    ],
  },

  {
    slug: "metro-plumbing-drains",
    name: "Metro Plumbing & Drains",
    phone: "(651) 766-8686",
    email: "info@callmetroplumbing.com",
    address: "St. Paul, MN 55107",
    website: "callmetroplumbing.com",
    tagline: "Twin Cities Plumbing, Done Right. No Hidden Fees.",
    subTagline:
      "Metro Plumbing & Drains delivers quality plumbing and drain cleaning across Minneapolis, St. Paul, and the surrounding metro. Free estimates, upfront pricing, and zero hidden charges — guaranteed.",
    serviceArea: "Minneapolis, St. Paul, Bloomington, Edina, Roseville, Maplewood, Woodbury, Cottage Grove",
    serviceAreaList: ["Minneapolis", "St. Paul", "Bloomington", "Edina", "Roseville", "Woodbury"],
    licenseNumber: "MN-PLB-55107",
    primaryColor: "#1D4ED8",
    accentColor: "#DBEAFE",
    established: "2009",
    specialties: "Full-service plumbing and drain cleaning — residential and commercial — Twin Cities metro since 2009",
    googleRating: "4.7",
    reviewCount: "90+",
    availability: "Same-Day Service Available",
    responseTime: "Same-Day Response",
    reviews: [
      {
        name: "Sheila V.",
        neighborhood: "St. Paul",
        text: "The office was friendly and helpful. The technician called on his way, arrived on time, diagnosed the issue, and gave me an upfront estimate. Stacey was professional, expedient, and cleaned up completely. One of the best service experiences I've had.",
      },
      {
        name: "Williams H.",
        neighborhood: "Bloomington",
        text: "Friendly service, fast, and great pricing. I called the right place.",
      },
      {
        name: "Nichole T.",
        neighborhood: "Roseville",
        text: "Great customer service, honest people, and reasonable pricing. I definitely recommend Metro for any plumbing issue.",
      },
    ],
    services: [
      {
        title: "Drain Cleaning & Clearing",
        desc: "Cable and hydro-jet clearing for any drain — kitchen, bath, laundry, and main lines.",
        icon: "🔧",
      },
      {
        title: "Camera Inspection",
        desc: "Video inspection to locate blockages, breaks, and root intrusion fast.",
        icon: "📷",
      },
      {
        title: "Hydro-Jetting",
        desc: "High-pressure water jetting to blast through grease, scale, and stubborn clogs.",
        icon: "💧",
      },
      {
        title: "Water Heater Service",
        desc: "Repair or replace any water heater. Water softener install and service too.",
        icon: "🔥",
      },
      {
        title: "Pipe Repair & Repiping",
        desc: "Leaks stopped and pipes upgraded — residential and light commercial.",
        icon: "🔩",
      },
      {
        title: "Sump Pump Service",
        desc: "Installation, repair, and battery backup for basement sump pump systems.",
        icon: "🏗️",
      },
    ],
  },

  {
    slug: "aqua-city-plumbing",
    name: "Aqua City Plumbing",
    phone: "(612) 827-2871",
    email: "info@aquacityplumbing.com",
    address: "7701 Pillsbury Ave S, Minneapolis, MN 55423",
    website: "aquacityplumbing.com",
    tagline: "Minneapolis' Local Plumber. Fair Price. Every Job.",
    subTagline:
      "Aqua City Plumbing has been the trusted name in Minneapolis residential plumbing for over 20 years. Licensed, insured, and committed to fair pricing and quality work on every job.",
    serviceArea: "Minneapolis, Richfield, Edina, St. Louis Park, Bloomington, Burnsville, Eagan, Eden Prairie",
    serviceAreaList: ["Minneapolis", "Richfield", "Edina", "St. Louis Park", "Bloomington", "Eden Prairie"],
    licenseNumber: "MN-PLB-55423",
    primaryColor: "#0369A1",
    accentColor: "#E0F2FE",
    established: "2000",
    specialties: "Full-service residential plumbing and HVAC — Minneapolis and south metro — licensed, insured, locally owned",
    googleRating: "4.6",
    reviewCount: "60+",
    availability: "Emergency Service Available",
    responseTime: "Same-Day Available",
    reviews: [
      {
        name: "Mark S.",
        neighborhood: "Minneapolis",
        text: "Called Aqua City when my water heater failed. They came out the same day, gave me honest options, and installed a new one at a very fair price. No upsell, no drama. Exactly what I needed.",
      },
      {
        name: "Lisa P.",
        neighborhood: "Richfield",
        text: "Genuinely good plumbers who charge a fair price. They've done two jobs for me now and both times were professional, on time, and reasonably priced. My go-to from now on.",
      },
      {
        name: "Jim T.",
        neighborhood: "Edina",
        text: "Diagnosed and fixed a persistent leak that two other plumbers couldn't figure out. Came out fast, didn't charge an arm and a leg, and the fix has held solid for a year. Impressed.",
      },
    ],
    services: [
      {
        title: "Plumbing Repair",
        desc: "Leaks, drips, running toilets, broken valves — any residential plumbing repair handled fast.",
        icon: "🔧",
      },
      {
        title: "Water Heater Service",
        desc: "Traditional and tankless water heater repair, flush, and replacement.",
        icon: "🔥",
      },
      {
        title: "Drain & Sewer Cleaning",
        desc: "Slow or stopped drains cleared — residential and light commercial.",
        icon: "🏗️",
      },
      {
        title: "Fixture Installation",
        desc: "Faucets, toilets, showers, and sinks installed properly the first time.",
        icon: "🚿",
      },
      {
        title: "Trenchless Sewer Repair",
        desc: "Sewer line repairs with minimal digging using trenchless technology.",
        icon: "🌱",
      },
      {
        title: "Emergency Plumbing",
        desc: "Urgent plumbing issues handled fast — call and we answer.",
        icon: "🚨",
      },
    ],
  },

  {
    slug: "grabow-plumbing",
    name: "Grabow Plumbing",
    phone: "(612) 843-6290",
    email: "info@grabowplumbing.com",
    address: "635 Lowry Ave NE, Minneapolis, MN 55418",
    website: "grabowplumbing.com",
    tagline: "High-End Remodels. 40 Years. Family-Owned.",
    subTagline:
      "Mike Grabow started plumbing at 16. In 1986, he launched his own shop and never looked back. Grabow Plumbing is the remodeling contractor's first call — and homeowners' best-kept secret in Northeast Minneapolis.",
    serviceArea: "Minneapolis NE, Fridley, Spring Lake Park, Blaine, Arden Hills, Shoreview, Roseville",
    serviceAreaList: ["Minneapolis NE", "Fridley", "Spring Lake Park", "Blaine", "Arden Hills", "Roseville"],
    licenseNumber: "MN-PLB-86121",
    primaryColor: "#92400E",
    accentColor: "#FEF3C7",
    established: "1986",
    specialties: "Family-owned remodel plumbing specialists — Minneapolis area since 1986, BBB Accredited, high-end craftsmanship",
    googleRating: "4.9",
    reviewCount: "45+",
    availability: "Service & Remodel Work Available",
    responseTime: "Next-Day Usually Available",
    badgeHighlight: "BBB Accredited",
    reviews: [
      {
        name: "Carol W.",
        neighborhood: "Minneapolis NE",
        text: "Grabow handled our entire kitchen and master bath remodel plumbing. The work was absolutely clean, code-perfect, and done on schedule. Mike and his team are the best in the city for remodeling work.",
      },
      {
        name: "Brian K.",
        neighborhood: "Arden Hills",
        text: "Four renovations over 15 years and every single one has been a great experience. Grabow's team shows up, does the work right, and communicates clearly throughout. I wouldn't call anyone else.",
      },
      {
        name: "Nancy S.",
        neighborhood: "Roseville",
        text: "Precise, reliable, and honest. They've been in business for 40 years for a very good reason — the quality of their work speaks for itself.",
      },
    ],
    services: [
      {
        title: "Bathroom Remodel Plumbing",
        desc: "Complete bathroom plumbing for remodels — rough-in, finish, and everything in between.",
        icon: "🛁",
      },
      {
        title: "Kitchen Remodel Plumbing",
        desc: "Kitchen sink, dishwasher, refrigerator ice line, and full kitchen replumb.",
        icon: "🍳",
      },
      {
        title: "Gas Line Installation",
        desc: "Stoves, dryers, fireplaces, outdoor grills — licensed gas line installs done safely.",
        icon: "🔴",
      },
      {
        title: "Pipe Repair & Repiping",
        desc: "Copper, galvanized, and PEX — leaks fixed and systems upgraded properly.",
        icon: "🔩",
      },
      {
        title: "Fixture Installation",
        desc: "High-end and standard fixture installations for kitchen and bath remodels.",
        icon: "🚿",
      },
      {
        title: "Water Heater Service",
        desc: "Repair, replacement, and tankless upgrades for remodel projects and service calls.",
        icon: "🔥",
      },
    ],
  },

  {
    slug: "loch-monster-plumbing",
    name: "Loch Monster Plumbing",
    phone: "(763) 501-3573",
    email: "info@lochmonsterplumbing.com",
    address: "13033 Ridgedale Dr Ste 165, Minnetonka, MN 55305",
    website: "lochmonsterplumbing.com",
    tagline: "Local. Legendary. On Standby 24/7.",
    subTagline:
      "Loch Monster Plumbing is a fully licensed, family-run plumbing shop serving the Twin Cities metro. We answer the phone ourselves. We don't work on commission. We don't upsell. We just fix it.",
    serviceArea: "Minnetonka, Eden Prairie, Plymouth, Hopkins, St. Louis Park, Golden Valley, Wayzata, Deephaven",
    serviceAreaList: ["Minnetonka", "Eden Prairie", "Plymouth", "Hopkins", "St. Louis Park", "Golden Valley"],
    licenseNumber: "MN-PLB-55305",
    primaryColor: "#166534",
    accentColor: "#DCFCE7",
    established: "2010",
    specialties: "Family-run residential and commercial plumbing — licensed in MN, Minneapolis, and St. Paul — no commission, no upsell, transparent pricing",
    googleRating: "4.9",
    reviewCount: "55+",
    availability: "24/7 Emergency Available",
    responseTime: "Emergency 24/7",
    reviews: [
      {
        name: "Jamie G.",
        neighborhood: "Minnetonka",
        text: "On time, honest, very informative about the work needed. Kept me updated throughout the day. So polite and respectful. I can't say enough good things about this team.",
      },
      {
        name: "Martha N.",
        neighborhood: "Eden Prairie",
        text: "I'm an HOA manager and use Loch Monster for multiple properties. Their response time is impeccable and their customer service is wonderful — they follow up quickly and get the job done efficiently every time.",
      },
      {
        name: "Dan C.",
        neighborhood: "Plymouth",
        text: "Called at 9pm with a broken water line. They showed up within an hour and had it repaired before midnight. No after-hours premium, no drama. These guys are the real deal.",
      },
    ],
    services: [
      {
        title: "Emergency Plumbing",
        desc: "24/7 emergency service — a manager answers every call, day or night.",
        icon: "🚨",
      },
      {
        title: "Water Heater Service",
        desc: "Repair or replace any brand. Fast turnaround — often same day.",
        icon: "🔥",
      },
      {
        title: "Pipe Repair & Repiping",
        desc: "Leaks, burst pipes, and full-home repiping done cleanly and correctly.",
        icon: "🔩",
      },
      {
        title: "Drain Cleaning",
        desc: "Every drain cleared — kitchen, bath, laundry, and floor drains.",
        icon: "🔧",
      },
      {
        title: "Fixture Installation",
        desc: "Faucets, toilets, valves — installed properly with no mess left behind.",
        icon: "🚿",
      },
      {
        title: "Commercial Plumbing",
        desc: "Residential and commercial accounts welcome. HOA and property manager friendly.",
        icon: "🏢",
      },
    ],
  },

  {
    slug: "focus-plumbing",
    name: "Focus Plumbing Services",
    phone: "(651) 295-5417",
    email: "focusplumbingservicesllc@gmail.com",
    address: "1125 Colette Place, Saint Paul, MN 55116",
    website: "focusplumbingservices.com",
    tagline: "Your Neighborhood Plumber. Available 24/7.",
    subTagline:
      "Focus Plumbing Services is a locally owned plumbing company serving Saint Paul and the surrounding area. We pick up the phone, give honest quotes, and do the job right — no surprises.",
    serviceArea: "Saint Paul, Highland Park, West St. Paul, Mendota Heights, South St. Paul, Inver Grove Heights",
    serviceAreaList: ["Saint Paul", "Highland Park", "West St. Paul", "Mendota Heights", "South St. Paul", "Inver Grove Heights"],
    licenseNumber: "MN-PLB-55116",
    primaryColor: "#1E40AF",
    accentColor: "#DBEAFE",
    established: "2014",
    specialties: "Locally owned full-service plumbing — Saint Paul and south suburbs — 24/7 availability, drain line repair, remodels",
    googleRating: "4.8",
    reviewCount: "35+",
    availability: "24/7 Service Available",
    responseTime: "Rapid Response",
    reviews: [
      {
        name: "Sandra L.",
        neighborhood: "Highland Park, St. Paul",
        text: "Fast, friendly, and very fair pricing. I called Focus Plumbing on a Saturday morning and they had someone out within two hours. Did a great job on my water heater replacement and left the space completely clean.",
      },
      {
        name: "Paul D.",
        neighborhood: "Mendota Heights",
        text: "Honest plumbers who actually answer when you call. They diagnosed the issue quickly, gave me a straight price, and had it fixed same day. Highly recommend to anyone in the area.",
      },
      {
        name: "Diane F.",
        neighborhood: "West St. Paul",
        text: "Great experience from start to finish. They explained everything clearly, arrived on time, and the work was done right. No hidden fees. This is my go-to plumber from now on.",
      },
    ],
    services: [
      {
        title: "Drain Line Repair",
        desc: "Blocked or damaged drain lines diagnosed and repaired fast.",
        icon: "🔧",
      },
      {
        title: "Water Heater Service",
        desc: "Repair or replacement of any water heater — same-day service often available.",
        icon: "🔥",
      },
      {
        title: "Fixture Installation",
        desc: "Faucets, toilets, showers, and sinks installed and working perfectly.",
        icon: "🚿",
      },
      {
        title: "Pipe Repair",
        desc: "Pinhole leaks to major pipe failures — diagnosed and fixed right.",
        icon: "🔩",
      },
      {
        title: "Bathroom Remodel Plumbing",
        desc: "Complete rough-in and finish plumbing for bathroom remodels.",
        icon: "🛁",
      },
      {
        title: "Emergency Plumbing",
        desc: "24/7 emergency service — we answer the phone and we show up.",
        icon: "🚨",
      },
    ],
  },

  {
    slug: "blaylock-plumbing",
    name: "Blaylock Plumbing Co.",
    phone: "(612) 869-7531",
    email: "info@blaylockplumbing.com",
    address: "9425 Syndicate Ave, Bloomington, MN 55420",
    website: "blaylockplumbing.com",
    tagline: "Family Plumbers Since 1938. Still Going Strong.",
    subTagline:
      "Earl Blaylock started this company in 1938. Three generations later, the Blaylock family is still showing up on time, doing honest work, and charging fair prices across the south Twin Cities.",
    serviceArea: "Bloomington, Richfield, Edina, Minneapolis, Burnsville, Savage, Prior Lake, Eden Prairie",
    serviceAreaList: ["Bloomington", "Richfield", "Edina", "Minneapolis", "Burnsville", "Eden Prairie"],
    licenseNumber: "MN-PLB-PM063200",
    primaryColor: "#1E3A5F",
    accentColor: "#DBEAFE",
    established: "1938",
    specialties: "Family-owned since 1938 — three generations of licensed master plumbers serving Bloomington and the south Twin Cities metro",
    googleRating: "4.8",
    reviewCount: "65+",
    availability: "Emergency Service Available",
    responseTime: "Same-Day Available",
    reviews: [
      {
        name: "Ruth A.",
        neighborhood: "Bloomington",
        text: "My parents used Blaylock, and now I do too. That says everything. Three generations of plumbers who care about doing the job right. On time, professional, and priced fairly. The best in Bloomington.",
      },
      {
        name: "Bob J.",
        neighborhood: "Richfield",
        text: "Called Blaylock after two other plumbers cancelled. They fit me in same day, fixed the problem in an hour, and the price was completely fair. Old-school service ethic that's hard to find.",
      },
      {
        name: "Mary S.",
        neighborhood: "Edina",
        text: "85 years in business because they earn it every time. Professional, punctual, and the work is always done right. I won't use anyone else.",
      },
    ],
    services: [
      {
        title: "Pipe Repair & Repiping",
        desc: "Leaks stopped and full-home repiping done by master plumbers — right the first time.",
        icon: "🔩",
      },
      {
        title: "Water Heater Service",
        desc: "Repair or replace any brand of water heater — emergency service available.",
        icon: "🔥",
      },
      {
        title: "Drain & Sewer Cleaning",
        desc: "Professional drain clearing for every drain in your home — fast and thorough.",
        icon: "🔧",
      },
      {
        title: "Fixture Installation",
        desc: "Faucets, toilets, showers — installed cleanly by licensed plumbers.",
        icon: "🚿",
      },
      {
        title: "Sewer Line Service",
        desc: "Camera inspection, spot repair, and sewer line replacement done right.",
        icon: "🏗️",
      },
      {
        title: "Emergency Plumbing",
        desc: "Burst pipes and urgent failures — fast response, fair pricing.",
        icon: "🚨",
      },
    ],
  },

  {
    slug: "master-plumbing-services",
    name: "Master Plumbing Services",
    phone: "(651) 457-7100",
    email: "info@mnmps.com",
    address: "P.O. Box 2451, Inver Grove Heights, MN 55076",
    website: "mnmps.com",
    tagline: "Master Licensed. Locally Owned. Satisfaction Guaranteed.",
    subTagline:
      "Master Plumbing Services is a family-owned Twin Cities plumbing contractor providing clean, professional service across the south and east metro. We're licensed, on time, and priced fairly.",
    serviceArea: "Inver Grove Heights, Woodbury, Eagan, Burnsville, Apple Valley, Rosemount, South St. Paul, West St. Paul",
    serviceAreaList: ["Inver Grove Heights", "Woodbury", "Eagan", "Burnsville", "Apple Valley", "Rosemount"],
    licenseNumber: "MN-PLB-55076",
    primaryColor: "#0F766E",
    accentColor: "#CCFBF1",
    established: "2005",
    specialties: "Family-owned master plumbing — south and east Twin Cities metro — clean, on time, and fairly priced with 24/7 emergency service",
    googleRating: "4.8",
    reviewCount: "40+",
    availability: "24/7 Emergency Available",
    responseTime: "Rapid Response",
    reviews: [
      {
        name: "Kevin L.",
        neighborhood: "Woodbury",
        text: "Professional, on time, and completely transparent about pricing. Came in, assessed the issue, explained my options, and did exactly what he said he would. No surprises. Highly recommend.",
      },
      {
        name: "Jennifer T.",
        neighborhood: "Eagan",
        text: "Master Plumbing has done two jobs for me and both experiences were excellent. Clean work, fair pricing, and great communication from first call to completion.",
      },
      {
        name: "Dave R.",
        neighborhood: "Inver Grove Heights",
        text: "Called on a Sunday with a burst pipe. They answered on the first ring, were at the house within an hour, and had it fully repaired within two. These guys take their service promise seriously.",
      },
    ],
    services: [
      {
        title: "Plumbing Repair",
        desc: "Leaks, clogs, broken fixtures, burst pipes — any plumbing repair handled fast.",
        icon: "🔧",
      },
      {
        title: "Water Heater Service",
        desc: "All brands repaired or replaced. Tankless upgrades available. Same-day service.",
        icon: "🔥",
      },
      {
        title: "Drain & Sewer Cleaning",
        desc: "Professional drain cleaning for all residential and light commercial applications.",
        icon: "🏗️",
      },
      {
        title: "Pipe Repair & Repiping",
        desc: "Leaks fixed and homes repiped — done correctly with master-level craftsmanship.",
        icon: "🔩",
      },
      {
        title: "Bathroom Remodel Plumbing",
        desc: "Rough-in and finish plumbing for bath remodels — clean, code-compliant work.",
        icon: "🛁",
      },
      {
        title: "Emergency Service",
        desc: "24/7 emergency plumbing — we answer the phone, day or night.",
        icon: "🚨",
      },
    ],
  },

  {
    slug: "aqualine-mechanical",
    name: "Aqualine Mechanical",
    phone: "(612) 247-1119",
    email: "info@aqualinemechanical.com",
    address: "Minneapolis, MN (Western Suburbs)",
    website: "aqualinemechanical.com",
    tagline: "30+ Years. Green Certified. West Suburbs Trusted.",
    subTagline:
      "Aqualine Mechanical has served Minneapolis-area homeowners for over 30 years. One of the few Certified Green Plumbers in the metro — expert remodeling, service work, and backflow testing for the west suburbs.",
    serviceArea: "St. Louis Park, Hopkins, Minnetonka, Plymouth, Golden Valley, New Hope, Crystal, Edina",
    serviceAreaList: ["St. Louis Park", "Hopkins", "Minnetonka", "Plymouth", "Golden Valley", "New Hope"],
    licenseNumber: "MN-PLB-PC150234",
    primaryColor: "#065F46",
    accentColor: "#D1FAE5",
    established: "1993",
    specialties: "Certified Green Plumber — remodeling and service plumbing, backflow testing and rebuilding, west Minneapolis suburbs for 30+ years",
    googleRating: "4.9",
    reviewCount: "55+",
    availability: "Appointments Available — Fast Response",
    responseTime: "Rapid Response Available",
    badgeHighlight: "Certified Green Plumber",
    reviews: [
      {
        name: "Kate H.",
        neighborhood: "St. Louis Park",
        text: "Aqualine has been our plumber for 10 years. Every job is done with care — they explain what needs to happen, quote accurately, and leave the place spotless. Worth every penny.",
      },
      {
        name: "Chris B.",
        neighborhood: "Hopkins",
        text: "Knowledgeable team that actually listens to what you need. They gave me green options for my water heater replacement that saved money over time. Clean work, great communication.",
      },
      {
        name: "Linda R.",
        neighborhood: "Minnetonka",
        text: "We've used Aqualine for everything from emergency repairs to a full bathroom remodel. Reliable, honest, and they stand behind their work completely. Absolutely recommend.",
      },
    ],
    services: [
      {
        title: "Bathroom & Kitchen Remodel Plumbing",
        desc: "Complete remodel plumbing from rough-in to finish — clean, code-compliant, on time.",
        icon: "🛁",
      },
      {
        title: "Backflow Testing & Rebuilding",
        desc: "Certified RPZ backflow testing and rebuilding — residential and commercial.",
        icon: "🛡️",
      },
      {
        title: "Water Heater Service",
        desc: "Conventional and tankless water heater repair and replacement. Green options available.",
        icon: "🔥",
      },
      {
        title: "Pipe Repair & Repiping",
        desc: "Leaks repaired and full repiping done right by experienced master plumbers.",
        icon: "🔩",
      },
      {
        title: "Drain & Sewer Cleaning",
        desc: "Professional drain clearing — residential and light commercial.",
        icon: "🔧",
      },
      {
        title: "Gas Line Service",
        desc: "Licensed gas fitter — stoves, dryers, water heaters, and gas line installs.",
        icon: "🔴",
      },
    ],
  },

  // ─── BATCH 3: 10 MORE MINNEAPOLIS/ST. PAUL PLUMBERS ───

  {
    slug: "bonfe-plumbing",
    name: "Bonfe Plumbing, Heating & Air",
    phone: "(651) 228-7140",
    email: "info@bonfe.com",
    address: "455 Hardman Ave, South Saint Paul, MN 55075",
    website: "bonfe.com",
    tagline: "30+ Years. Every Trade. One Call.",
    subTagline:
      "Bonfe has served Twin Cities homeowners since 1993 — plumbing, heating, cooling, and electrical under one roof. Award-winning service with a 100% satisfaction guarantee and same-day availability.",
    serviceArea: "St. Paul, Minneapolis, Woodbury, Eagan, Burnsville, Apple Valley, Rosemount, Inver Grove Heights",
    serviceAreaList: ["St. Paul", "Minneapolis", "Woodbury", "Eagan", "Burnsville", "Apple Valley"],
    licenseNumber: "MN-PLB-93455",
    primaryColor: "#B91C1C",
    accentColor: "#FEE2E2",
    established: "1993",
    specialties: "Full-service plumbing, heating, cooling, and electrical — Twin Cities metro since 1993 — BBB Accredited, award-winning, satisfaction guaranteed",
    googleRating: "4.7",
    reviewCount: "300+",
    availability: "Same-Day Service — 7 Days a Week",
    responseTime: "Same-Day Available",
    badgeHighlight: "BBB Accredited",
    reviews: [
      {
        name: "Janet K.",
        neighborhood: "Eagan",
        text: "Bonfe has done plumbing and HVAC work at my home for years. They always show up on time, explain what they're doing, and leave everything clean. One call handles everything — that's worth a lot.",
      },
      {
        name: "Tom L.",
        neighborhood: "Woodbury",
        text: "Had a water heater fail on a Sunday. Bonfe had a tech out within three hours and the new unit was installed by 5pm. The price was fair and the work was excellent. Will always call them first.",
      },
      {
        name: "Carol M.",
        neighborhood: "St. Paul",
        text: "Called Bonfe when I smelled gas. They picked up immediately, sent a licensed tech within the hour, and had the issue resolved before dinner. Calm, professional, and completely reassuring. Best in the city.",
      },
    ],
    services: [
      {
        title: "Plumbing Repair & Install",
        desc: "Leaks, water heaters, drains, fixtures — full residential plumbing handled fast.",
        icon: "🔧",
      },
      {
        title: "Drain & Sewer Cleaning",
        desc: "Cleared with professional cable and hydro-jet equipment — residential and commercial.",
        icon: "🏗️",
      },
      {
        title: "Water Heater Service",
        desc: "All brands repaired or replaced. Tankless upgrades available. Same-day service.",
        icon: "🔥",
      },
      {
        title: "Gas Line Service",
        desc: "Licensed gas fitter — leak detection, gas line repair, new line installations.",
        icon: "🔴",
      },
      {
        title: "Sump Pump Service",
        desc: "Installation, repair, and battery backup for basement sump pump systems.",
        icon: "🌊",
      },
      {
        title: "Emergency Plumbing",
        desc: "Same-day emergency service, 7 days a week — we pick up and we show up.",
        icon: "🚨",
      },
    ],
  },

  {
    slug: "soderlin-plumbing",
    name: "Soderlin Plumbing, Heating & Air",
    phone: "(612) 721-4080",
    email: "info@soderlin.com",
    address: "3612 Cedar Ave S, Minneapolis, MN 55407",
    website: "soderlin.com",
    tagline: "Veteran-Owned. Serving Minneapolis Since 1914.",
    subTagline:
      "Over 110 years of Twin Cities service — and still family-owned. Soderlin is a veteran-operated plumbing, heating, and air conditioning company in South Minneapolis. Small shop, senior-level craftsmen, zero corporate markup.",
    serviceArea: "Minneapolis, Richfield, Edina, St. Louis Park, Bloomington, South Minneapolis, Nokomis, Longfellow",
    serviceAreaList: ["Minneapolis", "Richfield", "Edina", "St. Louis Park", "Bloomington", "Nokomis"],
    licenseNumber: "MN-PLB-14112",
    primaryColor: "#1E3A5F",
    accentColor: "#DBEAFE",
    established: "1914",
    specialties: "Veteran- and family-owned plumbing, heating, and air conditioning — Minneapolis since 1914 — senior craftsmen, no corporate markup",
    googleRating: "4.8",
    reviewCount: "40+",
    availability: "Emergency & Same-Day Available",
    responseTime: "Same-Day Response",
    badgeHighlight: "Veteran-Owned",
    reviews: [
      {
        name: "Susan E.",
        neighborhood: "South Minneapolis",
        text: "Soderlin has been our go-to for 20 years. They know our old house inside and out, show up when they say they will, and always charge a fair price. Family-owned businesses like this are rare — we feel lucky to have them.",
      },
      {
        name: "Brian H.",
        neighborhood: "Richfield",
        text: "Called for a furnace issue in February and they were there the next morning. The tech was knowledgeable, honest about what was needed, and fixed it right the first time. Very fair pricing for outstanding work.",
      },
      {
        name: "Diane W.",
        neighborhood: "Edina",
        text: "Over a century in business because they earn it every time. Professional, thorough, and genuinely kind. You can tell this company values its reputation above everything else.",
      },
    ],
    services: [
      {
        title: "Plumbing Repair & Service",
        desc: "All residential plumbing repairs — pipes, fixtures, water heaters, drains.",
        icon: "🔧",
      },
      {
        title: "Boiler & Radiator Service",
        desc: "Hot water boiler repair and replacement — specialists in old-home heating systems.",
        icon: "🔥",
      },
      {
        title: "Air Conditioning Service",
        desc: "Central AC and ductless systems installed, repaired, and maintained.",
        icon: "❄️",
      },
      {
        title: "Furnace Repair & Replace",
        desc: "All brands diagnosed and repaired. Emergency service available in winter.",
        icon: "🌡️",
      },
      {
        title: "Water Heater Service",
        desc: "Traditional and tankless water heater repair and replacement.",
        icon: "💧",
      },
      {
        title: "Emergency Service",
        desc: "Fast response to urgent plumbing and heating failures — we answer the phone.",
        icon: "🚨",
      },
    ],
  },

  {
    slug: "msp-plumbing",
    name: "MSP Plumbing Heating Air",
    phone: "(651) 228-9200",
    email: "service@mspplumbingheatingair.com",
    address: "2415 Ventura Dr, Woodbury, MN 55125",
    website: "mspplumbingheatingair.com",
    tagline: "Serving the Twin Cities Since 1918. All Trades. One Call.",
    subTagline:
      "Over 100 years of Twin Cities service — plumbing, heating, and air conditioning from a single trusted team. MSP serves the entire metro, from Hennepin County to Dakota County, with same-day service and upfront pricing.",
    serviceArea: "Woodbury, St. Paul, Minneapolis, Eagan, Burnsville, Bloomington, Apple Valley, Cottage Grove",
    serviceAreaList: ["Woodbury", "St. Paul", "Minneapolis", "Eagan", "Burnsville", "Apple Valley"],
    licenseNumber: "MN-PLB-18002",
    primaryColor: "#0369A1",
    accentColor: "#E0F2FE",
    established: "1918",
    specialties: "Full-service plumbing, heating, and air conditioning across the Twin Cities metro — serving since 1918, same-day availability, upfront pricing",
    googleRating: "4.7",
    reviewCount: "130+",
    availability: "Same-Day Service Available",
    responseTime: "Same-Day Response",
    reviews: [
      {
        name: "Chris A.",
        neighborhood: "Woodbury",
        text: "Called MSP for a furnace repair in January and they were out the same day. The tech was professional, explained everything, and had the part on the truck. Heat was back on within two hours. Highly recommend.",
      },
      {
        name: "Laura P.",
        neighborhood: "Eagan",
        text: "MSP has done three jobs for me — furnace, AC, and plumbing. Every single one was excellent. On time, transparent pricing, clean work. This is what home services should look like.",
      },
      {
        name: "Mark D.",
        neighborhood: "Cottage Grove",
        text: "Water heater failed and they had a new one installed the same day I called. No surprises on the bill. Knowledgeable, efficient, and professional. Will use them for everything going forward.",
      },
    ],
    services: [
      {
        title: "Plumbing Repair & Install",
        desc: "All residential and commercial plumbing repairs, installations, and upgrades.",
        icon: "🔧",
      },
      {
        title: "Water Heater Service",
        desc: "Repair or replace any water heater brand — same-day service often available.",
        icon: "🔥",
      },
      {
        title: "Furnace & Heating Service",
        desc: "Furnace repair, replacement, and tune-ups — fast response in winter emergencies.",
        icon: "🌡️",
      },
      {
        title: "Air Conditioning Service",
        desc: "Central AC repair, replacement, and maintenance for any system.",
        icon: "❄️",
      },
      {
        title: "Drain & Sewer Cleaning",
        desc: "Professional drain clearing — residential and commercial — cable and hydro-jet.",
        icon: "🏗️",
      },
      {
        title: "Emergency Service",
        desc: "Urgent plumbing, heating, and cooling failures handled same day.",
        icon: "🚨",
      },
    ],
  },

  {
    slug: "hero-plumbing",
    name: "Hero Plumbing, Heating & Cooling",
    phone: "(612) 260-1718",
    email: "service@callhero.com",
    address: "10900 Hampshire Ave S #120, Minneapolis, MN 55438",
    website: "callhero.com",
    tagline: "4.7 Stars. 12,700+ Reviews. Here to Save the Day.",
    subTagline:
      "Hero is the Twin Cities' most reviewed home services company. Plumbing, heating, cooling, drains, and electrical — one call handles it all. BBB Accredited with an A+ rating and same-day availability 7 days a week.",
    serviceArea: "Minneapolis, Bloomington, Eden Prairie, Burnsville, Eagan, Apple Valley, Savage, Shakopee",
    serviceAreaList: ["Minneapolis", "Bloomington", "Eden Prairie", "Burnsville", "Eagan", "Apple Valley"],
    licenseNumber: "MN-PLB-55438",
    primaryColor: "#DC2626",
    accentColor: "#FEE2E2",
    established: "2001",
    specialties: "Twin Cities most-reviewed home service company — plumbing, HVAC, drains, and electrical — BBB A+ rated, same-day service 7 days a week",
    googleRating: "4.7",
    reviewCount: "12,700+",
    availability: "Same-Day Service — 7 Days a Week",
    responseTime: "Same-Day Guaranteed",
    badgeHighlight: "BBB A+ Accredited",
    reviews: [
      {
        name: "Rachel B.",
        neighborhood: "Bloomington",
        text: "Hero came out same day, diagnosed the issue quickly, and had it fixed before I had to leave for work. The tech was professional, clean, and really friendly. With over 12,000 reviews you know they're doing something right.",
      },
      {
        name: "Kevin O.",
        neighborhood: "Eden Prairie",
        text: "Excellent from first call to completion. Booked online, got a time window that actually held, and the tech showed up on time and ready to work. Fixed the drain issue in one visit. Five stars.",
      },
      {
        name: "Ann S.",
        neighborhood: "Minneapolis",
        text: "Called Hero at 8am for a water heater emergency. They were at my house by 10:30 and the new unit was installed by 1pm. Price was fair and communicated upfront. Exactly what you want when something fails.",
      },
    ],
    services: [
      {
        title: "Plumbing Repair & Install",
        desc: "Any plumbing issue handled fast — leaks, drains, fixtures, water heaters.",
        icon: "🔧",
      },
      {
        title: "Drain & Sewer Cleaning",
        desc: "Professional drain clearing with camera inspection — residential and commercial.",
        icon: "🏗️",
      },
      {
        title: "Water Heater Service",
        desc: "Same-day repair or replacement on all brands. Tankless upgrades available.",
        icon: "🔥",
      },
      {
        title: "Furnace & AC Service",
        desc: "Heating and cooling repair, replacement, and tune-ups — fast response guaranteed.",
        icon: "❄️",
      },
      {
        title: "Electrical Service",
        desc: "Licensed electricians for panel upgrades, outlets, fixtures, and EV chargers.",
        icon: "⚡",
      },
      {
        title: "Emergency Service",
        desc: "7-day emergency service — we answer, we show up, we fix it.",
        icon: "🚨",
      },
    ],
  },

  {
    slug: "cities-1-plumbing",
    name: "Cities 1 Plumbing, Heating & AC",
    phone: "(651) 705-0877",
    email: "service@cities1plumbing.com",
    address: "787 Hubbard Ave, Saint Paul, MN 55104",
    website: "cities1plumbing.com",
    tagline: "BBB Accredited. RPZ Certified. Saint Paul's Local Experts.",
    subTagline:
      "Cities 1 Plumbing, Heating & AC provides residential and commercial plumbing and HVAC services in the Saint Paul area. Licensed, bonded, and BBB Accredited — clean work and honest pricing every time.",
    serviceArea: "Saint Paul, Minneapolis, Roseville, Maplewood, Little Canada, Arden Hills, Shoreview, White Bear Lake",
    serviceAreaList: ["Saint Paul", "Minneapolis", "Roseville", "Maplewood", "Little Canada", "Shoreview"],
    licenseNumber: "MN-PLB-55104",
    primaryColor: "#1D4ED8",
    accentColor: "#DBEAFE",
    established: "2008",
    specialties: "BBB Accredited residential and commercial plumbing and HVAC — Saint Paul — licensed RPZ backflow testing and rebuilding specialists",
    googleRating: "4.8",
    reviewCount: "50+",
    availability: "Same-Day Available",
    responseTime: "Fast Response",
    badgeHighlight: "RPZ Backflow Certified",
    reviews: [
      {
        name: "James N.",
        neighborhood: "Saint Paul",
        text: "Called Cities 1 for a boiler issue and they had someone out the same day. The tech was thorough, patient, and explained everything clearly. Priced fairly and the work was excellent. My go-to from now on.",
      },
      {
        name: "Patricia O.",
        neighborhood: "Roseville",
        text: "RPZ testing done fast and professionally. They called ahead, arrived on time, and had the paperwork filed before they left. Clean, efficient, and easy to work with.",
      },
      {
        name: "Ron H.",
        neighborhood: "Maplewood",
        text: "Had a plumbing emergency on a Saturday. Cities 1 picked up, gave me an honest estimate over the phone, and had a tech at my house within two hours. Excellent work at a fair price.",
      },
    ],
    services: [
      {
        title: "Plumbing Repair & Service",
        desc: "All residential and commercial plumbing — leaks, drains, fixtures, and more.",
        icon: "🔧",
      },
      {
        title: "RPZ Backflow Testing",
        desc: "Certified RPZ testing and rebuilding — residential and commercial — same-day.",
        icon: "🛡️",
      },
      {
        title: "Boiler & Radiator Service",
        desc: "Boiler repair, replacement, and radiator work for Saint Paul's older homes.",
        icon: "🔥",
      },
      {
        title: "Air Conditioning Service",
        desc: "Central AC and ductless systems installed, repaired, and maintained.",
        icon: "❄️",
      },
      {
        title: "Water Heater Service",
        desc: "Repair or replace any water heater brand. Same-day service available.",
        icon: "💧",
      },
      {
        title: "Emergency Plumbing",
        desc: "Urgent plumbing failures handled fast — we answer and we show up.",
        icon: "🚨",
      },
    ],
  },

  {
    slug: "polar-plumbing",
    name: "Polar Plumbing",
    phone: "(651) 777-7525",
    email: "service@polarplumbing.com",
    address: "6087 46th St N, Oakdale, MN 55128",
    website: "polarplumbing.com",
    tagline: "Honest Plumber. East Metro's Best-Kept Secret.",
    subTagline:
      "Polar Plumbing is a locally owned plumbing company serving Oakdale, Woodbury, Maplewood, and the east Saint Paul metro. Owner-operated, honest diagnosis, no upselling — just reliable work at a fair price.",
    serviceArea: "Oakdale, Woodbury, Maplewood, Saint Paul East, Stillwater, White Bear Lake, Hudson, Vadnais Heights",
    serviceAreaList: ["Oakdale", "Woodbury", "Maplewood", "White Bear Lake", "Stillwater", "Vadnais Heights"],
    licenseNumber: "MN-PLB-55128",
    primaryColor: "#1E40AF",
    accentColor: "#DBEAFE",
    established: "2001",
    specialties: "Owner-operated residential plumbing — east Saint Paul metro — honest diagnosis, no upselling, fair pricing since 2001",
    googleRating: "4.8",
    reviewCount: "30+",
    availability: "Same-Day Often Available",
    responseTime: "Fast Response",
    reviews: [
      {
        name: "Lance T.",
        neighborhood: "Oakdale",
        text: "Called Polar Plumbing after getting a crazy quote from another company. Night and day difference — honest diagnosis, fair price, excellent work. I've recommended them to my whole neighborhood.",
      },
      {
        name: "Kathy S.",
        neighborhood: "Woodbury",
        text: "Owner came out personally, figured out what was wrong in 10 minutes, and fixed it for a fraction of what I was expecting to pay. Refreshingly honest. My permanent plumber.",
      },
      {
        name: "Gary M.",
        neighborhood: "Maplewood",
        text: "Septic and drain issues handled quickly and correctly. They were on time, communicative, and did exactly what they said they would. Zero surprises. This is the east metro's best plumber.",
      },
    ],
    services: [
      {
        title: "Plumbing Repair",
        desc: "Leaks, drips, broken fixtures, and burst pipes — diagnosed and fixed right.",
        icon: "🔧",
      },
      {
        title: "Drain Cleaning",
        desc: "Slow or stopped drains cleared with professional equipment — any drain.",
        icon: "🏗️",
      },
      {
        title: "Water Heater Service",
        desc: "Repair or replace any brand. Honest options, no upselling.",
        icon: "🔥",
      },
      {
        title: "Septic & Sewer Service",
        desc: "Septic system service, sewer line cleaning, and sewer repairs.",
        icon: "🌊",
      },
      {
        title: "Backflow Testing",
        desc: "Certified backflow prevention testing — residential and commercial.",
        icon: "🛡️",
      },
      {
        title: "Fixture Installation",
        desc: "Toilets, faucets, showers, and sinks installed correctly the first time.",
        icon: "🚿",
      },
    ],
  },

  {
    slug: "twin-cities-premier",
    name: "Twin Cities Premier Plumbing",
    phone: "(763) 343-9806",
    email: "service@twincitiespremierplumbing.com",
    address: "4748 Zane Ave N, Minneapolis, MN 55429",
    website: "twincitiespremierplumbing.com",
    tagline: "Fast Response. Upfront Pricing. Northwest Metro Covered.",
    subTagline:
      "Twin Cities Premier Plumbing serves Minneapolis and the northwest suburbs with fast, professional residential plumbing. Licensed and insured, with same-day service options and transparent pricing from your first call.",
    serviceArea: "Minneapolis, Brooklyn Center, Brooklyn Park, Crystal, New Hope, Robbinsdale, Golden Valley, Plymouth",
    serviceAreaList: ["Minneapolis", "Brooklyn Center", "Brooklyn Park", "Crystal", "New Hope", "Robbinsdale"],
    licenseNumber: "MN-PLB-55429",
    primaryColor: "#0F766E",
    accentColor: "#CCFBF1",
    established: "2015",
    specialties: "Licensed residential plumbing — northwest Minneapolis metro — same-day options, upfront pricing, fast response",
    googleRating: "4.8",
    reviewCount: "45+",
    availability: "Same-Day Often Available",
    responseTime: "Fast Response",
    reviews: [
      {
        name: "Donna B.",
        neighborhood: "Brooklyn Park",
        text: "Called Twin Cities Premier on a Monday morning with a broken water line. They gave me an upfront estimate over the phone, showed up within two hours, and finished the job before lunch. Clean work and a fair price.",
      },
      {
        name: "Scott H.",
        neighborhood: "Crystal",
        text: "Finally found a plumber who actually picks up the phone and shows up when they say they will. Replaced my water heater same day, explained all my options, and left everything spotless. Highly recommended.",
      },
      {
        name: "Michelle T.",
        neighborhood: "New Hope",
        text: "Used them twice now. Both times: on time, professional, and priced exactly as quoted. No hidden fees, no surprises. Twin Cities Premier is my permanent plumber for the northwest suburbs.",
      },
    ],
    services: [
      {
        title: "Plumbing Repair",
        desc: "Leaks, clogs, broken fixtures — any residential plumbing repair done fast.",
        icon: "🔧",
      },
      {
        title: "Water Heater Service",
        desc: "All brands repaired or replaced. Same-day service often available.",
        icon: "🔥",
      },
      {
        title: "Drain Cleaning",
        desc: "Every drain cleared — kitchen, bath, laundry, and floor drains.",
        icon: "🏗️",
      },
      {
        title: "Fixture Installation",
        desc: "Faucets, toilets, showers, and sinks installed correctly.",
        icon: "🚿",
      },
      {
        title: "Pipe Repair & Repiping",
        desc: "Leaks fixed and homes repiped by licensed plumbers.",
        icon: "🔩",
      },
      {
        title: "Emergency Plumbing",
        desc: "Urgent plumbing problems handled fast — we answer, we show up.",
        icon: "🚨",
      },
    ],
  },

  {
    slug: "edwards-plumbing",
    name: "Edwards Plumbing",
    phone: "(651) 769-1192",
    email: "info@mikeedwardsplumbinginc.com",
    address: "8519 Jeffery Ave S, Cottage Grove, MN 55016",
    website: "mikeedwardsplumbinginc.com",
    tagline: "Family-Owned Since 1981. Southeast Metro's Trusted Plumber.",
    subTagline:
      "Mike and Lori Edwards founded this company in 1981 and it's been family-owned ever since. Edwards Plumbing serves the south and east Twin Cities metro with honest, award-winning residential plumbing.",
    serviceArea: "Cottage Grove, Hastings, Woodbury, Eagan, Inver Grove Heights, South St. Paul, West St. Paul, Roseville",
    serviceAreaList: ["Cottage Grove", "Hastings", "Woodbury", "Eagan", "Inver Grove Heights", "South St. Paul"],
    licenseNumber: "MN-PLB-81055",
    primaryColor: "#7C2D12",
    accentColor: "#FEF3C7",
    established: "1981",
    specialties: "Family-owned residential plumbing since 1981 — award-winning service in the south and east Twin Cities suburbs",
    googleRating: "4.8",
    reviewCount: "60+",
    availability: "Same-Day Available",
    responseTime: "Same-Day Response",
    reviews: [
      {
        name: "Sue W.",
        neighborhood: "Cottage Grove",
        text: "I've used Edwards Plumbing for over 15 years. They know my house, know my history, and always show up with a smile. Mike and his team are honest, reliable, and the best in the area. Period.",
      },
      {
        name: "Jim F.",
        neighborhood: "Woodbury",
        text: "Called Edwards for a water heater replacement. They came out the same day, gave me a fair quote, and had it installed by the afternoon. Clean work, no mess, exactly as promised.",
      },
      {
        name: "Barb K.",
        neighborhood: "Eagan",
        text: "Family business that treats you like family. Edwards has done plumbing work at my home four times over the years — every experience has been excellent. They've earned a customer for life.",
      },
    ],
    services: [
      {
        title: "Plumbing Repair",
        desc: "All residential plumbing repairs handled promptly and correctly.",
        icon: "🔧",
      },
      {
        title: "Water Heater Service",
        desc: "Repair or replace any brand. Fair pricing and fast turnaround.",
        icon: "🔥",
      },
      {
        title: "Drain Cleaning",
        desc: "Any drain cleared — kitchen, bath, laundry, and main sewer lines.",
        icon: "🏗️",
      },
      {
        title: "Sump Pump Service",
        desc: "Sump pump installation, repair, and battery backup systems.",
        icon: "🌊",
      },
      {
        title: "Fixture Installation",
        desc: "Faucets, toilets, showers, and sinks installed cleanly and correctly.",
        icon: "🚿",
      },
      {
        title: "Pipe Repair & Repiping",
        desc: "Leaks stopped and full repiping done right — by licensed plumbers.",
        icon: "🔩",
      },
    ],
  },

  {
    slug: "kens-sewer",
    name: "Ken's Sewer Co.",
    phone: "(952) 929-4146",
    email: "info@kensewer.com",
    address: "3017 Natchez Ave S, Minneapolis, MN 55416",
    website: "kensewer.com",
    tagline: "Drain & Sewer Specialists Since 1971. Residential & Commercial.",
    subTagline:
      "Ken's Sewer Co. has been the Twin Cities' go-to drain and sewer cleaning specialists since 1971. Family-owned and operated, with licensed plumbers and expert technicians available for any drain or sewer need.",
    serviceArea: "Minneapolis, St. Louis Park, Edina, Bloomington, Eden Prairie, Minnetonka, Hopkins, St. Paul",
    serviceAreaList: ["Minneapolis", "St. Louis Park", "Edina", "Bloomington", "Eden Prairie", "Hopkins"],
    licenseNumber: "MN-PLB-71416",
    primaryColor: "#166534",
    accentColor: "#DCFCE7",
    established: "1971",
    specialties: "Family-owned drain and sewer specialists serving the Twin Cities since 1971 — residential and commercial — licensed plumbers on staff",
    googleRating: "4.8",
    reviewCount: "80+",
    availability: "Emergency Service Available",
    responseTime: "Same-Day Available",
    reviews: [
      {
        name: "Linda T.",
        neighborhood: "St. Louis Park",
        text: "Ken's has been my go-to for 20 years. They know their stuff, they're always professional, and the price is always fair. Nobody in the metro handles drains and sewers better than these guys.",
      },
      {
        name: "John R.",
        neighborhood: "Edina",
        text: "Main line backup on a Saturday morning. Called Ken's, they were there by noon, and had it cleared in an hour. Explained what caused it and how to prevent it. Excellent service.",
      },
      {
        name: "Patricia H.",
        neighborhood: "Minneapolis",
        text: "Used Ken's for a commercial kitchen floor drain emergency. They responded fast, knew exactly what to do, and had us back in service quickly. Professional from start to finish.",
      },
    ],
    services: [
      {
        title: "Main Sewer Cleaning",
        desc: "Cable and hydro-jet cleaning for main sewer line blockages — fast and thorough.",
        icon: "🏗️",
      },
      {
        title: "Drain Cleaning",
        desc: "Every drain in your home or business cleared — kitchen, bath, laundry, floor drains.",
        icon: "🔧",
      },
      {
        title: "Camera Inspection",
        desc: "Video inspection to locate blockages, cracks, and root intrusion.",
        icon: "📷",
      },
      {
        title: "Plumbing Repair & Install",
        desc: "Licensed plumbers on staff for all residential and commercial plumbing needs.",
        icon: "🔩",
      },
      {
        title: "Commercial Drain Service",
        desc: "Restaurant drains, floor drains, and commercial sewer service — accounts welcome.",
        icon: "🏢",
      },
      {
        title: "Emergency Service",
        desc: "Urgent drain and sewer emergencies handled fast — we answer when you call.",
        icon: "🚨",
      },
    ],
  },

  {
    slug: "cities-plumbing-heating",
    name: "Cities Plumbing and Heating",
    phone: "(651) 699-6958",
    email: "service@citiesplumbingheating.com",
    address: "1274 Grand Ave, Saint Paul, MN 55105",
    website: "citiesplumbingheating.com",
    tagline: "Grand Ave's Local Plumber. Fair Price. Every Job.",
    subTagline:
      "Cities Plumbing and Heating is a neighborhood plumbing company on Saint Paul's Grand Avenue. Locally owned, locally operated — serving Mac-Groveland, Highland Park, and the surrounding Saint Paul area with honest work and fair pricing.",
    serviceArea: "Saint Paul, Mac-Groveland, Highland Park, Summit Hill, West St. Paul, Mendota Heights, South Minneapolis",
    serviceAreaList: ["Saint Paul", "Mac-Groveland", "Highland Park", "Summit Hill", "West St. Paul", "Mendota Heights"],
    licenseNumber: "MN-PLB-55105",
    primaryColor: "#1E3A5F",
    accentColor: "#DBEAFE",
    established: "2003",
    specialties: "Neighborhood plumbing and heating for Saint Paul's Grand Avenue area — locally owned, honest pricing, plumbing inspections available",
    googleRating: "4.7",
    reviewCount: "40+",
    availability: "Same-Day Often Available",
    responseTime: "Same-Day Response",
    reviews: [
      {
        name: "Anne B.",
        neighborhood: "Mac-Groveland, St. Paul",
        text: "Cities Plumbing is our neighborhood plumber and they've never let us down. Came out the same day I called, fixed the issue quickly, and the price was more than fair. Exactly what a local plumber should be.",
      },
      {
        name: "Frank M.",
        neighborhood: "Highland Park",
        text: "Used Cities Plumbing for a plumbing inspection before we bought our house. Thorough, knowledgeable, and gave us a clear report that actually helped us negotiate. Great local business.",
      },
      {
        name: "Colleen S.",
        neighborhood: "Summit Hill",
        text: "Fixed a persistent leak that two other plumbers couldn't figure out. Straightforward diagnosis, honest pricing, and it's been solid ever since. This is the plumber you want in Saint Paul.",
      },
    ],
    services: [
      {
        title: "Plumbing Repair",
        desc: "All residential plumbing repairs — leaks, drains, fixtures, and more.",
        icon: "🔧",
      },
      {
        title: "Plumbing Inspection",
        desc: "Pre-purchase and code compliance inspections — detailed report provided.",
        icon: "📋",
      },
      {
        title: "Water Heater Service",
        desc: "Repair or replace any water heater. Honest options, no upselling.",
        icon: "🔥",
      },
      {
        title: "Drain Cleaning",
        desc: "Slow or stopped drains cleared fast — kitchen, bath, laundry, and main lines.",
        icon: "🏗️",
      },
      {
        title: "Fixture Installation",
        desc: "Faucets, toilets, showers, and sinks installed correctly.",
        icon: "🚿",
      },
      {
        title: "Pipe Repair & Repiping",
        desc: "Leaks fixed and pipes upgraded — licensed plumbers, fair prices.",
        icon: "🔩",
      },
    ],
  },

  // ─── ORIGINAL BATCH 1 CONTINUED ───

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
