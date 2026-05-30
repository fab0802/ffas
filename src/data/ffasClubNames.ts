const FFAS_CLUB_NAMES = [
  "FC Hausen",
  "FC Knonau-Mettmenstetten",
  "Sportclub Hedingen",
  "FC Wettswil-Bonstetten",
  "FC Uitikon",
  // Falls football.ch kürzere Namen verwendet, hier ergänzen.
  "Hausen a/A",
  "KMO",
  "Hedingen",
  "FCWB",
  "Uitikon",
];

export function isFfasClub(name: string | undefined): boolean {
  if (!name) return false;
  const lower = name.toLowerCase();
  return FFAS_CLUB_NAMES.some((n) => lower.includes(n.toLowerCase()));
}
