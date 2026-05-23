import type { Club } from "@/types/club";

export const clubs: Club[] = [
  {
    slug: "fc-hausen",
    name: "FC Hausen a/A",
    homeGroundSlugs: ["jonentaeli"],
    website: "https://fchausen.ch/",
    logo: "/clubs/fc-hausen.png",
  },
  {
    slug: "sc-hedingen",
    name: "Sportclub Hedingen",
    homeGroundSlugs: ["schlag"],
    website: "https://www.sc-hedingen.ch/",
    logo: "/clubs/sc-hedingen.png",
  },
  {
    slug: "fc-knonau-mettmenstetten",
    name: "FC Knonau-Mettmenstetten",
    homeGroundSlugs: ["knonau", "wygarten"],
    website: "https://fckmm.ch/",

    logo: "/clubs/fc-knonau-mettmenstetten.png",
  },
  {
    slug: "fc-uitikon",
    name: "FC Uitikon",
    homeGroundSlugs: ["suerenloh"],
    website: "https://www.fcuitikon.ch/",
    logo: "/clubs/fc-uitikon.png",
  },
  {
    slug: "fc-wettswil-bonstetten",
    name: "FC Wettswil-Bonstetten",
    homeGroundSlugs: ["moos"],
    website: "https://fcwb.ch/",
    logo: "/clubs/fc-wettswil-bonstetten.png",
  },
];

export async function getClubs(): Promise<Club[]> {
  return clubs;
}
