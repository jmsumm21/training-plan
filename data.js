/* ═══════════════════════════════════════════════════════════════
   DATA.JS — All plan content lives here
   ═══════════════════════════════════════════════════════════════

   HOW TO UPDATE THIS FILE:
   ─────────────────────────────────────────────────────────────
   • To add or edit a session: find the correct week in
     TRAINING_WEEKS, then edit the sessions[] array.
   • To add a new week: copy an existing week object and paste
     it at the correct position. Update week number, startDate,
     volume, and sessions.
   • To update a Phase 3/4 template week: change the template[]
     array entries — no sessions[] needed for those weeks.
   • To update nutrition or S&C: find NUTRITION or SC_SESSIONS
     below and edit the relevant fields.
   • startDate format: "YYYY-MM-DD" — always a Monday.

   HOW TO ASK CLAUDE TO UPDATE:
   ─────────────────────────────────────────────────────────────
   Paste this entire file into a new Claude chat and say:
   "This is my training site data file. Please [describe change]."
   Claude will return the updated file. Only replace data.js —
   index.html does not need to change for content updates.

   STRUCTURE OVERVIEW:
   ─────────────────────────────────────────────────────────────
   1. CONFIG          — athlete name, race details
   2. PHASES          — phase descriptions and goals
   3. TRAINING_WEEKS  — full 18-week plan
   4. SC_SESSIONS     — strength & conditioning sessions A/B/C
   5. SC_PHASE_GUIDE  — when each S&C session applies
   6. NUTRITION       — macros, principles, race/long run fuelling
═══════════════════════════════════════════════════════════════ */


/* ─────────────────────────────────────────
   1. CONFIG
   Update raceName, raceDate, athleteName
───────────────────────────────────────── */
const CONFIG = {
  athleteName: "Trail Runner",
  raceName:    "Cotswold Way 47",
  raceDate:    "2026-09-19",   // YYYY-MM-DD
  raceDistance: "47 miles",
};


/* ─────────────────────────────────────────
   2. PHASES
   id must match the phase field in TRAINING_WEEKS
───────────────────────────────────────── */
const PHASES = [
  {
    id:    "recovery",
    name:  "Phase 1 — Recovery",
    weeks: "1–3",
    goal:  "Re-establish routine post-UTA50. All running easy, aerobic only. No intensity, no pressure on pace. Introduce bodyweight S&C gently in week 3.",
  },
  {
    id:    "base",
    name:  "Phase 2 — Base Building",
    weeks: "4–10",
    goal:  "Establish the 4-run week. Build aerobic engine and consistency. Quality sessions introduced at week 6. S&C progresses to two full sessions. This is where fitness and weight shift.",
  },
  {
    id:    "build",
    name:  "Phase 3 — Build",
    weeks: "11–15",
    goal:  "Back-to-back long runs, trail-specific work, flat speed sessions introduced. Volume peaks at 65km. S&C reduces to one session from week 14.",
  },
  {
    id:    "taper",
    name:  "Phase 4 — Taper",
    weeks: "16–18",
    goal:  "Volume drops, sharpness maintained. No new sessions, no heroics. Arrive at the start line fresh and confident.",
  },
];


