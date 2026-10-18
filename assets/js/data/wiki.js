// ============================================================
//  WIKI ARTICLES
//  Built from the game's scripts (careers, vehicles, properties, store...).
//  - Add a new article by copying one block below and changing it.
//  - "id" must be unique, lowercase, with dashes (it becomes the URL).
//  - "body" is written in simple Markdown:
//      ## Heading, ### Subheading, **bold**, *italic*, `code`,
//      - bullet lists, 1. numbered lists, [link text](url),
//      [[article-id]] or [[article-id|custom text]] links to another wiki page,
//      > quote, > [!TIP] / > [!WARNING] callouts,
//      | tables | like | this |
// ============================================================
window.WIKI_CATEGORIES = [
  { id: "getting-started", name: "Getting Started" },
  { id: "careers", name: "Careers" },
  { id: "money", name: "Making Money" },
  { id: "rep", name: "Reputation" },
  { id: "vehicles", name: "Vehicles" },
  { id: "property", name: "Property & Style" },
  { id: "map", name: "Map" },
];

window.WIKI_ARTICLES = [
  {
    id: "welcome",
    title: "Welcome to Larp City",
    category: "getting-started",
    summary: "What the game is and where to start.",
    body: `
**Fake it till you make it in Mayflex.** Larp City is a Roblox tycoon about influencer and hustle culture. Pick a career, film content and sell courses from your bedroom, buy supercars and penthouses, and decide whether you're a hero or a villain.

> [!TIP]
> New here? Read [[first-day]] and [[controls]], then pick a career from [[careers-overview]].

## What you do
- **Pick a career:** [[influencer]], [[hustler]], [[artist]], [[mogger]] or [[truther]].
- **Play home sessions** at your setup to earn money and grow your audience. See [[home-tycoon]].
- **Buy upgrades** that make every session pay more and unlock **gigs** around the city. See [[gigs]].
- **Level up** your career skill tree, pick a specialisation and add a [[side-hustles|side hustle]].
- **Spend it**: [[vehicles|cars]], [[superbikes]], [[aircraft]], [[boats]], [[properties]] and [[drip-closet|drip]].
- **Build a company** on [[companies|LinkedOut]] that makes money while you're away.
- **Watch your [[reputation]]**: heroes get paid more, villains get hunted.

## Your four stats
| Stat | What it is |
|---|---|
| **Money** | Buys everything. |
| **Clout** | Your fame. Higher Clout tiers unlock sponsor deals. |
| **Rep** | Who people think you are, from -100 (villain) to +100 (hero). |
| **Heat** | How wanted you are right now. Shady moves build it, and it cools off over time. |

See [[stats]] for the details.
`,
  },
  {
    id: "first-day",
    title: "Your First Day",
    category: "getting-started",
    summary: "From the lobby to your first money.",
    body: `
## 1. The lobby
When you join you land in the lobby. Pick or create a **save**. Each save is a separate life with its own career, money and stuff. You get **4 save slots** (8 with the +4 Save Slots pass).

From the lobby you can:
- **Play:** join the best session, a server with your friends in it or the busiest one with room.
- **Play here:** spawn in this server.
- **Join a friend:** go to the server a friend is in.

## 2. Pick a career
New saves choose one of five careers: [[influencer]], [[hustler]], [[artist]], [[mogger]] or [[truther]]. You start as the career itself and grow into its branches in game. See [[careers-overview]].

## 3. The tour
A quick guided tour shows you your stats, the phone, the map and daily goals. You can skip it, and replay it any time from the phone's **Tutorial** app.

## 4. First Steps
After the tour, the **First Steps** bar at the top walks you through your first money: go home, start your career, play a session, then do a gig. Its button does each step for you, and every step pays.

## 5. Keep going
- Spend your money on **upgrades** at home. See [[home-tycoon]].
- Do your three [[daily-goals|daily goals]].
- Buy a car at a [[dealerships|dealership]].

> [!TIP]
> Claim your [[store|daily login reward]] every day. Day 7 pays the most.
`,
  },
  {
    id: "controls",
    title: "Controls",
    category: "getting-started",
    summary: "Keyboard and controller controls.",
    body: `
## On foot
| Action | Key |
|---|---|
| Move | W A S D |
| Jump | Space |
| Sprint | Shift |
| Interact / use a prompt | E (or the key shown on the prompt) |
| Open / close phone | P |
| Big map | M |
| Garage app | G |
| Call a vehicle (hold) | V |
| Radio app | R |
| LinkedOut app | I |
| Leaderboards | B |
| Store | Y |
| Settings | O |
| Air Horn (if owned) | T |
| Clip a Moment (Clipper) | C |

## Driving
| Action | Key |
|---|---|
| Accelerate / brake / steer | W A S D |
| Get out | F |
| Horn | H |
| Lights | L |
| Left / right indicator | Z / C |
| Hazard lights | X |
| Next radio station | N |
| Call a mobile mechanic (repair) | V |

On a superbike, Shift and Ctrl lean you back and forward.

## Flying
| Action | Key |
|---|---|
| Throttle up / down | Shift / Ctrl |
| Pitch and roll | W A S D |
| Rudder (yaw) | Q / E |
| Brakes | Space |
| Free look | Hold C |
| Get out | F |
| Horn | H |
| Repair | V |

Helicopters use W/S for forward and back, A/D to turn, Space to climb and Shift or Ctrl to descend.

## Gigs and minigames
| Task | Keys |
|---|---|
| Rhythm (perform, record, DJ) | D F J K |
| Camera (photo gigs) | C or right mouse to raise, Z / X to zoom |
| Pose sequences | Arrow keys |
| Trading | B to buy |

## Controller and mobile
Controller is supported: D-pad Right repairs or calls a vehicle, D-pad Up toggles lights and the left stick press is the horn. On touch screens the phone fills the screen and everything is a tap.
`,
  },
  {
    id: "phone",
    title: "The Phone",
    category: "getting-started",
    summary: "Every app on your LARPer phone.",
    body: `
Everything you click lives on your phone. Press **P** (or tap the phone button) to open it. Notifications pop up by the phone and stay in **Messages**.

| App | Key | What it does |
|---|---|---|
| Career | - | Your level, skill tree, specialisation and side hustle. See [[levels-skill-trees]]. |
| Radio | R | Pick a station. Larp FM has its own DJ. |
| LinkedOut | I | Run your company. See [[companies]]. |
| Garage | G | Bring out any vehicle you own. |
| Rep | - | Your [[reputation]] tier, Heat and how to fix them. |
| Travel | - | Fly to the airports and your properties. |
| Leaderboards | B | Net worth, Clout and money earned today. |
| Store | Y | Game passes, cash packs and extras. See [[store]]. |
| Messages | - | Every notification you've had. |
| Customize | - | Personalise your phone. |
| Settings | O | Graphics, units (MPH or KM/H), HUD size and more. |
| Tutorial | - | Replay the tour. |

## Wallpapers
Live phone wallpapers (Web, Money Rain, Aurora, Warp Speed and Stonks) can be bought in the [[store]].
`,
  },
  {
    id: "stats",
    title: "Money, Clout, Rep & Heat",
    category: "getting-started",
    summary: "Your four stats explained.",
    body: `
## Money
Earned from home sessions, gigs, passive income, your company, jobs and sponsors. Spent on upgrades, vehicles, properties and drip.

## Clout
Your fame. Every action that gets you seen gives Clout. Your Clout tier shows how famous you are:

| Tier | Clout needed |
|---|---|
| Nobody | 0 |
| Local | 1,000 |
| Rising | 10,000 |
| Verified | 100,000 |
| Celebrity | 1,000,000 |
| Icon | 10,000,000 |

At **1,000 Clout** you start getting **sponsor deals**: brands pay you every so often, more the more Clout you have (up to $2,500 a deal). Players with negative Rep only get shady sponsors.

## Rep
Reputation runs from **-100 to +100**. It only moves when you act: clean moves raise it, scams lower it. Each tier changes sponsor pay, shop prices and how fast Heat builds. See [[reputation]].

## Heat
How wanted you are right now, from 0 to 5. Shady actions build Heat. You lose 1 Heat every 5 minutes without a shady action, and it keeps cooling while you're offline. See [[heat]].
`,
  },
  {
    id: "careers-overview",
    title: "Careers Overview",
    category: "careers",
    summary: "The five careers and their branches.",
    body: `
Every save picks one career. You start as the career itself and grow into its branches (specialisations) as you play.

| Career | Tagline | Branches |
|---|---|---|
| [[influencer|Influencer]] | *Post. Flex. Repeat.* | Glitch Streamer, TikTak Star, Clipper, Podcaster |
| [[hustler|Hustler]] | *Escape the 9 to 5.* | Dropshipper, Course Guru, Crypto Trader, Meme Coin Dev |
| [[artist|Artist]] | *From the basement to the charts.* | SoundClown Rapper, DJ |
| [[mogger|Mogger]] | *Mog or be mogged.* | Gym Owner, Looksmaxxer |
| [[truther|Truther]] | *Wake up, sheeple.* | Conspiracy Prophet |

## How careers make money
1. **Home sessions:** live minigames at your home setup. See [[home-tycoon]].
2. **Upgrades:** buy them with your earnings to boost everything and unlock gigs.
3. **Gigs:** jobs at spots around Mayflex. See [[gigs]].
4. **Passive income:** keeps coming in every few seconds, even while you're out.

## Levels and perks
Working your career earns XP. At level 10 you pick a specialisation, at 25 a capstone and at 30 you can become a Legend. See [[levels-skill-trees]].

## Side hustles
Once you have 10,000 Clout you can add a second career as a side hustle. Some pairs unlock a **hybrid** bonus. See [[side-hustles]].

## Weekly events
Each week one or two careers earn 1.5x. See [[daily-goals]].
`,
  },
  {
    id: "influencer",
    title: "Influencer",
    category: "careers",
    summary: "Post. Flex. Repeat. Everything about the Influencer career.",
    body: `
Stream, post short videos, clip other players' Moments and run a podcast. Grow your Clout; other players pay you to post their stuff.

Your career runs from the laptop and filming corner in your home. Earnings show in the corner panel as **Your Channel**.

## Branches
Each branch has its own upgrade tree and audience. Your first branch is free; every other one costs **$2,500** to start. You can run all of them.

| Branch | App | Audience | What it is |
|---|---|---|---|
| **Glitch Streamer** | Glitch Studio | Subs | Go live from your desk, then take the stream out into Mayflex. |
| **TikTak Star** | TikTak Creator | Followers | Film short videos in your corner, then chase trends at the best spots on the island. |
| **Clipper** | ClipFarm | Subscribers | Clip the best moments in Mayflex: crashes, flexes and meltdowns. Post them fast, before anyone else. |
| **Podcaster** | PodWave | Listeners | Two mics, three hours, zero qualifications. Interview anyone, clip the hot takes, go to CloutCast. |

## Home sessions
Home sessions are live minigames played at your setup. Money comes in as you play, so playing well pays more.

- **Go Live** (Glitch Streamer): Stream from your desk: play Snake, Flappy Glitch, Breakout or Dodge for chat (switch any time). Play well for more viewers; money comes in every second.
- **Subathon** (Glitch Streamer): Three minutes non-stop with double viewers. Chat goes wild.
- **Film a TikTak** (TikTak Star): Film TikTaks in your corner: dance trends, trick shots, outfit transitions, reactions. Every hit earns as you go.
- **Clip It** (Clipper): Footage plays on the timeline: stop it right on the spike to clip the moment. The closer, the more views.
- **Record an Episode** (Podcaster): Hot takes scroll past: catch each one as it crosses the line to clip it. A clean run makes the episode go viral.

## Gigs
Gigs are jobs out in the city, unlocked by upgrades. Go to the spot and complete the task there. Pay is the base amount before upgrades, level bonuses and how well you do. See [[gigs]].

| Gig | Branch | Where | Time | Cooldown | Base pay |
|---|---|---|---|---|---|
| IRL Stream: High Street | Glitch Streamer | High Street | 45s | 2m | $150 |
| IRL Stream: Mayflex Beach | Glitch Streamer | Mayflex Beach | 60s | 3m | $420 |
| IRL Stream: Car Meet | Glitch Streamer | Any car dealership | 60s | 4m | $950 |
| IRL Stream: Plane Spotting | Glitch Streamer | Mayflex International | 75s | 5m | $2,300 |
| IRL Stream: Summit Hike | Glitch Streamer | Mayflex Peak | 90s | 7m | $6,200 |
| Trend Shoot: Speakers' Corner | TikTak Star | Speakers' Corner | 20s | 1m 30s | $120 |
| Trend Shoot: Mayflex Marina | TikTak Star | Mayflex Marina | 25s | 2m | $360 |
| Trend Shoot: Kingsway Gardens | TikTak Star | Kingsway Gardens | 25s | 2m 30s | $820 |
| Trend Shoot: Mayflex Beach | TikTak Star | Mayflex Beach | 30s | 3m 20s | $1,950 |
| Trend Shoot: Ocean Drive | TikTak Star | Low Battery Lane | 30s | 4m 20s | $4,600 |
| Trend Shoot: Mayflex Peak | TikTak Star | Mayflex Peak | 35s | 6m | $11,500 |
| Brand Deal Shoot | TikTak Star | Clout Tower | 45s | 10m | $42,000 |
| Car Meet Footage | Clipper | Any car dealership | 45s | 2m | $150 |
| Club Footage: Sticky Floors | Clipper | Sticky Floors | 60s | 3m | $420 |
| Beach Footage: Mayflex Beach | Clipper | Mayflex Beach | 60s | 4m | $950 |
| Arrivals: Mayflex International | Clipper | Mayflex International | 75s | 5m | $2,300 |
| Drone Shots: Mayflex Peak | Clipper | Mayflex Peak | 90s | 7m | $6,200 |
| Street Interviews: Tower Row Garden | Podcaster | Tower Row Garden | 45s | 2m | $150 |
| Live: Subbers Tower | Podcaster | Subbers Tower | 60s | 3m | $420 |
| Live: Sticky Floors | Podcaster | Sticky Floors | 60s | 4m | $950 |
| Record: TV Tower | Podcaster | TV Tower | 75s | 5m | $2,300 |
| Live Tour: The Grand Mayflex | Podcaster | The Grand Mayflex | 90s | 7m | $6,200 |

## Upgrade trees
Upgrades are bought on your home device. Each one changes how your setup looks and boosts what you earn.

### Glitch Streamer
| Upgrade | Cost | Effect |
|---|---|---|
| **Go Live** | Free | unlocks **Go Live** |
| **Gaming Headset** | $300 | +15% Subs gained |
| **Webcam** | $450 | +20% home session pay |
| **Gaming Chair** | $1,500 | +15% passive income, +10% home session pay |
| **IRL Backpack** | $2,000 | unlocks **IRL Stream: High Street** |
| **Gaming PC** | $3,000 | +35% home session pay |
| **Studio Mic** | $6,000 | +30% Subs gained |
| **Beach Streams** | $7,500 | +15% gig pay, unlocks **IRL Stream: Mayflex Beach** |
| **Second Monitor** | $8,000 | +30% home session pay |
| **LED Strips** | $15,000 | +10% on everything |
| **Car Meet Streams** | $18,000 | +20% gig pay, unlocks **IRL Stream: Car Meet** |
| **Stream Deck** | $20,000 | 20% shorter cooldowns, +15% home session pay |
| **Green Screen** | $45,000 | +40% Subs gained |
| **Plane Spotting Streams** | $55,000 | +25% gig pay, unlocks **IRL Stream: Plane Spotting** |
| **Mod Team** | $60,000 | +60% passive income |
| **Triple Monitors** | $140,000 | +60% home session pay |
| **Summit Streams** | $160,000 | +30% gig pay, unlocks **IRL Stream: Summit Hike** |
| **Cinema Camera** | $175,000 | +20% on everything |
| **Subathon** | $400,000 | unlocks **Subathon** |
| **Glitch Partner** | $450,000 | +100% passive income, +30% Subs gained |
| **Streaming Room** | $1,500,000 | +50% on everything |

### TikTak Star
| Upgrade | Cost | Effect |
|---|---|---|
| **First TikTak** | Free | unlocks **Film a TikTak** |
| **Phone Tripod** | $300 | +20% home session pay |
| **Trend Alerts** | $450 | unlocks **Trend Shoot: Speakers' Corner** |
| **Ring Light** | $1,500 | +30% home session pay |
| **Marina Shoots** | $2,000 | +10% gig pay, unlocks **Trend Shoot: Mayflex Marina** |
| **Backdrop** | $2,500 | +25% Followers gained |
| **Neon Sign** | $6,000 | +20% Followers gained, +15% passive income |
| **Park Shoots** | $7,500 | +15% gig pay, unlocks **Trend Shoot: Kingsway Gardens** |
| **Editing App** | $8,000 | 20% shorter cooldowns |
| **Softbox Lights** | $15,000 | +40% home session pay |
| **Beach Shoots** | $18,000 | +20% gig pay, unlocks **Trend Shoot: Mayflex Beach** |
| **Outfit Rack** | $20,000 | +35% Followers gained |
| **LED Dance Floor** | $45,000 | +50% home session pay |
| **Ocean Drive Shoots** | $55,000 | +25% gig pay, unlocks **Trend Shoot: Ocean Drive** |
| **Viral Hooks** | $60,000 | +60% passive income |
| **Gimbal** | $140,000 | +40% gig pay |
| **Lookout Shoots** | $160,000 | +30% gig pay, unlocks **Trend Shoot: Mayflex Peak** |
| **PR Packages** | $175,000 | +20% on everything |
| **Brand Deals** | $400,000 | unlocks **Brand Deal Shoot** |
| **Creator Fund** | $450,000 | +100% passive income, +30% Followers gained |
| **Content House** | $1,500,000 | +50% on everything |

### Clipper
| Upgrade | Cost | Effect |
|---|---|---|
| **Start Clipping** | Free | unlocks **Clip It** |
| **Second Monitor** | $300 | +15% Subscribers gained |
| **Auto Captions** | $450 | +20% home session pay |
| **Footage Drives** | $1,500 | +15% passive income, +10% home session pay |
| **Car Meet Clips** | $2,000 | unlocks **Car Meet Footage** |
| **Render Beast** | $3,000 | +35% home session pay |
| **Shocked-Face Thumbnails** | $6,000 | +30% Subscribers gained |
| **Club Footage** | $7,500 | +15% gig pay, unlocks **Club Footage: Sticky Floors** |
| **Vine Boom SFX** | $8,000 | +30% home session pay |
| **Neon Play Button** | $15,000 | +10% on everything |
| **Beach Footage** | $18,000 | +20% gig pay, unlocks **Beach Footage: Mayflex Beach** |
| **Clip Farm** | $20,000 | 20% shorter cooldowns, +15% home session pay |
| **Drama Channel** | $45,000 | +40% Subscribers gained |
| **Airport Arrivals** | $55,000 | +25% gig pay, unlocks **Arrivals: Mayflex International** |
| **Partner Program** | $60,000 | +60% passive income |
| **Gold Play Button** | $140,000 | +20% on everything |
| **Drone Shots** | $160,000 | +30% gig pay, unlocks **Drone Shots: Mayflex Peak** |
| **Clip Network** | $175,000 | +50% passive income, +25% home session pay |
| **Media Empire** | $1,500,000 | +50% on everything |

### Podcaster
| Upgrade | Cost | Effect |
|---|---|---|
| **First Episode** | Free | unlocks **Record an Episode** |
| **Broadcast Mics** | $300 | +15% Listeners gained |
| **Three Cameras** | $450 | +20% home session pay |
| **Acoustic Panels** | $1,500 | +15% passive income, +10% home session pay |
| **Street Interviews** | $2,000 | unlocks **Street Interviews: Tower Row Garden** |
| **Mixing Desk** | $3,000 | +35% home session pay |
| **Neon ON AIR** | $6,000 | +30% Listeners gained |
| **Live at the Academy** | $7,500 | +15% gig pay, unlocks **Live: Subbers Tower** |
| **Big Guests** | $8,000 | +30% home session pay |
| **Studio Plants** | $15,000 | +10% on everything |
| **Nightlife Episode** | $18,000 | +20% gig pay, unlocks **Live: Sticky Floors** |
| **Clip Team** | $20,000 | 20% shorter cooldowns, +15% home session pay |
| **Podcast Network** | $45,000 | +40% Listeners gained |
| **CloutCast Studio** | $55,000 | +25% gig pay, unlocks **Record: TV Tower** |
| **Sponsor Reads** | $60,000 | +60% passive income |
| **Podcast Award** | $140,000 | +20% on everything |
| **Live Tour** | $160,000 | +30% gig pay, unlocks **Live Tour: The Grand Mayflex** |
| **Producer** | $175,000 | +50% passive income, +25% home session pay |
| **Exclusive Deal** | $1,500,000 | +50% on everything |

## Skill tree
Separate from your home upgrades, your career also has levels (up to 30) and a skill tree on the phone's **Career** app. See [[levels-skill-trees]].

- **Lv 1: Post.** Phone camera mode. A post's value comes from the spot, your outfit, your gear and the current trend.
- **Lv 3: Ring Light.** +15% quality on everything you film, streams included.
- **Lv 6: Engagement Bait.** Every 5th post is guaranteed to trend for double Clout.
- **Lv 9: Brand Deals.** Accept sponsorships. Posting a sponsor's product pays money on top of Clout.

### Glitch Streamer
*Go live on Glitch from the basement PC or out in the Gekto. Viewers pile in when things happen around you.*

- **Lv 10: Go Live.** A LIVE tag floats over your head. Viewers climb when stuff happens near you.
- **Lv 13: Gaming Chair.** +10% viewer retention. Scientifically proven.
- **Lv 16: Hype Train.** Donations close together stack a multiplier, up to x3.
- **Lv 20: Raid.** End your stream by sending your viewers to another live player.
- **Lv 25 capstone, pick one:** **IRL Arc** or **Subathon**.
  - IRL Arc: Stream anywhere. Every interaction with another player adds Hype.
  - Subathon: Each donation adds time to the stream. +50% sub income, but leaving your setup ends it.
- **Lv 30 Legend: Glitch Partner.** Go live 30 times after Lv 30. Reward: The whole server gets pinged when you go live.

### TikTak Star
*Short-form king. Learn the trending dance or sound and hit it at the right spot before it dies.*

- **Lv 10: Hit the Trend.** Do the current trending emote at a matching spot for a shot at going viral.
- **Lv 13: Algorithm Whisperer.** See the next trend 2 minutes before everyone else.
- **Lv 16: Duet.** Post with another player in frame and you both get +25% Clout.
- **Lv 20: For You Page.** Small chance any post goes viral for x10 Clout.
- **Lv 25 capstone, pick one:** **Trendsetter** or **Brainrot Lord**.
  - Trendsetter: Once a day, launch your own dance. Everyone who posts it pays you a Clout royalty.
  - Brainrot Lord: Chaos pays. Posts of you falling, crashing or getting Cancelled go viral twice as often.
- **Lv 30 Legend: Viral Icon.** Hit 30 trends after Lv 30. Reward: NPCs around the Gekto randomly break into your dance.

### Clipper
*Watch streams and podcasts, clip the best 30 seconds and post them everywhere.*

- **Lv 10: Clip That.** When a streamer or podcaster you're watching has a Moment, clip the last 30 seconds.
- **Lv 13: Yellow Captions.** Clips with subtitles get +25% views.
- **Lv 16: Clip Farm.** Run up to 3 clip pages that repost your best clips.
- **Lv 20: Official Clipper.** Sign with a Streamer or Podcaster for 5% of their stream income.
- **Lv 25 capstone, pick one:** **Out of Context** (scam) or **Clip Empire** (clean).
  - Out of Context: Clips that make someone look bad get double views and a Clipped debuff on them.
  - Clip Empire: Hire NPC editors. Your clip pages keep posting while you do other things.
- **Lv 30 Legend: Clip God.** Clip 30 Moments after Lv 30. Reward: Any stream you're watching gets +5% viewers.

### Podcaster
*Run a show. Book guests, pull topic cards and let the arguments make the clips.*

- **Lv 10: Mic Up.** A studio with up to 3 guest mics. Episode value comes from topic cards and guest Clout.
- **Lv 13: Big Guest Energy.** Famous guests multiply the episode, and earn Clout too.
- **Lv 16: Sponsored By....** Read paid ads mid-episode for Hustlers and Grifters.
- **Lv 20: Clip Magnet.** Your episodes spawn twice as many Moments.
- **Lv 25 capstone, pick one:** **Debate Pod** or **Comfy Pod**.
  - Debate Pod: Guests on opposite sides of a topic card boost virality. Beef is content.
  - Comfy Pod: Guests leave with Good Vibes: +10% XP for 15 minutes.
- **Lv 30 Legend: Top of the Charts.** Record 30 episodes after Lv 30. Reward: Your show plays on car radios across the server.

## Reputation perks
Reach the very top or bottom of [[reputation]] and your career gets a bonus perk:

- **Wholesome 100: Wholesome Content.** Everyone in your posts gets +10% Clout, and NPC brands send you free gear.
- **Final Boss: Rage Bait.** Callout posts go viral three times as often, and hate comments pay out like likes.

## Hybrids
Combine this career with a [[side-hustles|side hustle]]:

- **Brand Ambassador** (with [[hustler|Hustler]]): Shoppable posts. Followers buy your products straight from your posts.
- **Fitfluencer** (with [[mogger|Mogger]]): Gym content goes viral. Workouts at the gym count as posts.
- **Ghost Hunt Stream** (with [[truther|Truther]]): Stream your investigations. Viewers spot clues for you.
- **Viral Hitmaker** (with [[artist|Artist]]): Your tracks can become the trending sound.
`,
  },
  {
    id: "hustler",
    title: "Hustler",
    category: "careers",
    summary: "Escape the 9 to 5. Everything about the Hustler career.",
    body: `
Buy stock cheap and sell it high, sell "knowledge", launch meme coins and trade the charts. The money path.

Your career runs from the **Business Laptop** in your home (Open HustleHQ). Earnings show in the corner panel as **Your Empire**.

## Branches
Each branch has its own upgrade tree and audience. Your first branch is free; every other one costs **$2,500** to start. You can run all of them.

| Branch | App | Audience | What it is |
|---|---|---|---|
| **Dropshipper** | ShopLify | Customers | Sell things you've never touched to people you'll never meet. Pack orders, scale the store, retire at 25. |
| **Course Guru** | Mindset.io | Students | Sell a course about getting rich by selling courses. Film it in your living room, preach it on stage. |
| **Crypto Trader** | MoonDesk Pro | Copy Traders | Long the dips, short the tops, and let thousands of strangers copy every trade you make. |
| **Meme Coin Dev** | PumpLab | Holders | Launch coins from your basement, pump them with your community, and decide when (if) to pull the rug. |

## Home sessions
Home sessions are live minigames played at your setup. Money comes in as you play, so playing well pays more.

- **Pack Orders** (Dropshipper): Orders come in: match each one to the right product on your shelves before the timer runs out. Every correct order pays.
- **Record a Course** (Course Guru): Buzzwords scroll past: hit each one as it crosses the line. A perfect pitch sells the most courses.
- **Launch a Coin** (Meme Coin Dev): Launch a coin and pump it: SHILL to build hype, SELL to take profit, or RUG it for a huge payday (and a lot of Heat). Money comes in every time you cash out.
- **Trade** (Crypto Trader): Read the chart: go LONG if you think it's going up, SHORT if it's going down, then CLOSE. Winning trades pay; losing ones pay nothing and break your streak.

## Gigs
Gigs are jobs out in the city, unlocked by upgrades. Go to the spot and complete the task there. Pay is the base amount before upgrades, level bonuses and how well you do. See [[gigs]].

| Gig | Branch | Where | Time | Cooldown | Base pay |
|---|---|---|---|---|---|
| Freight Pickup: Fuel & Go | Dropshipper | Fuel & Go | 45s | 2m | $150 |
| Pop-Up Stall: Market Row Market | Dropshipper | Market Row Market | 60s | 3m | $420 |
| Mall Kiosk: Mega Mart | Dropshipper | Mega Mart | 60s | 4m | $950 |
| Air Freight: Mayflex International | Dropshipper | Mayflex International | 75s | 5m | $2,300 |
| Containers: Dropship Docks | Dropshipper | Dropship Docks | 90s | 7m | $6,200 |
| Mindset Bootcamp: Kingsway Gardens | Course Guru | Kingsway Gardens | 45s | 2m | $140 |
| Seminar: Subbers Tower | Course Guru | Subbers Tower | 60s | 3m | $400 |
| Networking Night: Sticky Floors | Course Guru | Sticky Floors | 60s | 4m | $920 |
| Conference Keynote: The Grand Mayflex | Course Guru | The Grand Mayflex | 75s | 5m | $2,250 |
| Island Retreat: The Pier | Course Guru | The Pier | 90s | 7m | $6,100 |
| Shill: Speakers' Corner | Meme Coin Dev | Speakers' Corner | 45s | 2m | $150 |
| Holder Meetup: Mayflex Savings | Meme Coin Dev | Mayflex Savings | 60s | 3m | $420 |
| Airdrop Party: Park Lake | Meme Coin Dev | Park Lake | 60s | 4m | $950 |
| Yacht Party: Mayflex Marina | Meme Coin Dev | Mayflex Marina | 75s | 5m | $2,300 |
| Keynote: The Grand Mayflex | Meme Coin Dev | The Grand Mayflex | 90s | 7m | $6,200 |
| Trading Retreat: Scrap Yard | Crypto Trader | Scrap Yard | 45s | 2m | $160 |
| Hot Desk: Clout Tower | Crypto Trader | Clout Tower | 60s | 3m | $440 |
| Seminar: Mayflex Stadium | Crypto Trader | Mayflex Stadium | 60s | 4m | $980 |
| Jet Lounge: Skyline Airfield | Crypto Trader | Skyline Jet Centre | 75s | 5m | $2,400 |
| Penthouse Desk: Summit Residences | Crypto Trader | Clout Tower | 90s | 7m | $6,400 |

## Upgrade trees
Upgrades are bought on your home device. Each one changes how your setup looks and boosts what you earn.

### Dropshipper
| Upgrade | Cost | Effect |
|---|---|---|
| **Open a Store** | Free | unlocks **Pack Orders** |
| **Social Ads** | $300 | +15% Customers gained |
| **Tape Gun** | $450 | +20% home session pay |
| **Stock Shelves** | $1,500 | +15% passive income, +10% home session pay |
| **Freight Pickups** | $2,000 | unlocks **Freight Pickup: Fuel & Go** |
| **Label Printer** | $3,000 | +35% home session pay |
| **Branding** | $6,000 | +30% Customers gained |
| **Pop-Up Stall** | $7,500 | +15% gig pay, unlocks **Pop-Up Stall: Market Row Market** |
| **Virtual Assistant** | $8,000 | +30% home session pay |
| **Scale Mode** | $15,000 | +10% on everything |
| **Mall Kiosk** | $18,000 | +20% gig pay, unlocks **Mall Kiosk: Mega Mart** |
| **Automation** | $20,000 | 20% shorter cooldowns, +15% home session pay |
| **Warehouse Racking** | $45,000 | +40% Customers gained |
| **Air Freight** | $55,000 | +25% gig pay, unlocks **Air Freight: Mayflex International** |
| **Subscription Box** | $60,000 | +60% passive income |
| **Cash Safe** | $140,000 | +20% on everything |
| **Shipping Containers** | $160,000 | +30% gig pay, unlocks **Containers: Dropship Docks** |
| **Fulfilment Team** | $175,000 | +50% passive income, +25% home session pay |
| **E-Com Empire** | $1,500,000 | +50% on everything |

### Course Guru
| Upgrade | Cost | Effect |
|---|---|---|
| **Film a Course** | Free | unlocks **Record a Course** |
| **Ring Light** | $300 | +15% Students gained |
| **Prop Bookshelf** | $450 | +20% home session pay |
| **Sales Funnel** | $1,500 | +15% passive income, +10% home session pay |
| **Park Bootcamp** | $2,000 | unlocks **Mindset Bootcamp: Kingsway Gardens** |
| **Cinema Camera** | $3,000 | +35% home session pay |
| **Quote Wall** | $6,000 | +30% Students gained |
| **Academy Seminars** | $7,500 | +15% gig pay, unlocks **Seminar: Subbers Tower** |
| **Testimonials** | $8,000 | +30% home session pay |
| **Rented Lambo Backdrop** | $15,000 | +10% on everything |
| **Networking Night** | $18,000 | +20% gig pay, unlocks **Networking Night: Sticky Floors** |
| **Video Sales Letter** | $20,000 | 20% shorter cooldowns, +15% home session pay |
| **Mastermind Group** | $45,000 | +40% Students gained |
| **Conference Stage** | $55,000 | +25% gig pay, unlocks **Conference Keynote: The Grand Mayflex** |
| **Upsell Ladder** | $60,000 | +60% passive income |
| **Published Book** | $140,000 | +20% on everything |
| **Island Retreat** | $160,000 | +30% gig pay, unlocks **Island Retreat: The Pier** |
| **Sales Closers** | $175,000 | +50% passive income, +25% home session pay |
| **Guru Empire** | $1,500,000 | +50% on everything |

### Crypto Trader
| Upgrade | Cost | Effect |
|---|---|---|
| **First Trade** | Free | unlocks **Trade** |
| **Chart Course** | $300 | +15% Copy Traders gained |
| **Second Monitor** | $450 | +20% home session pay |
| **Signals Group** | $1,500 | +15% passive income, +10% home session pay |
| **Ranch Retreat** | $2,000 | unlocks **Trading Retreat: Scrap Yard** |
| **100x Leverage** | $3,000 | +35% home session pay |
| **Ticker Wall** | $6,000 | +30% Copy Traders gained |
| **Hot Desk at Clout Tower** | $7,500 | +15% gig pay, unlocks **Hot Desk: Clout Tower** |
| **Trading Bot** | $8,000 | +30% home session pay, +15% passive income |
| **Executive Chair** | $15,000 | +10% on everything |
| **Diamond Hands Seminar** | $18,000 | +20% gig pay, unlocks **Seminar: Mayflex Stadium** |
| **Quant Models** | $20,000 | 20% shorter cooldowns, +15% home session pay |
| **Bloomberg-ish Terminal** | $45,000 | +40% Copy Traders gained |
| **Private Jet Day Trip** | $55,000 | +25% gig pay, unlocks **Jet Lounge: Skyline Airfield** |
| **Hedge Fund (Group Chat)** | $60,000 | +60% passive income |
| **Gold Bull** | $140,000 | +20% on everything |
| **Summit Residences Desk** | $160,000 | +30% gig pay, unlocks **Penthouse Desk: Summit Residences** |
| **Trading Floor** | $175,000 | +50% passive income, +25% home session pay |
| **Whale Status** | $1,500,000 | +50% on everything |

### Meme Coin Dev
| Upgrade | Cost | Effect |
|---|---|---|
| **Launch a Coin** | Free | unlocks **Launch a Coin** |
| **Telegram Group** | $300 | +15% Holders gained |
| **Second Monitor** | $450 | +20% home session pay |
| **Shill Bot** | $1,500 | +15% passive income, +10% home session pay |
| **Street Shilling** | $2,000 | unlocks **Shill: Speakers' Corner** |
| **Mining Rig** | $3,000 | +35% home session pay |
| **Ticker Wall** | $6,000 | +30% Holders gained |
| **Mayflex Savings Meetups** | $7,500 | +15% gig pay, unlocks **Holder Meetup: Mayflex Savings** |
| **KOL Shoutouts** | $8,000 | +30% home session pay |
| **Neon Moon** | $15,000 | +10% on everything |
| **Park Lake Airdrop** | $18,000 | +20% gig pay, unlocks **Airdrop Party: Park Lake** |
| **'Audit' Certificate** | $20,000 | 20% shorter cooldowns, +15% home session pay |
| **Whale Wallets** | $45,000 | +40% Holders gained |
| **Yacht Parties** | $55,000 | +25% gig pay, unlocks **Yacht Party: Mayflex Marina** |
| **Exchange Listing** | $60,000 | +60% passive income |
| **Gold Bull** | $140,000 | +20% on everything |
| **Conference Keynote** | $160,000 | +30% gig pay, unlocks **Keynote: The Grand Mayflex** |
| **Anonymous Dev Team** | $175,000 | +50% passive income, +25% home session pay |
| **Your Own Exchange** | $1,500,000 | +50% on everything |

## Skill tree
Separate from your home upgrades, your career also has levels (up to 30) and a skill tree on the phone's **Career** app. See [[levels-skill-trees]].

- **Lv 1: Sell.** Open a storefront on your phone, list items and serve buyers.
- **Lv 3: 4AM Grindset.** +20% sale profit for the first 10 minutes of every session.
- **Lv 6: Business Cards.** Players who buy within 10 minutes of getting your card earn you +10%.
- **Lv 9: Influencer Marketing.** Post sponsorship gigs. Influencer posts about your product boost sales.

### Dropshipper
*Order junk from NPC Imports, slap a logo on it and sell it for 10x.*

- **Lv 10: Open Store.** Pick products, set prices and run ads. Parcels arrive and you deliver them.
- **Lv 13: Winning Product.** A random winning product appears every 15 minutes. First to stock it sells x3.
- **Lv 16: Same-Day Delivery.** Deliver in person for tips and 5-star reviews.
- **Lv 20: Fake Reviews.** +40% sales, but every sale builds a little Heat.
- **Lv 25 capstone, pick one:** **Brand Builder** (clean) or **Counterfeit King** (scam).
  - Brand Builder: Your store becomes a real brand with repeat customers. Zero Heat.
  - Counterfeit King: Sell knockoffs like "Gucy" and "Rolecks" at huge margins. Feds can seize your stock.
- **Lv 30 Legend: 7-Figure Store.** Ship 30 orders after Lv 30. Reward: Your products appear on Qwik Stop shelves.

### Course Guru
*"I made $10M at 19. Here's how. Only $997."*

- **Lv 10: Host Seminar.** Rent a room (the Qwik Stop car park to start) and pitch your course.
- **Lv 13: Lambo Thumbnail.** Flyers with a rented car on them get +25% attendance.
- **Lv 16: Inner Circle.** Students are offered a VIP tier at 3x the price.
- **Lv 20: Testimonials.** Every student who levels up after your course gives you Clout.
- **Lv 25 capstone, pick one:** **Legit Mentor** (clean) or **Escape the Matrix** (scam).
  - Legit Mentor: Teach any role you have at Lv 10+. Students get +15% XP in it for an hour.
  - Escape the Matrix: Sell secret wealth courses that do nothing. Massive money, and angry students can testify.
- **Lv 30 Legend: Guru Mogul.** Host 30 seminars after Lv 30. Reward: Your seminars ping the whole server.

### Meme Coin Dev
*Launch your own coin, build the hype and decide what kind of dev you are.*

- **Lv 10: Launch Coin.** Name it from the word list and launch. Buyers can see your Rep.
- **Lv 13: Meme Magic.** Coins named after the current trend launch with +50% hype.
- **Lv 16: Community.** Holders get Clout when your coin pumps, so they shill it for free.
- **Lv 20: Airdrop.** Drop free coins on everyone near you. They become holders.
- **Lv 25 capstone, pick one:** **Based Dev** (clean) or **Rug Pull** (scam).
  - Based Dev: Lock the liquidity so you can never rug. Holders earn a dividend.
  - Rug Pull: Sell everything at the top. Huge money, instant 5-star Heat.
- **Lv 30 Legend: Blue Chip.** Launch 30 coins after Lv 30. Reward: Your coin is listed forever and NPC whales trade it.

### Crypto Trader
*Draws lines on charts and calls the pump. Sometimes right.*

- **Lv 10: Technical Analysis.** Draw on a chart to see a forecast range for the next minute.
- **Lv 13: Whale Watcher.** Get pinged when any player makes a big buy or sell.
- **Lv 16: Copy Trading.** Players copy your trades for a fee. You earn 10% of their profits.
- **Lv 20: Stop Loss.** Auto-sell when a coin drops 30%. Rug-proof-ish.
- **Lv 25 capstone, pick one:** **Market Maker** (clean) or **Pump Group** (scam).
  - Market Maker: Earn a tiny fee on every trade on the server.
  - Pump Group: Your copy traders auto-buy what you pick, then you sell into them.
- **Lv 30 Legend: Whale.** Make 30 trades after Lv 30. Reward: Your trades move prices.

## Reputation perks
Reach the very top or bottom of [[reputation]] and your career gets a bonus perk:

- **Wholesome 100: Five-Star Seller.** NPC customers pay 15% more and tip, and your listings get a gold Trusted badge.
- **Final Boss: No Questions Asked.** Sell anything in the back room of Totally Legit Pawn with no fees.

## Hybrids
Combine this career with a [[side-hustles|side hustle]]:

- **Brand Ambassador** (with [[influencer|Influencer]]): Shoppable posts. Followers buy your products straight from your posts.
- **Merch King** (with [[artist|Artist]]): Limited merch drops that Dropshippers flip for your royalty.
- **Supplement Brand** (with [[mogger|Mogger]]): Sell your own pre-workout. Members and followers buy it.
- **Wellness Empire** (with [[truther|Truther]]): Sell your shakes online at dropship scale.
`,
  },
  {
    id: "artist",
    title: "Artist",
    category: "careers",
    summary: "From the basement to the charts. Everything about the Artist career.",
    body: `
Record tracks, release them on SoundClown for streams, perform live for tips, and collab or beef with other artists.

Your career runs from the **Studio Laptop** in your home (Open SoundClown). Earnings show in the corner panel as **Your Music**.

## Branches
Each branch has its own upgrade tree and audience. Your first branch is free; every other one costs **$2,500** to start. You can run all of them.

| Branch | App | Audience | What it is |
|---|---|---|---|
| **SoundClown Rapper** | SoundClown for Artists | Monthly Listeners | Record bars in your bedroom booth, drop tracks on SoundClown and take the mic from open mics to headline shows. |
| **DJ** | Mixtape | Ravers | Mix in your room, then play beach parties, rooftops and finally a residency at Sticky Floors. |

## Home sessions
Home sessions are live minigames played at your setup. Money comes in as you play, so playing well pays more.

- **Record a Track** (SoundClown Rapper): Bars drop down four lanes: hit each one on the beat (keys D F J K, or tap the lanes). Stay on beat for bigger streams.
- **Mix a Set** (DJ): Beats roll in on four lanes: hit them as they cross the line (D F J K, or tap). Long streaks build the drop.

## Gigs
Gigs are jobs out in the city, unlocked by upgrades. Go to the spot and complete the task there. Pay is the base amount before upgrades, level bonuses and how well you do. See [[gigs]].

| Gig | Branch | Where | Time | Cooldown | Base pay |
|---|---|---|---|---|---|
| Open Mic: Mega Mart | SoundClown Rapper | Mega Mart | 45s | 2m | $140 |
| Cypher: Tower Row Garden | SoundClown Rapper | Tower Row Garden | 60s | 3m | $400 |
| Music Video: Mayflex Beach | SoundClown Rapper | Mayflex Beach | 60s | 4m | $920 |
| Studio Session: TV Tower | SoundClown Rapper | TV Tower | 75s | 5m | $2,250 |
| Headline: Sticky Floors | SoundClown Rapper | Sticky Floors | 90s | 7m | $6,100 |
| Beach Party: Mayflex Beach | DJ | Mayflex Beach | 45s | 2m | $150 |
| Rooftop: The Grand Mayflex | DJ | The Grand Mayflex | 60s | 3m | $420 |
| Yacht Set: Mayflex Marina | DJ | Mayflex Marina | 60s | 4m | $950 |
| Sunset Set: Mayflex Peak | DJ | Mayflex Peak | 75s | 5m | $2,300 |
| Residency: Sticky Floors | DJ | Sticky Floors | 90s | 7m | $6,300 |

## Upgrade trees
Upgrades are bought on your home device. Each one changes how your setup looks and boosts what you earn.

### SoundClown Rapper
| Upgrade | Cost | Effect |
|---|---|---|
| **First Track** | Free | unlocks **Record a Track** |
| **Condenser Mic** | $300 | +15% Monthly Listeners gained |
| **Beat Pack** | $450 | +20% home session pay |
| **Acoustic Foam** | $1,500 | +15% passive income, +10% home session pay |
| **Open Mic Nights** | $2,000 | unlocks **Open Mic: Mega Mart** |
| **Studio Monitors** | $3,000 | +35% home session pay |
| **Vocal Booth** | $6,000 | +30% Monthly Listeners gained |
| **Park Cypher** | $7,500 | +15% gig pay, unlocks **Cypher: Tower Row Garden** |
| **Mix Engineer** | $8,000 | +30% home session pay |
| **Iced-Out Chain** | $15,000 | +10% on everything |
| **Music Video** | $18,000 | +20% gig pay, unlocks **Music Video: Mayflex Beach** |
| **Indie Label** | $20,000 | 20% shorter cooldowns, +15% home session pay |
| **Big Feature** | $45,000 | +40% Monthly Listeners gained |
| **Studio Sessions** | $55,000 | +25% gig pay, unlocks **Studio Session: TV Tower** |
| **Playlist Placement** | $60,000 | +60% passive income |
| **Platinum Plaque** | $140,000 | +20% on everything |
| **Headline Show** | $160,000 | +30% gig pay, unlocks **Headline: Sticky Floors** |
| **Management** | $175,000 | +50% passive income, +25% home session pay |
| **Hall of Fame** | $1,500,000 | +50% on everything |

### DJ
| Upgrade | Cost | Effect |
|---|---|---|
| **First Mix** | Free | unlocks **Mix a Set** |
| **DJ Headphones** | $300 | +15% Ravers gained |
| **Record Crates** | $450 | +20% home session pay |
| **PA Speakers** | $1,500 | +15% passive income, +10% home session pay |
| **Beach Party** | $2,000 | unlocks **Beach Party: Mayflex Beach** |
| **Club Decks** | $3,000 | +35% home session pay |
| **Light Rig** | $6,000 | +30% Ravers gained |
| **Rooftop Sets** | $7,500 | +15% gig pay, unlocks **Rooftop: The Grand Mayflex** |
| **Exclusive Edits** | $8,000 | +30% home session pay |
| **Smoke Machine** | $15,000 | +10% on everything |
| **Yacht Sets** | $18,000 | +20% gig pay, unlocks **Yacht Set: Mayflex Marina** |
| **Booking Agent** | $20,000 | 20% shorter cooldowns, +15% home session pay |
| **Neon DJ Booth** | $45,000 | +40% Ravers gained |
| **Sunset at the Summit** | $55,000 | +25% gig pay, unlocks **Sunset Set: Mayflex Peak** |
| **Radio Show** | $60,000 | +60% passive income |
| **Gold Vinyl** | $140,000 | +20% on everything |
| **Club Residency** | $160,000 | +30% gig pay, unlocks **Residency: Sticky Floors** |
| **Tour Crew** | $175,000 | +50% passive income, +25% home session pay |
| **Festival Headliner** | $1,500,000 | +50% on everything |

## Skill tree
Separate from your home upgrades, your career also has levels (up to 30) and a skill tree on the phone's **Career** app. See [[levels-skill-trees]].

- **Lv 1: Drop a Track.** Record in the basement and release on SoundClown.
- **Lv 3: Bedroom Studio.** Better recording quality at home.
- **Lv 6: Busking.** Perform anywhere and passers-by tip.
- **Lv 9: Feature.** Collab with another Artist. You each get the other's listeners.

### SoundClown Rapper
*Spit bars, win battles, start beef.*

- **Lv 10: Spit.** Lyric-rhythm minigame. Win rap battles in the Back Alley cypher.
- **Lv 13: Mumble Mode.** Easier minigame and faster output, lower quality cap.
- **Lv 16: Diss Track.** Win a server vote against another Artist and take 10% of their streams.
- **Lv 20: Merch Drop.** Sell merch that Dropshippers can flip.
- **Lv 25 capstone, pick one:** **Underground Legend** or **Industry Plant**.
  - Underground Legend: Battle wins pay double, and NPC fans follow you to battles.
  - Industry Plant: Sign to a label. Instant streams boost, but the label takes 50%.
- **Lv 30 Legend: Platinum.** Win 30 cyphers after Lv 30. Reward: Your track plays in every club and car.

### DJ
*Read the room, build the hype, drop the beat.*

- **Lv 10: Spin.** Rhythm minigame on the decks. Fill the Hype meter to trigger the Drop.
- **Lv 13: Crowd Control.** +25% Hype per hit.
- **Lv 16: Residency.** Club Owners book you weekly for pay plus 10% of the door.
- **Lv 20: Mashup.** Play other players' tracks. They get streams, you get Hype.
- **Lv 25 capstone, pick one:** **Festival Headliner** or **Pop-Up Party**.
  - Festival Headliner: Headline the Rave at The Lot with 3x the crowd.
  - Pop-Up Party: Portable rig. Throw a party anywhere.
- **Lv 30 Legend: Main Stage.** Spin 30 sets after Lv 30. Reward: A light beam marks your set on everyone's map.

## Reputation perks
Reach the very top or bottom of [[reputation]] and your career gets a bonus perk:

- **Wholesome 100: People's Champ.** Crowd votes in battles count 25% more for you.
- **Final Boss: Hate-Streams.** People stream your tracks just to hate them: +50% streams, diss tracks hit twice as hard.

## Hybrids
Combine this career with a [[side-hustles|side hustle]]:

- **Hidden Messages** (with [[truther|Truther]]): Hide clues in your tracks for Clout per decode.
- **Merch King** (with [[hustler|Hustler]]): Limited merch drops that Dropshippers flip for your royalty.
- **Viral Hitmaker** (with [[influencer|Influencer]]): Your tracks can become the trending sound.
`,
  },
  {
    id: "mogger",
    title: "Mogger",
    category: "careers",
    summary: "Mog or be mogged. Everything about the Mogger career.",
    body: `
Train at the gym, build your aura and turn it into money: run your own gym or looksmax your way to the top.

Your career runs from the **Training Tablet** in your home (Open AuraApp). Earnings show in the corner panel as **Your Aura**.

## Branches
Each branch has its own upgrade tree and audience. Your first branch is free; every other one costs **$2,500** to start. You can run all of them.

| Branch | App | Audience | What it is |
|---|---|---|---|
| **Gym Owner** | IronApp | Members | Turn the living room into a home gym, film your lifts, coach clients and open a gym with your name on it. |
| **Looksmaxxer** | MogScore | Aura | Skincare, angles and a sharp jawline. Post the glow-up, then mog everyone in Mayflex. |

## Home sessions
Home sessions are live minigames played at your setup. Money comes in as you play, so playing well pays more.

- **Train** (Gym Owner): A bar sweeps across the power meter: lock in each rep while it's in the green. The zone shrinks as you get stronger; a missed rep breaks your streak.
- **Photoshoot** (Looksmaxxer): Find your angle: snap when the light hits the sweet spot. Perfect shots go viral.

## Gigs
Gigs are jobs out in the city, unlocked by upgrades. Go to the spot and complete the task there. Pay is the base amount before upgrades, level bonuses and how well you do. See [[gigs]].

| Gig | Branch | Where | Time | Cooldown | Base pay |
|---|---|---|---|---|---|
| Park Workout: Kingsway Gardens | Gym Owner | Kingsway Gardens | 45s | 2m | $150 |
| Guest Coach: Ironclad Gym | Gym Owner | The Rec | 60s | 3m | $420 |
| Beach Bootcamp: Mayflex Beach | Gym Owner | Mayflex Beach | 60s | 4m | $950 |
| Summit Challenge | Gym Owner | Mayflex Peak | 75s | 5m | $2,300 |
| Fitness Expo: The Grand Mayflex | Gym Owner | The Grand Mayflex | 90s | 7m | $6,200 |
| Mog-Off: Speakers' Corner | Looksmaxxer | Speakers' Corner | 45s | 2m | $150 |
| Golden Hour: Mega Mart | Looksmaxxer | Mega Mart | 60s | 3m | $420 |
| Door Test: Sticky Floors | Looksmaxxer | Sticky Floors | 60s | 4m | $950 |
| Campaign: Ocean Drive | Looksmaxxer | Low Battery Lane | 75s | 5m | $2,300 |
| Runway: Clout Tower | Looksmaxxer | Clout Tower | 90s | 7m | $6,200 |

## Upgrade trees
Upgrades are bought on your home device. Each one changes how your setup looks and boosts what you earn.

### Gym Owner
| Upgrade | Cost | Effect |
|---|---|---|
| **Home Workout** | Free | unlocks **Train** |
| **Dumbbell Rack** | $300 | +15% Members gained |
| **Bench Press** | $450 | +20% home session pay |
| **Gym Mirror** | $1,500 | +15% passive income, +10% home session pay |
| **Park Workouts** | $2,000 | unlocks **Park Workout: Kingsway Gardens** |
| **Squat Rack** | $3,000 | +35% home session pay |
| **Heavy Bag** | $6,000 | +30% Members gained |
| **Guest Coaching** | $7,500 | +15% gig pay, unlocks **Guest Coach: Ironclad Gym** |
| **Pre-Workout** | $8,000 | +30% home session pay |
| **Neon 'NO DAYS OFF'** | $15,000 | +10% on everything |
| **Beach Bootcamp** | $18,000 | +20% gig pay, unlocks **Beach Bootcamp: Mayflex Beach** |
| **Coaching App** | $20,000 | 20% shorter cooldowns, +15% home session pay |
| **Treadmill** | $45,000 | +40% Members gained |
| **Summit Challenge** | $55,000 | +25% gig pay, unlocks **Summit Challenge** |
| **Supplement Line** | $60,000 | +60% passive income |
| **Championship Belt** | $140,000 | +20% on everything |
| **Fitness Expo** | $160,000 | +30% gig pay, unlocks **Fitness Expo: The Grand Mayflex** |
| **Coaching Staff** | $175,000 | +50% passive income, +25% home session pay |
| **Gym Chain** | $1,500,000 | +50% on everything |

### Looksmaxxer
| Upgrade | Cost | Effect |
|---|---|---|
| **Glow-Up** | Free | unlocks **Photoshoot** |
| **Skincare Shelf** | $300 | +15% Aura gained |
| **Ring Light** | $450 | +20% home session pay |
| **Mewing Guide** | $1,500 | +15% passive income, +10% home session pay |
| **Plaza Mog-Off** | $2,000 | unlocks **Mog-Off: Speakers' Corner** |
| **Fit Rack** | $3,000 | +35% home session pay |
| **Barber on Call** | $6,000 | +30% Aura gained |
| **Golden Hour Shoots** | $7,500 | +15% gig pay, unlocks **Golden Hour: Mega Mart** |
| **Softbox Lights** | $8,000 | +30% home session pay |
| **Neon 'MOG'** | $15,000 | +10% on everything |
| **Door Test** | $18,000 | +20% gig pay, unlocks **Door Test: Sticky Floors** |
| **Model Agency** | $20,000 | 20% shorter cooldowns, +15% home session pay |
| **Jawline Era** | $45,000 | +40% Aura gained |
| **Mansion Shoot** | $55,000 | +25% gig pay, unlocks **Campaign: Ocean Drive** |
| **Fragrance Deal** | $60,000 | +60% passive income |
| **Magazine Cover** | $140,000 | +20% on everything |
| **Runway Show** | $160,000 | +30% gig pay, unlocks **Runway: Clout Tower** |
| **Glam Team** | $175,000 | +50% passive income, +25% home session pay |
| **Final Boss Aura** | $1,500,000 | +50% on everything |

## Skill tree
Separate from your home upgrades, your career also has levels (up to 30) and a skill tree on the phone's **Career** app. See [[levels-skill-trees]].

- **Lv 1: Train.** Work out at any gym. Every session builds Aura, and Aura makes everything you do pay more.
- **Lv 3: Pre-Workout.** +15% from every session for the next 10 minutes after a drink.
- **Lv 6: Gym Selfie.** Post your pump. Mirror selfies at the gym give Clout.
- **Lv 9: Spotter.** Train with another player and you both get +20%.

### Gym Owner
*Start with a squat rack in the garage and grow it into the biggest gym chain in Mayflex.*

- **Lv 10: Open the Gym.** Members pay a membership every few minutes. Better equipment, more members.
- **Lv 13: Personal Trainer.** Coach members one-to-one for big tips.
- **Lv 16: Protein Bar.** Sell shakes at the front desk.
- **Lv 20: Gym Influencers.** Influencers who post at your gym bring in new members.
- **Lv 25 capstone, pick one:** **Franchise** (clean) or **Supplement Line**.
  - Franchise: Open a second gym. Both earn while you're at either.
  - Supplement Line: Your own brand of pre-workout on every shelf.
- **Lv 30 Legend: Iron Empire.** Run 30 sessions after Lv 30. Reward: NPCs across the map wear your gym's merch.

### Looksmaxxer
*Mewing, skincare, jawline. Max your looks, farm aura and mog everyone in the photo.*

- **Lv 10: Mog.** Stand next to another player in a photo and take a cut of their Clout.
- **Lv 13: Mewing.** +10% Aura from everything.
- **Lv 16: Skincare Routine.** Glow up: photos you're in pay +25%.
- **Lv 20: Aura Farming.** Stand still at a photo spot and NPCs film you for Clout.
- **Lv 25 capstone, pick one:** **Model Scout** (clean) or **Aura Guru** (scam).
  - Model Scout: Get signed. Paid shoots for brands.
  - Aura Guru: Sell "jawline courses" that do nothing. Big money, angry customers.
- **Lv 30 Legend: Final Form.** Mog 30 players after Lv 30. Reward: A glow follows you and every photo spot pays +50%.

## Reputation perks
Reach the very top or bottom of [[reputation]] and your career gets a bonus perk:

- **Wholesome 100: Inspiration.** Players who train near you get +20%, and you get a cut.
- **Final Boss: Roid Rage.** Huge gains, but every session builds a little Heat.

## Hybrids
Combine this career with a [[side-hustles|side hustle]]:

- **Fitfluencer** (with [[influencer|Influencer]]): Gym content goes viral. Workouts at the gym count as posts.
- **Supplement Brand** (with [[hustler|Hustler]]): Sell your own pre-workout. Members and followers buy it.
`,
  },
  {
    id: "truther",
    title: "Truther",
    category: "careers",
    summary: "Wake up, sheeple. Everything about the Truther career.",
    body: `
Find clues hidden around the map, connect them on the red-string board, call world events and expose scammers.

Your career runs from the **Old CRT Computer** in your home (Open TruthNet). Earnings show in the corner panel as **The Truth**.

## Branches
| Branch | App | Audience | What it is |
|---|---|---|---|
| **Conspiracy Prophet** | TruthNet | Believers | Connect the dots nobody else can see. Hunt clues around the island, preach the truth, and sell the supplements. |

## Home sessions
Home sessions are live minigames played at your setup. Money comes in as you play, so playing well pays more.

- **Connect the Dots** (Conspiracy Prophet): Clues are pinned to the board: connect each pair that belongs together with red string. Fast, correct links convince the most believers.

## Gigs
Gigs are jobs out in the city, unlocked by upgrades. Go to the spot and complete the task there. Pay is the base amount before upgrades, level bonuses and how well you do. See [[gigs]].

| Gig | Branch | Where | Time | Cooldown | Base pay |
|---|---|---|---|---|---|
| UFO Watch: Mayflex Peak | Conspiracy Prophet | Mayflex Peak | 45s | 2m | $150 |
| Crop Circles: Scrap Yard | Conspiracy Prophet | Scrap Yard | 60s | 3m | $420 |
| Chemtrail Watch: Mayflex International | Conspiracy Prophet | Mayflex International | 60s | 4m | $950 |
| Investigate: Fringe Substation | Conspiracy Prophet | Fringe Substation | 75s | 5m | $2,300 |
| Truth Rally: Speakers' Corner | Conspiracy Prophet | Speakers' Corner | 90s | 7m | $6,200 |

## Upgrade trees
Upgrades are bought on your home device. Each one changes how your setup looks and boosts what you earn.

### Conspiracy Prophet
| Upgrade | Cost | Effect |
|---|---|---|
| **Wake Up** | Free | unlocks **Connect the Dots** |
| **Tinfoil Hat** | $300 | +15% Believers gained |
| **More String** | $450 | +20% home session pay |
| **Shortwave Radio** | $1,500 | +15% passive income, +10% home session pay |
| **UFO Watch** | $2,000 | unlocks **UFO Watch: Mayflex Peak** |
| **Filing Cabinets** | $3,000 | +35% home session pay |
| **Pinned Map** | $6,000 | +30% Believers gained |
| **Crop Circles** | $7,500 | +15% gig pay, unlocks **Crop Circles: Scrap Yard** |
| **Video Channel** | $8,000 | +30% home session pay |
| **Neon 'WAKE UP'** | $15,000 | +10% on everything |
| **Chemtrail Watch** | $18,000 | +20% gig pay, unlocks **Chemtrail Watch: Mayflex International** |
| **Supplement Store** | $20,000 | 20% shorter cooldowns, +15% home session pay |
| **Bunker Supplies** | $45,000 | +40% Believers gained |
| **The Fringe Substation** | $55,000 | +25% gig pay, unlocks **Investigate: Fringe Substation** |
| **Merch** | $60,000 | +60% passive income |
| **Documentary** | $140,000 | +20% on everything |
| **Truth Rally** | $160,000 | +30% gig pay, unlocks **Truth Rally: Speakers' Corner** |
| **The Movement** | $175,000 | +50% passive income, +25% home session pay |
| **Vindicated** | $1,500,000 | +50% on everything |

## Skill tree
Separate from your home upgrades, your career also has levels (up to 30) and a skill tree on the phone's **Career** app. See [[levels-skill-trees]].

- **Lv 1: Investigate.** Pick up clues around the map and pin them on the red-string board at home.
- **Lv 3: Tinfoil Hat.** Immune to Whale Watcher and every other tracking perk.
- **Lv 6: Soapbox.** Preach in Subbers Park. Followers or haters, both give Clout.
- **Lv 9: Clue Sense.** Clues glow within 30 studs.

### Conspiracy Prophet
*Read the clues, call the event before it happens, and never let anyone forget it.*

- **Lv 10: Predict.** Lock in a prediction. If it happens within 20 minutes, everyone hears I TOLD YOU SO.
- **Lv 13: Pattern Recognition.** Clues show which world event they point to.
- **Lv 16: Believers.** Your followers get paid when you're right.
- **Lv 20: Bunker.** Keep earning through Blackouts and Market Crashes.
- **Lv 25 capstone, pick one:** **Third Eye** or **Doomsday Prepper**.
  - Third Eye: A guaranteed hint about the next world event every hour.
  - Doomsday Prepper: Sell bunker spots and survival kits before events.
- **Lv 30 Legend: The Awakened.** Make 30 predictions after Lv 30. Reward: Unlocks the secret room behind Road Closed (forever).

## Reputation perks
Reach the very top or bottom of [[reputation]] and your career gets a bonus perk:

- **Wholesome 100: Credible.** NPCs actually believe you. Believers get paid double.
- **Final Boss: Rabbit Hole.** Every new follower brings a friend, and wrong predictions never cost you followers.

## Hybrids
Combine this career with a [[side-hustles|side hustle]]:

- **Ghost Hunt Stream** (with [[influencer|Influencer]]): Stream your investigations. Viewers spot clues for you.
- **Hidden Messages** (with [[artist|Artist]]): Hide clues in your tracks for Clout per decode.
- **Wellness Empire** (with [[hustler|Hustler]]): Sell your shakes online at dropship scale.
`,
  },
  {
    id: "levels-skill-trees",
    title: "Levels & Skill Trees",
    category: "careers",
    summary: "XP, levels, specialisations, capstones and Legend status.",
    body: `
Your career has levels from 1 to **30**, shown in the phone's **Career** app. Doing your career's actions earns XP.

## XP needed per level
XP to reach the next level = 100 + 50 x (level - 1) + 6 x (level - 1)². So level 1 to 2 takes 100 XP, level 10 to 11 takes 1036 XP and level 29 to 30 takes 6,204 XP.

Rewards from actions grow with your level: **+6% money and Clout per level** on career actions, and **+2% per level** on tycoon pay (home sessions, gigs and passive income).

## The tree
| Level | What unlocks |
|---|---|
| 1 | Your career's **signature** action |
| 3, 6, 9 | Three starter perks |
| 10 | Pick a **specialisation**. Its signature action unlocks |
| 13, 16, 20 | Three specialisation perks |
| 25 | Pick a **capstone**: clean, scam or style |
| 30 | Start your **Legend trial**: do your signature action 30 times to become a Legend |

## Capstones
- **Clean** capstones pay +15% money and often raise your Rep.
- **Scam** capstones pay +25% money, but build Heat and lower your Rep.
- **Style** capstones give +25% Clout.

Legends get **+20% money and +20% Clout**.

## Changing your mind
Changing specialisation after level 10, or changing capstone, costs **$2,500**.

Every career's full tree is on its page: [[influencer]], [[hustler]], [[artist]], [[mogger]], [[truther]].
`,
  },
  {
    id: "side-hustles",
    title: "Side Hustles & Hybrids",
    category: "careers",
    summary: "Run a second career and unlock hybrid perks.",
    body: `
Once you reach **10,000 Clout** you can add a second career as a **side hustle**.

- Side hustles earn **50% XP** and are capped at **level 10**.
- You can swap which career is your main one, with a 60 second cooldown between switches.

## Hybrids
When your main career is **level 10+** and your side hustle is **level 5+**, the pair unlocks a hybrid. An active hybrid adds **+10% money** to both careers' actions.

| Careers | Hybrid | Description |
|---|---|---|
| Influencer + Hustler | **Brand Ambassador** | Shoppable posts. Followers buy your products straight from your posts. |
| Influencer + Mogger | **Fitfluencer** | Gym content goes viral. Workouts at the gym count as posts. |
| Influencer + Truther | **Ghost Hunt Stream** | Stream your investigations. Viewers spot clues for you. |
| Artist + Truther | **Hidden Messages** | Hide clues in your tracks for Clout per decode. |
| Hustler + Artist | **Merch King** | Limited merch drops that Dropshippers flip for your royalty. |
| Mogger + Hustler | **Supplement Brand** | Sell your own pre-workout. Members and followers buy it. |
| Influencer + Artist | **Viral Hitmaker** | Your tracks can become the trending sound. |
| Hustler + Truther | **Wellness Empire** | Sell your shakes online at dropship scale. |
`,
  },
  {
    id: "home-tycoon",
    title: "Home Tycoon",
    category: "money",
    summary: "How home sessions, upgrades and passive income work.",
    body: `
Your home is where your career lives. Walk up to your career's device (the laptop, the training tablet, the old CRT...) to open its dashboard.

## Home sessions
Live minigames you play at your setup: streaming games, filming TikTaks, recording tracks, training and more. Money comes in **as you play**, so the better you do, the more you earn. Each career's sessions are listed on its page.

## Upgrades
Spend your money on upgrades in your career's tree. Upgrades:
- make home sessions pay more,
- grow your audience faster,
- add **passive income** that comes in every few seconds, even while you're out,
- unlock **gigs** out in the city,
- change how your setup looks.

Each career has several **branches**, each with its own tree. Your first branch is free and each extra one costs $2,500 to start.

## Passive income and offline pay
Your passive income keeps coming in while you're in the game. When you come back after time away, you get a share (35%) of your passive income for the time you were gone, up to 8 hours.

## Where's my home?
The First Steps bar and the **GPS home** button on your career panel take you there. You can also buy bigger places from Mayflex Lettings. See [[properties]].
`,
  },
  {
    id: "gigs",
    title: "Gigs",
    category: "money",
    summary: "Jobs out in the city for every career.",
    body: `
Gigs are unlocked by upgrades in your career's tree. Each gig has a spot on the map. Go there and complete the task. Gigs have cooldowns, and the later ones pay far more.

## Gig tasks
| Task | How it works |
|---|---|
| Photo | Raise the camera (C / right mouse) and keep the target in frame. Snap or film it. |
| Talk | Walk up to people (E), read them, and pick the line that works on them. |
| Deliver | Carry items from the pickup to the drop-off, one at a time. |
| Perform | Stand on the stage and hit the beats (D F J K / tap) for a few rounds. |
| Pose | Hit your mark, then copy the move sequence (arrow keys / tap). |
| Route | Run the checkpoints in order before the clock runs out. |
| Trade | Buy low, sell high on a live chart. |
| Search | A scanner beeps faster near hidden clues. Inspect them (E). |
| Catch | Stop the runners before they reach the exit. |
| Haggle | Stop the needle in the deal zone. The better the price, the better the deal. |

How well you do changes the pay from **0.8x to 1.2x**.

> [!TIP]
> **Happy Hour:** for 5 minutes every 40 minutes, gigs pay double. The same clock runs on every server.

## Every gig
Base pay before upgrades, level bonuses and Happy Hour.

| Gig | Career | Where | Base pay |
|---|---|---|---|
| IRL Stream: High Street | [[influencer|Influencer]] (Glitch Streamer) | High Street | $150 |
| IRL Stream: Mayflex Beach | [[influencer|Influencer]] (Glitch Streamer) | Mayflex Beach | $420 |
| IRL Stream: Car Meet | [[influencer|Influencer]] (Glitch Streamer) | Any car dealership | $950 |
| IRL Stream: Plane Spotting | [[influencer|Influencer]] (Glitch Streamer) | Mayflex International | $2,300 |
| IRL Stream: Summit Hike | [[influencer|Influencer]] (Glitch Streamer) | Mayflex Peak | $6,200 |
| Trend Shoot: Speakers' Corner | [[influencer|Influencer]] (TikTak Star) | Speakers' Corner | $120 |
| Trend Shoot: Mayflex Marina | [[influencer|Influencer]] (TikTak Star) | Mayflex Marina | $360 |
| Trend Shoot: Kingsway Gardens | [[influencer|Influencer]] (TikTak Star) | Kingsway Gardens | $820 |
| Trend Shoot: Mayflex Beach | [[influencer|Influencer]] (TikTak Star) | Mayflex Beach | $1,950 |
| Trend Shoot: Ocean Drive | [[influencer|Influencer]] (TikTak Star) | Low Battery Lane | $4,600 |
| Trend Shoot: Mayflex Peak | [[influencer|Influencer]] (TikTak Star) | Mayflex Peak | $11,500 |
| Brand Deal Shoot | [[influencer|Influencer]] (TikTak Star) | Clout Tower | $42,000 |
| Car Meet Footage | [[influencer|Influencer]] (Clipper) | Any car dealership | $150 |
| Club Footage: Sticky Floors | [[influencer|Influencer]] (Clipper) | Sticky Floors | $420 |
| Beach Footage: Mayflex Beach | [[influencer|Influencer]] (Clipper) | Mayflex Beach | $950 |
| Arrivals: Mayflex International | [[influencer|Influencer]] (Clipper) | Mayflex International | $2,300 |
| Drone Shots: Mayflex Peak | [[influencer|Influencer]] (Clipper) | Mayflex Peak | $6,200 |
| Street Interviews: Tower Row Garden | [[influencer|Influencer]] (Podcaster) | Tower Row Garden | $150 |
| Live: Subbers Tower | [[influencer|Influencer]] (Podcaster) | Subbers Tower | $420 |
| Live: Sticky Floors | [[influencer|Influencer]] (Podcaster) | Sticky Floors | $950 |
| Record: TV Tower | [[influencer|Influencer]] (Podcaster) | TV Tower | $2,300 |
| Live Tour: The Grand Mayflex | [[influencer|Influencer]] (Podcaster) | The Grand Mayflex | $6,200 |
| Freight Pickup: Fuel & Go | [[hustler|Hustler]] (Dropshipper) | Fuel & Go | $150 |
| Pop-Up Stall: Market Row Market | [[hustler|Hustler]] (Dropshipper) | Market Row Market | $420 |
| Mall Kiosk: Mega Mart | [[hustler|Hustler]] (Dropshipper) | Mega Mart | $950 |
| Air Freight: Mayflex International | [[hustler|Hustler]] (Dropshipper) | Mayflex International | $2,300 |
| Containers: Dropship Docks | [[hustler|Hustler]] (Dropshipper) | Dropship Docks | $6,200 |
| Mindset Bootcamp: Kingsway Gardens | [[hustler|Hustler]] (Course Guru) | Kingsway Gardens | $140 |
| Seminar: Subbers Tower | [[hustler|Hustler]] (Course Guru) | Subbers Tower | $400 |
| Networking Night: Sticky Floors | [[hustler|Hustler]] (Course Guru) | Sticky Floors | $920 |
| Conference Keynote: The Grand Mayflex | [[hustler|Hustler]] (Course Guru) | The Grand Mayflex | $2,250 |
| Island Retreat: The Pier | [[hustler|Hustler]] (Course Guru) | The Pier | $6,100 |
| Shill: Speakers' Corner | [[hustler|Hustler]] (Meme Coin Dev) | Speakers' Corner | $150 |
| Holder Meetup: Mayflex Savings | [[hustler|Hustler]] (Meme Coin Dev) | Mayflex Savings | $420 |
| Airdrop Party: Park Lake | [[hustler|Hustler]] (Meme Coin Dev) | Park Lake | $950 |
| Yacht Party: Mayflex Marina | [[hustler|Hustler]] (Meme Coin Dev) | Mayflex Marina | $2,300 |
| Keynote: The Grand Mayflex | [[hustler|Hustler]] (Meme Coin Dev) | The Grand Mayflex | $6,200 |
| Trading Retreat: Scrap Yard | [[hustler|Hustler]] (Crypto Trader) | Scrap Yard | $160 |
| Hot Desk: Clout Tower | [[hustler|Hustler]] (Crypto Trader) | Clout Tower | $440 |
| Seminar: Mayflex Stadium | [[hustler|Hustler]] (Crypto Trader) | Mayflex Stadium | $980 |
| Jet Lounge: Skyline Airfield | [[hustler|Hustler]] (Crypto Trader) | Skyline Jet Centre | $2,400 |
| Penthouse Desk: Summit Residences | [[hustler|Hustler]] (Crypto Trader) | Clout Tower | $6,400 |
| Open Mic: Mega Mart | [[artist|Artist]] (SoundClown Rapper) | Mega Mart | $140 |
| Cypher: Tower Row Garden | [[artist|Artist]] (SoundClown Rapper) | Tower Row Garden | $400 |
| Music Video: Mayflex Beach | [[artist|Artist]] (SoundClown Rapper) | Mayflex Beach | $920 |
| Studio Session: TV Tower | [[artist|Artist]] (SoundClown Rapper) | TV Tower | $2,250 |
| Headline: Sticky Floors | [[artist|Artist]] (SoundClown Rapper) | Sticky Floors | $6,100 |
| Beach Party: Mayflex Beach | [[artist|Artist]] (DJ) | Mayflex Beach | $150 |
| Rooftop: The Grand Mayflex | [[artist|Artist]] (DJ) | The Grand Mayflex | $420 |
| Yacht Set: Mayflex Marina | [[artist|Artist]] (DJ) | Mayflex Marina | $950 |
| Sunset Set: Mayflex Peak | [[artist|Artist]] (DJ) | Mayflex Peak | $2,300 |
| Residency: Sticky Floors | [[artist|Artist]] (DJ) | Sticky Floors | $6,300 |
| Park Workout: Kingsway Gardens | [[mogger|Mogger]] (Gym Owner) | Kingsway Gardens | $150 |
| Guest Coach: Ironclad Gym | [[mogger|Mogger]] (Gym Owner) | The Rec | $420 |
| Beach Bootcamp: Mayflex Beach | [[mogger|Mogger]] (Gym Owner) | Mayflex Beach | $950 |
| Summit Challenge | [[mogger|Mogger]] (Gym Owner) | Mayflex Peak | $2,300 |
| Fitness Expo: The Grand Mayflex | [[mogger|Mogger]] (Gym Owner) | The Grand Mayflex | $6,200 |
| Mog-Off: Speakers' Corner | [[mogger|Mogger]] (Looksmaxxer) | Speakers' Corner | $150 |
| Golden Hour: Mega Mart | [[mogger|Mogger]] (Looksmaxxer) | Mega Mart | $420 |
| Door Test: Sticky Floors | [[mogger|Mogger]] (Looksmaxxer) | Sticky Floors | $950 |
| Campaign: Ocean Drive | [[mogger|Mogger]] (Looksmaxxer) | Low Battery Lane | $2,300 |
| Runway: Clout Tower | [[mogger|Mogger]] (Looksmaxxer) | Clout Tower | $6,200 |
| UFO Watch: Mayflex Peak | [[truther|Truther]] (Conspiracy Prophet) | Mayflex Peak | $150 |
| Crop Circles: Scrap Yard | [[truther|Truther]] (Conspiracy Prophet) | Scrap Yard | $420 |
| Chemtrail Watch: Mayflex International | [[truther|Truther]] (Conspiracy Prophet) | Mayflex International | $950 |
| Investigate: Fringe Substation | [[truther|Truther]] (Conspiracy Prophet) | Fringe Substation | $2,300 |
| Truth Rally: Speakers' Corner | [[truther|Truther]] (Conspiracy Prophet) | Speakers' Corner | $6,200 |
`,
  },
  {
    id: "companies",
    title: "LinkedOut & Companies",
    category: "money",
    summary: "Run a company with NPC staff that earns while you play.",
    body: `
> **Open to Work. Closed to Feedback.**

**LinkedOut** (phone app, key **I**) lets you run one company per save. It's staffed by NPCs and makes money while you do other things. You can start one at **career level 5**.

## Company type
What your company does follows your career:

| Career | Company | Description |
|---|---|---|
| Influencer | **Content House** | Six roommates, one ring light, zero privacy. Every argument is a video. |
| Hustler | **Dropship Empire** | Same phone case. 400% markup. Ships in 6-8 weeks from somewhere. |
| Artist | **Record Label** | We own your masters. And your mum's masters. Exposure is in the contract. |
| Mogger | **Mog Gym** | No mirrors were harmed. Every mirror was used. Memberships auto-renew forever. |
| Truther | **Bunker Supply Co.** | Freeze-dried beans for the end of days. Now available as a monthly subscription. |

## Premises
Grow your company by moving up the ladder. Each step holds more staff and rentals.

| Premises | Price | Staff | Rentals | Description |
|---|---|---|---|---|
| **Pop-Up Stall** | $25,000 | 2 | 1 | A folding table, a hand-written sign and a dream. Zoning permit pending. |
| **Storefront** | Own a shop property | 5 | 2 | A real shop on High Street. You need to own one first: Mayflex Lettings sells them. |
| **Office Floor** | $2,500,000 | 10 | 4 | Open-plan. Kombucha on tap. A slide nobody uses. Nowhere to cry. |
| **Corporate HQ** | $40,000,000 | 25 | 6 | A whole tower with your name on top. In Comic Sans, unless you pay the designer. |

The Storefront step unlocks **Marketing**, the Office unlocks the **Offshore company** and the HQ unlocks **Going public**.

## Staff
Hire from the hiring board (new candidates every hour). Better staff produce more but cost more. Watch out for their traits:

| Trait | What they're like |
|---|---|
| **Normal** | Shows up. Does the work. Deeply suspicious. |
| **Grindset** | Wakes up at 4am to tell you about it. Works harder, costs a bit more. |
| **Quiet Quitter** | Does exactly what the job description says. Not one pixel more. Cheaper. |
| **Nepo Baby** | Their dad knows a guy. Barely works, paid loads, brings Clout. |
| **Very Trustworthy** | Their own words. Twice. Unprompted. (A third of what they make goes missing.) |

A **manager** adds +10% staff output, lets the till hold 8 hours of profit instead of 2, and banks it for you every 10 minutes (keeping 10%).

## Getting paid
Profit fills the **till**. Collect it from the app any time. Profit is taxed by the **Mayflex Revenue Service**: nothing on the first $50,000 an hour, 25% up to $250,000 and 50% above that.

**Isla Prive Holdings Ltd** ($5,000,000): A shell company on a private island, a PO box and a lawyer who only communicates by fax. Halves your tax. +1 Heat, and the LKRS will be in touch.

## Marketing
| Campaign | Price | Effect |
|---|---|---|
| **Highway Billboard** | $50,000 | Your face, 40 feet tall, slightly pixelated. +25% for an hour. |
| **Halftime Ad at the Big Game** | $2,500,000 | Thirty seconds of a CGI horse saying your company's name. +75% for two hours. |

## Incidents
While you're online, something will go wrong about every 30 minutes. Pick how to handle it. Ignore it for 8 minutes and the last option happens.
`,
  },
  {
    id: "daily-goals",
    title: "Daily Goals & Events",
    category: "money",
    summary: "Daily goals, streaks, weekly events, Happy Hour and leaderboards.",
    body: `
## Daily goals
You get **three new goals every day**, picked for your career (a session, a gig and one more). Each goal pays when it's done. Finish all three for a bonus that grows with your **day streak**.

## Weekly events
Every week has a theme that boosts careers by **1.5x money** (and 1.25x audience). The chip at the top of the screen shows this week's event.

| Event | Boost |
|---|---|
| Bull Run Week | Number go up. |
| Fashion Week | Moggers and Artists earn 1.5x. |
| Viral Season | Influencers earn 1.5x. |
| Q4 Hustle | Hustlers earn 1.5x. Close the year strong. |
| Wake Up Week | Truthers earn 1.5x. They don't want you to know. |

## Happy Hour
For **5 minutes every 40 minutes**, gigs pay **double**. Every server runs on the same clock.

## Leaderboards
Press **B** for the leaderboards: **net worth**, **Clout** and **money earned today** in your server, plus an **all-time net worth** board. The leaders get a title over their head.

## Daily login reward
See [[store]].
`,
  },
  {
    id: "store",
    title: "Store & Game Passes",
    category: "money",
    summary: "Game passes, cash packs, extras and the daily reward.",
    body: `
Open the **Store** on your phone (key **Y**).

## Game passes
Bought once with Robux, kept forever on every save.

| Pass | What you get |
|---|---|
| **2x Cash** | Double money from sessions, gigs, jobs, sponsors and passive income. Forever, on every save. |
| **VIP** | +25% cash, double daily login rewards, a gold crown on your name tag and a [VIP] chat tag. |
| **+4 Save Slots** | Run 8 different lives at once instead of 4. |

## Cash packs
Cash packs grow with your passive income, so they're never worthless late game. They aren't multiplied by 2x Cash or VIP.

| Pack | You get |
|---|---|
| **Pocket Money** | $25,000 or 30 minutes of your passive income, whichever is bigger |
| **Brand Deal** | $100,000 or 2 hours of your passive income, whichever is bigger |
| **Viral Moment** | $350,000 or 6 hours of your passive income, whichever is bigger |
| **Exit Liquidity** | $1,500,000 or 24 hours of your passive income, whichever is bigger |

## Extras
Looks and perks you buy with **in-game cash** (taken from the save you're playing). Once bought they stay on your whole account. Perks can be switched off in the Store.

| Extra | Cash price | What it does |
|---|---|---|
| **All Wallpapers** | $1,000,000 | Every live wallpaper, and any we add later. |
| **Web** | $250,000 | A glowing web of dots that reaches for your cursor. |
| **Money Rain** | $250,000 | Falling cash, W's, L's and stonks. Your cursor parts the rain. |
| **Aurora** | $250,000 | Slow northern lights over a starry sky. |
| **Warp Speed** | $250,000 | Hyperspace stars that steer toward your cursor. |
| **Stonks** | $250,000 | A live chart that only goes up. Mostly. |
| **Verified Check** | $500,000 | A blue check next to your name tag and in chat. Totally legit. Trust. |
| **Air Horn** | $750,000 | Press T to blast an air horn everyone nearby hears. 10 second cooldown. |
| **Rainbow Name** | $1,000,000 | Your name tag and chat name cycle through the rainbow. |
| **Custom Title** | $2,000,000 | Write your own title above your name tag (24 characters, filtered). |
| **Money Trail** | $1,500,000 | Dollar bills fly off you wherever you walk. Everyone sees it. |
| **Paparazzi** | $2,500,000 | Camera flashes and shutter clicks follow you everywhere. Main character energy. |

**Server Announcement** ($1,000,000): A message from you on every player's screen in this server for 8 seconds. Filtered.

## Daily login reward
Claim once a day. Miss a day and the streak starts again from day 1. After day 7 it loops back round. VIP doubles it.

| Day | Reward |
|---|---|
| Day 1 | $1,000 or 10 min of passive income |
| Day 2 | $2,000 or 15 min of passive income |
| Day 3 | $3,500 or 20 min of passive income |
| Day 4 | $5,000 or 25 min of passive income |
| Day 5 | $7,500 or 30 min of passive income |
| Day 6 | $10,000 or 40 min of passive income |
| Day 7 | $25,000 or 60 min of passive income, plus 100 Clout |
`,
  },
  {
    id: "reputation",
    title: "Reputation",
    category: "rep",
    summary: "Rep tiers from Final Boss to Wholesome 100.",
    body: `
Rep runs from **-100 to +100**. It's who Mayflex thinks you are, and it only moves when you act. Heroes get paid more, villains get watched more.

## Tiers
| Tier | Rep | Upsides | Downsides |
|---|---|---|---|
| **Wholesome 100** | 100 | Halo, and NPCs clap when you walk in; Your path's halo perk switches on; Exposés need double the evidence; Sponsors pay double, shops 15% off; Vouch for another player once an hour (+5 Rep) | Every Rep loss is doubled; One big scam knocks you out of it |
| **Beloved** | 50 to 99 | Sponsors pay 25% more, shops 10% off; Heat builds 25% slower; Trusted badge on Gigs | Getting Exposed costs 15 Rep instead of 10 |
| **Trusted** | 15 to 49 | Sponsors pay 10% more, shops 5% off; Trusted badge on Gigs | None. This is the safe zone. |
| **Mid** | -14 to 14 | Heat drops 25% faster; Clippers ignore you | Sponsors pay 10% less. Nobody cares yet. |
| **Sus** | -49 to -15 | Back Alley dealer sells you stock 20% cheaper | Shops +10%, NPC brands drop you; Sus warning on Gigs; Exposés need 25% less evidence |
| **Villain Arc** | -99 to -50 | +25% Clout from hate-watchers; Black Market opens (back room of Totally Legit Pawn); NPC haters film you | Shops +20%; Heat drops 25% slower; Exposés need half the evidence |
| **Final Boss** | -100 | Red glow and villain music; Your path's villain perk switches on; +50% Clout from everything; Being Cancelled doesn't halve your Clout | Qwik Stop won't serve you, other shops +25%; Truthers always see you; 5 Heat starts a Manhunt |

Wholesome 100 is sticky: you keep it until you drop below 90. Final Boss is sticky the other way: you keep it until you climb above -90.

## Raising your Rep
- **Apology Video:** costs 10% of your Clout and clears 2 Heat. Your first one each day gives +3 Rep. Every extra one that day costs 3 Rep.
- **Donate** $1,000 to the Gekto Food Bank for +1 Rep (up to +10 a day).
- **Clean capstone actions** (up to +20 Rep a day).
- At Wholesome 100 you can **vouch** for another player once an hour (+5 Rep for them).

## Losing Rep
- Scam capstone actions. A **Rug Pull** costs 40 Rep at once.
- Getting **Exposed** (usually 10 Rep). See [[heat]].
- Getting **Busted** (-5) or bailing on a gig (-5).

Each career gets a special perk at Wholesome 100 and at Final Boss. They're listed on each career's page.
`,
  },
  {
    id: "heat",
    title: "Heat, Exposés & Cancelled",
    category: "rep",
    summary: "How Heat builds, cools and gets you exposed.",
    body: `
Heat is how wanted you are **right now**, from 0 to 5. Rep is long-term; Heat is short-term.

## Building Heat
Shady moves build Heat: scam capstones, fake reviews, rug pulls (5 Heat at once), shady sponsors and more. Your Rep tier changes how fast Heat builds.

## Cooling off
- You lose **1 Heat every 5 minutes** without a shady action.
- Inside a **Lie Low** zone Heat drops 2x faster.
- Heat keeps cooling while you're offline.
- An **Apology Video** clears 2 Heat at once.

## The Wanted list
At **Heat 2+** you show up on the Wanted list. [[truther|Truthers]] see the rough position of everyone on it and can **Expose** you up close: you lose Rep and they gain believers.

## The Tea
Sit at **3+ Heat** for too long (about 2 and a half minutes, depending on your Rep tier) and the NPC drama page **The Tea** exposes you.

## Cancelled
Getting cancelled lasts 10 minutes and halves your Clout gains. **Final Boss** players are cancel-proof.
`,
  },
  {
    id: "social",
    title: "Moments, Shoutouts & Collabs",
    category: "rep",
    summary: "How careers interact with each other.",
    body: `
## Moments
Wrecks, rug pulls, big purchases and celebrity sightings create **Moments**. Influencers running **Clipper** or **Podcaster** nearby can clip them (press **C**). The first three to clip get paid, and the person in the Moment gets a little fame.

## Shoutouts
Anyone can ask a creator ([[influencer]] or [[artist]]) for a paid **shoutout**: walk up and hold **G**. The creator accepts or declines, and you gain Clout.

## Collabs
Two Artists close together can **collab** (hold **H**). Both get listeners and pay.

## Exposing
[[truther|Truthers]] can expose players with Heat 2 or more. See [[heat]].

## The Feed
The biggest moments in the server are announced to everyone.
`,
  },
  {
    id: "vehicles",
    title: "Cars",
    category: "vehicles",
    summary: "Every car, its price, top speed and dealer.",
    body: `
Buy cars at a [[dealerships|dealership]]. Bring out any car you own from the **Garage** app (G), or hold **V** to call one. Your first car, the Vauxhaul Corsa, is free.

| Car | Class | Price | Top speed | Seats | Sold at |
|---|---|---|---|---|---|
| **Vauxhaul Corsa** | Hatchback | Free (starter) | 124 mph | 4 | Fringe Motors |
| **Volkswagon Golf R** | Hot Hatch | $38,000 | 188 mph | 4 | Fringe Motors, Apex Mayflex |
| **BMV M3** | Performance Saloon | $45,000 | 180 mph | 4 | Fringe Motors, Apex Mayflex |
| **Audy RS3 Saloon** | Performance Saloon | $52,000 | 210 mph | 4 | Fringe Motors, Apex Mayflex |
| **Fjord Mustang GT** | Muscle Car | $55,000 | 188 mph | 4 | Fringe Motors |
| **Mercedez C63** | Performance Saloon | $65,000 | 210 mph | 4 | Apex Mayflex, Kingsway Motors |
| **Tezla Model S** | Electric Saloon | $80,000 | 188 mph | 4 | Kingsway Motors |
| **Chevrolay Corvette** | Sports Car | $85,000 | 195 mph | 2 | Apex Mayflex, Velocita Exotics |
| **Mercedez G-Wagon** | Off-Roader | $90,000 | 165 mph | 4 | Apex Mayflex, Kingsway Motors |
| **Porshe 911 Carrera S** | Sports Car | $120,000 | 218 mph | 4 | Velocita Exotics |
| **Maybak GLS 600** | Luxury SUV | $180,000 | 188 mph | 4 | Kingsway Motors |
| **Ferarri SF90 Stradale** | Supercar | $450,000 | 255 mph | 2 | Velocita Exotics |
| **Lamborgreeny Revuelto** | Supercar | $500,000 | 262 mph | 2 | Velocita Exotics |
| **Koenigsigg Jesko** | Hypercar | $2,500,000 | 300 mph | 2 | Velocita Exotics |
| **Bugotti Chiron** | Hypercar | $3,000,000 | 315 mph | 2 | Velocita Exotics |

## About each car
- **Vauxhaul Corsa:** Everyone's first car. Smells like old fries and the clutch is gone, but it's yours.
- **Volkswagon Golf R:** All-wheel drive, a launch that embarrasses supercars, and room for the weekly shop.
- **BMV M3:** Twin-turbo straight six, a grille you can see from space, and four doors for the lads.
- **Audy RS3 Saloon:** Five cylinders, four driven wheels and a wing someone added at a car meet.
- **Fjord Mustang GT:** Five litres of V8, a rear end that wants to overtake the front, and zero apologies.
- **Mercedez C63:** A hand-built V8 in a car your nan would buy. It is not your nan's car.
- **Tezla Model S:** Silent, smug and quicker off the line than anything with a gearbox. Charges while you sleep.
- **Chevrolay Corvette:** A V8 behind your head, a targa roof and an exhaust the neighbours will hear twice.
- **Mercedez G-Wagon:** Shaped like a fridge, costs like a house. Climbs kerbs the others won't.
- **Porshe 911 Carrera S:** Engine in the wrong end, handling in the right one. The thinking person's supercar.
- **Maybak GLS 600:** A first-class lounge that happens to have wheels. The chauffeur is not included.
- **Ferarri SF90 Stradale:** A twin-turbo V8 and three electric motors. Red is mandatory, apparently.
- **Lamborgreeny Revuelto:** A V12, three motors and doors that open upwards. Subtle it is not.
- **Koenigsigg Jesko:** 300 mph of Swedish carbon fibre. The car you buy when the Lambo stops impressing anyone.
- **Bugotti Chiron:** Sixteen cylinders, four turbos and a top speed nobody has the road for.

See also [[superbikes]], [[aircraft]], [[boats]] and [[vehicle-customisation]].
`,
  },
  {
    id: "superbikes",
    title: "Superbikes",
    category: "vehicles",
    summary: "Every motorcycle at Redline Moto.",
    body: `
All bikes are sold at **Redline Moto**. Bikes can take engine, exhaust and suspension upgrades. Only bikes without a printed livery can be repainted.

| Bike | Class | Price | Top speed | Seats | Sold at |
|---|---|---|---|---|---|
| **Kawasacky Ninja ZX-10R** | Superbike | $18,000 | 218 mph | 2 | Redline Moto |
| **Yamahah YZF-R1** | Superbike | $20,000 | 218 mph | 2 | Redline Moto |
| **BMV S 1000 RR** | Superbike | $22,000 | 221 mph | 2 | Redline Moto |
| **Hondah CBR1000RR-R Fireblade** | Superbike | $29,000 | 225 mph | 2 | Redline Moto |
| **Dukati Panigale V4 S** | Superbike | $32,000 | 225 mph | 2 | Redline Moto |
| **BMV M 1000 RR** | Superbike | $38,000 | 229 mph | 2 | Redline Moto |

## About each bike
- **Kawasacky Ninja ZX-10R:** Lime green, six-time world champion, and the cheapest way to own a race bike with number plates.
- **Yamahah YZF-R1:** Underseat pipes, a howl you can hear from the next postcode, and a paint job of your choosing.
- **BMV S 1000 RR:** The bike every streamer wheelies past the camera. Quickshifter, launch control, zero chill.
- **Hondah CBR1000RR-R Fireblade:** Built by people who race at the Isle of Man for fun. Revs past 14,000 and never once breaks down.
- **Dukati Panigale V4 S:** 214 horsepower of Italian V4 and a riding position designed by a chiropractor's accountant.
- **BMV M 1000 RR:** Carbon winglets, an M badge and 212 horsepower. The car park M3 owners are suddenly very quiet.
`,
  },
  {
    id: "aircraft",
    title: "Aircraft",
    category: "vehicles",
    summary: "Planes and helicopters at the Skyline Jet Centre.",
    body: `
Aircraft are sold at the **Skyline Jet Centre** at Mayflex International, where you can also refuel them. Planes take off from the runway; helicopters can land almost anywhere. See [[controls]] for flying controls.

| Aircraft | Class | Price | Seats | Sold at |
|---|---|---|---|---|
| **Pipper Super Cub** | Bush Plane | $120,000 | 2 | Skyline Jet Centre |
| **Cesna Skyhawk** | Light Aircraft | $220,000 | 4 | Skyline Jet Centre |
| **Sirrus SR22** | Light Aircraft | $450,000 | 4 | Skyline Jet Centre |
| **Bel JetRanger** | Helicopter | $900,000 | 4 | Skyline Jet Centre |
| **Beachcraft Queen Air** | Turboprop | $2,400,000 | 6 | Skyline Jet Centre |
| **Gulfstreem G650** | Private Jet | $12,000,000 | 6 | Skyline Jet Centre |

## About each aircraft
- **Pipper Super Cub:** Fabric wings, a tail wheel and a stall speed you could jog past. Lands anywhere flat.
- **Cesna Skyhawk:** The plane everyone learns in. Forgiving, slow, and somehow always booked out.
- **Sirrus SR22:** Glass cockpit, leather seats and a parachute for the whole plane. Cruises like it's late.
- **Bel JetRanger:** Take off from anywhere, land on the roof of anywhere. Neighbours love it.
- **Beachcraft Queen Air:** Two turboprops, eight leather seats and a cockpit full of switches you'll never touch.
- **Gulfstreem G650:** Fly to the other side of the world before your coffee goes cold. The ultimate flex.

> [!TIP]
> Own a [[properties|hangar]] to keep your aircraft somewhere fancy.
`,
  },
  {
    id: "boats",
    title: "Boats",
    category: "vehicles",
    summary: "Every boat at Mayflex Marina.",
    body: `
Boats are sold, berthed and refuelled at **Mayflex Marina**.

| Boat | Class | Price | Seats | Sold at |
|---|---|---|---|---|
| **Tinny Runabout** | Small Boat | $12,000 | 2 | Mayflex Marina |
| **North Sea Trawler** | Fishing Boat | $95,000 | 3 | Mayflex Marina |
| **Rivva Aquarama** | Speedboat | $380,000 | 4 | Mayflex Marina |
| **Superyacht** | Yacht | $6,500,000 | 6 | Mayflex Marina |

## About each boat
- **Tinny Runabout:** A wooden boat, an outboard and a lifebuoy. Everything you need, nothing you don't.
- **North Sea Trawler:** Built for weather, not for speed. Comes with nets, buoys and a faint smell of cod.
- **Rivva Aquarama:** Varnished mahogany and twin V8s. The most glamorous way to get wet.
- **Superyacht:** A floating mansion with a crew you'll never meet. Parties start the moment you board.
`,
  },
  {
    id: "dealerships",
    title: "Dealerships",
    category: "vehicles",
    summary: "Where to buy every vehicle.",
    body: `
Every dealership is marked on the map (M).

| Dealer | Sells |
|---|---|
| **Skyline Jet Centre** | Gulfstreem G650, Beachcraft Queen Air, Bel JetRanger, Sirrus SR22, Cesna Skyhawk, Pipper Super Cub |
| **Mayflex Marina** | Tinny Runabout, North Sea Trawler, Rivva Aquarama, Superyacht |
| **Fringe Motors** | Vauxhaul Corsa, Volkswagon Golf R, Audy RS3 Saloon, BMV M3, Fjord Mustang GT |
| **Apex Mayflex** | BMV M3, Mercedez C63, Audy RS3 Saloon, Volkswagon Golf R, Chevrolay Corvette, Mercedez G-Wagon |
| **Kingsway Motors** | Maybak GLS 600, Mercedez G-Wagon, Mercedez C63, Tezla Model S |
| **Velocita Exotics** | Porshe 911 Carrera S, Lamborgreeny Revuelto, Ferarri SF90 Stradale, Chevrolay Corvette, Koenigsigg Jesko, Bugotti Chiron |
| **Redline Moto** | Kawasacky Ninja ZX-10R, Yamahah YZF-R1, BMV S 1000 RR, Hondah CBR1000RR-R Fireblade, Dukati Panigale V4 S, BMV M 1000 RR |

Dealers buy vehicles back for **50%** of the price. You can own up to 10 of the same car.
`,
  },
  {
    id: "vehicle-customisation",
    title: "Customisation & Tuning",
    category: "vehicles",
    summary: "Paint, wheels, performance upgrades and sound systems.",
    body: `
Customise a vehicle within range of a dealership (or close to a fuel pump). Upgrades are split into **Visual** and **Performance**.

## Visual
- **Paint:** 18 colours. Finishes: Gloss (free), Metallic ($1,500), Matte ($2,500), Pearl ($4,000), Chrome ($15,000).
- **Respray** in the Vehicle Manager: $500.
- **Interior colour, window tint, rims, rim finish, brake calipers, spoilers and splitters.**
- **Decals:** stripes ($1,200), numbers ($600), logos ($400) and your company's logo ($500).

## Performance
- **Turbo** and **supercharger** for more power.
- **Exhaust** and **exhaust tunes**: pops, crackles and flames.
- **Suspension** (ride height), **tyres**, **differential** (up to welded for drifting) and **weight reduction**.

A fully built car has far more power than its tyres can hold, so upgrade the tyres and diff too.

Every car gets a **performance class** from D up to S2 and X, based on power-to-weight, grip and top speed.

## Sound system
| Upgrade | Price |
|---|---|
| Standard Radio (up to 100%) | $0 |
| Speakers (up to 125%) | $800 |
| Amplifier (up to 150%) | $1,800 |
| Big Amp (up to 200%) | $3,000 |
| Subwoofer (200% + BASS) | $6,000 |

Stations: Larp FM, Clout Radio, Rock Drama. Press **N** while driving for the next station.
`,
  },
  {
    id: "fuel-repairs",
    title: "Fuel & Repairs",
    category: "vehicles",
    summary: "Running costs: fuel, repairs and wrecks.",
    body: `
## Fuel
Every vehicle has a fuel tank and burns more under load and at speed. Fuel costs **$3 per litre**. Fill up at **Fuel & Go** and the other fuel stations on the map. Aircraft refuel at the Skyline Jet Centre and boats at Mayflex Marina. The Tezla is electric and counts kWh instead.

## Repairs
- A full repair costs **5% of the vehicle's price** (at least $150).
- Press **V** while driving to call a mobile mechanic. It costs 1.5x the normal price.

## Wrecks
A wrecked vehicle is towed away after 25 seconds. You can call your vehicles again every 15 seconds.
`,
  },
  {
    id: "properties",
    title: "Properties",
    category: "property",
    summary: "Every apartment, house, mansion, hangar and shop for sale.",
    body: `
Buy property at **Mayflex Lettings**, the desk inside Mayflex Savings on the High Street. Every owner gets their own private copy of the real building, so any number of players can own the same place. The phone's **Travel** app takes you straight to your properties.

## Listings
### Apartments
| Property | Area | Price | Description |
|---|---|---|---|
| **Pigeon House Flat** | Pigeon House | $85,000 | A one-bed in a council block by the Grid. Pigeons included at no extra cost. |
| **Harlow House Flat** | Tower Row | $110,000 | Third floor, big windows, and the lift works most days. |
| **Wren House Top Floor** | Tower Row | $160,000 | The top floor of Wren House. Nobody stomping about above you. |
| **Subbers Tower Flat** | Industrial Estate | $260,000 | High up the tallest block in Rock Bottom. Mind the scaffolding. |

### Penthouses
| Property | Area | Price | Description |
|---|---|---|---|
| **Subbers Tower Penthouse** | Industrial Estate | $1,800,000 | The top floor of Subbers Tower. The best view of the docks, the worst lift in Mayflex. |
| **Clout Tower Penthouse** | Mayflex | $2,400,000 | The top of the tallest building in Mayflex. Private lift, private everything. |

### Houses
| Property | Area | Price | Description |
|---|---|---|---|
| **15 Low Battery Lane** | Rock Bottom | $150,000 | Your first place. Two up, two down, damp included. |
| **12 Low Battery Lane** | Rock Bottom | $175,000 | Front step, back yard, nice neighbours. Probably. |
| **11 Overdraft Street** | Rock Bottom | $320,000 | A terrace halfway up the hill. Freshly painted over the mould. |
| **10 Overdraft Street** | Rock Bottom | $380,000 | The good side of Overdraft Street, if there is one. |
| **13 Buffer Close** | Rock Bottom | $600,000 | Up the top of the estate with a view over the whole of Rock Bottom. |
| **8 Buffer Close** | Rock Bottom | $650,000 | The biggest terrace on Buffer Close. Practically a mansion round here. |

### Mansions
| Property | Area | Price | Description |
|---|---|---|---|
| **The Party House** | 52 Buffer Close | $3,500,000 | The loudest house in Rock Bottom. Comes with a dance floor and a noise complaint. |
| **The Fence's House** | 1 Buffer Close | $4,200,000 | Don't ask where the telly came from. |
| **Net Curtain Nan's** | 2 Overdraft Street | $6,500,000 | The net curtains stay. She sees everything, and now so do you. |
| **Beware of the Dog** | 18 Low Battery Lane | $7,000,000 | There is no dog. Probably. |
| **Lenny's Place** | 1 Low Battery Lane | $15,000,000 | Lenny's moved on. The legend hasn't. The most famous address in Rock Bottom. |

### Hangars
| Property | Area | Price | Description |
|---|---|---|---|
| **MFX Hangar 1** | Mayflex International | $650,000 | A private hangar right on the apron at Mayflex International. |
| **MFX Hangar 2** | Mayflex International | $700,000 | Next door to Hangar 1, with a little more space. |
| **Skyline Jet Hangar** | Mayflex International | $1,200,000 | The VIP jet hangar on the apron, a taxi away from the runway. |

### Shops
| Property | Area | Price | Description |
|---|---|---|---|
| **Threads Storefront** | High Street | $450,000 | A clothes shop on the High Street, a minute from Mayflex Lettings. |
| **Pawn Shop Storefront** | Rock Bottom Parade | $480,000 | A storefront on the parade. Watches, chains and no questions asked. |

## Prestige tiers
Every property can be upgraded through four **Prestige tiers**. Each tier adds features, unlocks more colours, floors and furniture, and adds more slots. Upgrading costs the difference in value.

| Tier | Price | Furniture slots |
|---|---|---|
| **Standard** | 1x base price | 8 |
| **Premium** | 1.35x base price | 14 |
| **Elite** | 1.9x base price | 22 |
| **Icon** | 3x base price | 32 |

Examples of what the top tier adds: a hot tub and fire pit for houses, a helipad and helicopter for mansions and penthouses, a private jet for hangars, and a VIP lounge for shops.

> [!TIP]
> Owning a shop lets your [[companies|company]] move up to a Storefront.
`,
  },
  {
    id: "drip-closet",
    title: "Drip Closet (Clothing)",
    category: "property",
    summary: "Outfits, jewellery and where to buy them.",
    body: `
Change your look in the **Drip Closet**. Every shop on the map has a **Change outfit** prompt (E) just inside the door. Each shop opens on the page that matches its sign (a watch shop opens on Watches, a barber on Hair...), but every page is available in every shop.

Items are paid for once with in-game money and kept on that save. Brand names are parodies.

| Page | Items | Price range | Most expensive |
|---|---|---|---|
| **Tops** | 38 | Free to $2,500 | Chrome Hartz Long Sleeve |
| **Outerwear** | 20 | $800 to $8,000 | Rick Ownz Leather Jacket |
| **Bottoms** | 21 | Free to $3,000 | Rick Ownz Leather Flares |
| **Shoes** | 22 | Free to $5,000 | Balenciagu Triple Z |
| **Headwear** | 19 | $150 to $1,500 | Rick Ownz Pom Beanie |
| **Hair** | 11 | $500 | Dreads Black |
| **Chains** | 12 | $1,500 to $75,000 | Iced Cuban Link |
| **Watches** | 12 | $2,000 to $100,000 | Iced Out Rollie |
| **Shades** | 10 | $300 to $3,000 | Rick Ownz Visor |
| **Extras** | 14 | $600 to $30,000 | Iced Grillz |
| **Skin** | 8 | Free | - |

## Price tiers
Blanks and skin tones are free. Street brands cost the page's base price, hype brands 3x, luxury 10x and grails 50x.
`,
  },
  {
    id: "map",
    title: "Map of Mayflex",
    category: "map",
    summary: "Districts, landmarks and points of interest.",
    body: `
There's an [interactive map of Mayflex](map.html) on this site with every property and street. In game, press **M** for the big map: shops, dealerships, homes and gigs are all on it. Pick a spot to set a GPS route, or save a waypoint.

## Districts
- **Mayflex:** the town centre. The High Street, Mayflex Savings and Clout Tower.
- **Rock Bottom:** the estate. Low Battery Lane, Overdraft Street and Buffer Close.
- **Industrial Estate:** Subbers Tower and the warehouses.
- **The Docks:** Dropship Docks and the container port.
- **The Grid**, **Old Town** and **The Waterfront**.
- **Mayflex International:** the airport, with the Skyline Jet Centre.
- **The Peaks:** the mountains, topped by Mayflex Peak.

## Landmarks
| Place | What's there |
|---|---|
| **Mayflex Savings** | The bank on the High Street, home of Mayflex Lettings. See [[properties]]. |
| **Clout Tower** | The tallest building in Mayflex. Brand shoots, runway gigs and the best penthouse. |
| **Subbers Tower** | The tallest block in Rock Bottom. Seminars and live podcasts. |
| **TV Tower** | The famous studio. Studio sessions and podcast recordings. |
| **The Grand Mayflex** | The hotel. Keynotes, rooftop DJ sets and expos. |
| **Sticky Floors** | The club. Headline shows, residencies and networking nights. |
| **Speakers' Corner** | The plaza. Trend shoots, shilling and truth rallies. |
| **Market Row Market** | Pop-up stalls. |
| **Mayflex Police HQ** | The police station. |
| **Central Station**, **The Wheel**, **The Pier**, **Cathedral** | Sights around town. |
| **Mayflex Stadium** | Trading seminars. |
| **Scrap Yard** and **Fringe Substation** | Out on the edge. Truthers know why. |

## Parks and views
Kingsway Gardens, Tower Row Garden, Park Lake, The Rec, the Skate Park, **Mayflex Beach** and **Mayflex Peak**.

## Getting around
- [[vehicles|Cars]], [[superbikes]], [[aircraft]] and [[boats]].
- **Travel** on the phone flies you to the airports and your properties.
- Trains run around the island.
`,
  },
];
