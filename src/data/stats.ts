import type { Stat } from "@/types/stat";
import { getTeamsCount } from "@/helpers";

export const stats: Stat[] = [
  {
    slug: "gruendungsjahr",
    value: 2026,
    label: "Gründungsjahr",
    sublabel: "der FFAS-Familie",
    featured: true,
  },
  {
    slug: "teams",
    value: getTeamsCount(),
    label: "Teams",
    sublabel: "von U10 bis Aktive",
  },
  {
    slug: "spielerinnen",
    value: 120,
    suffix: "+",
    label: "Spielerinnen",
    sublabel: "auf dem Platz",
  },
  {
    slug: "traegervereine",
    value: 5,
    label: "Trägervereine",
    sublabel: "Für den Frauenfussball",
  },
];