/* ─────────────────────────────────────────
   3. TRAINING WEEKS
   ─────────────────────────────────────────
   Each week object:
   {
     week:      1,                  // week number (1–18)
     phase:     "recovery",         // matches PHASES id
     volume:    13,                 // planned km
     startDate: "2026-05-18",       // Monday of that week (YYYY-MM-DD)
     cutback:   false,              // true for cutback weeks
     note:      "...",              // optional note shown in accordion
     sessions:  [ ... ],           // detailed weeks (Phases 1 & 2)
     template:  [ ... ],           // template weeks (Phases 3 & 4)
   }

   SESSION OBJECT:
   {
     day:      "Monday",            // day of week, capitalised
     type:     "run",               // run | long | quality | strength | rest
     title:    "Easy aerobic",      // short title
     distance: "8km",              // optional
     detail:   "Zone 2 effort...", // string OR array of strings for bullet list
     purpose:  "Build aerobic base without fatigue accumulation",  // optional italic line
   }
───────────────────────────────────────── */
const TRAINING_WEEKS = [

  // ── PHASE 1: RECOVERY ──────────────────────────────────────────

  {
    week: 1, phase: "recovery", volume: 13,
    startDate: "2026-05-18",
    note: "Week 1 complete. Two easy runs post-UTA50 while in Australia. Recovery priority.",
    sessions: [],  // complete — no sessions to tick
  },

  {
    week: 2, phase: "recovery", volume: 23,
    startDate: "2026-05-25",
    note: "Final week back from Australia. Three easy runs. All Zone 2 — conversational pace throughout. No watch pressure.",
    sessions: [
      {
        day: "Monday", type: "run", title: "Easy run", distance: "8km",
        detail: "Zone 2 effort. Easy, conversational pace. Done.",
        purpose: "Re-establish routine post-travel.",
      },
      {
        day: "Thursday", type: "run", title: "Easy run", distance: "5km",
        detail: "Flat or gentle route. Focus on feel, not pace. Keep it comfortable.",
        purpose: "Maintain easy aerobic stimulus.",
      },
      {
        day: "Saturday", type: "long", title: "Easy long run", distance: "10km",
        detail: "Longest run of the week but still fully easy. Treat as an extended easy effort. No pushing.",
        purpose: "Time on feet. Aerobic base without fatigue.",
      },
    ],
  },

  {
    week: 3, phase: "recovery", volume: 30,
    startDate: "2026-06-01",
    note: "Final recovery week. Volume ticks up but all three runs remain easy. First S&C session introduced — very light, focus entirely on form.",
    sessions: [
      {
        day: "Monday", type: "run", title: "Easy run", distance: "7km",
        detail: "Easy Zone 2. Settle into a comfortable rhythm. No ego.",
        purpose: "Aerobic base building.",
      },
      {
        day: "Tuesday", type: "run", title: "Easy run", distance: "5km",
        detail: "Nice and easy.",
        purpose: "Aerobic base building.",
      },
      {
        day: "Wednesday", type: "strength", title: "S&C Session A", distance: null,
        detail: "See Strength page. First session ever — focus on movement quality, not reps. Rest 60–90 sec between sets.",
        purpose: "Introduce movement patterns. Establish routine.",
      },
      {
        day: "Thursday", type: "run", title: "Easy run", distance: "5km",
        detail: "Easy effort. Notice how legs feel after first S&C session. If heavy, slow down — that's fine.",
        purpose: "Aerobic continuity. Monitor S&C response.",
      },
      {
        day: "Saturday", type: "long", title: "Long run", distance: "13km",
        detail: "First double-digit long run post-UTA50. Easy throughout — if it feels hard, you're going too fast. Trail or mixed surface preferred.",
        purpose: "Time on feet. Rebuild long run habit.",
      },
    ],
  },

  // ── PHASE 2: BASE BUILDING ─────────────────────────────────────

  {
    week: 4, phase: "base", volume: 33,
    startDate: "2026-06-08",
    note: "Fourth run introduced. Two S&C sessions now standard: Monday lower body (Session B), Tuesday core & upper (Session A). Long run steps up — practice eating and drinking during it.",
    sessions: [
      {
        day: "Monday", type: "run", title: "Easy run + S&C Session B", distance: "7km",
        detail: "Easy effort. S&C later in the day or evening. See Strength page for Session B.",
        purpose: "Aerobic base. Lower body strength introduction.",
      },
      {
        day: "Tuesday", type: "strength", title: "S&C Session A", distance: null,
        detail: "Core and introductory session. See Strength page. Rest 60–90 sec between sets.",
        purpose: "Core stability and movement quality.",
      },
      {
        day: "Wednesday", type: "run", title: "Easy run", distance: "8km",
        detail: "Easy Zone 2. Fourth run — keep it genuinely easy. This run exists for volume, not intensity.",
        purpose: "Volume accumulation. Aerobic base.",
      },
      {
        day: "Thursday", type: "run", title: "Easy run", distance: "5km",
        detail: "Easy Zone 2. Rolling terrain welcome but not forced.",
        purpose: "Aerobic base.",
      },
      {
        day: "Saturday", type: "long", title: "Long run", distance: "13km",
        detail: "Easy effort throughout. Focus on time on feet, not pace. Eat and drink during the run — start practising fuelling habits now. Take a gel or snack at 45 minutes.",
        purpose: "Aerobic endurance. Fuelling practice.",
      },
    ],
  },

  {
    week: 5, phase: "base", volume: 36,
    startDate: "2026-06-15",
    sessions: [
      {
        day: "Monday", type: "run", title: "Easy run + S&C Session B", distance: "8km",
        detail: "Easy effort. S&C later in the day. See Strength page for Session B.",
        purpose: "Aerobic base. Lower body strength.",
      },
      {
        day: "Tuesday", type: "strength", title: "S&C Session A", distance: null,
        detail: "Core and movement quality. See Strength page. Rest 60–90 sec.",
        purpose: "Core stability.",
      },
      {
        day: "Wednesday", type: "run", title: "Easy run", distance: "7km",
        detail: "Easy Zone 2. Begin to introduce gentle rolling terrain if available.",
        purpose: "Aerobic volume.",
      },
      {
        day: "Thursday", type: "run", title: "Easy run", distance: "7km",
        detail: "Easy effort. Focus on relaxed form — shoulders down, light footfall.",
        purpose: "Aerobic base.",
      },
      {
        day: "Saturday", type: "long", title: "Long run", distance: "14km",
        detail: "Easy effort. Hills welcome but not forced. Practise eating every 45–60 minutes. Note what sits well in your stomach.",
        purpose: "Aerobic endurance. Fuelling habit.",
      },
    ],
  },

  {
    week: 6, phase: "base", volume: 40,
    startDate: "2026-06-22",
    note: "Quality session introduced this week — hill reps. This is not a sprint session. Aerobic effort on the way up, walk recovery on the way down. Wednesday becomes the quality day from here.",
    sessions: [
      {
        day: "Monday", type: "run", title: "Easy run + S&C Session B", distance: "8km",
        detail: "Easy effort. S&C later in the day. See Strength page.",
        purpose: "Aerobic base. Lower body strength.",
      },
      {
        day: "Tuesday", type: "strength", title: "S&C Session A", distance: null,
        detail: "Core and movement quality. See Strength page.",
        purpose: "Core stability.",
      },
      {
        day: "Wednesday", type: "quality", title: "Hill reps", distance: "~10km",
        detail: [
          "Warm up 2km easy.",
          "Find a hill 200–400m long.",
          "Run up at strong aerobic effort (about 80% — hard but not sprinting).",
          "Walk back down as full recovery.",
          "6–8 reps total.",
          "Cool down 2km easy.",
        ],
        purpose: "Introduce quality stimulus. Build hill-specific strength and trail fitness.",
      },
      {
        day: "Thursday", type: "run", title: "Easy run", distance: "8km",
        detail: "Easy Zone 2. Legs may feel heavy from hill reps — keep it genuinely easy. This run is recovery, not training.",
        purpose: "Active recovery. Aerobic base.",
      },
      {
        day: "Saturday", type: "long", title: "Long run", distance: "16km",
        detail: "Easy effort. Hilly route preferred. Focus on time on feet over pace. Fuel every 45–60 minutes.",
        purpose: "Aerobic endurance. Trail specificity.",
      },
    ],
  },

  {
    week: 7, phase: "base", volume: 32,
    startDate: "2026-06-29",
    cutback: true,
    note: "Cutback week. Step back and absorb the training from weeks 4–6. All runs easy. No quality session this week — S&C maintained. You should finish this week feeling fresh.",
    sessions: [
      {
        day: "Monday", type: "run", title: "Easy run + S&C Session B", distance: "8km",
        detail: "Easy effort. S&C later in the day.",
        purpose: "Maintain routine during cutback.",
      },
      {
        day: "Tuesday", type: "strength", title: "S&C Session A", distance: null,
        detail: "Core and movement quality. See Strength page.",
        purpose: "Maintain S&C routine.",
      },
      {
        day: "Thursday", type: "run", title: "Easy run", distance: "8km",
        detail: "Easy Zone 2. Use this week to notice how your body has adapted. Do you feel stronger? Lighter on your feet?",
        purpose: "Active recovery. Aerobic maintenance.",
      },
      {
        day: "Saturday", type: "long", title: "Easy long run", distance: "16km",
        detail: "Easy effort. Enjoyable route — this should feel comfortable. Run a route you like.",
        purpose: "Easy endurance. Mental refresh.",
      },
    ],
  },

  {
    week: 8, phase: "base", volume: 44,
    startDate: "2026-07-06",
    note: "Back into building after cutback. Hill reps resume with higher rep count. S&C introduces Session C (core & upper) replacing Session A from here.",
    sessions: [
      {
        day: "Monday", type: "run", title: "Easy run + S&C Session B", distance: "9km",
        detail: "Easy effort. S&C later in the day — lower body focus.",
        purpose: "Aerobic base. Lower body strength.",
      },
      {
        day: "Tuesday", type: "strength", title: "S&C Session C", distance: null,
        detail: "Core and upper body. New session introduced this week — see Strength page for Session C. From here: Monday = Session B, Tuesday = Session C.",
        purpose: "Core strength and postural durability.",
      },
      {
        day: "Wednesday", type: "quality", title: "Hill reps", distance: "~11km",
        detail: [
          "Warm up 2km easy.",
          "8–10 reps on a 200–400m hill at strong aerobic effort.",
          "Walk back down as full recovery between reps.",
          "Cool down 2km easy.",
        ],
        purpose: "Build hill strength and aerobic capacity.",
      },
      {
        day: "Thursday", type: "run", title: "Easy run", distance: "9km",
        detail: "Easy Zone 2. Recover from hill session.",
        purpose: "Active recovery.",
      },
      {
        day: "Saturday", type: "long", title: "Long run", distance: "20km",
        detail: "Easy to moderate effort. Trail surface preferred. Fuel every 45 minutes. This is a milestone — first 20km since UTA50 training.",
        purpose: "Aerobic endurance. Build confidence.",
      },
    ],
  },

  {
    week: 9, phase: "base", volume: 48,
    startDate: "2026-07-13",
    sessions: [
      {
        day: "Monday", type: "run", title: "Easy run + S&C Session B", distance: "10km",
        detail: "Easy effort. S&C later in the day.",
        purpose: "Aerobic base. Lower body strength.",
      },
      {
        day: "Tuesday", type: "strength", title: "S&C Session C", distance: null,
        detail: "Core and upper body. See Strength page.",
        purpose: "Core and upper body strength.",
      },
      {
        day: "Wednesday", type: "quality", title: "Hill reps", distance: "~12km",
        detail: [
          "Warm up 2km easy.",
          "10 reps on a 300–400m hill.",
          "Focus on strong uphill form: drive arms, shorten stride, lean slightly forward from ankles.",
          "Walk back down as full recovery.",
          "Cool down 2km easy.",
        ],
        purpose: "Hill strength and trail-specific fitness.",
      },
      {
        day: "Thursday", type: "run", title: "Easy run", distance: "10km",
        detail: "Easy Zone 2. Recover from hill session.",
        purpose: "Active recovery and volume.",
      },
      {
        day: "Saturday", type: "long", title: "Long run", distance: "22km",
        detail: "Easy to moderate. Longest run since UTA50. Fuel and hydrate well — eat every 45 minutes. Focus on finishing strong, not fast.",
        purpose: "Aerobic endurance. Build confidence for higher weeks ahead.",
      },
    ],
  },

  {
    week: 10, phase: "base", volume: 52,
    startDate: "2026-07-20",
    note: "Final base building week. Long run hits 24km. Hill reps add a mix of shorter fast reps and longer aerobic efforts.",
    sessions: [
      {
        day: "Monday", type: "run", title: "Easy run + S&C Session B", distance: "11km",
        detail: "Easy effort. S&C later in the day.",
        purpose: "Aerobic base. Lower body strength.",
      },
      {
        day: "Tuesday", type: "strength", title: "S&C Session C", distance: null,
        detail: "Core and upper body. See Strength page.",
        purpose: "Core and upper body strength.",
      },
      {
        day: "Wednesday", type: "quality", title: "Hill reps — mixed", distance: "~13km",
        detail: [
          "Warm up 2km easy.",
          "10–12 reps total — mix of shorter (200m) fast reps and longer (400m) aerobic efforts.",
          "Walk recovery between all reps.",
          "Cool down 2km easy.",
        ],
        purpose: "Build both speed and aerobic hill strength.",
      },
      {
        day: "Thursday", type: "run", title: "Easy run", distance: "11km",
        detail: "Easy Zone 2.",
        purpose: "Active recovery and volume.",
      },
      {
        day: "Saturday", type: "long", title: "Long run", distance: "24km",
        detail: "Moderate effort on trail. Confidence long run — you should finish feeling like you had more in the tank. Fuel every 45 minutes.",
        purpose: "Aerobic endurance. Confidence builder ahead of Phase 3.",
      },
    ],
  },

  // ── PHASE 3: BUILD ─────────────────────────────────────────────
  // Template weeks — fill in detail as you approach each week.
  // Copy the pattern from Phase 2 weeks above when ready.

  {
    week: 11, phase: "build", volume: 56,
    startDate: "2026-07-27",
    note: "Back-to-back long runs introduced. Sunday becomes a medium easy run after Saturday's long run. S&C remains 2x/week.",
    template: [
      { day: "Monday",    session: "Easy run + S&C Session B",         distance: "9km" },
      { day: "Tuesday",   session: "S&C Session C",                    distance: null },
      { day: "Wednesday", session: "Quality: Hill efforts",            distance: "~10km — 2km WU + 6×600m + 2km CD" },
      { day: "Thursday",  session: "Easy run",                         distance: "8km" },
      { day: "Saturday",  session: "Long run — trail, easy-moderate",  distance: "22km" },
      { day: "Sunday",    session: "Back-to-back easy",                distance: "7km — very easy, recovery pace" },
    ],
  },

  {
    week: 12, phase: "build", volume: 59,
    startDate: "2026-08-03",
    note: "First flat tempo session introduced. Alternating with hill efforts from here.",
    template: [
      { day: "Monday",    session: "Easy run + S&C Session B",         distance: "9km" },
      { day: "Tuesday",   session: "S&C Session C",                    distance: null },
      { day: "Wednesday", session: "Quality: Flat tempo",              distance: "~11km — 2km WU + 25min tempo + 2km CD" },
      { day: "Thursday",  session: "Easy run",                         distance: "9km" },
      { day: "Saturday",  session: "Long run — trail, easy-moderate",  distance: "22km" },
      { day: "Sunday",    session: "Back-to-back easy",                distance: "8km" },
    ],
  },

  {
    week: 13, phase: "build", volume: 52,
    startDate: "2026-08-10",
    cutback: true,
    note: "Cutback week. Last week of two S&C sessions. Light hill reps only — no deep fatigue.",
    template: [
      { day: "Monday",    session: "Easy run + S&C Session B",         distance: "8km" },
      { day: "Tuesday",   session: "S&C Session C — final 2-session week", distance: null },
      { day: "Wednesday", session: "Quality: Light hill reps",         distance: "~9km — 2km WU + 6×400m + 2km CD" },
      { day: "Thursday",  session: "Easy run",                         distance: "8km" },
      { day: "Saturday",  session: "Long run — easy effort",           distance: "20km" },
      { day: "Sunday",    session: "Back-to-back easy",                distance: "7km" },
    ],
  },

  {
    week: 14, phase: "build", volume: 62,
    startDate: "2026-08-17",
    note: "S&C drops to 1x/week from here — Monday only. Trail tempo introduced.",
    template: [
      { day: "Monday",    session: "Easy run + S&C Session B (1x/week from here)", distance: "10km" },
      { day: "Wednesday", session: "Quality: Trail tempo",             distance: "~12km — 2km WU + 30min trail tempo + 2km CD" },
      { day: "Thursday",  session: "Easy run",                         distance: "10km" },
      { day: "Saturday",  session: "Long run — trail, moderate",       distance: "22km" },
      { day: "Sunday",    session: "Back-to-back easy",                distance: "8km" },
    ],
  },

  {
    week: 15, phase: "build", volume: 65,
    startDate: "2026-08-24",
    note: "Peak week. 35km long run — race conditions where possible. Final S&C session. Everything you've built points here.",
    template: [
      { day: "Monday",    session: "Easy run + S&C Session B — final S&C session", distance: "8km" },
      { day: "Wednesday", session: "Quality: Race pace effort",        distance: "~10km — 2km WU + 25min at race effort + 2km CD" },
      { day: "Thursday",  session: "Easy run",                         distance: "7km" },
      { day: "Saturday",  session: "Peak long run — trail, hilly, race conditions", distance: "35km" },
      { day: "Sunday",    session: "Back-to-back very easy shakeout",  distance: "5km" },
    ],
  },

  // ── PHASE 4: TAPER ─────────────────────────────────────────────

  {
    week: 16, phase: "taper", volume: 55,
    startDate: "2026-08-31",
    note: "Taper begins. Volume drops, sharpness maintained. Last hard quality session this week. S&C stops.",
    template: [
      { day: "Monday",    session: "Easy run",                         distance: "9km" },
      { day: "Wednesday", session: "Quality: Flat tempo — last hard session", distance: "~10km — 2km WU + 20min tempo + 2km CD" },
      { day: "Thursday",  session: "Easy run",                         distance: "8km" },
      { day: "Saturday",  session: "Long run — easy-moderate, confidence building", distance: "22km" },
      { day: "Sunday",    session: "Easy run",                         distance: "6km" },
    ],
  },

  {
    week: 17, phase: "taper", volume: 45,
    startDate: "2026-09-07",
    note: "Feeling fresh. Easy runs, one light quality session. Trust the training.",
    template: [
      { day: "Monday",    session: "Easy run",                         distance: "8km" },
      { day: "Wednesday", session: "Light quality: 4×3min tempo effort, 2min jog recovery", distance: "~8km total" },
      { day: "Thursday",  session: "Easy run",                         distance: "7km" },
      { day: "Saturday",  session: "Easy long run — relaxed, enjoyable", distance: "16km" },
      { day: "Sunday",    session: "Easy run",                         distance: "6km" },
    ],
  },

  {
    week: 18, phase: "taper", volume: 20,
    startDate: "2026-09-14",
    note: "Race week. Three easy shakeout runs. Keep legs moving, nothing more. Sleep, eat, hydrate. You've done the work.",
    sessions: [
      {
        day: "Monday", type: "run", title: "Easy shakeout", distance: "5km",
        detail: "Very easy. Just keep the legs moving. No watch pressure.",
        purpose: "Maintain feel without creating fatigue.",
      },
      {
        day: "Wednesday", type: "run", title: "Easy shakeout with strides", distance: "5km",
        detail: "Easy run with 4×20 second strides at the end. Strides are brisk but not sprinting — just wake the legs up.",
        purpose: "Sharpen legs before race.",
      },
      {
        day: "Friday", type: "run", title: "Final shakeout", distance: "5km",
        detail: "Very easy and relaxed. Last run before race day. Short, light, enjoyable.",
        purpose: "Keep legs fresh and loose.",
      },
      {
        day: "Saturday", type: "race", title: "Cotswold Way 47 — Race Day", distance: "47 miles",
        detail: "Start conservative. The first 20 miles should feel easy. Fuel every 30–40 minutes. Walk the steep climbs — save legs for the back half. Your goal is to manage the race well and finish strong.",
        purpose: "All 18 weeks have been building to this.",
      },
    ],
  },

];


