/**
 * 200 common 5-letter English words. Daily answer is picked deterministically
 * by date so it's the same for everyone (until midnight).
 */
export const WORDS = [
  "APPLE", "BREAD", "CHAIR", "DANCE", "EARTH", "FRESH", "GHOST", "HEART",
  "IDEAL", "JUICE", "KNIFE", "LIGHT", "MUSIC", "NIGHT", "OCEAN", "PAINT",
  "QUEEN", "RIVER", "SMILE", "TIGER", "UNDER", "VOICE", "WATER", "YOUTH",
  "ZEBRA", "BRAVE", "CRANE", "DREAM", "EAGER", "FAITH", "GLOBE", "HONEY",
  "INPUT", "JOLLY", "KARMA", "LEMON", "MAGIC", "NORTH", "OPERA", "PIANO",
  "QUIET", "RADIO", "SHARP", "TRAIN", "UNITY", "VITAL", "WHEEL", "YACHT",
  "ZESTY", "ALERT", "BLEND", "CABIN", "DELTA", "EXTRA", "FIBER", "GRACE",
  "HOTEL", "IRONY", "JOLLY", "KNIGHT", "LASER", "MAPLE", "NEEDY", "OLIVE",
  "PRIDE", "QUEST", "ROUND", "STORM", "TASTE", "ULTRA", "VIVID", "WAGON",
  "BLOCK", "CLOUD", "DRAFT", "ELITE", "FLAME", "GLEAM", "HASTE", "INDEX",
  "JUDGE", "KAYAK", "LATCH", "METAL", "NIFTY", "OVERT", "PLANK", "QUOTA",
  "ROAST", "SCALE", "TUNED", "URBAN", "VAULT", "WEAVE", "ABIDE", "BRINK",
  "CRISP", "DODGE", "ENVOY", "FROST", "GRAVE", "HATCH", "INERT", "JOINT",
  "KEYED", "LUCID", "MERGE", "NUDGE", "OPTED", "PRISM", "QUERY", "REIGN",
  "SHELF", "TIDAL", "USHER", "VENUE", "WORST", "BUDGE", "CLIFF", "DENSE",
  "EJECT", "FIERY", "GAUNT", "HUMID", "IDIOM", "JAZZY", "KIOSK", "LODGE",
  "MOLDY", "NUMBER", "ONION", "PATCH", "QUASI", "RIPEN", "SCOUR", "TRACE",
  "UMBRA", "VOWEL", "WHARF", "ABYSS", "BAGEL", "CACAO", "DEPTH", "ELITE",
  "FAUNA", "GAUDY", "HEDGE", "IDIOT", "JETTY", "KNELT", "LUMEN", "MOSSY",
  "NOMAD", "OAKEN", "PRESS", "QUART", "RUSTY", "SCALE", "TRUSS", "UDDER",
  "VAULT", "WORTH", "ZILCH", "ANGLE", "BERRY", "CHIME", "DREAM", "EVOKE",
  "FROND", "GAVEL", "HIVES", "INTER", "JUMBO", "KOALA", "LATEX", "MAYBE",
  "NOBLE", "OOZED", "PRICK", "QUASH", "ROBOT", "SLOPE", "THINK", "UNZIP",
  "VOTER", "WIRED", "AMBER", "BLINK", "CRAZE", "DUSTY", "EARLY", "FOAMY",
  "GIDDY", "HOIST", "ICING", "JOIST", "KARAT", "LURCH", "MIRTH", "NICHE",
];

/** Pick the daily answer — deterministic by UTC date. */
export function getDailyAnswer(date = new Date()): string {
  const start = Date.UTC(2022, 0, 1); // Jan 1, 2022
  const today = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
  const dayIndex = Math.floor((today - start) / 86400000);
  return WORDS[((dayIndex % WORDS.length) + WORDS.length) % WORDS.length];
}
