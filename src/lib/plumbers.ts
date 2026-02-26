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
    tagline: "Three Generations of Trust.",
    subTagline: "Family-owned and operated since 1923. Quality work. Fair prices. Every time.",
    serviceArea: "Minneapolis, St. Paul, Edina, Richfield, Bloomington, Hopkins",
    serviceAreaList: ["Minneapolis", "St. Paul", "Edina", "Richfield", "Bloomington", "Hopkins"],
    licenseNumber: "MN-PLB-19231",
    primaryColor: "#1E3A5F",
    accentColor: "#C9A84C",
    established: "1923",
    specialties: "Residential plumbing for Twin Cities homes since 1923",
    reviews: [
      {
        name: "Patricia L.",
        neighborhood: "Uptown, Minneapolis",
        text: "I've been using Norblom for 20 years. Three different guys, all of them fantastic. They fixed what two other plumbers couldn't diagnose. Old-school quality.",
      },
      {
        name: "Ben M.",
        neighborhood: "St. Paul",
        text: "Called on a Friday afternoon, they were there by 3pm. Fair quote, clean work, and they found a second issue before it became a disaster. Real professionals.",
      },
      {
        name: "Diane R.",
        neighborhood: "Richfield",
        text: "Norblom has been in business longer than I've been alive. There's a reason for that. Honest, skilled, and they stand behind their work completely.",
      },
    ],
    services: [
      { title: "Drain Cleaning", desc: "Fast, thorough drain clearing for kitchen sinks, showers, tubs, and main lines.", icon: "🔧" },
      { title: "Water Heater Service", desc: "Repair or replace any water heater brand. Same-day availability on most jobs.", icon: "🔥" },
      { title: "Pipe Repair & Repiping", desc: "Expert repair of leaky pipes and full-home repiping for older Minneapolis homes.", icon: "🔩" },
      { title: "Fixture Installation", desc: "Faucets, toilets, sinks, and showers installed cleanly and correctly.", icon: "🚿" },
      { title: "Sewer Line Service", desc: "Camera inspection, cleaning, and full sewer line replacement.", icon: "🏗️" },
      { title: "Emergency Plumbing", desc: "Burst pipes, major leaks, and plumbing emergencies handled fast.", icon: "🚨" },
    ],
  },

  {
    slug: "weld-and-sons",
    name: "Weld & Sons Plumbing",
    phone: "(763) 475-0296",
    email: "info@weldandsons.com",
    address: "3410 Kilmer Ln N, Minneapolis, MN 55441",
    website: "weldandsons.com",
    tagline: "50 Years of Doing It Right.",
    subTagline: "Conservative craftsmanship. Honest estimates. A name your neighbors know.",
    serviceArea: "Minneapolis, Plymouth, Golden Valley, New Hope, Crystal, Robbinsdale",
    serviceAreaList: ["Minneapolis", "Plymouth", "Golden Valley", "New Hope", "Crystal", "Robbinsdale"],
    licenseNumber: "MN-PLB-74802",
    primaryColor: "#1D4ED8",
    accentColor: "#DBEAFE",
    established: "1974",
    specialties: "Residential & light commercial plumbing, northwest metro",
    reviews: [
      {
        name: "Tom A.",
        neighborhood: "Golden Valley",
        text: "My dad used Weld & Sons and now I use them too. They're the kind of company that still answers their own phone. Real craftsmen, not a service center.",
      },
      {
        name: "Kathy S.",
        neighborhood: "Plymouth",
        text: "They came out to fix a small leak and ended up catching a bigger problem before it flooded my basement. Honest and thorough — that's rare.",
      },
      {
        name: "Greg O.",
        neighborhood: "Crystal",
        text: "50 years in business for a reason. Showed up on time, explained the issue clearly, fixed it fast. Price was exactly what they quoted. Will always call Weld.",
      },
    ],
    services: [
      { title: "Pipe Repair & Repiping", desc: "From small leaks to full repipes — done right the first time.", icon: "🔩" },
      { title: "Water Heater Service", desc: "All makes and models. Repair, flush, or replace with same-day service.", icon: "🔥" },
      { title: "Drain Cleaning", desc: "Professional hydro-jetting and cable cleaning to clear any blockage.", icon: "🔧" },
      { title: "Fixture Installation", desc: "Kitchens, bathrooms, and utility rooms — we install everything.", icon: "🚿" },
      { title: "Emergency Plumbing", desc: "Fast response to burst pipes, flooding, and major leaks.", icon: "🚨" },
      { title: "Sewer Line Service", desc: "Inspection, spot repair, and full sewer line replacement.", icon: "🏗️" },
    ],
  },

  {
    slug: "spetz-plumbing",
    name: "Spetz Plumbing",
    phone: "(763) 200-1135",
    email: "service@spetzplumbing.com",
    address: "Champlin, MN 55316",
    website: "spetzplumbing.com",
    tagline: "Master Plumbers. Neighbor Prices.",
    subTagline: "Licensed master plumbers with 30 years of experience — and the prices of a neighbor, not a corporation.",
    serviceArea: "Champlin, Anoka, Maple Grove, Osseo, Brooklyn Park, Fridley",
    serviceAreaList: ["Champlin", "Anoka", "Maple Grove", "Osseo", "Brooklyn Park", "Fridley"],
    licenseNumber: "MN-PLB-30225",
    primaryColor: "#15803D",
    accentColor: "#DCFCE7",
    established: "2022",
    specialties: "Residential plumbing, north metro Minneapolis",
    reviews: [
      {
        name: "Jason W.",
        neighborhood: "Maple Grove",
        text: "Texted at 8am, had someone at the house by 10. They fixed the issue in an hour and the price was way lower than I expected from a master plumber. Book them now.",
      },
      {
        name: "Amanda K.",
        neighborhood: "Champlin",
        text: "I appreciate that they're local and honest. They told me upfront what was wrong and what it would cost. No games, no pressure. My go-to from now on.",
      },
      {
        name: "Mike D.",
        neighborhood: "Brooklyn Park",
        text: "Had a water heater fail on a Saturday. They picked up, came out, and had it replaced by 2pm. Saved the weekend. Seriously impressive.",
      },
    ],
    services: [
      { title: "Water Heater Repair & Replace", desc: "All brands. Emergency weekend service available.", icon: "🔥" },
      { title: "Fixture Installation", desc: "Faucets, toilets, hose bibs, outdoor spigots — done right.", icon: "🚿" },
      { title: "Pipe Repair", desc: "Pinhole leaks to burst pipes, we handle it fast.", icon: "🔩" },
      { title: "Drain Cleaning", desc: "Clear clogged drains quickly without the markup.", icon: "🔧" },
      { title: "Bathroom Remodel Plumbing", desc: "New shower valves, toilet rough-in, and more.", icon: "🛁" },
      { title: "Emergency Plumbing", desc: "We pick up. We show up. We fix it.", icon: "🚨" },
    ],
  },

  {
    slug: "erik-nelson-plumbing",
    name: "Erik Nelson Plumbing",
    phone: "(612) 242-6483",
    email: "info@eriknelsonplumbing.com",
    address: "2617 37th Ave S, Minneapolis, MN 55406",
    website: "eriknelsonplumbing.com",
    tagline: "South Minneapolis' Trusted Plumber.",
    subTagline: "Clean communication. Quality work. 16 years serving older Minneapolis homes with the care they deserve.",
    serviceArea: "South Minneapolis, Longfellow, Nokomis, Powderhorn, Seward, St. Paul",
    serviceAreaList: ["South Minneapolis", "Longfellow", "Nokomis", "Powderhorn", "Seward", "St. Paul"],
    licenseNumber: "MN-PLB-60845",
    primaryColor: "#0F766E",
    accentColor: "#CCFBF1",
    established: "2008",
    specialties: "Older home plumbing, South Minneapolis specialists",
    reviews: [
      {
        name: "Rachel H.",
        neighborhood: "Longfellow",
        text: "My house was built in 1928 and most plumbers act confused when they open the walls. Erik Nelson's team knows these old homes inside and out. Excellent work.",
      },
      {
        name: "Andrew B.",
        neighborhood: "Nokomis",
        text: "Cleaner than any plumber I've ever hired. Showed up, wore booties, protected my floors, fixed the issue, and left the place spotless. Straight communication throughout.",
      },
      {
        name: "Susan M.",
        neighborhood: "Powderhorn",
        text: "They've been on my street twice in the last year — both times for neighbors who called me raving. Now I have their number saved. Really solid company.",
      },
    ],
    services: [
      { title: "Old Home Plumbing", desc: "Specialists in pre-1970 Minneapolis homes. We know the quirks.", icon: "🏚️" },
      { title: "Sewer & Drain", desc: "Camera inspections, cleaning, and root removal for older lines.", icon: "🏗️" },
      { title: "Water Heater Service", desc: "Repair or replacement. Tankless upgrades available.", icon: "🔥" },
      { title: "Fixture Install & Repair", desc: "Every bathroom and kitchen fixture, done cleanly.", icon: "🚿" },
      { title: "Pipe Repair", desc: "Copper, galvanized, PVC — we work with it all.", icon: "🔩" },
      { title: "Emergency Plumbing", desc: "Responsive, clear communication from first call to final fix.", icon: "🚨" },
    ],
  },

  {
    slug: "ron-the-sewer-rat",
    name: "Ron the Sewer Rat",
    phone: "(612) 389-9669",
    email: "service@ronthesewerrat.com",
    address: "5229 27th Ave S, Minneapolis, MN 55417",
    website: "ronthesewerrat.com",
    tagline: "When Nobody Else Can Clear It — Call Ron.",
    subTagline: "50 years of drain and sewer expertise in the Twin Cities. We've seen everything, cleared everything.",
    serviceArea: "Minneapolis, St. Paul, Richfield, Edina, Bloomington, South Metro",
    serviceAreaList: ["Minneapolis", "St. Paul", "Richfield", "Edina", "Bloomington", "South Metro"],
    licenseNumber: "MN-PLB-72016",
    primaryColor: "#C2410C",
    accentColor: "#FED7AA",
    established: "1974",
    specialties: "Sewer and drain specialists, 50+ years Twin Cities",
    reviews: [
      {
        name: "Dave L.",
        neighborhood: "Minneapolis",
        text: "Three other plumbers couldn't clear my main line. Ron's guys came out, diagnosed a belly in the pipe, and had it working in two hours. Call them first.",
      },
      {
        name: "Linda G.",
        neighborhood: "Richfield",
        text: "50 years in business tells you everything you need to know. Fast, friendly, and the most reasonable price I got from any of the four plumbers I called.",
      },
      {
        name: "Chris V.",
        neighborhood: "Bloomington",
        text: "They did a camera inspection and showed me exactly what was happening in my sewer line. Very clear, very professional. No upselling, just the facts.",
      },
    ],
    services: [
      { title: "Main Sewer Cleaning", desc: "Cable and hydro-jet cleaning for the toughest main line blockages.", icon: "🏗️" },
      { title: "Camera Inspection", desc: "See exactly what's in your line before any digging starts.", icon: "📷" },
      { title: "Drain Cleaning", desc: "Every drain in the house — kitchen, bath, laundry, floor drains.", icon: "🔧" },
      { title: "Root Removal", desc: "Tree root intrusion removed fast before it becomes a bigger problem.", icon: "🌳" },
      { title: "Sewer Repair", desc: "Spot repairs and full line replacement when needed.", icon: "🔩" },
      { title: "Emergency Service", desc: "24/7 response to sewage backups and major blockages.", icon: "🚨" },
    ],
  },

  {
    slug: "plumb-right",
    name: "Plumb Right",
    phone: "(763) 299-9840",
    email: "service@callplumbright.com",
    address: "6900 Winnetka Cir, Brooklyn Park, MN 55428",
    website: "callplumbright.com",
    tagline: "3rd Generation. 100% Satisfaction.",
    subTagline: "Serving Minneapolis and the northwest suburbs since 1988. If you're not satisfied, we make it right — guaranteed.",
    serviceArea: "Brooklyn Park, Crystal, Osseo, Maple Grove, Champlin, Minneapolis NW",
    serviceAreaList: ["Brooklyn Park", "Crystal", "Osseo", "Maple Grove", "Champlin", "Minneapolis NW"],
    licenseNumber: "MN-PLB-88431",
    primaryColor: "#1E40AF",
    accentColor: "#DBEAFE",
    established: "1988",
    specialties: "3rd generation master plumbers, northwest metro",
    reviews: [
      {
        name: "Nancy T.",
        neighborhood: "Crystal",
        text: "Called Plumb Right based on a neighbor's recommendation and I get why they have fans. On time, courteous, finished early, and under budget. Outstanding.",
      },
      {
        name: "Rick J.",
        neighborhood: "Brooklyn Park",
        text: "They guarantee their work and they mean it. Had a small issue a week after a repair and they came back no questions asked. That's the way to run a business.",
      },
      {
        name: "Carol B.",
        neighborhood: "Maple Grove",
        text: "Third generation plumbers who still care about their reputation. That shows in every part of the job. Clean, professional, and genuinely friendly.",
      },
    ],
    services: [
      { title: "Emergency Plumbing", desc: "Burst pipes and flooding handled 24/7 — fast response guaranteed.", icon: "🚨" },
      { title: "Water Heater Service", desc: "All brands serviced and replaced. Financing available.", icon: "🔥" },
      { title: "Drain & Sewer Cleaning", desc: "Slow or stopped drains cleared with professional equipment.", icon: "🔧" },
      { title: "Fixture Installation", desc: "Toilets, faucets, showers — installed right the first time.", icon: "🚿" },
      { title: "Pipe Repair & Repiping", desc: "Fix the leak or upgrade the whole system.", icon: "🔩" },
      { title: "Sewer Camera Inspection", desc: "Know what's in your pipes before spending a dollar on repair.", icon: "🏗️" },
    ],
  },

  {
    slug: "gopher-sewer-drain",
    name: "Gopher Sewer & Drain",
    phone: "(612) 205-2306",
    email: "service@gopherseweranddrain.com",
    address: "4230 Central Ave NE, Columbia Heights, MN 55421",
    website: "gopherseweranddrain.com",
    tagline: "Honest Work. Fair Price. Every Time.",
    subTagline: "Drain and sewer specialists serving Minneapolis and the northeast metro — residential and commercial, 24/7.",
    serviceArea: "Columbia Heights, Minneapolis NE, Fridley, Mounds View, Spring Lake Park, Blaine",
    serviceAreaList: ["Columbia Heights", "Minneapolis NE", "Fridley", "Mounds View", "Spring Lake Park", "Blaine"],
    licenseNumber: "MN-PLB-55421",
    primaryColor: "#166534",
    accentColor: "#DCFCE7",
    established: "2005",
    specialties: "Drain and sewer specialists, residential and commercial",
    reviews: [
      {
        name: "Justin H.",
        neighborhood: "Minneapolis",
        text: "Pedro came out the same day, fixed our plumbing issue, and probably saved us $1000 by recommending the right fix instead of unnecessary work. That's the kind of company you keep.",
      },
      {
        name: "Maria C.",
        neighborhood: "Columbia Heights",
        text: "They're my first call every time. Fair pricing, zero games, shows up when they say they will. My whole neighborhood uses Gopher now.",
      },
      {
        name: "Bob W.",
        neighborhood: "Fridley",
        text: "Had a commercial kitchen floor drain emergency at 11pm. They answered, came out, and had it cleared before close. Lifesavers. Literally.",
      },
    ],
    services: [
      { title: "Sewer Cleaning", desc: "Hydro-jet or cable cleaning for main sewer lines and floor drains.", icon: "🏗️" },
      { title: "Camera Inspection", desc: "Video inspection of sewer and drain lines to pinpoint the problem.", icon: "📷" },
      { title: "Drain Cleaning", desc: "Kitchen sinks, bathroom sinks, laundry tubs, showers, and more.", icon: "🔧" },
      { title: "Toilet Repair", desc: "Clogs, running toilets, and complete toilet replacement.", icon: "🚽" },
      { title: "Commercial Plumbing", desc: "Restaurant drains, floor drains, grease traps — we do it all.", icon: "🏢" },
      { title: "Emergency Service", desc: "24/7 response to sewage backups and urgent drain problems.", icon: "🚨" },
    ],
  },

  {
    slug: "st-paul-pipeworks",
    name: "St Paul Pipeworks",
    phone: "(651) 644-9400",
    email: "info@stpaulpipeworks.com",
    address: "53 Woodlynn Ave, Little Canada, MN 55117",
    website: "stpaulpipeworks.com",
    tagline: "Your First Call for Any Plumbing Repair.",
    subTagline: "We stock our trucks to fix it on the first visit — no callbacks, no delays. St. Paul and Minneapolis metro.",
    serviceArea: "St. Paul, Little Canada, Maplewood, Roseville, Shoreview, White Bear Lake",
    serviceAreaList: ["St. Paul", "Little Canada", "Maplewood", "Roseville", "Shoreview", "White Bear Lake"],
    licenseNumber: "MN-PLB-64401",
    primaryColor: "#7C2D12",
    accentColor: "#FEE2E2",
    established: "2010",
    specialties: "Full-service residential plumbing, east metro St. Paul",
    reviews: [
      {
        name: "Karen A.",
        neighborhood: "Roseville",
        text: "They had the part on the truck. Came out, diagnosed the issue, fixed it in one visit. That never happens with other plumbers. Absolute pros.",
      },
      {
        name: "Paul S.",
        neighborhood: "St. Paul",
        text: "I've called them three times now. Each time: on time, clear pricing, clean work. No drama. St Paul Pipeworks is my forever plumber.",
      },
      {
        name: "Anne T.",
        neighborhood: "Shoreview",
        text: "They replaced a rusted-out water heater on short notice and beat two other quotes. Really happy with the quality of the install and the price.",
      },
    ],
    services: [
      { title: "Plumbing Repair", desc: "Every repair done right the first visit — trucks stocked for same-day fixes.", icon: "🔧" },
      { title: "Water Heater Service", desc: "Repair, replacement, or upgrade to tankless. Fast turnaround.", icon: "🔥" },
      { title: "Drain Cleaning", desc: "Professional drain clearing — kitchen, bath, and main lines.", icon: "🏗️" },
      { title: "Fixture Install", desc: "Faucets, toilets, valves, and more installed properly.", icon: "🚿" },
      { title: "Pipe Repair", desc: "Leaks, burst pipes, and full repiping handled cleanly.", icon: "🔩" },
      { title: "Emergency Plumbing", desc: "Fast response to urgent plumbing problems, day or night.", icon: "🚨" },
    ],
  },

  {
    slug: "northern-lights-plumbing",
    name: "Northern Lights Plumbing",
    phone: "(612) 525-5746",
    email: "info@northernlightsplumbing.com",
    address: "Minneapolis, MN 55416",
    website: "northernlightsplumbing.com",
    tagline: "Local. Responsive. Done Right.",
    subTagline: "Locally owned plumbing for the greater Minneapolis metro. Free estimates. 100% satisfaction guaranteed.",
    serviceArea: "Minneapolis, Edina, St. Louis Park, Hopkins, Minnetonka, Eden Prairie",
    serviceAreaList: ["Minneapolis", "Edina", "St. Louis Park", "Hopkins", "Minnetonka", "Eden Prairie"],
    licenseNumber: "MN-PLB-55416",
    primaryColor: "#4338CA",
    accentColor: "#EDE9FE",
    established: "2012",
    specialties: "Residential plumbing, southwest metro Minneapolis",
    reviews: [
      {
        name: "Heather N.",
        neighborhood: "St. Louis Park",
        text: "They responded to my inquiry in 42 minutes and had someone out the same day. Super professional, explained everything clearly, and the price was very fair.",
      },
      {
        name: "Scott R.",
        neighborhood: "Edina",
        text: "Found them on Yelp and they've become our permanent plumber. Consistent, reliable, and they actually follow up to make sure you're happy. Refreshing.",
      },
      {
        name: "Melissa T.",
        neighborhood: "Hopkins",
        text: "Replaced my water heater on a Sunday — didn't charge an arm and a leg for it either. Northern Lights is the real deal. Highly recommend.",
      },
    ],
    services: [
      { title: "Water Heater Service", desc: "Repair or replacement on any day of the week.", icon: "🔥" },
      { title: "Drain Cleaning", desc: "Backed-up drains cleared fast with the right equipment.", icon: "🔧" },
      { title: "Backflow Testing", desc: "Licensed backflow testing and rebuilding for residential and commercial.", icon: "🛡️" },
      { title: "Fixture Installation", desc: "Faucets, toilets, sinks, and more installed correctly.", icon: "🚿" },
      { title: "Pipe Repair", desc: "Leaks stopped, pipes repaired, and systems upgraded.", icon: "🔩" },
      { title: "Emergency Plumbing", desc: "We pick up, we show up — fast response to plumbing crises.", icon: "🚨" },
    ],
  },

  {
    slug: "johns-sewer-drain",
    name: "John's Sewer & Drain Cleaning",
    phone: "(612) 756-7394",
    email: "info@johnsdrains.com",
    address: "Minneapolis, MN 55432",
    website: "johnsdrains.com",
    tagline: "The Name to Know When Drains Don't Flow.",
    subTagline: "Minneapolis' drain cleaning specialists since 1976. Open 24 hours a day, 7 days a week.",
    serviceArea: "Minneapolis, Fridley, Blaine, Coon Rapids, Spring Lake Park, Mounds View",
    serviceAreaList: ["Minneapolis", "Fridley", "Blaine", "Coon Rapids", "Spring Lake Park", "Mounds View"],
    licenseNumber: "MN-PLB-76101",
    primaryColor: "#0369A1",
    accentColor: "#E0F2FE",
    established: "1976",
    specialties: "Drain cleaning specialists, Minneapolis metro since 1976",
    reviews: [
      {
        name: "Phil K.",
        neighborhood: "Fridley",
        text: "John's has been clearing drains in this neighborhood since before I moved in. Called them at midnight, they came, they cleared it. Exactly what you want.",
      },
      {
        name: "Janet F.",
        neighborhood: "Minneapolis",
        text: "You don't stay in business for 50 years in this market unless you're doing something right. Quick, efficient, and priced fairly. My parents used John's and so will my kids.",
      },
      {
        name: "Marcus P.",
        neighborhood: "Blaine",
        text: "Best drain cleaning service in the metro. Have called them three times in the last 5 years — always the same excellent service. They know their stuff.",
      },
    ],
    services: [
      { title: "Drain Cleaning", desc: "Every drain in your home — kitchen, bath, laundry, floor drains — cleared fast.", icon: "🔧" },
      { title: "Main Sewer Cleaning", desc: "Cable and hydro-jet service for main line blockages.", icon: "🏗️" },
      { title: "Camera Inspection", desc: "Video inspection to locate blockages, breaks, and root intrusion.", icon: "📷" },
      { title: "Root Removal", desc: "Tree roots in your sewer line removed completely.", icon: "🌳" },
      { title: "Commercial Drain Service", desc: "Restaurants, multi-family buildings, and commercial properties.", icon: "🏢" },
      { title: "24/7 Emergency Service", desc: "Open 24 hours a day, 7 days a week. We answer when others don't.", icon: "🚨" },
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