/* ─────────────────────────────────────────
   4. S&C SESSIONS
   id must be unique. when = phase guidance.
───────────────────────────────────────── */
const SC_SESSIONS = [
  {
    id: "session-a",
    name: "Session A",
    when: "Weeks 3–7 · Tuesday",
    duration: "30 min",
    focus: "Introduction",
    rest: "60–90 sec",
    note: "First S&C sessions. Focus entirely on movement quality, not rep count. If anything feels wrong, stop and reset. These are foundational patterns.",
    exercises: [
      { name: "Bodyweight squat",     sets: "3 × 12", notes: "Feet shoulder-width. Chest up. Full depth." },
      { name: "Glute bridge",         sets: "3 × 15", notes: "Drive hips up, squeeze glutes at top. Slow and controlled." },
      { name: "Reverse lunge",        sets: "3 × 10 each leg", notes: "Step back, lower back knee toward floor. Keep front shin vertical." },
      { name: "Dead bug",             sets: "3 × 8 each side", notes: "Lower back pressed to floor throughout. Move slowly." },
      { name: "Calf raise",           sets: "3 × 20", notes: "Full range — all the way up and all the way down." },
      { name: "Plank",                sets: "3 × 30 sec", notes: "Neutral spine, don't let hips sag or pike." },
    ],
  },
  {
    id: "session-b",
    name: "Session B",
    when: "Weeks 4+ · Monday (with easy run)",
    duration: "35 min",
    focus: "Lower body strength",
    rest: "60–90 sec",
    note: "Core lower body session for the full plan. Focus is glutes, single-leg stability, and posterior chain — the foundations of injury-free trail running. Do after your Monday run.",
    exercises: [
      { name: "Bulgarian split squat",      sets: "3 × 10 each leg", notes: "Rear foot elevated. Drive through front heel. This will be hard." },
      { name: "Single leg glute bridge",    sets: "3 × 12 each leg", notes: "One leg extended, drive hips up. Squeeze hard at top." },
      { name: "Lateral lunge",              sets: "3 × 10 each leg", notes: "Step wide to one side, sit into that hip. Keep opposite leg straight." },
      { name: "Nordic hamstring curl (assisted)", sets: "3 × 8", notes: "Kneel on soft surface, hook feet under something sturdy. Lower slowly — use hands to assist on the way back up." },
      { name: "Single leg calf raise",      sets: "3 × 15 each leg", notes: "Bodyweight only. Full range of motion. Slow down." },
      { name: "Side-lying hip abduction",   sets: "3 × 15 each side", notes: "Lie on side, raise top leg to ~45°. Keep hips stacked. Feel it in the outer glute." },
    ],
  },
  {
    id: "session-c",
    name: "Session C",
    when: "Weeks 8–13 · Tuesday",
    duration: "30 min",
    focus: "Core & upper body",
    rest: "60 sec",
    note: "Introduced at week 8, replacing Session A. Targets core stability and upper body — essential for posture over long trail distances. Replaces Session A from week 8.",
    exercises: [
      { name: "Press-up",             sets: "3 × 15", notes: "Or to failure with good form. Chest to floor, full extension." },
      { name: "Renegade row",         sets: "3 × 10 each side", notes: "Press-up position, row one arm at a time. Keep hips square — don't rotate." },
      { name: "Pike press-up",        sets: "3 × 10", notes: "Hips high, lower head toward floor between hands. Targets shoulders." },
      { name: "Hollow body hold",     sets: "3 × 20 sec", notes: "Arms overhead, legs straight and lifted. Lower back pressed flat. Build to 30 sec." },
      { name: "Bird dog",             sets: "3 × 10 each side", notes: "Opposite arm and leg. Move slowly and hold 2 sec at full extension." },
      { name: "Side plank",           sets: "3 × 30 sec each side", notes: "Straight body line. Build to 45 seconds over the weeks." },
      { name: "Superman hold",        sets: "3 × 10", notes: "Lie face down, lift arms and legs together. Hold 2 sec each rep." },
    ],
  },
];


