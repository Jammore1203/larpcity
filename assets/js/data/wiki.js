// ============================================================
//  WIKI ARTICLES
//  - Add a new article by copying one block below and changing it.
//  - "id" must be unique, lowercase, with dashes (it becomes the URL).
//  - "body" is written in simple Markdown:
//      # Heading, ## Subheading, **bold**, *italic*, `code`,
//      - bullet lists, 1. numbered lists, [link text](url),
//      [[article-id]] links to another wiki page,
//      > quote, > [!TIP] / > [!WARNING] callouts,
//      | tables | like | this |
//  - The starter articles are examples. Replace them with your
//    game's real details.
// ============================================================
window.WIKI_CATEGORIES = [
  { id: "getting-started", name: "Getting Started", icon: "🚀" },
  { id: "jobs", name: "Jobs", icon: "💼" },
  { id: "locations", name: "Locations", icon: "🗺️" },
  { id: "vehicles", name: "Vehicles", icon: "🚗" },
  { id: "economy", name: "Economy", icon: "💵" },
  { id: "systems", name: "Game Systems", icon: "⚙️" },
];

window.WIKI_ARTICLES = [
  {
    id: "welcome",
    title: "Welcome to Larp City",
    category: "getting-started",
    summary: "What Larp City is and how to get started on your first day.",
    body: `
Larp City is a Roblox roleplay game where you create a character, pick a job, earn cash and build a reputation in a living city full of other players.

> [!TIP]
> New here? Read [[controls]] and [[first-day]] first, then pick a job from the [[jobs-overview]].

## What can you do?
- Work a job such as [[police]], [[medic]] or [[taxi-driver]]
- Buy and customise [[vehicles-overview|vehicles]]
- Own a [[housing|house]] and decorate it
- Roleplay with friends and meet new people

## Roleplay basics
Larp City is a roleplay game, so stay in character and follow the [rules](rules.html). Being creative and respectful makes the city fun for everyone.
`,
  },
  {
    id: "controls",
    title: "Controls",
    category: "getting-started",
    summary: "Keyboard, mobile and controller controls.",
    body: `
## PC controls
| Action | Key |
|---|---|
| Move | W A S D |
| Jump | Space |
| Sprint | Left Shift |
| Interact | E |
| Open phone | M |
| Inventory | Tab |
| Enter / exit vehicle | F |

## Mobile
Use the joystick to move and tap the on-screen buttons to interact. The phone button is in the top corner of the screen.

## Controller
Controller is supported. Hold **ButtonX** to interact and press **DPad Up** to open the phone.
`,
  },
  {
    id: "first-day",
    title: "Your First Day",
    category: "getting-started",
    summary: "A step-by-step guide for brand new players.",
    body: `
1. **Create your character** at the spawn. You can change your outfit later at the [[clothing-store]].
2. **Grab a starter job.** [[taxi-driver]] needs no requirements and pays well for beginners.
3. **Save up** for your first car at the [[dealership]].
4. **Get a bank account** so your cash is safe. See [[money]].
5. **Join the community** using the Discord link on the home page.

> [!WARNING]
> Cash in your pocket can be lost. Deposit it at an ATM or the bank often.
`,
  },
  {
    id: "jobs-overview",
    title: "Jobs Overview",
    category: "jobs",
    summary: "Every job in the city, what it pays and how to unlock it.",
    body: `
Jobs are the main way to earn money. Go to the **Job Center** downtown, or use the Jobs app on your phone, to switch jobs.

| Job | Pay (per shift) | Requirement |
|---|---|---|
| [[taxi-driver]] | $$ | None |
| [[police]] | $$$ | Pass training |
| [[medic]] | $$$ | Pass training |
| Mechanic | $$ | None |
| Chef | $ | None |
| Firefighter | $$$ | Pass training |

> [!TIP]
> Jobs with training may need a staff member online. Check the Discord for training times.
`,
  },
  {
    id: "police",
    title: "Police Officer",
    category: "jobs",
    summary: "Keep the peace, respond to calls and make arrests.",
    body: `
Police officers respond to 911 calls, patrol the city and arrest players who break the law in roleplay.

## How to join
1. Go to the **Police Station**.
2. Apply at the front desk.
3. Complete training with a ranked officer.

## Equipment
- Handcuffs
- Radio
- Patrol car (spawned at the station garage)

## Ranks
| Rank | How to earn |
|---|---|
| Cadet | Pass training |
| Officer | Complete patrol hours |
| Sergeant | Promotion by staff |
| Chief | Hand-picked by staff |

> [!WARNING]
> Abusing police tools (arresting without a roleplay reason) breaks the [rules](rules.html).
`,
  },
  {
    id: "medic",
    title: "Medic",
    category: "jobs",
    summary: "Revive injured players and run the hospital.",
    body: `
Medics respond to injury calls and revive downed players. You work out of the [[hospital]].

## Tips
- Keep your ambulance close to busy areas.
- Accept calls quickly from the phone. Faster responses mean bigger tips.
`,
  },
  {
    id: "taxi-driver",
    title: "Taxi Driver",
    category: "jobs",
    summary: "The best starter job. Drive players around the city.",
    body: `
Pick up a taxi at the **Taxi Depot** and accept ride requests from your phone. You earn a base fare plus distance.

> [!TIP]
> Learn the map from [[locations-overview]] so you can take the fastest routes.
`,
  },
  {
    id: "locations-overview",
    title: "Map & Locations",
    category: "locations",
    summary: "The main areas of the city.",
    body: `
## Districts
- **Downtown** — Job Center, bank, shops
- **Suburbs** — houses for sale, quiet streets
- **Industrial** — warehouses, mechanic shop
- **Highway** — connects every district

## Key places
- [[hospital]]
- [[dealership]]
- [[clothing-store]]
- Police Station
- Bank
`,
  },
  {
    id: "hospital",
    title: "Hospital",
    category: "locations",
    summary: "Where medics work and downed players respawn.",
    body: `
The hospital is in Downtown. If no [[medic]] revives you in time, you respawn here.
`,
  },
  {
    id: "dealership",
    title: "Car Dealership",
    category: "locations",
    summary: "Buy new vehicles.",
    body: `
Browse and buy cars here. Bought vehicles appear in your garage and can be spawned from your phone. See [[vehicles-overview]] for the full list.
`,
  },
  {
    id: "clothing-store",
    title: "Clothing Store",
    category: "locations",
    summary: "Change your outfit and buy accessories.",
    body: `
Change outfits, hairstyles and accessories. Saved outfits can be swapped at any time from your house wardrobe.
`,
  },
  {
    id: "vehicles-overview",
    title: "Vehicle List",
    category: "vehicles",
    summary: "Every car, its price and top speed.",
    body: `
| Vehicle | Price | Top speed | Seats |
|---|---|---|---|
| Starter Hatchback | Free | 80 | 4 |
| City Sedan | $15,000 | 110 | 4 |
| Pickup Truck | $28,000 | 105 | 2 |
| Sports Coupe | $90,000 | 170 | 2 |
| Supercar | $250,000 | 210 | 2 |

> [!TIP]
> Customise colour, rims and plates at the Mechanic.
`,
  },
  {
    id: "money",
    title: "Money & Banking",
    category: "economy",
    summary: "How cash, the bank and paychecks work.",
    body: `
## Cash vs bank
- **Cash** is in your pocket and can be lost.
- **Bank** money is safe and used for big purchases.

## Earning
- Job paychecks
- Daily login rewards
- Codes. See the [codes page](codes.html).
`,
  },
  {
    id: "housing",
    title: "Housing",
    category: "economy",
    summary: "Buying, decorating and inviting friends to your home.",
    body: `
Buy a house in the Suburbs. Once you own it you can place furniture, set who can enter, and use it as a spawn point.
`,
  },
  {
    id: "phone",
    title: "Phone",
    category: "systems",
    summary: "Every app on your in-game phone.",
    body: `
| App | What it does |
|---|---|
| Jobs | Switch jobs and accept calls |
| Garage | Spawn your vehicles |
| Bank | Check balance and send money |
| Messages | Text other players |
| Settings | Graphics and audio options |
`,
  },
];