/* ─────────────────────────────────────────
   5. S&C PHASE GUIDE
───────────────────────────────────────── */
const SC_PHASE_GUIDE = [
  {
    phase: "Wk 3",
    guidance: "Session A introduced on Wednesday. One session only. Focus on form — these are new movement patterns.",
  },
  {
    phase: "Wk 4–7",
    guidance: "Two sessions: Monday = Session B (lower body), Tuesday = Session A (introduction/core). S&C is Mon + Tue but Tuesday can flex to Friday if needed.",
  },
  {
    phase: "Wk 8–13",
    guidance: "Session A replaced by Session C. Monday = Session B (lower body), Tuesday = Session C (core & upper). Two full sessions per week.",
  },
  {
    phase: "Wk 14–15",
    guidance: "S&C reduces to one session per week — Monday only (Session B). Volume is high enough that two sessions would compromise recovery.",
  },
  {
    phase: "Wk 16+",
    guidance: "S&C stops in week 16. Taper period — no new stimulus, allow full recovery ahead of race.",
  },
];


/* ─────────────────────────────────────────
   6. NUTRITION
───────────────────────────────────────── */
const NUTRITION = {

  macros: {
    trainingDay: {
      protein:  150,
      carbs:    270,
      fat:      70,
      calories: 2350,
    },
    restDay: {
      protein:  150,
      carbs:    170,
      fat:      68,
      calories: 1890,
    },
    note: "Based on ~72kg bodyweight with a target of reaching ~65kg. Protein is kept constant across training and rest days to support muscle preservation during weight loss. Carbs are reduced on rest days — your body needs less fuel when it isn't working. As weekly volume exceeds 50km, nudge training day carbs up to 290–310g. These are targets, not rules — hit protein first, then carbs, then let fat fill the rest.",
  },

  principles: [
    {
      title: "Protein first",
      detail: "Hit 150g of protein every day regardless of training or rest. This is the most important number. It preserves muscle while you lose weight and supports recovery. Spread it across meals — aim for 35–40g per sitting.",
    },
    {
      title: "Carb timing",
      detail: "Eat the majority of your carbohydrates around training. Larger carb meal 2–3 hours before a quality session or long run. Good carb meal within 60 minutes of finishing any run. Rest days are lower carb naturally — don't force it.",
    },
    {
      title: "Don't undereat on big days",
      detail: "On long run days (16km+) or hard quality sessions, eat more — not less. Under-fuelling on hard training days compromises recovery, increases injury risk, and makes the next session worse. The weight loss happens on rest days, not training days.",
    },
    {
      title: "Recovery window",
      detail: "Within 30–60 minutes of finishing any run, eat something with both protein and carbs. A protein shake with a banana, Greek yoghurt with fruit, or eggs on toast all work. This window matters more as weekly volume increases.",
    },
    {
      title: "Hydration",
      detail: "Aim for 2–3 litres of water daily, more on training days and in hot weather. If your urine is dark yellow, drink more. Add electrolytes (a pinch of salt or an electrolyte tablet) on runs over 60 minutes.",
    },
    {
      title: "Alcohol",
      detail: "No specific rule, but alcohol disrupts sleep quality and slows recovery noticeably. One or two drinks is unlikely to matter. More than that on a training night will affect the next session.",
    },
    {
      title: "Consistency over perfection",
      detail: "One poor eating day doesn't matter. A week of poor eating does. The goal is 80–90% adherence over the training block, not perfection. Don't let a bad day become a bad week.",
    },
    {
      title: "Weight loss pace",
      detail: "At this training volume, aim for 0.5kg/week loss maximum. Faster than that and you're likely losing muscle and compromising training. The weight will come off naturally as volume builds — don't force it.",
    },
  ],

  longRunNutrition: [
    {
      when: "Night before",
      detail: "Carbohydrate-rich dinner. Pasta, rice, or potatoes with protein. Nothing rich, spicy, or unfamiliar. Eat at a normal time — don't stuff yourself late.",
    },
    {
      when: "Morning of",
      detail: "Eat 2–3 hours before if possible. Oats, toast, or rice with a moderate amount of protein. Keep fat and fibre low on race/long run morning — they slow digestion. If you must eat closer to the run, keep it small and simple.",
    },
    {
      when: "During (runs 60–90min+)",
      detail: "Start fuelling at 45 minutes — don't wait until you're hungry. Aim for 40–60g of carbohydrates per hour. Gels, chews, dates, banana pieces, or rice cakes all work. Test different options in training — never try something new on race day.",
    },
    {
      when: "During (runs 3hr+)",
      detail: "Increase to 60–80g carbohydrates per hour on very long runs and race day. Add electrolytes every 60–90 minutes — salt tablets or electrolyte drink. Sip water regularly rather than drinking large amounts infrequently.",
    },
    {
      when: "After",
      detail: "Within 30 minutes: protein + carbs. Chocolate milk, a protein shake with fruit, or a proper meal if your stomach is settled. Prioritise rehydration — weigh yourself before and after long runs to gauge sweat loss.",
    },
    {
      when: "What to carry",
      detail: "For runs over 90 minutes: hydration vest or belt, 500ml–1.5L water depending on conditions, 2–4 gels or equivalent, electrolyte tabs. For runs over 3 hours: 1.5L+ water, 6–8 gels or real food equivalent, salt tabs, small reserve snack.",
    },
  ],

  raceNutrition: [
    {
      when: "Race week",
      detail: "Increase carbohydrate intake from Wednesday onward — add an extra serving of rice, pasta, or oats to each meal. Keep protein constant. Don't change what you eat, just eat more of the carbohydrate component. Stay hydrated throughout the week.",
    },
    {
      when: "Race eve",
      detail: "Familiar carb-rich dinner eaten early (6–7pm). Nothing new, nothing rich. Good sleep is more valuable than any meal. Prepare your kit, drop bags, and nutrition the evening before so race morning is calm.",
    },
    {
      when: "Race morning",
      detail: "Eat 2–3 hours before start if possible. 80–100g carbohydrates, moderate protein, low fat and fibre. Porridge, toast with peanut butter, or rice are all good. Sip water but don't overdrink. A small coffee is fine if that's your routine — don't change it.",
    },
    {
      when: "First 10 miles",
      detail: "Start fuelling at 30–40 minutes even if you feel fine. The first 10 miles should feel easy — resist the temptation to run harder. Eat to a schedule, not to hunger. Walk all significant climbs.",
    },
    {
      when: "Aid stations",
      detail: "Use every aid station. Top up water, take something to eat even if you don't feel hungry. Real food (bananas, potatoes, soup later in the race) can be more appealing than gels in the second half. Have a plan but be flexible.",
    },
    {
      when: "Drop bags",
      detail: "Pack more food than you think you need. Include something salty, something sweet, and a spare gel stash. A dry top if weather is variable. Blister kit. Small motivational note if that's your thing.",
    },
    {
      when: "Miles 30+",
      detail: "If you've fuelled well to this point, the last third is manageable. If your stomach turns, switch to liquids and salty food — soup, broth, flat coke at aid stations. Keep moving. Walk if you need to but don't stop.",
    },
  ],

};
